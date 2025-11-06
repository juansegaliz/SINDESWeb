import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Linea } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-lineas',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, BadgeComponent, IconComponent],
  template: `
    <app-section titulo="Líneas de Investigación" subtitulo="Áreas de especialización y desarrollo del semillero" paddingY="xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <app-card *ngFor="let linea of lineas()" [imagenUrl]="linea.imagenUrl" [imageAlt]="linea.titulo" variant="elevated" padding="lg">
          <div class="flex items-start gap-3 mb-4">
            <div class="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <app-icon [name]="linea.icono || 'code'" [size]="24" classes="text-primary"></app-icon>
            </div>
            <h3 class="text-2xl font-bold text-quaternary">{{ linea.titulo }}</h3>
          </div>
          <p class="text-tertiary leading-relaxed mb-6">{{ linea.descripcion }}</p>
          <div class="flex flex-wrap gap-2">
            <app-badge *ngFor="let tag of linea.tags" variant="neutral" size="sm">{{ tag }}</app-badge>
          </div>
        </app-card>
      </div>
    </app-section>
  `
})
export class LineasComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  lineas = signal<Linea[]>([]);

  constructor() {
    this.titleService.setTitle('Líneas de Investigación - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Explora las líneas de investigación del semillero.' });
  }

  ngOnInit() {
    this.lineas.set(this.dataService.getLineas());
  }
}
