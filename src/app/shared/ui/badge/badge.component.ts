import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'success' | 'warning' | 'info' | 'neutral' = 'neutral';
  @Input() size: 'sm' | 'md' = 'md';

  get badgeClasses(): string {
    const base = 'inline-flex items-center font-medium rounded-full';

    const variants = {
      primary: 'bg-primary/10 text-primary',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      info: 'bg-blue-100 text-blue-700',
      neutral: 'bg-secondary text-tertiary'
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm'
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]}`;
  }
}
