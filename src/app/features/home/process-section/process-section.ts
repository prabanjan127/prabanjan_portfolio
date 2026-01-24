import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-section.html',
  styleUrls: ['./process-section.css']
})
export class ProcessSectionComponent {
  processSteps: ProcessStep[] = [
    {
      title: 'Research',
      description: 'Understanding requirements, analyzing the problem domain, and gathering insights to build the right solution.',
      icon: 'fas fa-search',
      color: 'blue'
    },
    {
      title: 'Design',
      description: 'Creating wireframes, system architecture, and user-centric interfaces that balance aesthetics with functionality.',
      icon: 'fas fa-pencil-ruler',
      color: 'cyan'
    },
    {
      title: 'Develop',
      description: 'Writing clean, maintainable code using modern technologies and best practices to bring designs to life.',
      icon: 'fas fa-code',
      color: 'purple'
    },
    {
      title: 'Test',
      description: 'Rigorous testing across devices, browsers, and scenarios to ensure quality and reliability.',
      icon: 'fas fa-vial',
      color: 'pink'
    },
    {
      title: 'Deploy',
      description: 'Launching the solution with CI/CD pipelines, monitoring performance, and continuous improvement.',
      icon: 'fas fa-rocket',
      color: 'indigo'
    }
  ];
}
