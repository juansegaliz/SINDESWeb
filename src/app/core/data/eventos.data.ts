import { Evento } from '../models';

export const EVENTOS_SEED: Evento[] = [
  {
    id: '1',
    titulo: 'Hackathon SINDES 2025',
    fechaISO: '2025-12-10T09:00:00',
    modalidad: 'Presencial',
    lugar: 'Campus FESC - Auditorio Principal',
    descripcion: 'Maratón de programación de 48 horas para resolver desafíos reales de la industria.',
    registroUrl: 'https://forms.google.com',
    imagenUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800'
  },
  {
    id: '2',
    titulo: 'Taller: Introducción a Machine Learning',
    fechaISO: '2025-11-15T14:00:00',
    modalidad: 'Virtual',
    descripcion: 'Taller práctico sobre fundamentos de aprendizaje automático con Python y Scikit-learn.',
    registroUrl: 'https://forms.google.com',
    imagenUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800'
  },
  {
    id: '3',
    titulo: 'Conferencia: El Futuro de la IA en Colombia',
    fechaISO: '2025-11-20T10:00:00',
    modalidad: 'Híbrido',
    lugar: 'Campus FESC - Sala 301',
    descripcion: 'Expertos nacionales e internacionales discuten las tendencias de IA y su impacto local.',
    registroUrl: 'https://forms.google.com',
    imagenUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  },
  {
    id: '4',
    titulo: 'Convocatoria: Nuevos Integrantes SINDES',
    fechaISO: '2026-01-15T23:59:00',
    modalidad: 'Presencial',
    lugar: 'Campus FESC',
    descripcion: 'Abierta la convocatoria para estudiantes interesados en unirse al semillero de investigación.',
    registroUrl: 'https://forms.google.com',
    imagenUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'
  }
];
