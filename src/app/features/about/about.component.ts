import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface AboutPillar {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly pillars: AboutPillar[] = [
    {
      title: 'Enterprise Angular & RxJS',
      subtitle: 'Scalable Architecture',
      icon: 'fab fa-angular',
      color: 'from-blue-500 to-cyan-400',
      description: 'Architecting modular, maintainable front-end systems with reactive streams, signals, lazy loading, and fine-tuned OnPush change detection.',
      tags: ['Angular 16-19', 'TypeScript', 'RxJS', 'Signals', 'Angular Material', 'PrimeNG']
    },
    {
      title: 'Role-Based Access Control',
      subtitle: 'Enterprise Security UI',
      icon: 'fas fa-shield-halved',
      color: 'from-purple-500 to-pink-500',
      description: 'Engineering permission-driven component visibility, functional route guards, and secure HTTP interceptors to enforce enterprise access policies.',
      tags: ['RBAC', 'Route Guards', 'JWT Interceptors', 'Secure UI States']
    },
    {
      title: 'CCNA & Network Literacy',
      subtitle: 'Systems Awareness',
      icon: 'fas fa-network-wired',
      color: 'from-cyan-400 to-emerald-400',
      description: 'Certified network grounding in TCP/IP, OSI protocols, and packet inspection—bridging the gap between front-end telemetry and backend infrastructure.',
      tags: ['CCNA Fundamentals', 'HTTP/REST', 'Linux Shell', 'Network Protocols']
    },
    {
      title: 'Enterprise Backend Synergy',
      subtitle: 'Full-Stack Collaboration',
      icon: 'fas fa-server',
      color: 'from-blue-600 to-indigo-500',
      description: 'Hands-on background with ASP.NET, C#, and relational SQL databases, streamlining contract negotiation with backend API architects.',
      tags: ['C#', 'ASP.NET', 'SQL', 'RESTful Contract Design', 'Git / GitHub']
    }
  ];
}
