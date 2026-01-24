import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThreeSceneComponent } from '../three-scene/three-scene';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ThreeSceneComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(this.heroTitle.nativeElement, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
      .to(this.heroSubtitle.nativeElement, {
        duration: 2,
        text: "Frontend Engineering: Where Art Meets Code",
        delimiter: ""
      }, "-=0.5")
      .from(this.ctaButton.nativeElement, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=1");
    }
  }
}
