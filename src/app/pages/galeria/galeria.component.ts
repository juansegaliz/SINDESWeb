import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { GaleriaItem } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  template: `
    <app-section titulo="Galería Multimedia" subtitulo="Momentos destacados de nuestras actividades y eventos" paddingY="xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div *ngFor="let item of galeria()" class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300" (click)="abrirModal(item)">
          <img [src]="item.thumbnail || item.url" [alt]="item.titulo || 'Imagen de galería'" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-quaternary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div class="p-4 text-white w-full">
              <h3 *ngIf="item.titulo" class="font-semibold text-lg mb-1">{{ item.titulo }}</h3>
              <p *ngIf="item.descripcion" class="text-sm text-gray-200">{{ item.descripcion }}</p>
              <p *ngIf="item.fecha" class="text-xs text-gray-300 mt-2">{{ formatDate(item.fecha) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="modalOpen()" class="fixed inset-0 z-50 bg-quaternary/95 flex items-center justify-center p-4" (click)="cerrarModal()" role="dialog" aria-modal="true">
        <button class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" (click)="cerrarModal()" aria-label="Cerrar modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="max-w-5xl w-full" (click)="$event.stopPropagation()">
          <img *ngIf="itemSeleccionado()" [src]="itemSeleccionado()!.url" [alt]="itemSeleccionado()!.titulo || 'Imagen ampliada'" class="w-full h-auto rounded-lg shadow-2xl">
          <div *ngIf="itemSeleccionado()?.titulo || itemSeleccionado()?.descripcion" class="mt-6 text-center text-white">
            <h3 *ngIf="itemSeleccionado()?.titulo" class="text-2xl font-bold mb-2">{{ itemSeleccionado()!.titulo }}</h3>
            <p *ngIf="itemSeleccionado()?.descripcion" class="text-gray-300">{{ itemSeleccionado()!.descripcion }}</p>
          </div>
        </div>
      </div>
    </app-section>
  `
})
export class GaleriaComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  galeria = signal<GaleriaItem[]>([]);
  modalOpen = signal(false);
  itemSeleccionado = signal<GaleriaItem | null>(null);

  constructor() {
    this.titleService.setTitle('Galería Multimedia - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Explora fotos de las actividades del semillero SINDES.' });
  }

  ngOnInit() { this.galeria.set(this.dataService.getGaleria()); }

  abrirModal(item: GaleriaItem) { this.itemSeleccionado.set(item); this.modalOpen.set(true); }

  cerrarModal() { this.modalOpen.set(false); setTimeout(() => this.itemSeleccionado.set(null), 300); }

  formatDate(fecha: string): string {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
