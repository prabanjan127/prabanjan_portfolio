import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThreeSceneComponent } from '../three-scene/three-scene';
import { TechBadgeComponent } from '../../../shared/ui/tech-badge/tech-badge.component';
import { StatCardComponent } from '../../../shared/ui/stat-card/stat-card.component';
import { SocialLinkComponent } from '../../../shared/ui/social-link/social-link.component';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';
import { SocialLink, Stat } from '../../../core/models/portfolio.models';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

/**
 * HeroComponent - Main hero section with animated introduction
 * Features GSAP animations for text and elements
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule, 
    ThreeSceneComponent,
    TechBadgeComponent,
    StatCardComponent,
    SocialLinkComponent,
    ParallaxDirective
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  /**
   * Statistics data
   */
  readonly stats: readonly Stat[] = [
    { value: '2+', label: 'Years of\nExperience', color: 'blue' },
    { value: '15+', label: 'Projects\nCompleted', color: 'purple' },
    { value: '10+', label: 'Technologies\nLearned', color: 'cyan' }
  ];

  /**
   * Social media links
   */
  readonly socialLinks: readonly SocialLink[] = [
    { 
      href: 'https://github.com/prabanjan127', 
      icon: 'fab fa-github', 
      label: 'GitHub', 
      color: 'blue' 
    },
    { 
      href: 'https://linkedin.com/in/prabanjan-s/', 
      icon: 'fab fa-linkedin', 
      label: 'LinkedIn', 
      color: 'cyan' 
    },
    { 
      href: 'mailto:prabanjansakthibabu@gmail.com', 
      icon: 'fas fa-envelope', 
      label: 'Email', 
      color: 'purple' 
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  /**
   * Initialize GSAP animations for hero section
   */
  private initAnimations(): void {
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

  /**
   * TrackBy function for social links
   */
  trackBySocialLink(index: number, link: SocialLink): string {
    return link.href;
  }

  /**
   * TrackBy function for stats
   */
  trackByStat(index: number, stat: Stat): string {
    return stat.label;
  }
}
