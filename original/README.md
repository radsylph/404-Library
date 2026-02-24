# 404 Retro Library - Guía de Uso

## 🎨 Descripción
Una biblioteca retro con estilo Windows XP para compartir recursos, guías, herramientas y más.

## ✨ Mejoras Implementadas

### 1. **Sistema de Búsqueda Funcional**
- Busca por título, descripción, categoría o tags
- Presiona Enter o haz clic en "Search"
- Muestra mensaje cuando no hay resultados

### 2. **Sistema de Favoritos**
- Guarda recursos en localStorage
- Botón "SAVE ⭐" cambia a "SAVED ✓" cuando está guardado
- Los favoritos persisten entre sesiones

### 3. **Tipos de Recursos**
Cada recurso puede ser:
- **PDF** 📄 - Documentos y guías
- **LINK** 🔗 - Enlaces externos
- **DOWNLOAD** 💾 - Archivos descargables
- **VIDEO** 🎥 - Videos y multimedia

### 4. **Reloj en Tiempo Real**
- El reloj en el footer se actualiza cada segundo
- Formato 12 horas con AM/PM

### 5. **Formulario de Envío**
- Validación de campos requeridos
- Validación de URLs
- Confirmación de envío
- Botón de cancelar funcional

### 6. **Notificaciones**
- Sistema de notificaciones estilo Windows XP
- Aparecen en la esquina inferior derecha
- Se ocultan automáticamente después de 2 segundos

### 7. **Filtros de Categoría**
- Haz clic en las categorías del sidebar para filtrar
- Doble clic en el header del panel para mostrar todo
- Animaciones suaves al filtrar

## 📝 Cómo Agregar Recursos Reales

### Opción 1: Editar el Array de Datos (Recomendado)

Abre `script.js` y edita el array `resourcesData`:

```javascript
const resourcesData = [
    {
        id: 7, // ID único
        title: "Tu Recurso",
        category: "Components", // Components, Terminals, Guides, Customization, Repositories, User Uploads
        description: "Descripción detallada del recurso",
        icon: "URL_del_icono", // URL de la imagen del icono
        saves: 0, // Número inicial de guardados
        type: "pdf", // pdf, link, download, video
        url: "https://tu-url.com/recurso.pdf", // URL real del recurso
        downloadSize: "2.5 MB", // Solo para type: "download"
        tags: ["Tag1", "Tag2", "Tag3"], // Tags para búsqueda
        author: "Tu Nombre",
        date: "2024-12-07"
    },
    // ... más recursos
];
```

### Opción 2: Conectar con Backend

Para una solución más robusta, puedes:

1. **Crear una API REST** que devuelva los recursos
2. **Modificar script.js** para cargar datos dinámicamente:

```javascript
// Reemplaza el array resourcesData con:
let resourcesData = [];

async function loadResources() {
    try {
        const response = await fetch('https://tu-api.com/resources');
        resourcesData = await response.json();
        renderResources();
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

// Llama a loadResources() al cargar la página
window.addEventListener('load', loadResources);
```

### Opción 3: Usar JSON Local

1. Crea un archivo `resources.json`:

```json
[
    {
        "id": 1,
        "title": "Mi Recurso",
        "category": "Guides",
        "description": "Descripción",
        "icon": "url_icono",
        "saves": 0,
        "type": "pdf",
        "url": "https://ejemplo.com/archivo.pdf",
        "tags": ["tutorial", "guía"],
        "author": "Autor",
        "date": "2024-12-07"
    }
]
```

2. Carga el JSON en `script.js`:

```javascript
fetch('resources.json')
    .then(response => response.json())
    .then(data => {
        resourcesData = data;
        renderResources();
    });
```

## 🎯 Ejemplos de URLs Reales

### PDFs
```javascript
{
    type: "pdf",
    url: "https://www.ejemplo.com/guia.pdf"
}
```

### Links a GitHub
```javascript
{
    type: "link",
    url: "https://github.com/usuario/repositorio"
}
```

### Descargas Directas
```javascript
{
    type: "download",
    url: "https://releases.ejemplo.com/archivo.zip",
    downloadSize: "15.3 MB"
}
```

### Videos de YouTube
```javascript
{
    type: "video",
    url: "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:

```css
:root {
    --xp-blue: #003399;
    --xp-light-blue: #6BA8FF;
    /* ... más colores */
}
```

### Agregar Más Categorías
1. Agrega la categoría en el sidebar (HTML)
2. Actualiza los filtros en `script.js`
3. Agrega recursos con esa categoría

### Cambiar Iconos
Usa iconos de:
- https://win98icons.alexmeub.com/
- O sube tus propios iconos

## 🚀 Características Interactivas

- ✅ Búsqueda en tiempo real
- ✅ Favoritos persistentes (localStorage)
- ✅ Filtros por categoría
- ✅ Ventanas arrastrables
- ✅ Efectos de sonido
- ✅ Animaciones suaves
- ✅ Reloj en tiempo real
- ✅ Validación de formularios
- ✅ Notificaciones
- ✅ Badges de tipo de recurso
- ✅ Responsive design

## 📱 Compatibilidad

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Móviles (responsive)

## 🐛 Solución de Problemas

### Los sonidos no funcionan
- Los navegadores bloquean audio automático
- El usuario debe interactuar primero con la página

### Los favoritos no se guardan
- Verifica que localStorage esté habilitado
- Algunos navegadores en modo incógnito bloquean localStorage

### Las búsquedas no funcionan
- Asegúrate de que el array `resourcesData` esté correctamente definido
- Verifica que los IDs sean únicos

## 📄 Licencia

Proyecto de código abierto. Úsalo libremente para tus proyectos.

---

**¡Disfruta tu biblioteca retro! 🎮**
