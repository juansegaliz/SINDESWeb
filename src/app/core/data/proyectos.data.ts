import { Proyecto } from '../models';

export const PROYECTOS_SEED: Proyecto[] = [
  {
    id: '1',
    titulo: 'Sistema de Gestión Académica FESC',
    descripcion: 'Plataforma web completa para la gestión de estudiantes, docentes, calificaciones y horarios universitarios.',
    estado: 'En ejecución',
    tecnologias: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
    participantes: ['María Paula Rodríguez', 'Juan David Martínez'],
    repoUrl: 'https://github.com',
    imagenUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    fechaInicio: '2024-09-01'
  },
  {
    id: '2',
    titulo: 'ChatBot Educativo con IA',
    descripcion: 'Asistente virtual basado en procesamiento de lenguaje natural para resolver dudas académicas de estudiantes.',
    estado: 'En ejecución',
    tecnologias: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI'],
    participantes: ['Laura Camila Torres', 'Dr. Carlos Andrés Gómez'],
    demoUrl: 'https://demo.example.com',
    imagenUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    fechaInicio: '2024-10-15'
  },
  {
    id: '3',
    titulo: 'Dashboard de Análisis de Datos COVID-19',
    descripcion: 'Visualización interactiva de datos epidemiológicos con predicciones basadas en modelos estadísticos.',
    estado: 'Finalizado',
    tecnologias: ['React', 'D3.js', 'Python', 'Pandas'],
    participantes: ['Diana Carolina Pérez', 'Andrés Felipe Sánchez'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    imagenUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800',
    fechaInicio: '2023-03-01'
  },
  {
    id: '4',
    titulo: 'Automatización de Despliegue CI/CD',
    descripcion: 'Pipeline completo de integración y despliegue continuo para aplicaciones web institucionales.',
    estado: 'Finalizado',
    tecnologias: ['GitHub Actions', 'Docker', 'AWS', 'Terraform'],
    participantes: ['Juan David Martínez'],
    repoUrl: 'https://github.com',
    imagenUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800',
    fechaInicio: '2024-01-10'
  }
];
