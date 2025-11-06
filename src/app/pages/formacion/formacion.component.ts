import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Recurso } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, BadgeComponent, IconComponent],
  template: `
    <app-section titulo="Formación y Recursos" subtitulo="Materiales recomendados para aprender y crecer" paddingY="xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <app-card *ngFor="let recurso of recursos()" [imagenUrl]="recurso.imagenUrl" [imageAlt]="recurso.titulo" variant="default" padding="lg">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h3 class="text-lg font-bold text-quaternary flex-1">{{ recurso.titulo }}</h3>
            <app-badge [variant]="getTipoBadgeVariant(recurso.tipo)" size="sm">{{ recurso.tipo }}</app-badge>
          </div>
          <p *ngIf="recurso.descripcion" class="text-tertiary text-sm leading-relaxed mb-4">{{ recurso.descripcion }}</p>
          <p *ngIf="recurso.autor" class="text-tertiary text-xs mb-4">Por: <span class="font-medium">{{ recurso.autor }}</span></p>
          <a [href]="recurso.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
            <app-icon [name]="getTipoIcon(recurso.tipo)" [size]="16"></app-icon> Ver recurso <app-icon name="external-link" [size]="14" classes="ml-1"></app-icon>
          </a>
        </app-card>
      </div>
    </app-section>
  `
})
export class FormacionComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  recursos = signal<Recurso[]>([]);

  constructor() {
    this.titleService.setTitle('Formación y Recursos - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Recursos para formación en desarrollo de software.' });
  }

  ngOnInit() { this.recursos.set(this.dataService.getRecursos()); }

  getTipoBadgeVariant(tipo: Recurso['tipo']): 'info' | 'success' | 'warning' | 'primary' {
    return { 'Curso': 'info', 'Guía': 'success', 'Artículo': 'warning', 'Repo': 'primary' }[tipo] as 'info' | 'success' | 'warning' | 'primary';
  }

  getTipoIcon(tipo: Recurso['tipo']): string {
    return tipo === 'Repo' ? 'github' : 'book';
  }
}
