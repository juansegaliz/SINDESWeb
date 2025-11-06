import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Evento } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, BadgeComponent, IconComponent, ButtonComponent],
  template: `
    <app-section titulo="Eventos y Convocatorias" subtitulo="Talleres, conferencias y oportunidades para participar" paddingY="xl">
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-quaternary mb-8 flex items-center gap-3">
          <app-icon name="calendar" [size]="28" classes="text-primary"></app-icon> Próximos Eventos
        </h3>
        <div *ngIf="proximosEventos().length > 0; else noProximos" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <app-card *ngFor="let evento of proximosEventos()" [imagenUrl]="evento.imagenUrl" [imageAlt]="evento.titulo" variant="elevated" padding="lg">
            <div class="flex items-start justify-between gap-4 mb-4">
              <h3 class="text-xl font-bold text-quaternary flex-1">{{ evento.titulo }}</h3>
              <app-badge [variant]="getModalidadBadgeVariant(evento.modalidad)" size="sm">{{ evento.modalidad }}</app-badge>
            </div>
            <div class="flex items-center gap-2 text-tertiary mb-2">
              <app-icon name="calendar" [size]="16"></app-icon>
              <span class="text-sm">{{ formatDate(evento.fechaISO) }}</span>
            </div>
            <div *ngIf="evento.lugar" class="flex items-center gap-2 text-tertiary mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span class="text-sm">{{ evento.lugar }}</span>
            </div>
            <p *ngIf="evento.descripcion" class="text-tertiary leading-relaxed mb-6">{{ evento.descripcion }}</p>
            <app-button *ngIf="evento.registroUrl" variant="primary" size="sm" [href]="evento.registroUrl" target="_blank" class="w-full">
              Registrarse <app-icon name="external-link" [size]="16" classes="ml-2"></app-icon>
            </app-button>
          </app-card>
        </div>
        <ng-template #noProximos>
          <div class="bg-secondary-50 rounded-2xl p-12 text-center">
            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <app-icon name="calendar" [size]="32" classes="text-tertiary"></app-icon>
            </div>
            <h4 class="text-lg font-semibold text-quaternary mb-2">No hay eventos próximos</h4>
            <p class="text-tertiary">Estamos preparando nuevos eventos. ¡Mantente atento!</p>
          </div>
        </ng-template>
      </div>
    </app-section>
  `
})
export class EventosComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  proximosEventos = signal<Evento[]>([]);

  constructor() {
    this.titleService.setTitle('Eventos y Convocatorias - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Descubre eventos del semillero SINDES.' });
  }

  ngOnInit() {
    const ahora = new Date();
    const eventos = this.dataService.getEventos();
    this.proximosEventos.set(eventos.filter(e => new Date(e.fechaISO) >= ahora));
  }

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  getModalidadBadgeVariant(modalidad: Evento['modalidad']): 'info' | 'success' | 'warning' {
    return { 'Virtual': 'info', 'Presencial': 'success', 'Híbrido': 'warning' }[modalidad] as 'info' | 'success' | 'warning';
  }
}
