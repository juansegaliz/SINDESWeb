import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [class]="sectionClasses" [attr.aria-labelledby]="id ? id + '-title' : undefined">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div *ngIf="titulo || subtitulo" class="text-center mb-12">
          <h2
            *ngIf="titulo"
            [id]="id ? id + '-title' : undefined"
            class="text-3xl md:text-4xl font-bold text-quaternary mb-4">
            {{ titulo }}
          </h2>
          <p *ngIf="subtitulo" class="text-lg text-tertiary max-w-2xl mx-auto">
            {{ subtitulo }}
          </p>
        </div>
        <ng-content></ng-content>
      </div>
    </section>
  `
})
export class SectionComponent {
  @Input() titulo?: string;
  @Input() subtitulo?: string;
  @Input() id?: string;
  @Input() bgColor: 'white' | 'gray' = 'white';
  @Input() paddingY: 'sm' | 'md' | 'lg' | 'xl' = 'lg';

  get sectionClasses(): string {
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-secondary-50'
    };

    const paddings = {
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-24'
    };

    return `${backgrounds[this.bgColor]} ${paddings[this.paddingY]}`;
  }
}
