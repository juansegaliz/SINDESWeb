import { Injectable, signal } from '@angular/core';
import { Miembro, Linea, Proyecto, Evento, Logro, Recurso, GaleriaItem, ContactoForm } from '../models';
import { MIEMBROS_SEED } from '../data/miembros.data';
import { LINEAS_SEED } from '../data/lineas.data';
import { PROYECTOS_SEED } from '../data/proyectos.data';
import { EVENTOS_SEED } from '../data/eventos.data';
import { LOGROS_SEED } from '../data/logros.data';
import { RECURSOS_SEED } from '../data/recursos.data';
import { GALERIA_SEED } from '../data/galeria.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Signals para datos reactivos
  miembros = signal<Miembro[]>(MIEMBROS_SEED);
  lineas = signal<Linea[]>(LINEAS_SEED);
  proyectos = signal<Proyecto[]>(PROYECTOS_SEED);
  eventos = signal<Evento[]>(EVENTOS_SEED);
  logros = signal<Logro[]>(LOGROS_SEED);
  recursos = signal<Recurso[]>(RECURSOS_SEED);
  galeria = signal<GaleriaItem[]>(GALERIA_SEED);

  // Métodos para obtener datos
  getMiembros() {
    return this.miembros();
  }

  getLineas() {
    return this.lineas();
  }

  getProyectos() {
    return this.proyectos();
  }

  getEventos() {
    // Ordenar por fecha descendente
    return this.eventos().sort((a, b) =>
      new Date(b.fechaISO).getTime() - new Date(a.fechaISO).getTime()
    );
  }

  getLogros() {
    // Ordenar por fecha descendente
    return this.logros().sort((a, b) =>
      new Date(b.fechaISO).getTime() - new Date(a.fechaISO).getTime()
    );
  }

  getRecursos() {
    return this.recursos();
  }

  getGaleria() {
    return this.galeria();
  }

  // Simular envío de formulario de contacto
  async enviarContacto(form: ContactoForm): Promise<{ success: boolean; message: string }> {
    console.log('📧 Formulario de contacto recibido:', form);

    // Simular delay de envío
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simular respuesta exitosa
    return {
      success: true,
      message: '¡Gracias por contactarnos! Responderemos pronto.'
    };
  }
}
