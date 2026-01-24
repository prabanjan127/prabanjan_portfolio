import { Directive, ElementRef, OnInit, AfterViewInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, AfterViewInit {
  @Input() staggerDelay = 100; // Delay between children animations in ms
  @Input() threshold = 0.1;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Initial setup
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.classList.add('reveal-container');
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  private setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to trigger CSS animations
            this.el.nativeElement.classList.add('in-view');

            // Handle staggered animations for children
            const children = this.el.nativeElement.querySelectorAll('.reveal-child');
            children.forEach((child: HTMLElement, index: number) => {
              // Only apply delay if not already set via CSS class or style
              if (!child.style.animationDelay) {
                child.style.animationDelay = `${index * this.staggerDelay}ms`;
              }
            });

            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
