import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { Miembro } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { AvatarComponent } from '../../shared/ui/avatar/avatar.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, BadgeComponent, AvatarComponent, IconComponent],
  template: `
    <app-section
      titulo="Equipo de Trabajo"
      subtitulo="Conoce a los investigadores y desarrolladores que hacen posible SINDES"
      paddingY="xl">

      <!-- Coordinador(es) -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-quaternary mb-8 flex items-center gap-3">
          <app-icon name="award" [size]="28" classes="text-primary"></app-icon>
          Coordinación
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-card
            *ngFor="let miembro of coordinadores()"
            variant="elevated"
            padding="lg">
            <div class="flex flex-col items-center text-center">
              <app-avatar
                [src]="miembro.fotoUrl"
                [alt]="miembro.nombre"
                size="xl"
                class="mb-4">
              </app-avatar>

              <h4 class="text-xl font-semibold text-quaternary mb-2">
                {{ miembro.nombre }}
              </h4>

              <app-badge variant="primary" class="mb-4">
                {{ miembro.rol }}
              </app-badge>

              <p *ngIf="miembro.bio" class="text-tertiary text-sm mb-4 leading-relaxed">
                {{ miembro.bio }}
              </p>

              <!-- Enlaces -->
              <div *ngIf="miembro.links" class="flex gap-3">
                <a
                  *ngIf="miembro.links.github"
                  [href]="miembro.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  [attr.aria-label]="'GitHub de ' + miembro.nombre">
                  <app-icon name="github" [size]="20"></app-icon>
                </a>

                <a
                  *ngIf="miembro.links.linkedin"
                  [href]="miembro.links.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  [attr.aria-label]="'LinkedIn de ' + miembro.nombre">
                  <app-icon name="linkedin" [size]="20"></app-icon>
                </a>

                <a
                  *ngIf="miembro.links.email"
                  [href]="'mailto:' + miembro.links.email"
                  class="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  [attr.aria-label]="'Email de ' + miembro.nombre">
                  <app-icon name="mail" [size]="20"></app-icon>
                </a>
              </div>
            </div>
          </app-card>
        </div>
      </div>

      <!-- Integrantes -->
      <div>
        <h3 class="text-2xl font-bold text-quaternary mb-8 flex items-center gap-3">
          <app-icon name="users" [size]="28" classes="text-primary"></app-icon>
          Integrantes
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-card
            *ngFor="let miembro of integrantes()"
            variant="default"
            padding="lg">
            <div class="flex flex-col items-center text-center">
              <app-avatar
                [src]="miembro.fotoUrl"
                [alt]="miembro.nombre"
                size="lg"
                class="mb-4">
              </app-avatar>

              <h4 class="text-lg font-semibold text-quaternary mb-2">
                {{ miembro.nombre }}
              </h4>

              <app-badge variant="neutral" size="sm" class="mb-3">
                {{ miembro.rol }}
              </app-badge>

              <p *ngIf="miembro.bio" class="text-tertiary text-sm mb-4 leading-relaxed">
                {{ miembro.bio }}
              </p>

              <!-- Enlaces -->
              <div *ngIf="miembro.links" class="flex gap-2">
                <a
                  *ngIf="miembro.links.github"
                  [href]="miembro.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  [attr.aria-label]="'GitHub de ' + miembro.nombre">
                  <app-icon name="github" [size]="18"></app-icon>
                </a>

                <a
                  *ngIf="miembro.links.linkedin"
                  [href]="miembro.links.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  [attr.aria-label]="'LinkedIn de ' + miembro.nombre">
                  <app-icon name="linkedin" [size]="18"></app-icon>
                </a>
              </div>
            </div>
          </app-card>
        </div>
      </div>
    </app-section>
  `
})
export class EquipoComponent implements OnInit {
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  coordinadores = signal<Miembro[]>([]);
  integrantes = signal<Miembro[]>([]);

  constructor() {
    this.titleService.setTitle('Equipo de Trabajo - SINDES FESC');
    this.metaService.updateTag({
      name: 'description',
      content: 'Conoce al equipo de investigadores y desarrolladores del semillero SINDES.'
    });
  }

  ngOnInit() {
    const miembros = this.dataService.getMiembros();
    this.coordinadores.set(miembros.filter(m => m.rol === 'Coordinador'));
    this.integrantes.set(miembros.filter(m => m.rol === 'Integrante'));
  }
}
