import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span 
      [class]="
        'group px-3 py-1.5 border rounded-full text-xs font-mono-custom uppercase tracking-wider transition-all cursor-default backdrop-blur-sm ' +
        'bg-' + color + '-500/10 ' +
        'border-' + color + '-400/30 ' +
        'text-' + color + '-300 ' +
        'hover:bg-' + color + '-500/20 ' +
        'hover:border-' + color + '-400/60 ' +
        (hoverable ? 'hover:scale-105' : '')
      "
      [attr.aria-label]="'Technology: ' + label">
      <i *ngIf="icon" [class]="icon + ' mr-1.5 text-xs ' + color + '-400'"></i>
      <ng-content></ng-content>{{ label }}
    </span>
  `
})
export class TechBadgeComponent {
  @Input() label: string = '';
  @Input() icon?: string;
  @Input() color: 'blue' | 'cyan' | 'purple' | 'pink' | 'white' = 'blue';
  @Input() hoverable: boolean = true;
}
