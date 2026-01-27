import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circular-badge.component.html',
  styleUrls: ['./circular-badge.component.css']
})
export class CircularBadgeComponent {
  @Input() text = 'DEVELOPER • CYBER SECURITY ENTHUSIAST • ';
}
