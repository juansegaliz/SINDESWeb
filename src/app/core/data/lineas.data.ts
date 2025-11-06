import { Linea } from '../models';

export const LINEAS_SEED: Linea[] = [
  {
    id: '1',
    titulo: 'Desarrollo de Software',
    descripcion: 'Investigación en metodologías ágiles, arquitecturas modernas, patrones de diseño y buenas prácticas de ingeniería de software.',
    tags: ['Angular', 'React', 'Node.js', 'Clean Architecture', 'Microservicios'],
    imagenUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    icono: 'code'
  },
  {
    id: '2',
    titulo: 'Inteligencia Artificial',
    descripcion: 'Exploración de algoritmos de aprendizaje automático, redes neuronales, visión por computadora y procesamiento de lenguaje natural.',
    tags: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP'],
    imagenUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    icono: 'brain'
  },
  {
    id: '3',
    titulo: 'Ciencia de Datos',
    descripcion: 'Análisis de grandes volúmenes de datos, minería de datos, estadística aplicada y visualización de información.',
    tags: ['Python', 'R', 'Big Data', 'Tableau', 'Power BI'],
    imagenUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    icono: 'chart'
  },
  {
    id: '4',
    titulo: 'DevOps y Automatización',
    descripcion: 'Integración continua, despliegue continuo, contenedorización, orquestación y automatización de infraestructura.',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions'],
    imagenUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    icono: 'server'
  },
  {
    id: '5',
    titulo: 'Ciberseguridad',
    descripcion: 'Investigación en seguridad de aplicaciones, pruebas de penetración, criptografía y protección de datos.',
    tags: ['Ethical Hacking', 'Seguridad Web', 'Criptografía', 'OWASP'],
    imagenUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    icono: 'shield'
  }
];
