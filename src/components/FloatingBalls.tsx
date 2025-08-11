"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingBalls() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 50, 200);

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const pointLight = new THREE.PointLight(0xffffff, 500, 2000);
    pointLight.position.set(0, 0, 50);
    scene.add(ambientLight, pointLight);

    // Handle mouse movement
    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointLight.position.x = x * 50;
      pointLight.position.y = y * 50;
    };
    window.addEventListener("mousemove", onMouseMove);

    interface Ball {
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      creationTime: number;
      initialY: number;
    }

    const balls: Ball[] = [];

    const createBall = (): Ball => {
      const radius = Math.random() * 0.5 + 0.5;
      const geometry = new THREE.SphereGeometry(radius * 10, 64, 64);
      const material = new THREE.MeshStandardMaterial({
        color: 0x89ECFF,
        roughness: 0.3,
        metalness: 0.5,
        transparent: true,
        opacity: 1,
      });

      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 80;

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      const creationTime = performance.now();
      const initialY = y;

      scene.add(mesh);
      return { mesh, velocity, creationTime, initialY };
    };

    // Initial balls
    for (let i = 0; i < 10; i++) {
      balls.push(createBall());
    }

    // Animation loop
    const animate = () => {
      const now = performance.now();

      for (let i = balls.length - 1; i >= 0; i--) {
        const ball = balls[i];
        const elapsed = (now - ball.creationTime) / 1000;

        // Floating effect
        const floatOffset = Math.sin(now * 0.002 + i) * 0.5;
        ball.mesh.position.y = ball.initialY + floatOffset;

        // Slow motion
        ball.mesh.position.add(ball.velocity);

        (["x", "y", "z"] as const).forEach(axis => {
          if (Math.abs(ball.mesh.position[axis]) > 40) {
            ball.velocity[axis] *= -1;
          }
        });

        // Disappear after 5s
        if (elapsed > 5) {
          const material = ball.mesh.material;
          if (Array.isArray(material)) return; // skip if material is array
          (material as THREE.MeshStandardMaterial).opacity -= 0.01;
          if ((material as THREE.MeshStandardMaterial).opacity <= 0) {
            scene.remove(ball.mesh);
            balls.splice(i, 1);
            balls.push(createBall()); // respawn immediately
          }
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen absolute" />;
}
