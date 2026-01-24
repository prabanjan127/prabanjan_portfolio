import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero';
import { TimelineComponent } from '../experience/timeline/timeline';
import { SkillsMatrixComponent } from '../skills/skills-matrix/skills-matrix';
import { ProjectListComponent } from '../projects/project-list/project-list';
// Directives
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TimelineComponent,
    SkillsMatrixComponent,
    ProjectListComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}


// Rebuild trigger - Layout restoration complete
