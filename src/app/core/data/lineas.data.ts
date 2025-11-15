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
  
];
