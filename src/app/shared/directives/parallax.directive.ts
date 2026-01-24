import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * ParallaxDirective - Adds smooth parallax scrolling effect to elements
 * 
 * @example
 * ```html
 * <div appParallax [parallaxRatio]="0.5">Background content</div>
 * ```
 */
@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  /**
   * Parallax ratio: higher = more dramatic effect
   * 0.5 = moves half the speed of scroll (subtle)
   * 1.0 = moves at scroll speed (moderate)
   * 1.5 = moves faster than scroll (dramatic)
   */
  @Input() parallaxRatio: number = 0.5;

  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // Set initial position
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
    
    // Initial parallax calculation
    this.updateParallax();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.updateParallax();
    }
  }

  private updateParallax(): void {
    if (!this.isBrowser) return;

    const scrolled = window.scrollY; // Use scrollY instead of pageYOffset
    const elementTop = this.el.nativeElement.getBoundingClientRect().top + scrolled;
    
    // Calculate simple parallax offset based on scroll position relative to element
    // This calculation ensures the element moves at a different speed than scroll
    const offset = -(scrolled * this.parallaxRatio);
    
    // Apply transform
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate3d(0, ${offset}px, 0)`
    );
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    
    // Cleanup
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'will-change');
  }
}
