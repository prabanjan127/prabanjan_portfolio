import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';
import { LoadingScreenComponent } from './core/components/loading-screen/loading-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoadingScreenComponent],
  template: `
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress" [style.width.%]="scrollProgress"></div>
    
    <!-- Floating Shapes Background -->
    <div class="floating-shapes">
      <div class="floating-shape"></div>
      <div class="floating-shape"></div>
      <div class="floating-shape"></div>
      <div class="floating-shape"></div>
    </div>
    
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    <app-loading-screen></app-loading-screen>
    <app-header></app-header>
    <main id="main-content" class="min-h-screen" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  private scrollListener: (() => void) | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = this.onScroll.bind(this);
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private onScroll(): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    this.scrollProgress = Math.min(100, Math.max(0, scrollPercentage));
  }
}
