import { Logro } from '../models';

export const LOGROS_SEED: Logro[] = [
  {
    id: '1',
    fechaISO: '2024-10-05',
    titulo: 'Primer Lugar en Hackathon Nacional TechColombia 2024',
    detalle: 'Nuestro equipo ganó el primer puesto con el proyecto de análisis predictivo para educación.',
    tipo: 'Premio',
    imagenUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600',
    enlace: 'https://techcolombia.com/winners'
  },
  {
    id: '2',
    fechaISO: '2024-08-20',
    titulo: 'Publicación en IEEE Conference on AI',
    detalle: 'Artículo aceptado sobre "Redes Neuronales Aplicadas a Diagnóstico Médico".',
    tipo: 'Publicación',
    imagenUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
    enlace: 'https://ieeexplore.ieee.org'
  },
  {
    id: '3',
    fechaISO: '2024-06-15',
    titulo: 'Reconocimiento Institucional FESC',
    detalle: 'Reconocimiento por excelencia en investigación y desarrollo de software innovador.',
    tipo: 'Premio',
    imagenUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=600'
  },
  {
    id: '4',
    fechaISO: '2024-03-10',
    titulo: 'Proyecto Finalista en Google Solution Challenge',
    detalle: 'Nuestra solución para monitoreo ambiental llegó a la fase final internacional.',
    tipo: 'Proyecto',
    imagenUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600',
    enlace: 'https://developers.google.com/community/gdsc-solution-challenge'
  },
  {
    id: '5',
    fechaISO: '2023-11-01',
    titulo: 'Alianza con Microsoft para Educación',
    detalle: 'Convenio firmado para acceso a herramientas Azure y certificaciones gratuitas.',
    tipo: 'Evento',
    imagenUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600'
  }
];
