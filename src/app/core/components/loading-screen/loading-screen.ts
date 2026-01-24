import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.html',
  styleUrls: ['./loading-screen.css']
})
export class LoadingScreenComponent implements OnInit {
  isLoading = true;
  currentQuoteIndex = 0;

  developerQuotes = [
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "Make it work, make it right, make it fast. - Kent Beck",
    "The best error message is the one that never shows up. - Thomas Fuchs",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "Before software can be reusable, it first has to be usable. - Ralph Johnson",
    "Clean code always looks like it was written by someone who cares. - Robert C. Martin"
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Only run animations on browser
    if (isPlatformBrowser(this.platformId)) {
      // Cycle through quotes every 1.5 seconds
      const quoteInterval = setInterval(() => {
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.developerQuotes.length;
      }, 1500);

      // Hide loader after 2.5 seconds
      setTimeout(() => {
        this.isLoading = false;
        clearInterval(quoteInterval);

        // Additional safety: Force remove after fade animation
        setTimeout(() => {
          const loadingEl = document.querySelector('.loading-screen');
          if (loadingEl) {
            (loadingEl as HTMLElement).style.display = 'none';
          }
        }, 800); // Match CSS fade-out duration
      }, 2500);
    } else {
      // On server, just show it or hide it immediately to avoid blocking hydration?
      // Usually we want meaningful content on server, loading screen is client-side only enhancement mostly.
      // But if we hide it on server, there might be a flash.
      // For now, let's keep isLoading=true but NOT run the interval/timeout logic that touches DOM.
      // Actually, if we don't set isLoading=false on server, it might render with loading screen.
      // Let's just wrap the logic and let client handle the removal.
    }
  }

  get currentQuote(): string {
    return this.developerQuotes[this.currentQuoteIndex];
  }
}
