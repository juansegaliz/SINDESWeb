import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Proyecto } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, BadgeComponent, IconComponent],
  template: `
    <app-section titulo="Proyectos Activos y Finalizados" subtitulo="Soluciones tecnológicas desarrolladas por el semillero" paddingY="xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <app-card *ngFor="let proyecto of proyectos()" [imagenUrl]="proyecto.imagenUrl" [imageAlt]="proyecto.titulo" variant="elevated" padding="lg">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h3 class="text-xl font-bold text-quaternary flex-1">{{ proyecto.titulo }}</h3>
            <app-badge [variant]="getEstadoBadgeVariant(proyecto.estado)" size="sm">{{ proyecto.estado }}</app-badge>
          </div>
          <p class="text-tertiary leading-relaxed mb-4">{{ proyecto.descripcion }}</p>
          <div class="mb-4">
            <h4 class="text-sm font-semibold text-quaternary mb-2">Tecnologías:</h4>
            <div class="flex flex-wrap gap-2">
              <app-badge *ngFor="let tech of proyecto.tecnologias" variant="info" size="sm">{{ tech }}</app-badge>
            </div>
          </div>
          <div class="mb-6">
            <h4 class="text-sm font-semibold text-quaternary mb-2">Participantes:</h4>
            <p class="text-sm text-tertiary">{{ proyecto.participantes.join(', ') }}</p>
          </div>
          <div class="flex gap-3">
            <a *ngIf="proyecto.repoUrl" [href]="proyecto.repoUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-quaternary hover:bg-tertiary hover:text-white transition-colors">
              <app-icon name="github" [size]="18"></app-icon> Repositorio
            </a>
            <a *ngIf="proyecto.demoUrl" [href]="proyecto.demoUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg text-sm font-medium text-white hover:bg-primary-600 transition-colors">
              <app-icon name="external-link" [size]="18"></app-icon> Demo
            </a>
          </div>
        </app-card>
      </div>
    </app-section>
  `
})
export class ProyectosComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  proyectos = signal<Proyecto[]>([]);

  constructor() {
    this.titleService.setTitle('Proyectos - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Descubre los proyectos de desarrollo de software.' });
  }

  ngOnInit() {
    this.proyectos.set(this.dataService.getProyectos());
  }

  getEstadoBadgeVariant(estado: Proyecto['estado']): 'success' | 'warning' | 'info' {
    const variants: Record<Proyecto['estado'], 'success' | 'warning' | 'info'> = {
      'Finalizado': 'success', 'En ejecución': 'info', 'Propuesta': 'warning'
    };
    return variants[estado];
  }
}
