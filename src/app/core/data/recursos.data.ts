import { Recurso } from '../models';

export const RECURSOS_SEED: Recurso[] = [
  {
    id: '1',
    titulo: 'Guía de Buenas Prácticas en Angular',
    tipo: 'Guía',
    url: 'https://angular.dev/best-practices',
    descripcion: 'Documento interno sobre estándares de código y arquitectura en proyectos Angular.',
    imagenUrl: 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.png',
    autor: 'Equipo SINDES'
  },
  {
    id: '2',
    titulo: 'Curso: Machine Learning con Python',
    tipo: 'Curso',
    url: 'https://www.coursera.org/learn/machine-learning',
    descripcion: 'Curso gratuito de Coursera recomendado para iniciarse en ML.',
    imagenUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600',
    autor: 'Andrew Ng'
  },
  {
    id: '3',
    titulo: 'Repositorio: Plantillas de Proyectos',
    tipo: 'Repo',
    url: 'https://github.com/sindes-fesc/templates',
    descripcion: 'Colección de plantillas para proyectos web, móviles y de datos.',
    imagenUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    autor: 'SINDES'
  },
  {
    id: '4',
    titulo: 'Artículo: Clean Architecture en TypeScript',
    tipo: 'Artículo',
    url: 'https://blog.cleancoder.com',
    descripcion: 'Lectura esencial sobre arquitectura limpia aplicada a proyectos modernos.',
    imagenUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600',
    autor: 'Robert C. Martin'
  },
  {
    id: '5',
    titulo: 'Guía de Git y GitHub para Equipos',
    tipo: 'Guía',
    url: 'https://guides.github.com',
    descripcion: 'Flujos de trabajo colaborativos, branching strategies y code review.',
    imagenUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600',
    autor: 'GitHub'
  }
];
