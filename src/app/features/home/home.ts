import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from '../about/about.component';
import { TimelineComponent } from '../experience/timeline/timeline';
import { ProjectListComponent } from '../projects/project-list/project-list';
import { TechShowcaseComponent } from '../tech-showcase/tech-showcase';
// Directives
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    TimelineComponent,
    TechShowcaseComponent,
    ProjectListComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}


// Rebuild trigger - Layout restoration complete
