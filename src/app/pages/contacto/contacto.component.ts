import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../../core/services/data.service';
import { ContactoForm } from '../../core/models';
import { SectionComponent } from '../../shared/ui/section/section.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionComponent, ButtonComponent, IconComponent],
  template: `
    <app-section titulo="Contacto" subtitulo="¿Tienes preguntas o quieres unirte? Escríbenos" paddingY="xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form [formGroup]="contactoForm" (ngSubmit)="onSubmit()" class="space-y-6" novalidate>
            <div>
              <label for="nombre" class="block text-sm font-semibold text-quaternary mb-2">Nombre completo <span class="text-primary">*</span></label>
              <input id="nombre" type="text" formControlName="nombre" class="w-full px-4 py-3 border-2 border-secondary rounded-xl focus:outline-none focus:border-primary transition-colors" [class.border-red-500]="isFieldInvalid('nombre')" placeholder="Tu nombre">
              <p *ngIf="isFieldInvalid('nombre')" class="mt-2 text-sm text-red-600" role="alert">El nombre es requerido.</p>
            </div>
            <div>
              <label for="correo" class="block text-sm font-semibold text-quaternary mb-2">Correo electrónico <span class="text-primary">*</span></label>
              <input id="correo" type="email" formControlName="correo" class="w-full px-4 py-3 border-2 border-secondary rounded-xl focus:outline-none focus:border-primary transition-colors" [class.border-red-500]="isFieldInvalid('correo')" placeholder="tu@email.com">
              <p *ngIf="contactoForm.get('correo')?.hasError('required') && contactoForm.get('correo')?.touched" class="mt-2 text-sm text-red-600" role="alert">El correo es requerido.</p>
              <p *ngIf="contactoForm.get('correo')?.hasError('email') && contactoForm.get('correo')?.touched" class="mt-2 text-sm text-red-600" role="alert">Ingresa un correo válido.</p>
            </div>
            <div>
              <label for="rol" class="block text-sm font-semibold text-quaternary mb-2">Rol <span class="text-primary">*</span></label>
              <select id="rol" formControlName="rol" class="w-full px-4 py-3 border-2 border-secondary rounded-xl focus:outline-none focus:border-primary transition-colors" [class.border-red-500]="isFieldInvalid('rol')">
                <option value="" disabled>Selecciona tu rol</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Docente">Docente</option>
                <option value="Egresado">Egresado</option>
                <option value="Otro">Otro</option>
              </select>
              <p *ngIf="isFieldInvalid('rol')" class="mt-2 text-sm text-red-600" role="alert">Selecciona tu rol.</p>
            </div>
            <div>
              <label for="mensaje" class="block text-sm font-semibold text-quaternary mb-2">Mensaje <span class="text-primary">*</span></label>
              <textarea id="mensaje" formControlName="mensaje" rows="5" class="w-full px-4 py-3 border-2 border-secondary rounded-xl focus:outline-none focus:border-primary transition-colors resize-none" [class.border-red-500]="isFieldInvalid('mensaje')" placeholder="Cuéntanos cómo podemos ayudarte..."></textarea>
              <p *ngIf="isFieldInvalid('mensaje')" class="mt-2 text-sm text-red-600" role="alert">El mensaje es requerido (mínimo 10 caracteres).</p>
            </div>
            <app-button type="submit" variant="primary" size="lg" [disabled]="enviando() || contactoForm.invalid" class="w-full">
              <span *ngIf="!enviando()">Enviar mensaje</span><span *ngIf="enviando()">Enviando...</span>
            </app-button>
          </form>
          <div *ngIf="mensajeExito()" class="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3" role="alert">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <div><h4 class="font-semibold text-green-900 mb-1">¡Mensaje enviado!</h4><p class="text-sm text-green-700">{{ mensajeExito() }}</p></div>
          </div>
          <div *ngIf="mensajeError()" class="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3" role="alert">
            <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <div><h4 class="font-semibold text-red-900 mb-1">Error al enviar</h4><p class="text-sm text-red-700">{{ mensajeError() }}</p></div>
          </div>
        </div>
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-primary to-primary-700 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="p-2 bg-white/20 rounded-lg"><app-icon name="mail" [size]="24"></app-icon></div>
                <div><h4 class="font-semibold mb-1">Correo</h4><a href="mailto:sindes&#64;fesc.edu.co" class="text-gray-100 hover:text-white transition-colors">sindes&#64;fesc.edu.co</a></div>
              </div>
              <div class="flex items-start gap-4">
                <div class="p-2 bg-white/20 rounded-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                <div><h4 class="font-semibold mb-1">Ubicación</h4><p class="text-gray-100">Cúcuta, Norte de Santander<br>Fundación de Estudios Superiores Comfanorte</p></div>
              </div>
            </div>
            <div class="mt-8 pt-8 border-t border-white/20">
              <h4 class="font-semibold mb-4">Síguenos</h4>
              <div class="flex gap-3">
                <a href="https://github.com/sindes-fesc" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors" aria-label="GitHub de SINDES"><app-icon name="github" [size]="24"></app-icon></a>
                <a href="https://linkedin.com/company/sindes-fesc" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn de SINDES"><app-icon name="linkedin" [size]="24"></app-icon></a>
              </div>
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-lg hidden lg:block">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800" alt="Contacto" class="w-full h-64 object-cover">
          </div>
        </div>
      </div>
    </app-section>
  `
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  private dataService = inject(DataService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  contactoForm: FormGroup;
  enviando = signal(false);
  mensajeExito = signal('');
  mensajeError = signal('');

  constructor() {
    this.titleService.setTitle('Contacto - SINDES FESC');
    this.metaService.updateTag({ name: 'description', content: 'Contáctanos para unirte al semillero SINDES.' });
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      rol: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactoForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  async onSubmit() {
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      return;
    }
    this.enviando.set(true);
    this.mensajeExito.set('');
    this.mensajeError.set('');
    const formData: ContactoForm = this.contactoForm.value;
    try {
      const resultado = await this.dataService.enviarContacto(formData);
      if (resultado.success) {
        this.mensajeExito.set(resultado.message);
        this.contactoForm.reset();
      } else {
        this.mensajeError.set('Hubo un error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      this.mensajeError.set('Error de conexión. Por favor, intenta más tarde.');
    } finally {
      this.enviando.set(false);
    }
  }
}
