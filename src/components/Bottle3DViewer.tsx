import { useEffect, useRef, useState } from "react";

interface Bottle3DViewerProps {
  modelPath?: string;
  className?: string;
}

export function Bottle3DViewer({
  modelPath = "/bottle-model.glb",
  className = "w-full h-[450px]",
}: Bottle3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Defer loading Three.js until 3D section approaches viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const container = containerRef.current;
    if (!container) return;

    let isDisposed = false;
    let animationFrameId: number;
    let renderer: any;
    let controls: any;

    // Load Three.js dynamically in parallel (reduces initial JS bundle size by >600KB)
    Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
      import("three/examples/jsm/controls/OrbitControls.js"),
      import("three/examples/jsm/libs/meshopt_decoder.module.js"),
    ]).then(([THREE, { GLTFLoader }, { OrbitControls }, { MeshoptDecoder }]) => {
      if (isDisposed || !containerRef.current) return;

      // Scene Setup
      const scene = new THREE.Scene();
      scene.background = null;

      // Camera Setup
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;
      const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
      camera.position.set(0, 0, 4.8);

      // Renderer Setup
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Orbit Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2.0;
      controls.maxPolarAngle = Math.PI / 1.6;
      controls.minPolarAngle = Math.PI / 3;

      // Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xfff5e6, 3.8);
      keyLight.position.set(4, 6, 4);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xa3e635, 1.8);
      fillLight.position.set(-4, 3, -3);
      scene.add(fillLight);

      const backLight = new THREE.DirectionalLight(0xffffff, 2.5);
      backLight.position.set(0, 5, -4);
      scene.add(backLight);

      // Soft Radial Ground Drop Shadow directly under bottle base
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 256;
      shadowCanvas.height = 256;
      const shadowCtx = shadowCanvas.getContext("2d");
      if (shadowCtx) {
        const gradient = shadowCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, "rgba(12, 18, 12, 0.6)");
        gradient.addColorStop(0.3, "rgba(18, 24, 18, 0.35)");
        gradient.addColorStop(0.7, "rgba(22, 30, 22, 0.12)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        shadowCtx.fillStyle = gradient;
        shadowCtx.fillRect(0, 0, 256, 256);

        const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
        const shadowGeo = new THREE.PlaneGeometry(2.4, 2.4);
        const shadowMat = new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,
          depthWrite: false,
        });
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.y = -0.92;
        scene.add(shadowMesh);
      }

      // Direct GLB Model Loader (No procedural 3D fallback object)
      const loader = new GLTFLoader();
      try {
        if (MeshoptDecoder) {
          loader.setMeshoptDecoder(MeshoptDecoder);
        }
      } catch {
        // ignore decoder setup if unsupported
      }

      loader.load(
        modelPath,
        (gltf) => {
          if (isDisposed) return;
          const model = gltf.scene;

          // Center and scale GLB model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.95 / maxDim;

          model.scale.set(scale, scale, scale);
          model.position.x = -center.x * scale;
          model.position.y = -center.y * scale + 0.02;
          model.position.z = -center.z * scale;

          scene.add(model);
        },
        undefined,
        (err) => {
          console.warn("GLB model failed to load:", err);
        }
      );

      // Animation Loop
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Resize Handler
      const handleResize = () => {
        if (!container || isDisposed) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    return () => {
      isDisposed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (controls) controls.dispose();
      if (renderer) renderer.dispose();
    };
  }, [isVisible, modelPath]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

