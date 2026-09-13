import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

interface Bottle3DViewerProps {
  modelPath?: string;
  className?: string;
}

export function Bottle3DViewer({
  modelPath = "/bottle-model.glb",
  className = "w-full h-[450px]",
}: Bottle3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera Setup - Perfectly centered with breathing room to prevent cutoffs
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

    // Clear previous canvas
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
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

    // Procedural Fallback 3D Bottle Group
    const fallbackGroup = new THREE.Group();
    
    // Glass Body
    const bodyGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.6, 32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      thickness: 0.5,
      specularIntensity: 1.0,
    });
    const glassBody = new THREE.Mesh(bodyGeo, glassMat);
    glassBody.position.y = -0.1;
    fallbackGroup.add(glassBody);

    // Golden Oil Liquid inside
    const oilGeo = new THREE.CylinderGeometry(0.48, 0.48, 1.4, 32);
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.2,
      metalness: 0.1,
      emissive: 0x854d0e,
      emissiveIntensity: 0.2,
    });
    const oilBody = new THREE.Mesh(oilGeo, oilMat);
    oilBody.position.y = -0.18;
    fallbackGroup.add(oilBody);

    // Bottle Neck
    const neckGeo = new THREE.CylinderGeometry(0.22, 0.38, 0.5, 32);
    const neckMesh = new THREE.Mesh(neckGeo, glassMat);
    neckMesh.position.y = 0.95;
    fallbackGroup.add(neckMesh);

    // Cork Stopper
    const corkGeo = new THREE.CylinderGeometry(0.24, 0.2, 0.3, 32);
    const corkMat = new THREE.MeshStandardMaterial({
      color: 0x9a3412,
      roughness: 0.8,
    });
    const corkMesh = new THREE.Mesh(corkGeo, corkMat);
    corkMesh.position.y = 1.3;
    fallbackGroup.add(corkMesh);

    // Label Band
    const labelGeo = new THREE.CylinderGeometry(0.56, 0.56, 0.7, 32);
    const labelMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.4,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.y = -0.1;
    fallbackGroup.add(labelMesh);

    scene.add(fallbackGroup);

    // Load GLB Model with MeshoptDecoder
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
        const model = gltf.scene;

        // Center and scale GLB model (perfect medium size, no cutoffs)
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.95 / maxDim;

        model.scale.set(scale, scale, scale);
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale + 0.02;
        model.position.z = -center.z * scale;

        // Hide fallback, show GLB
        scene.remove(fallbackGroup);
        scene.add(model);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.warn("GLB model failed to load, keeping 3D bottle preview:", err);
        setLoading(false);
      }
    );

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
    };
  }, [modelPath]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}

