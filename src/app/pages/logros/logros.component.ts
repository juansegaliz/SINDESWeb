import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Logro } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule, SectionComponent, IconComponent, BadgeComponent],
  template: `
    <app-section titulo="Logros y Reconocimientos" subtitulo="Hitos y premios obtenidos por el semillero" paddingY="xl">
      <div class="relative">
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary"></div>
        <div class="space-y-12">
          <div *ngFor="let logro of logros(); let i = index" [class]="'relative flex items-center gap-8 ' + (i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')">
            <div class="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-lg">
                    <app-icon name="award" [size]="24" classes="text-primary"></app-icon>
                  </div>
                  <div>
                    <p class="text-sm text-tertiary">{{ formatDate(logro.fechaISO) }}</p>
                    <h3 class="text-xl font-bold text-quaternary">{{ logro.titulo }}</h3>
                  </div>
                </div>
                <app-badge *ngIf="logro.tipo" variant="primary" size="sm">{{ logro.tipo }}</app-badge>
              </div>
              <p class="text-tertiary leading-relaxed mb-4">{{ logro.detalle }}</p>
              <a *ngIf="logro.enlace" [href]="logro.enlace" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium text-sm transition-colors">
                Ver más <app-icon name="external-link" [size]="16"></app-icon>
              </a>
              <img *ngIf="logro.imagenUrl" [src]="logro.imagenUrl" [alt]="logro.titulo" class="mt-4 w-full h-48 object-cover rounded-lg" loading="lazy">
            </div>
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
          </div>
        </div>
      </div>
    </app-section>
  `
})
export class LogrosComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  logros = signal<Logro[]>([]);

  constructor() {
    this.titleService.setTitle('Logros y Reconocimientos - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Conoce los logros del semillero SINDES.' });
  }

  ngOnInit() { this.logros.set(this.dataService.getLogros()); }

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
