import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'mision-vision',
    loadComponent: () => import('./pages/mision-vision/mision-vision.component').then(m => m.MisionVisionComponent)
  },
  {
    path: 'equipo',
    loadComponent: () => import('./pages/equipo/equipo.component').then(m => m.EquipoComponent)
  },
  {
    path: 'lineas',
    loadComponent: () => import('./pages/lineas/lineas.component').then(m => m.LineasComponent)
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos.component').then(m => m.ProyectosComponent)
  },
  {
    path: 'logros',
    loadComponent: () => import('./pages/logros/logros.component').then(m => m.LogrosComponent)
  },
  {
    path: 'eventos',
    loadComponent: () => import('./pages/eventos/eventos.component').then(m => m.EventosComponent)
  },
  {
    path: 'formacion',
    loadComponent: () => import('./pages/formacion/formacion.component').then(m => m.FormacionComponent)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
