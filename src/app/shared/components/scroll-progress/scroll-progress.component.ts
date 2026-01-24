import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/50"
        [style.width.%]="scrollProgress">
      </div>
    </div>
  `,
  styles: []
})
export class ScrollProgressComponent {
  scrollProgress = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const scrollableHeight = documentHeight - windowHeight;
      this.scrollProgress = (scrollTop / scrollableHeight) * 100;
    }
  }
}
