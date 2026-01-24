import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * StatCardComponent displays a statistic with a value and label
 * Reusable component with customizable colors and hover effects
 */
@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center lg:text-left group" [ngClass]="alignment">
      <div 
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text mb-1 group-hover:scale-110 transition-transform"
        [class]="'bg-gradient-to-r from-' + colorStart + '-400 to-' + colorEnd + '-400'"
        [attr.aria-label]="value">
        {{ value }}
      </div>
      <div class="text-[10px] md:text-xs lg:text-sm text-gray-400 font-mono-custom uppercase tracking-wider leading-tight">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class StatCardComponent {
  @Input() value: string = '0';
  @Input() colorStart: 'blue' | 'purple' | 'cyan' = 'blue';
  @Input() colorEnd: 'cyan' | 'pink' | 'emerald' = 'cyan';
  @Input() alignment: 'text-center' | 'text-center lg:text-left' | 'text-center lg:text-right' = 'text-center lg:text-left';
}
