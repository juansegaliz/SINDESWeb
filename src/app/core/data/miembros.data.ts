import { Miembro } from '../models';

export const MIEMBROS_SEED: Miembro[] = [
  {
    id: '1',
    nombre: 'Dr. Carlos Andrés Gómez',
    rol: 'Coordinador',
    fotoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Doctor en Ingeniería de Software, especialista en IA y aprendizaje automático.',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'carlos.gomez@fesc.edu.co'
    }
  },
  {
    id: '2',
    nombre: 'María Paula Rodríguez',
    rol: 'Integrante',
    fotoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Estudiante de Ingeniería de Sistemas, investigadora en Ciencia de Datos.',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '3',
    nombre: 'Juan David Martínez',
    rol: 'Integrante',
    fotoUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'Desarrollador Full-Stack, apasionado por DevOps y automatización.',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '4',
    nombre: 'Laura Camila Torres',
    rol: 'Integrante',
    fotoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Investigadora en Machine Learning y procesamiento de lenguaje natural.',
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '5',
    nombre: 'Andrés Felipe Sánchez',
    rol: 'Integrante',
    fotoUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
    bio: 'Desarrollador móvil y web, especialista en arquitecturas escalables.',
    links: {
      github: 'https://github.com'
    }
  },
  {
    id: '6',
    nombre: 'Diana Carolina Pérez',
    rol: 'Integrante',
    fotoUrl: 'https://randomuser.me/api/portraits/women/72.jpg',
    bio: 'Analista de datos, enfocada en visualización y business intelligence.',
    links: {
      linkedin: 'https://linkedin.com'
    }
  }
];
