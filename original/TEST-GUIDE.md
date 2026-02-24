# 🧪 Guía de Pruebas - 404 Retro Library

## ✅ Lista de Verificación

### 1. Página Principal (index.html)

#### Búsqueda
- [ ] Escribe "CSS" en el campo de búsqueda
- [ ] Presiona Enter o haz clic en "Search"
- [ ] Verifica que solo aparezcan recursos relacionados con CSS
- [ ] Limpia la búsqueda y verifica que aparezcan todos los recursos

#### Favoritos
- [ ] Haz clic en "SAVE ⭐" en cualquier tarjeta
- [ ] Verifica que cambie a "SAVED ✓"
- [ ] Recarga la página
- [ ] Verifica que el recurso siga marcado como guardado

#### Filtros de Categoría
- [ ] Haz clic en "Terminals" en el sidebar
- [ ] Verifica que solo aparezcan recursos de esa categoría
- [ ] Haz clic en otra categoría
- [ ] Doble clic en el header del panel para mostrar todo

#### Botón OPEN
- [ ] Haz clic en "OPEN" en cualquier tarjeta
- [ ] Verifica que navegue a resource.html con el ID correcto
- [ ] Verifica que se muestre la información completa del recurso

#### Ventana Emergente
- [ ] Haz clic en una tarjeta (no en los botones)
- [ ] Verifica que aparezca la ventana emergente
- [ ] Arrastra la ventana por el header
- [ ] Haz clic en "Open Resource"
- [ ] Verifica que navegue a la página de detalles
- [ ] Cierra la ventana con la X

#### Enlace Submit
- [ ] Verifica que "Submit Resource" aparezca en el sidebar
- [ ] Haz clic en el enlace
- [ ] Verifica que navegue a submit.html

### 2. Página de Detalles (resource.html)

#### Carga de Datos
- [ ] Abre index.html
- [ ] Haz clic en "OPEN" en cualquier recurso
- [ ] Verifica que se cargue la información completa:
  - Título
  - Icono
  - Descripción
  - Categoría
  - Autor y fecha
  - Tags
  - Badge de tipo (PDF, LINK, etc.)
  - URL del recurso

#### Botones de Acción
- [ ] Haz clic en el botón principal (📄 Open PDF, 🔗 Visit Link, etc.)
- [ ] Verifica que se abra el recurso en nueva ventana
- [ ] Verifica que aparezca una notificación

#### Favoritos en Detalles
- [ ] Haz clic en "Add to Favorites ⭐"
- [ ] Verifica que cambie a "SAVED ✓"
- [ ] Verifica que aparezca una notificación

#### Navegación
- [ ] Haz clic en "← Back"
- [ ] Verifica que vuelva a la página anterior
- [ ] Usa los enlaces del sidebar para navegar

#### URL Directa
- [ ] Abre: `resource.html?id=1`
- [ ] Verifica que cargue el recurso con ID 1
- [ ] Abre: `resource.html?id=999`
- [ ] Verifica que muestre "Resource Not Found"
- [ ] Abre: `resource.html` (sin ID)
- [ ] Verifica que muestre "Resource Not Found"

### 3. Página de Envío (submit.html)

#### Validación de Formulario
- [ ] Haz clic en "Upload Resource" sin llenar campos
- [ ] Verifica que aparezca mensaje de error
- [ ] Llena solo algunos campos
- [ ] Verifica que pida los campos faltantes

#### URL Inválida
- [ ] Escribe "no-es-una-url" en el campo URL
- [ ] Haz clic en "Upload Resource"
- [ ] Verifica que muestre error de URL inválida

#### Envío Exitoso
- [ ] Llena todos los campos correctamente
- [ ] Selecciona una categoría
- [ ] Escribe una URL válida (ej: https://ejemplo.com)
- [ ] Haz clic en "Upload Resource"
- [ ] Verifica que aparezca confirmación
- [ ] Verifica que pregunte si quieres enviar otro

#### Botón Cancelar
- [ ] Llena algunos campos
- [ ] Haz clic en "Cancel"
- [ ] Verifica que pregunte si estás seguro
- [ ] Confirma y verifica que vuelva a index.html

### 4. Características Generales

#### Reloj
- [ ] Verifica que el reloj en el footer muestre la hora actual
- [ ] Espera 1 minuto
- [ ] Verifica que se actualice

#### Sonidos
- [ ] Haz clic en cualquier botón
- [ ] Verifica que suene el efecto de clic
- [ ] Abre una ventana emergente
- [ ] Verifica que suene el efecto de popup

#### Notificaciones
- [ ] Realiza cualquier acción (guardar, buscar, etc.)
- [ ] Verifica que aparezca notificación en esquina inferior derecha
- [ ] Verifica que desaparezca después de 2 segundos

#### Pantalla de Carga
- [ ] Recarga index.html
- [ ] Verifica que aparezca la pantalla de carga azul
- [ ] Verifica que la barra de progreso se llene
- [ ] Verifica que desaparezca al terminar

#### Responsive
- [ ] Reduce el tamaño de la ventana del navegador
- [ ] Verifica que el diseño se adapte
- [ ] Prueba en un dispositivo móvil si es posible

### 5. LocalStorage

#### Persistencia de Favoritos
- [ ] Guarda varios recursos en favoritos
- [ ] Cierra el navegador completamente
- [ ] Abre index.html nuevamente
- [ ] Verifica que los favoritos sigan guardados

#### Limpiar Datos
- [ ] Abre la consola del navegador (F12)
- [ ] Escribe: `localStorage.clear()`
- [ ] Presiona Enter
- [ ] Recarga la página
- [ ] Verifica que todos los favoritos se hayan borrado

### 6. Navegación Entre Páginas

#### Flujo Completo
- [ ] Inicia en index.html
- [ ] Busca un recurso
- [ ] Haz clic en OPEN
- [ ] Revisa los detalles en resource.html
- [ ] Haz clic en "← Back"
- [ ] Haz clic en "Submit Resource" en el sidebar
- [ ] Llena el formulario
- [ ] Cancela y vuelve al inicio
- [ ] Haz clic en "Browse All" (category.html)
- [ ] Filtra por categoría
- [ ] Abre un recurso

### 7. Tipos de Recursos

#### PDF
- [ ] Busca un recurso tipo PDF (ej: "Arch Install Guide")
- [ ] Verifica que tenga badge rojo "PDF"
- [ ] Abre el recurso
- [ ] Haz clic en "📄 Open PDF"
- [ ] Verifica que intente abrir el PDF

#### LINK
- [ ] Busca un recurso tipo LINK (ej: "ZSH Ultimate")
- [ ] Verifica que tenga badge azul "LINK"
- [ ] Abre el recurso
- [ ] Haz clic en "🔗 Visit Link"
- [ ] Verifica que abra el enlace

#### DOWNLOAD
- [ ] Busca un recurso tipo DOWNLOAD (ej: "WinXP CSS Kit")
- [ ] Verifica que tenga badge verde "DOWNLOAD"
- [ ] Abre el recurso
- [ ] Verifica que muestre el tamaño del archivo
- [ ] Haz clic en "💾 Download"

#### VIDEO
- [ ] Busca un recurso tipo VIDEO (ej: "Vaporwave Mix")
- [ ] Verifica que tenga badge morado "VIDEO"
- [ ] Abre el recurso
- [ ] Haz clic en "🎥 Watch Video"

## 🐛 Problemas Comunes

### Los sonidos no funcionan
**Solución**: Interactúa primero con la página (haz clic en cualquier lugar)

### Los favoritos no se guardan
**Solución**: Verifica que localStorage esté habilitado en tu navegador

### Las imágenes no cargan
**Solución**: Verifica tu conexión a internet

### La búsqueda no funciona
**Solución**: Asegúrate de que resourcesData esté definido en script.js

### Resource.html muestra "Loading..."
**Solución**: Verifica que el ID en la URL sea válido y que resourcesData contenga ese recurso

## ✅ Resultado Esperado

Si todas las pruebas pasan:
- ✅ La búsqueda funciona correctamente
- ✅ Los favoritos se guardan y persisten
- ✅ Los filtros muestran los recursos correctos
- ✅ La navegación entre páginas funciona
- ✅ Los detalles de recursos se cargan dinámicamente
- ✅ El formulario valida correctamente
- ✅ Las notificaciones aparecen
- ✅ El reloj se actualiza
- ✅ Los sonidos funcionan
- ✅ Todo es interactivo y funcional

## 🎉 ¡Proyecto Completamente Funcional!

Si todas las pruebas pasan, tu biblioteca retro está lista para usar con datos reales.

---

**Próximo paso**: Copia el contenido de `resources-example.js` en `script.js` para usar 20 recursos reales.
