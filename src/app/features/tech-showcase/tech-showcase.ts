import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface TechIcon {
  name: string;
  svg: string;
  color: string;
  gradient: string;
  orbitRadius: number;
  orbitDuration: number;
  delay: number;
  size: number;
}

@Component({
  selector: 'app-tech-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-showcase.html',
  styleUrls: ['./tech-showcase.css']
})
export class TechShowcaseComponent implements OnInit, OnDestroy {
  @ViewChild('galaxyCanvas', { static: false }) canvasRef?: ElementRef<HTMLDivElement>;
  
  isBrowser: boolean;
  mouseX = 0;
  mouseY = 0;
  Math = Math; // Expose Math to template
  private animationFrame?: number;

  techStack: TechIcon[] = [
    // Orbit 1 (Radius 140) - Core Angular & TypeScript
    { 
      name: 'Angular', 
      svg: 'M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 16.95c-3.61-.9-6.45-4.53-6.95-8.95h13.9c-.5 4.42-3.34 8.05-6.95 8.95zM12 4.5l6 2.67v.83H6v-.83L12 4.5z',
      color: '#DD0031', 
      gradient: 'linear-gradient(135deg, #DD0031, #C3002F)',
      orbitRadius: 140, 
      orbitDuration: 24, 
      delay: 0, 
      size: 72 
    },
    { 
      name: 'TypeScript', 
      svg: 'M3 3h18v18H3V3zm16.5 13.5c-.3.9-1.2 1.5-2.1 1.5-1.2 0-1.95-.6-2.25-1.35l-1.65.9c.6 1.35 1.95 2.25 3.9 2.25 2.25 0 3.75-1.2 3.75-3 0-1.65-.9-2.55-2.7-3.3l-.45-.15c-.9-.3-1.2-.6-1.2-1.05 0-.45.3-.75.9-.75.6 0 .9.3 1.2.75l1.5-.9c-.6-1.05-1.5-1.5-2.7-1.5-1.8 0-2.85 1.05-2.85 2.4 0 1.5.9 2.4 2.55 3.15l.45.15c.9.3 1.35.6 1.35 1.2 0 .6-.6 1.05-1.35 1.05z',
      color: '#3178C6', 
      gradient: 'linear-gradient(135deg, #3178C6, #235A97)',
      orbitRadius: 140, 
      orbitDuration: 24, 
      delay: 6, 
      size: 66 
    },
    { 
      name: 'RxJS', 
      svg: 'M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z',
      color: '#D81B60', 
      gradient: 'linear-gradient(135deg, #D81B60, #C2185B)',
      orbitRadius: 140, 
      orbitDuration: 24, 
      delay: 12, 
      size: 64 
    },
    { 
      name: 'JavaScript', 
      svg: 'M3 3h18v18H3V3zm16.5 13.5c0 1.95-1.05 3-3 3-1.8 0-2.85-1.05-3.45-2.25l1.65-.9c.3.6.75 1.05 1.8 1.05.75 0 1.2-.45 1.2-1.05v-5.4h2.1v5.55h-.3zM9 16.5c-1.8 0-2.85-1.05-3.45-2.25l1.65-.9c.3.6.75 1.05 1.8 1.05.75 0 1.2-.3 1.2-.75 0-.6-.45-.9-1.35-1.35l-.45-.15c-1.35-.6-2.25-1.2-2.25-2.7 0-1.35 1.05-2.4 2.7-2.4 1.2 0 2.1.45 2.7 1.5l-1.5.9c-.3-.6-.6-.9-1.2-.9-.6 0-.9.3-.9.75 0 .6.3.75 1.2 1.2l.45.15c1.5.6 2.4 1.35 2.4 2.85 0 1.65-1.35 2.85-3 2.85z',
      color: '#F7DF1E', 
      gradient: 'linear-gradient(135deg, #F7DF1E, #E8C500)',
      orbitRadius: 140, 
      orbitDuration: 24, 
      delay: 18, 
      size: 62 
    },
    
    // Orbit 2 (Radius 220) - UI Components, HTML/CSS & REST APIs
    { 
      name: 'Angular Material', 
      svg: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      color: '#E91E63', 
      gradient: 'linear-gradient(135deg, #E91E63, #9C27B0)',
      orbitRadius: 220, 
      orbitDuration: 34, 
      delay: 0, 
      size: 54 
    },
    { 
      name: 'HTML5 / CSS3', 
      svg: 'M12 17.56l-5.33-1.48-.38-4.3h2.62l.19 2.1 2.9.79.01-.01 2.91-.79.31-3.42H7.5l-.25-2.73h7.59l.21-2.42H4.95l.74 8.13L12 17.56m9.45-14.5L20.3 21.94 12 24l-8.3-2.06L2.55 3.06h18.9',
      color: '#E34F26', 
      gradient: 'linear-gradient(135deg, #E34F26, #1572B6)',
      orbitRadius: 220, 
      orbitDuration: 34, 
      delay: 8, 
      size: 54 
    },
    { 
      name: 'REST APIs', 
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
      color: '#06B6D4', 
      gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
      orbitRadius: 220, 
      orbitDuration: 34, 
      delay: 17, 
      size: 52 
    },
    { 
      name: 'Git & GitHub', 
      svg: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z',
      color: '#F05032', 
      gradient: 'linear-gradient(135deg, #F05032, #181717)',
      orbitRadius: 220, 
      orbitDuration: 34, 
      delay: 25, 
      size: 52 
    },
    
    // Orbit 3 (Radius 300) - Backend & Database Foundations
    { 
      name: '.NET / C#', 
      svg: 'M12 2l10 5.77v11.46L12 25l-10-5.77V7.77L12 2m0 2.31l-7.5 4.32v8.64L12 21.59l7.5-4.32V8.63L12 4.31z',
      color: '#512BD4', 
      gradient: 'linear-gradient(135deg, #512BD4, #8344D7)',
      orbitRadius: 300, 
      orbitDuration: 44, 
      delay: 0, 
      size: 52 
    },
    { 
      name: 'ASP.NET', 
      svg: 'M12 2.5l10 5.77v11.46L12 25.5 2 19.73V8.27L12 2.5zm0 2.31L4.62 9.23v9.54L12 23.19l7.38-4.42V9.23L12 4.81z',
      color: '#68217A', 
      gradient: 'linear-gradient(135deg, #68217A, #512BD4)',
      orbitRadius: 300, 
      orbitDuration: 44, 
      delay: 11, 
      size: 52 
    },
    { 
      name: 'SQL (Relational)', 
      svg: 'M12 2C6.48 2 2 4.01 2 6.5v11C2 20 6.48 22 12 22s10-2 10-4.5v-11C22 4.01 17.52 2 12 2zm0 3c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2zm8 6c0 .66-3.59 2-8 2s-8-1.34-8-2V8.67c1.94 1.14 4.8 1.83 8 1.83s6.06-.69 8-1.83V11zm0 5.5c0 .66-3.59 2-8 2s-8-1.34-8-2v-2.33c1.94 1.14 4.8 1.83 8 1.83s6.06-.69 8-1.83v2.33z',
      color: '#00758F', 
      gradient: 'linear-gradient(135deg, #00758F, #0284C7)',
      orbitRadius: 300, 
      orbitDuration: 44, 
      delay: 22, 
      size: 52 
    },
    { 
      name: 'Linux / Shell', 
      svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10l3 2.5-3 2.5v-2l1.8-1.25L6 10.5v-.5zm5 4h5v2h-5v-2z',
      color: '#557C94', 
      gradient: 'linear-gradient(135deg, #557C94, #334155)',
      orbitRadius: 300, 
      orbitDuration: 44, 
      delay: 33, 
      size: 50 
    },
    
    // Orbit 4 (Radius 380) - Networking & Security
    { 
      name: 'CCNA Networking', 
      svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 18.93V18h-2v2.93c-4.08-.47-7.3-3.69-7.77-7.77H6v-2H3.23c.47-4.08 3.69-7.3 7.77-7.77V6h2V3.07c4.08.47 7.3 3.69 7.77 7.77H18v2h2.77c-.47 4.08-3.69 7.3-7.77 7.77z',
      color: '#0284C7', 
      gradient: 'linear-gradient(135deg, #0284C7, #06B6D4)',
      orbitRadius: 380, 
      orbitDuration: 52, 
      delay: 0, 
      size: 50 
    },
    { 
      name: 'Secure Coding / RBAC', 
      svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      color: '#10B981', 
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      orbitRadius: 380, 
      orbitDuration: 52, 
      delay: 26, 
      size: 50 
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
    }
  }

  handleMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  getOrbitStyle(tech: TechIcon) {
    return {
      '--orbit-radius': `${tech.orbitRadius}px`,
      '--orbit-duration': `${tech.orbitDuration}s`,
      '--orbit-delay': `-${tech.delay}s`,
      '--tech-color': tech.color,
      '--tech-gradient': tech.gradient,
      '--icon-size': `${tech.size}px`
    };
  }
}
