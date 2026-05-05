# 🐶 Veterinaria Patitas Felices

Sitio web profesional para la Veterinaria Patitas Felices con galería interactiva, programas de cuidados y atención integral.

## ✨ Características Principales

### 🎨 Diseño
- Diseño moderno y responsivo
- Se adapta perfectamente a móviles, tablets y computadoras
- Navegación intuitiva y fácil de usar
- Animaciones suaves y atractivas

### 📸 Galería Interactiva
- 8 fotos de servicios profesionales
- Filtrado por categorías:
  - Consultas
  - Baños
  - Vacunaciones
  - Cirugías
- Lightbox modal para ver fotos en grande
- Navegación con flechas y teclado
- Efectos hover animados

### 💰 Programas de Cuidados
- **Programa Básico** ($49/mes)
  - 1 consulta mensual
  - Descuento 10% en medicinas
  - Asesoría por teléfono
  - Historial médico digital

- **Programa Premium** ($89/mes) - ⭐ MÁS POPULAR
  - 2 consultas mensuales
  - 1 baño y estética al mes
  - Descuento 20% en medicinas
  - Asesoría nutricional básica
  - Emergencias con descuento 30%

- **Programa VIP** ($149/mes)
  - 4 consultas mensuales
  - 2 baños y estéticas al mes
  - Limpieza dental anual incluida
  - Descuento 30% en medicinas
  - Asesoría nutricional especializada
  - Emergencias 24/7 sin costo
  - Transporte a domicilio

### 🏥 Servicios Incluidos
- Consulta General
- Vacunación
- Baño y Estética
- Limpieza Dental
- Cirugía
- Urgencias 24/7

### 📂 Estructura del Proyecto

```
vetérinaria-patitas-felices/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: GitHub Pages (Recomendado)

1. Ve a **Settings** del repositorio
2. Busca la sección **"Pages"**
3. En **"Source"** selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Haz clic en **Save**
5. ¡Tu sitio estará disponible en!:
   ```
   https://germanleonardodeleonguerra-debug.github.io/veterinaria-patitas-felices/
   ```

### Opción 2: Abrir Localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/germanleonardodeleonguerra-debug/veterinaria-patitas-felices.git
   ```

2. Abre `index.html` en tu navegador

## 🎨 Personalización

### Cambiar Colores

En `styles.css`, busca `#4CAF50` (color verde) y reemplázalo con tu color preferido:

```css
/* Verde actual */
color: #4CAF50;

/* Cambiar a otro color */
color: #FF6B6B;  /* Rojo */
color: #4ECDC4;  /* Turquesa */
color: #9B59B6;  /* Púrpura */
```

### Agregar Más Fotos

En `index.html`, dentro de la sección `<div class="galeria">`, agrega:

```html
<div class="galeria-item" data-category="consulta">
    <img src="URL_DE_TU_IMAGEN" alt="Descripción">
    <p>Título de la Foto</p>
</div>
```

**Categorías disponibles:**
- `consulta` - Consultas
- `bano` - Baños
- `vacunacion` - Vacunaciones
- `cirugias` - Cirugías

### Editar Información de Contacto

En `index.html`, sección `#contacto`, actualiza:

```html
<!-- Teléfono -->
<a href="tel:1234567890">+1 (234) 567-890</a>

<!-- Email -->
<a href="mailto:info@patitasfelices.com">info@patitasfelices.com</a>

<!-- Ubicación -->
<p>Calle Principal 123, Ciudad</p>

<!-- Horario -->
<p>Lunes a Viernes: 9:00 AM - 7:00 PM<br>
Sábado: 10:00 AM - 3:00 PM<br>
Emergencias 24/7</p>
```

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo, Grid, Flexbox, Animaciones
- **JavaScript Vanilla** - Sin dependencias externas
- **Unsplash** - Imágenes de alta calidad

## 📱 Responsividad

El sitio se adapta automáticamente a:
- 📱 Móviles (320px y superior)
- 📱 Tablets (768px y superior)
- 💻 Desktops (1024px y superior)

## 🔄 Mejoras Futuras

- [ ] Formulario de contacto funcional
- [ ] Sistema de citas en línea
- [ ] Integración con Google Maps
- [ ] Blog de consejos veterinarios
- [ ] Carrito de compras (productos veterinarios)
- [ ] Sistema de reseñas y testimonios
- [ ] WhatsApp integrado
- [ ] Área de clientes con historial médico

## 📝 Licencia

Este proyecto es de uso libre. Siéntete libre de modificarlo según tus necesidades.

## 📧 Contacto

**Veterinaria Patitas Felices**
- 📱 Teléfono: +1 (234) 567-890
- 📧 Email: info@patitasfelices.com
- 📍 Ubicación: Calle Principal 123, Ciudad
- 🕐 Horario: Lun-Vie 9:00-19:00 | Sáb 10:00-15:00 | Emergencias 24/7

---

**¡Hecho con ❤️ para Veterinaria Patitas Felices!**

*Cuidamos a tus mascotas como si fueran nuestras* 🐾