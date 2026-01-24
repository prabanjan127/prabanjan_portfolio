import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Try multiple approaches for cross-browser compatibility
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, 0);
      }
    }
  }
}
