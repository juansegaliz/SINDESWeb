# Proyecto SINDES-FESC - Angular 20 + Tailwind CSS

## ✅ Proyecto Creado Exitosamente

El sitio web completo para el Semillero de Investigación SINDES ha sido generado con:

- **Angular 20** (Standalone Components)
- **Tailwind CSS** con tema personalizado
- **10 páginas completas** con routing
- **Componentes reutilizables**
- **Formulario de contacto** con validaciones
- **Diseño responsive** y accesible
- **Datos de ejemplo** listos para usar

## 📂 Estructura del Proyecto

```
SindesWeb/
├── src/
│   ├── app/
│   │   ├── core/              # Servicios, modelos y datos
│   │   │   ├── models/        # Interfaces TypeScript
│   │   │   ├── services/      # DataService
│   │   │   └── data/          # Datos de ejemplo
│   │   ├── shared/ui/         # Componentes reutilizables
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── badge/
│   │   │   ├── section/
│   │   │   ├── icon/
│   │   │   └── avatar/
│   │   ├── layout/            # Header, Footer, Shell
│   │   ├── pages/             # 10 páginas del sitio
│   │   │   ├── inicio/
│   │   │   ├── mision-vision/
│   │   │   ├── equipo/
│   │   │   ├── lineas/
│   │   │   ├── proyectos/
│   │   │   ├── logros/
│   │   │   ├── eventos/
│   │   │   ├── formacion/
│   │   │   ├── galeria/
│   │   │   └── contacto/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── public/
├── package.json
├── tailwind.config.ts
├── angular.json
├── tsconfig.json
└── README.md
```

## 🚀 Próximos Pasos

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm start
# o
ng serve
```

El sitio estará disponible en: http://localhost:4200/

### 3. Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en `dist/sindes-fesc/browser/`

## 🎨 Personalización

### Cambiar Colores del Tema

Edita `src/styles.css` y modifica las variables:

```css
@theme {
  --color-primary: #BF0009;    /* Rojo FESC */
  --color-secondary: #E5E7EB;  /* Gris claro */
  --color-tertiary: #9CA3AF;   /* Gris medio */
  --color-quaternary: #111827; /* Gris oscuro */
}
```

### Actualizar Datos

Los datos de ejemplo están en `src/app/core/data/`:
- `miembros.data.ts` - Equipo de trabajo
- `lineas.data.ts` - Líneas de investigación
- `proyectos.data.ts` - Proyectos
- `eventos.data.ts` - Eventos y convocatorias
- `logros.data.ts` - Reconocimientos
- `recursos.data.ts` - Recursos de formación
- `galeria.data.ts` - Imágenes de galería

### Conectar Formulario de Contacto

El formulario actualmente simula el envío. Para conectarlo a un backend:

1. Edita `src/app/core/services/data.service.ts`
2. Modifica el método `enviarContacto()` para hacer un POST a tu API
3. Ejemplo con HttpClient:

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

async enviarContacto(form: ContactoForm) {
  return firstValueFrom(
    this.http.post<any>('https://tu-api.com/contacto', form)
  );
}
```

## 📱 Páginas Incluidas

1. **Inicio** (`/`) - Hero, estadísticas y enlaces rápidos
2. **Misión y Visión** (`/mision-vision`) - Propósito y valores
3. **Equipo** (`/equipo`) - Integrantes con fotos
4. **Líneas** (`/lineas`) - Áreas de investigación
5. **Proyectos** (`/proyectos`) - Proyectos activos y finalizados
6. **Logros** (`/logros`) - Timeline de reconocimientos
7. **Eventos** (`/eventos`) - Próximos eventos y convocatorias
8. **Formación** (`/formacion`) - Recursos educativos
9. **Galería** (`/galeria`) - Fotos con lightbox
10. **Contacto** (`/contacto`) - Formulario validado

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm start

# Build
npm run build

# Tests
npm test

# Generar nuevo componente
ng generate component nombre-componente --standalone

# Generar nuevo servicio
ng generate service nombre-servicio

# Agregar SSR (opcional)
ng add @angular/ssr
```

## 🌐 Deploy

### Netlify

1. Build: `ng build --configuration production`
2. Publish directory: `dist/sindes-fesc/browser`
3. Crea `netlify.toml`:

```toml
[build]
  command = "ng build --configuration production"
  publish = "dist/sindes-fesc/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```bash
npm i -g vercel
vercel
```

## 📦 Características

✅ Angular 20 con Standalone APIs
✅ Tailwind CSS totalmente configurado
✅ Routing con lazy loading
✅ Componentes reutilizables
✅ Formulario con validaciones
✅ Responsive (mobile-first)
✅ Accesibilidad (ARIA, focus)
✅ SEO básico (title, meta tags)
✅ Imágenes desde internet
✅ Signals API para estado reactivo
✅ TypeScript tipado
✅ Sin dependencias pesadas

## 💡 Soporte

Para más información sobre Angular:
- Documentación: https://angular.dev
- Tailwind CSS: https://tailwindcss.com

---

**¡Tu proyecto SINDES-FESC está listo para usar!** 🎉
