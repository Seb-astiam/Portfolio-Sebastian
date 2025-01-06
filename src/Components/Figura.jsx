// src/Figura.jsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Figura = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Tamaño del lienzo
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Crear la escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1b1b1b');

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(
      40,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Crear la geometría (cubo)
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.3, 100, 16, 1, 2);

    // Crear el material (color básico)
    const material = new THREE.MeshBasicMaterial({ 
      color: '#44f814' 
    });

    // Crear la malla y añadirla a la escena
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Limpiar al desmontar el componente
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
    className='flex items-center justify-center'
      style={{ width: '200px', height: '200px' }}
      ref={mountRef}
    />
  );
}

