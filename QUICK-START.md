# 🚀 Inicio Rápido - 404 Retro Library

## ⚡ En 3 Pasos

### 1️⃣ Abre el Proyecto
```bash
# Simplemente abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Luego visita: http://localhost:8000
```

### 2️⃣ Agrega Recursos Reales
Abre `script.js` y reemplaza el array `resourcesData` con el contenido de `resources-example.js`

**O copia este ejemplo:**
```javascript
const resourcesData = [
    {
        id: 1,
        title: "Mi Primer Recurso",
        category: "Guides",
        description: "Una guía increíble sobre algo",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 0,
        type: "pdf",
        url: "https://ejemplo.com/guia.pdf",
        tags: ["tutorial", "guía"],
        author: "Tu Nombre",
        date: "2024-12-07"
    }
];
```

### 3️⃣ ¡Listo! 🎉
Recarga la página y disfruta de tu biblioteca retro completamente funcional.

---

## 🎯 Características Principales

✅ **Búsqueda** - Escribe en el campo de búsqueda  
✅ **Favoritos** - Haz clic en "SAVE ⭐"  
✅ **Filtros** - Haz clic en las categorías del sidebar  
✅ **Tipos** - Soporta PDF, Links, Descargas y Videos  
✅ **Formulario** - Envía nuevos recursos desde submit.html  

---

## 📁 Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página principal |
| `script.js` | Toda la funcionalidad |
| `style.css` | Estilos Windows XP |
| `config.js` | Configuración |
| `resources-example.js` | 20 recursos reales |
| `README.md` | Documentación completa |
| `demo.html` | Demo interactiva |

---

## 🎨 Personalización Rápida

### Cambiar Colores
Edita `style.css` líneas 1-15:
```css
:root {
    --xp-blue: #003399;        /* Tu color aquí */
    --xp-light-blue: #6BA8FF;  /* Tu color aquí */
}
```

### Cambiar Nombre del Sitio
Busca "404 Retro Library" en todos los HTML y reemplázalo.

### Desactivar Sonidos
En `config.js`:
```javascript
features: {
    enableSounds: false
}
```

---

## 🐛 Solución Rápida de Problemas

**❌ Los favoritos no se guardan**
- Verifica que localStorage esté habilitado en tu navegador

**❌ La búsqueda no funciona**
- Asegúrate de que `resourcesData` esté definido en `script.js`

**❌ Los sonidos no suenan**
- Los navegadores bloquean audio automático, interactúa primero con la página

**❌ Las imágenes no cargan**
- Verifica tu conexión a internet (los iconos vienen de win98icons.alexmeub.com)

---

## 📚 Más Información

- **Documentación completa**: Lee `README.md`
- **Lista de cambios**: Lee `CHANGELOG.md`
- **Ejemplos de código**: Abre `resources-example.js`
- **Demo interactiva**: Abre `demo.html`

---

## 💡 Tips Rápidos

1. **Doble clic** en los headers del sidebar para mostrar todos los recursos
2. **Presiona Enter** en el campo de búsqueda para buscar
3. **Arrastra** las ventanas emergentes para moverlas
4. Los **favoritos persisten** entre sesiones
5. Cada recurso tiene un **badge de tipo** (PDF, LINK, etc.)

---

## 🎮 ¡Empieza Ahora!

```bash
# 1. Abre index.html
# 2. Prueba la búsqueda
# 3. Guarda algunos favoritos
# 4. Explora las categorías
# 5. Envía un recurso desde submit.html
# 6. ¡Disfruta! 🎉
```

---

**¿Necesitas ayuda?** Lee el README.md completo o revisa los comentarios en el código.

**¿Quieres contribuir?** El código está listo para expandirse. Agrega más categorías, recursos o características.

---

Made with ❤️ in retro style
