import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <div *ngIf="imagenUrl" class="relative overflow-hidden rounded-t-2xl">
        <img
          [src]="imagenUrl"
          [alt]="imageAlt"
          class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy">
      </div>
      <div [class]="contentPadding">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() imagenUrl?: string;
  @Input() imageAlt = '';
  @Input() variant: 'default' | 'bordered' | 'elevated' = 'default';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  get cardClasses(): string {
    const base = 'bg-white rounded-2xl overflow-hidden transition-all duration-300';

    const variants = {
      default: 'shadow-sm hover:shadow-md',
      bordered: 'border-2 border-secondary hover:border-tertiary',
      elevated: 'shadow-lg hover:shadow-xl hover:-translate-y-1'
    };

    return `${base} ${variants[this.variant]}`;
  }

  get contentPadding(): string {
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    return paddings[this.padding];
  }
}
