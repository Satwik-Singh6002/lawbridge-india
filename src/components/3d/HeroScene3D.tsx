import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Root Group for Mouse Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ═══ 1. Central 3D Constitutional Orb & Rings ═══
    // Core glowing sphere
    const sphereGeo = new THREE.IcosahedronGeometry(3.5, 3);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xd97706, // Amber gold
      emissive: 0x78350f,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    masterGroup.add(coreSphere);

    // Inner Solid Glow Sphere
    const innerGeo = new THREE.SphereGeometry(2.2, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Royal Blue core
      transparent: true,
      opacity: 0.35,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerSphere);

    // ═══ 2. Orbital Legal Rings (Scales Axis) ═══
    const ringMatGold = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.8,
    });

    const ringMatCyan = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.4,
      metalness: 0.7,
      wireframe: true,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.08, 16, 100), ringMatGold);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(6.6, 0.06, 16, 100), ringMatCyan);
    ring2.rotation.y = Math.PI / 4;
    masterGroup.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(8.0, 0.05, 16, 100), ringMatGold);
    ring3.rotation.x = -Math.PI / 4;
    masterGroup.add(ring3);

    // ═══ 3. Ambient Floating Particle Cloud ═══
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 28;
      positions[i + 1] = (Math.random() - 0.5) * 22;
      positions[i + 2] = (Math.random() - 0.5) * 22;

      // Mix Gold, Blue and Emerald
      const randColor = Math.random();
      if (randColor < 0.45) {
        // Gold
        colors[i] = 0.98;
        colors[i + 1] = 0.72;
        colors[i + 2] = 0.15;
      } else if (randColor < 0.8) {
        // Sky Blue
        colors[i] = 0.23;
        colors[i + 1] = 0.65;
        colors[i + 2] = 0.98;
      } else {
        // Emerald
        colors[i] = 0.1;
        colors[i + 1] = 0.8;
        colors[i + 2] = 0.5;
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ═══ 4. Lighting ═══
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightGold = new THREE.PointLight(0xf59e0b, 35, 50);
    pointLightGold.position.set(10, 10, 10);
    scene.add(pointLightGold);

    const pointLightBlue = new THREE.PointLight(0x3b82f6, 30, 50);
    pointLightBlue.position.set(-10, -10, 8);
    scene.add(pointLightBlue);

    // ═══ 5. Mouse Parallax Interaction ═══
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // ═══ 6. Resize Handler ═══
    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // ═══ 7. Animation Loop ═══
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      masterGroup.rotation.y += 0.005;
      masterGroup.rotation.x = targetY * 0.4;
      masterGroup.rotation.z = -targetX * 0.4;

      ring1.rotation.z += 0.006;
      ring2.rotation.x += 0.004;
      ring3.rotation.y -= 0.005;

      particleSystem.rotation.y -= 0.001;
      particleSystem.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // ═══ Cleanup ═══
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[360px] md:min-h-[460px] flex items-center justify-center relative pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
