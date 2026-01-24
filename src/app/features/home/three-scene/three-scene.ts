import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  templateUrl: './three-scene.html',
  styleUrls: ['./three-scene.css']
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particlesMesh!: THREE.Points;
  private animationId: number = 0;

  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private windowHalfX = 0;
  private windowHalfY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.ngZone.runOutsideAngular(() => {
        this.initThree();
        this.animate();
      });

      window.addEventListener('resize', this.onWindowResize.bind(this));
      document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationId);
      if (this.renderer) {
        this.renderer.dispose();
      }
      window.removeEventListener('resize', this.onWindowResize.bind(this));
      document.removeEventListener('mousemove', this.onDocumentMouseMove.bind(this));
    }
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 2;
    this.camera.position.y = 0;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Objects
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles in a sphere shape roughly
        const r = 2 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x00ff41, // Hacker green
        transparent: true,
        opacity: 0.8,
    });

    this.particlesMesh = new THREE.Points(geometry, material);
    this.scene.add(this.particlesMesh);
  }

  private onDocumentMouseMove(event: MouseEvent) {
      this.mouseX = (event.clientX - this.windowHalfX);
      this.mouseY = (event.clientY - this.windowHalfY);
  }

  private onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    this.targetX = this.mouseX * 0.001;
    this.targetY = this.mouseY * 0.001;

    this.particlesMesh.rotation.y += 0.002;
    this.particlesMesh.rotation.x += 0.001;

    this.particlesMesh.rotation.y += 0.05 * (this.targetX - this.particlesMesh.rotation.y);
    this.particlesMesh.rotation.x += 0.05 * (this.targetY - this.particlesMesh.rotation.x);

    this.renderer.render(this.scene, this.camera);
  }
}
