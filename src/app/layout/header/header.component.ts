import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div class="flex items-center justify-between h-16">

          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Inicio - SINDES FESC">
            <div class="w-20 h-10  items-center justify-center">
              <!--<span class="text-white font-bold text-xl">FESC</span>,,,,     esto va justo en el div de arriba   class="w-20 h-10 bg-primary rounded-lg flex items-center justify-center"-->
              <img src="https://www.fesc.edu.co/portal/archivos/identidad/Logo-FESC.png" alt="logo fesc">
            </div>
            <div class="hidden sm:block">
              <div class="text-lg font-bold text-quaternary">SINDES</div>
              <div class="text-xs text-tertiary">FESC</div>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <a
              *ngFor="let link of navLinks"
              [routerLink]="link.route"
              routerLinkActive="bg-primary text-white"
              [routerLinkActiveOptions]="{exact: link.route === '/'}"
              class="px-4 py-2 rounded-lg text-sm font-medium text-quaternary hover:bg-secondary transition-colors">
              {{ link.label }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-label="Menú de navegación">
            <app-icon [name]="mobileMenuOpen() ? 'close' : 'menu'" [size]="24"></app-icon>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          *ngIf="mobileMenuOpen()"
          class="lg:hidden border-t border-secondary py-4"
          role="menu">
          <div class="flex flex-col gap-2">
            <a
              *ngFor="let link of navLinks"
              [routerLink]="link.route"
              (click)="closeMobileMenu()"
              routerLinkActive="bg-primary text-white"
              [routerLinkActiveOptions]="{exact: link.route === '/'}"
              class="px-4 py-3 rounded-lg text-sm font-medium text-quaternary hover:bg-secondary transition-colors"
              role="menuitem">
              {{ link.label }}
            </a>
            <div class="px-4 pt-2">
            </div>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);

  navLinks: NavLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Misión y Visión', route: '/mision-vision' },
    { label: 'Equipo', route: '/equipo' },
    { label: 'Líneas', route: '/lineas' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Logros', route: '/logros' },
    /*{ label: 'Eventos', route: '/eventos' },*/
    { label: 'Galería', route: '/galeria' }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
