import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * SocialLinkComponent displays a clickable social media icon with tooltip
 * Features hover effects and accessibility labels
 */
@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a 
      [href]="href"
      [target]="external ? '_blank' : '_self'"
      [rel]="external ? 'noopener noreferrer' : ''"
      [attr.aria-label]="ariaLabel || label"
      class="group relative w-10 h-10 flex items-center justify-center rounded-full border transition-all hover:scale-125 hover:rotate-12 backdrop-blur-sm"
      [class]="
        'border-' + color + '-400/30 ' +
        'hover:border-' + color + '-400 ' +
        'text-gray-400 ' +
        'hover:text-' + color + '-400 ' +
        'bg-' + color + '-500/5 ' +
        'hover:bg-' + color + '-500/20'
      ">
      <i [class]="icon + ' text-lg'"></i>
      <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span [class]="'text-xs font-mono-custom text-' + color + '-400 whitespace-nowrap'">{{ label }}</span>
      </div>
    </a>
  `
})
export class SocialLinkComponent {
  @Input() href: string = '';
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() color: 'blue' | 'cyan' | 'purple' | 'pink' = 'blue';
  @Input() external: boolean = true;
  @Input() ariaLabel?: string;
}
