import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../../../shared/ui/glass-card/glass-card';


export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  impacts?: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, GlassCardComponent],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css'],
  styles: [`
    :host {
      display: block;
      position: relative;
      background: var(--section-gradient-1);
      backdrop-filter: blur(8px);
    }
  `]
})
export class TimelineComponent {
  experiences: ExperienceItem[] = [
    {
      role: 'Trainee Programmer (Angular Developer)',
      company: 'Kumaran Systems',
      period: 'Oct 2024 - Present',
      location: 'Chennai, India',
      description: 'Developing mission-critical enterprise modules for a high-volume freight logistics and operations admin portal.',
      impacts: [
        'Developed and maintained Angular enterprise modules for a freight-logistics admin portal using TypeScript, RxJS, Angular Material, PrimeNG, and REST APIs.',
        'Implemented role-based access control, reusable components, lazy-loaded modules, and permission-driven UI behavior.',
        'Collaborated with backend teams to integrate APIs and deliver data-driven user interfaces.',
        'Engineered responsive dashboards with active shipment filtering, pagination, and resilient loading/error states.'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'PrimeNG', 'REST APIs', 'RBAC']
    },
    {
      role: 'Software Engineer Intern',
      company: 'Kumaran Systems',
      period: 'Mar 2024 - Sep 2024',
      location: 'Chennai, India',
      description: 'Full-time engineering internship focusing on backend services, API integrations, and workflow automation.',
      impacts: [
        'Engineered enterprise web services and API endpoints utilizing ASP.NET Core and C#.',
        'Automated database maintenance and operational tasks via Unix/Linux shell scripting.',
        'Assisted senior engineers in API integration testing, query optimization, and technical documentation.'
      ],
      technologies: ['ASP.NET', 'C#', 'SQL', 'Shell Scripting', 'Linux', 'Git']
    },
    {
      role: 'Frontend Developer & Security Intern',
      company: 'HackOverSecurity',
      period: 'Oct 2022 - Nov 2022',
      location: 'Remote',
      description: 'Delivered client-facing front-end solutions, responsive web interfaces, and UI security enhancements.',
      impacts: [
        'Built modern, responsive client web components incorporating secure coding practices and input sanitization.',
        'Collaborated with cybersecurity specialists on dashboard UI components for vulnerability tracking.'
      ],
      technologies: ['JavaScript', 'HTML5/CSS3', 'Web Security Basics', 'Responsive UI']
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - 2023',
      location: 'Remote',
      description: 'Contract work architecting interactive web applications and custom frontends.',
      impacts: [
        'Delivered responsive Single Page Applications with zero-layout-shift performance and clean semantic structure.'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git']
    }
  ];
}
