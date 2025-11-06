import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <button
      *ngIf="!href && !routerLink"
      [type]="type"
      [disabled]="disabled"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </button>

    <a
      *ngIf="href && !routerLink"
      [href]="href"
      [target]="target"
      [rel]="target === '_blank' ? 'noopener noreferrer' : undefined"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </a>

    <a
      *ngIf="routerLink"
      [routerLink]="routerLink"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </a>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() href?: string;
  @Input() routerLink?: string | string[];
  @Input() target?: '_blank' | '_self' = '_self';
  @Input() ariaLabel?: string;

  get buttonClasses(): string {
    const base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
      secondary: 'bg-secondary text-quaternary hover:bg-gray-300',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-quaternary hover:bg-secondary'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]}`;
  }
}
