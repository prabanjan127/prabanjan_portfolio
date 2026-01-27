import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-matrix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-matrix.html',
  styleUrls: ['./skills-matrix.css'],
  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 2;
    }
  `]
})
export class SkillsMatrixComponent {
  skillCategories = [
    {
      title: 'Frontend & UI',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'UI/UX']
    },
    {
      title: 'Backend & App Dev',
      skills: ['Node.js', 'Java', 'Python', 'Flutter', 'MySQL']
    },
    {
      title: 'Security & Tools',
      skills: ['Kali Linux', 'CCNA', 'Git', 'GitHub', 'VS Code']
    }
  ];
}
