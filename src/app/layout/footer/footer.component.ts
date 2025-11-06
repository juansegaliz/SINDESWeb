import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  template: `
    <footer class="bg-quaternary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Columna 1: Sobre SINDES -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div class="font-bold text-lg">SINDES</div>
                <div class="text-sm text-gray-400">FESC</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Semillero de Investigación en Desarrollo de Software e Inteligencia Artificial de la Fundación de Estudios Superiores Comfanorte.
            </p>
          </div>

          <!-- Columna 2: Enlaces rápidos -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li><a routerLink="/mision-vision" class="text-gray-400 hover:text-white transition-colors text-sm">Misión y Visión</a></li>
              <li><a routerLink="/equipo" class="text-gray-400 hover:text-white transition-colors text-sm">Equipo</a></li>
              <li><a routerLink="/proyectos" class="text-gray-400 hover:text-white transition-colors text-sm">Proyectos</a></li>
              <li><a routerLink="/eventos" class="text-gray-400 hover:text-white transition-colors text-sm">Eventos</a></li>
              <li><a routerLink="/contacto" class="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          <!-- Columna 3: Contacto -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Contacto</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-sm">
                <app-icon name="mail" [size]="18" classes="text-primary flex-shrink-0 mt-0.5"></app-icon>
                <a href="mailto:sindes&#64;fesc.edu.co" class="text-gray-400 hover:text-white transition-colors">
                  sindes&#64;fesc.edu.co
                </a>
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-400">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Cúcuta, Norte de Santander, Colombia</span>
              </li>
            </ul>

            <!-- Redes sociales -->
            <div class="flex gap-3 mt-6">
              <a href="https://github.com/sindes-fesc" target="_blank" rel="noopener noreferrer"
                 class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                 aria-label="GitHub de SINDES">
                <app-icon name="github" [size]="20"></app-icon>
              </a>
              <a href="https://linkedin.com/company/sindes-fesc" target="_blank" rel="noopener noreferrer"
                 class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                 aria-label="LinkedIn de SINDES">
                <app-icon name="linkedin" [size]="20"></app-icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {{ currentYear }} SINDES - FESC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
