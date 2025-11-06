export interface Miembro {
  id: string;
  nombre: string;
  rol: 'Coordinador' | 'Integrante';
  fotoUrl?: string;
  bio?: string;
  links?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Linea {
  id: string;
  titulo: string;
  descripcion: string;
  tags: string[];
  imagenUrl?: string;
  icono?: string;
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  estado: 'En ejecución' | 'Finalizado' | 'Propuesta';
  tecnologias: string[];
  participantes: string[];
  repoUrl?: string;
  demoUrl?: string;
  imagenUrl?: string;
  fechaInicio?: string;
}

export interface Evento {
  id: string;
  titulo: string;
  fechaISO: string;
  modalidad: 'Presencial' | 'Virtual' | 'Híbrido';
  lugar?: string;
  descripcion?: string;
  registroUrl?: string;
  imagenUrl?: string;
}

export interface Logro {
  id: string;
  fechaISO: string;
  titulo: string;
  detalle: string;
  enlace?: string;
  imagenUrl?: string;
  tipo?: 'Premio' | 'Publicación' | 'Proyecto' | 'Evento';
}

export interface Recurso {
  id: string;
  titulo: string;
  tipo: 'Curso' | 'Guía' | 'Artículo' | 'Repo';
  url: string;
  descripcion?: string;
  imagenUrl?: string;
  autor?: string;
}

export interface GaleriaItem {
  id: string;
  tipo: 'imagen' | 'video';
  url: string;
  thumbnail?: string;
  titulo?: string;
  descripcion?: string;
  fecha?: string;
}

export interface ContactoForm {
  nombre: string;
  correo: string;
  rol: 'Estudiante' | 'Docente' | 'Egresado' | 'Otro';
  mensaje: string;
}
