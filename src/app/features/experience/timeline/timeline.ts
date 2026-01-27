import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../../../shared/ui/glass-card/glass-card';

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
  experiences = [
    {
      role: 'Trainee Programmer',
      company: 'Kumaran Systems',
      period: 'Oct 2024 - Present',
      description: 'Full-time role in Chennai. Specializing in Angular and Angular Material development.'
    },
    {
      role: 'Intern',
      company: 'Kumaran Systems',
      period: 'Mar 2024 - Sep 2024',
      description: '6-month internship focusing on ASP.NET and Shell Scripting.'
    },
    {
      role: 'Website Developer',
      company: 'HackOverSecurity',
      period: 'Nov 2022',
      description: 'Transitioned to a freelance role delivering front-end solutions and CSS enhancements.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'HackOverSecurity',
      period: 'Oct 2022 - Nov 2022',
      description: 'Completed a one-month internship working on client projects for a security firm.'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Oct 2022 - Nov 2022',
      description: 'Remote contract work delivering Javascript-based frontend applications.'
    }
  ];
}
