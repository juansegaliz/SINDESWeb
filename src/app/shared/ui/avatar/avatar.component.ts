import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="avatarClasses">
      <img
        *ngIf="src"
        [src]="src"
        [alt]="alt"
        class="w-full h-full object-cover"
        loading="lazy">
      <div
        *ngIf="!src && initials"
        class="w-full h-full flex items-center justify-center bg-primary text-white font-semibold">
        {{ initials }}
      </div>
    </div>
  `
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() initials?: string;

  get avatarClasses(): string {
    const base = 'rounded-full overflow-hidden flex-shrink-0';

    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24'
    };

    return `${base} ${sizes[this.size]}`;
  }
}
