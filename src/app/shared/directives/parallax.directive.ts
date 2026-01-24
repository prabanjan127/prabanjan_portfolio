import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';

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

  private scrollHandler: (() => void) | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Set initial position
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
    
    // Initial parallax calculation
    this.updateParallax();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateParallax();
  }

  private updateParallax(): void {
    const scrolled = window.pageYOffset;
    const elementTop = this.el.nativeElement.getBoundingClientRect().top + scrolled;
    const windowHeight = window.innerHeight;
    
    // Calculate parallax offset
    const offset = (scrolled - elementTop + windowHeight) * this.parallaxRatio;
    
    // Apply transform
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate3d(0, ${offset}px, 0)`
    );
  }

  ngOnDestroy(): void {
    // Cleanup
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'will-change');
  }
}
