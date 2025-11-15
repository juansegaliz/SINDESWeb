import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { CardComponent } from "../../shared/ui/card/card.component";
import { IconComponent } from "../../shared/ui/icon/icon.component";

@Component({
  selector: "app-inicio",
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, IconComponent],
  template: `
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-quaternary to-gray-800 text-white overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1920"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <div class="text-center">
          <!-- Logo combinado -->
          <div class="flex justify-center items-center gap-4 mb-8">
            <div
              class="w-24 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <span class="text-white font-bold text-4xl">FESC</span>
            </div>
          </div>

          <h1 class="text-4xl md:text-6xl font-bold mb-8">
            SINDES<br />
            <span class="text-primary">Semillero de Investigación</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-300 mb-6">
            Desarrollo de Software e Inteligencia Artificial
          </p>

          <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Fundación de Estudios Superiores Comfanorte - FESC
          </p>

          <div class="flex justify-center">
            <app-button variant="primary" size="lg" routerLink="/equipo">
              Ver Integrantes
            </app-button>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-1 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto py-4">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">15+</div>
            <div class="text-tertiary text-sm">Integrantes Activos</div>
          </div>

          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">8</div>
            <div class="text-tertiary text-sm">Proyectos Completados</div>
          </div>

          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">2</div>
            <div class="text-tertiary text-sm">Líneas de Investigación</div>
          </div>

        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">0</div>
          <div class="text-tertiary text-sm">Logros</div>
        </div>
      </div>
    </div>
  </section>

    <!-- Quick Links Section -->
    <section class="py-16 bg-secondary-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-quaternary mb-12">
          Explora SINDES
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1: Proyectos -->
          <app-card
            variant="elevated"
            imagenUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
          >
            <div class="space-y-3">
              <div class="flex justify-center gap-2 text-primary">
                <app-icon name="code" [size]="24"></app-icon>
                <h3 class="text-xl font-semibold">Proyectos Activos</h3>
              </div>
              <p class="text-tertiary text-center">
                Descubre los proyectos en los que estamos trabajando y sus
                impactos.
              </p>
              <br /><br />
              <div class="flex justify-center">
                <app-button variant="outline" size="sm" routerLink="/proyectos">
                  Ver Proyectos
                  <app-icon
                    name="arrow-right"
                    [size]="16"
                    classes="ml-2"
                  ></app-icon>
                </app-button>
              </div>
            </div>
          </app-card>

          <!-- Card 2: Líneas -->
          <app-card
            variant="elevated"
            imagenUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
          >
            <div class="space-y-3">
              <div class="flex justify-center gap-2 text-primary">
                <app-icon name="brain" [size]="24"></app-icon>
                <h3 class="text-xl font-semibold">Líneas de Investigación</h3>
              </div>
              <p class="text-tertiary text-center">
                Explora nuestras áreas de especialización: IA, desarrollo de
                software, ciencia de datos y más.
              </p>
              <br />
              <div class="flex justify-center">
                <app-button variant="outline" size="sm" routerLink="/lineas">
                  Ver Líneas
                  <app-icon
                    name="arrow-right"
                    [size]="16"
                    classes="ml-2"
                  ></app-icon>
                </app-button>
              </div>
            </div>
          </app-card>

          <!-- Card 3: Logros -->
          <app-card
            variant="elevated"
            imagenUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
          >
            <div class="space-y-3">
              <div class="flex justify-center gap-2 text-primary">
                <app-icon name="calendar" [size]="24"></app-icon>
                <h3 class="text-xl font-semibold">Logros Sindes</h3>
              </div>

              <p class="text-tertiary text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>

              <br /><br />
              <div class="flex justify-center">
                <app-button variant="outline" size="sm" routerLink="/logros">
                  Ver Logros
                  <app-icon
                    name="arrow-right"
                    [size]="16"
                    classes="ml-2"
                  ></app-icon>
                </app-button>
              </div>
            </div>
          </app-card>
        </div>
      </div>
    </section>
  `,
})
export class InicioComponent {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle("Inicio - SINDES FESC");
    this.metaService.updateTag({
      name: "description",
      content:
        "Semillero de Investigación en Inteligencia Artificial y Redes Neuronales de la FESC.",
    });
  }
}
