import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [CommonModule, SectionComponent, CardComponent, IconComponent],
  template: `
    <app-section
      titulo="Misión y Visión"
      subtitulo="Nuestro propósito y hacia dónde nos dirigimos"
      paddingY="xl">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Misión -->
        <app-card variant="elevated" padding="lg">
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <app-icon name="target" [size]="32" classes="text-primary"></app-icon>
            </div>
            <h3 class="text-2xl font-bold text-quaternary mt-2">Misión</h3>
          </div>
          <p class="text-lg text-tertiary leading-relaxed mb-6">
            Fomentar la investigación, el desarrollo y la innovación en el campo del software y la inteligencia artificial,
            mediante la formación integral de estudiantes comprometidos con la generación de soluciones tecnológicas
            que respondan a las necesidades de la región y del país.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Promover la investigación aplicada en tecnologías emergentes.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Desarrollar proyectos con impacto social y académico.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Fortalecer competencias técnicas y habilidades blandas.</span>
            </li>
          </ul>
        </app-card>

        <!-- Visión -->
        <app-card variant="elevated" padding="lg">
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <app-icon name="award" [size]="32" classes="text-primary"></app-icon>
            </div>
            <h3 class="text-2xl font-bold text-quaternary mt-2">Visión</h3>
          </div>
          <p class="text-lg text-tertiary leading-relaxed mb-6">
            Ser reconocidos para el 2030 como un semillero líder a nivel regional y nacional en investigación
            y desarrollo de software e inteligencia artificial, contribuyendo a la formación de profesionales
            altamente capacitados y al avance tecnológico del sector productivo y académico.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Liderazgo en innovación tecnológica regional.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Alianzas estratégicas con la industria y academia.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-tertiary">Generación de conocimiento de alto impacto.</span>
            </li>
          </ul>
        </app-card>
      </div>

      <!-- Imagen ilustrativa -->
      <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
          alt="Equipo de trabajo colaborativo"
          class="w-full h-80 object-cover">
      </div>

      <!-- Valores -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-center text-quaternary mb-10">Nuestros Valores</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🔬</span>
            </div>
            <h4 class="font-semibold text-quaternary mb-2">Innovación</h4>
            <p class="text-sm text-tertiary">Búsqueda constante de soluciones creativas</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🤝</span>
            </div>
            <h4 class="font-semibold text-quaternary mb-2">Colaboración</h4>
            <p class="text-sm text-tertiary">Trabajo en equipo y apoyo mutuo</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🎯</span>
            </div>
            <h4 class="font-semibold text-quaternary mb-2">Excelencia</h4>
            <p class="text-sm text-tertiary">Compromiso con la calidad y mejora continua</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">💡</span>
            </div>
            <h4 class="font-semibold text-quaternary mb-2">Aprendizaje</h4>
            <p class="text-sm text-tertiary">Formación continua y curiosidad intelectual</p>
          </div>
        </div>
      </div>
    </app-section>
  `
})
export class MisionVisionComponent {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Misión y Visión - SINDES FESC');
    this.metaService.updateTag({
      name: 'description',
      content: 'Conoce nuestra misión, visión y valores que guían el trabajo del semillero SINDES.'
    });
  }
}
