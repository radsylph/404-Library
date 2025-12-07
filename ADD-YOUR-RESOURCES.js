// ========== PLANTILLA PARA AGREGAR TUS RECURSOS ==========
// ⚠️ IMPORTANTE: Este archivo es solo una PLANTILLA de referencia
// NO lo ejecutes directamente. Copia los recursos que necesites
// y pégalos en script.js, dentro del array resourcesData

// Los "errores" que ves son normales porque este archivo contiene
// solo fragmentos de código para copiar, no código ejecutable completo.

// EJEMPLO 1: PDF Real
{
    id: 21,
    title: "Git Cheat Sheet",
    category: "Guides",
    description: "Hoja de referencia rápida con todos los comandos de Git",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
    saves: 0,
    type: "pdf",
    url: "https://education.github.com/git-cheat-sheet-education.pdf",
    tags: ["git", "cheatsheet", "pdf", "comandos"],
    author: "GitHub Education",
    date: "2024-12-07"
},

// EJEMPLO 2: Link a GitHub
{
    id: 22,
    title: "Awesome Python",
    category: "Repositories",
    description: "Una lista curada de frameworks, librerías y recursos de Python",
    icon: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-0.png",
    saves: 0,
    type: "link",
    url: "https://github.com/vinta/awesome-python",
    tags: ["python", "github", "recursos", "lista"],
    author: "vinta",
    date: "2024-12-07"
},

// EJEMPLO 3: Descarga de Iconos
{
    id: 23,
    title: "Font Awesome Icons",
    category: "Customization",
    description: "Descarga gratuita de iconos Font Awesome para tus proyectos",
    icon: "https://win98icons.alexmeub.com/icons/png/paint_file-0.png",
    saves: 0,
    type: "download",
    url: "https://fontawesome.com/download",
    downloadSize: "Variable",
    tags: ["iconos", "font-awesome", "diseño", "descarga"],
    author: "Font Awesome",
    date: "2024-12-07"
},

// EJEMPLO 4: Video Tutorial
{
    id: 24,
    title: "JavaScript Crash Course",
    category: "Guides",
    description: "Curso intensivo de JavaScript para principiantes en 1 hora",
    icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
    saves: 0,
    type: "video",
    url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    tags: ["javascript", "tutorial", "video", "curso"],
    author: "Traversy Media",
    date: "2024-12-07"
},

// ========== PLANTILLA VACÍA PARA TUS RECURSOS ==========

// TU PDF
{
    id: 25, // Cambia el ID
    title: "Título de tu PDF",
    category: "Guides", // Cambia la categoría
    description: "Descripción de tu PDF",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
    saves: 0,
    type: "pdf",
    url: "https://ejemplo.com/tu-pdf.pdf", // ← CAMBIA ESTA URL
    tags: ["tag1", "tag2"],
    author: "Tu Nombre",
    date: "2024-12-07"
},

// TU LINK
{
    id: 26, // Cambia el ID
    title: "Título de tu Link",
    category: "Repositories", // Cambia la categoría
    description: "Descripción de tu link",
    icon: "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-0.png",
    saves: 0,
    type: "link",
    url: "https://ejemplo.com", // ← CAMBIA ESTA URL
    tags: ["tag1", "tag2"],
    author: "Tu Nombre",
    date: "2024-12-07"
},

// TU DESCARGA
{
    id: 27, // Cambia el ID
    title: "Título de tu Descarga",
    category: "Customization", // Cambia la categoría
    description: "Descripción de tu archivo descargable",
    icon: "https://win98icons.alexmeub.com/icons/png/floppy_drive_3_5-0.png",
    saves: 0,
    type: "download",
    url: "https://ejemplo.com/archivo.zip", // ← CAMBIA ESTA URL
    downloadSize: "10 MB", // ← Opcional
    tags: ["tag1", "tag2"],
    author: "Tu Nombre",
    date: "2024-12-07"
},

// TU VIDEO
{
    id: 28, // Cambia el ID
    title: "Título de tu Video",
    category: "Guides", // Cambia la categoría
    description: "Descripción de tu video",
    icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
    saves: 0,
    type: "video",
    url: "https://youtube.com/watch?v=ID", // ← CAMBIA ESTA URL
    tags: ["tag1", "tag2"],
    author: "Tu Nombre",
    date: "2024-12-07"
},

// ========== CURSOS GRATUITOS ==========

// CURSO 1: freeCodeCamp
{
    id: 29,
    title: "freeCodeCamp - Full Stack Development",
    category: "Courses",
    description: "Curso completo gratuito de desarrollo web full stack. Aprende HTML, CSS, JavaScript, React, Node.js y más",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
    saves: 0,
    type: "link",
    url: "https://www.freecodecamp.org/",
    tags: ["curso", "gratuito", "web", "javascript", "fullstack"],
    author: "freeCodeCamp",
    date: "2024-12-07"
},

// CURSO 2: The Odin Project
{
    id: 30,
    title: "The Odin Project - Web Development",
    category: "Courses",
    description: "Curso gratuito de desarrollo web con proyectos prácticos. Incluye HTML, CSS, JavaScript, Git, React y más",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-1.png",
    saves: 0,
    type: "link",
    url: "https://www.theodinproject.com/",
    tags: ["curso", "gratuito", "web", "proyectos", "javascript"],
    author: "The Odin Project",
    date: "2024-12-07"
},

// CURSO 3: CS50 Harvard
{
    id: 31,
    title: "CS50 - Introduction to Computer Science",
    category: "Courses",
    description: "Curso de introducción a la informática de Harvard. Gratuito y en español disponible",
    icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-3.png",
    saves: 0,
    type: "link",
    url: "https://cs50.harvard.edu/x/",
    tags: ["curso", "gratuito", "harvard", "cs", "programación"],
    author: "Harvard University",
    date: "2024-12-07"
},

// CURSO 4: MDN Web Docs
{
    id: 32,
    title: "MDN Learn Web Development",
    category: "Courses",
    description: "Guía completa de Mozilla para aprender desarrollo web desde cero",
    icon: "https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-1.png",
    saves: 0,
    type: "link",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    tags: ["curso", "gratuito", "web", "mozilla", "tutorial"],
    author: "Mozilla",
    date: "2024-12-07"
},

// CURSO 5: Codecademy Free
{
    id: 33,
    title: "Codecademy - Cursos Gratuitos",
    category: "Courses",
    description: "Cursos interactivos gratuitos de programación en múltiples lenguajes",
    icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-3.png",
    saves: 0,
    type: "link",
    url: "https://www.codecademy.com/catalog/subject/all",
    tags: ["curso", "gratuito", "interactivo", "programación"],
    author: "Codecademy",
    date: "2024-12-07"
},

// CURSO 6: Khan Academy
{
    id: 34,
    title: "Khan Academy - Computer Programming",
    category: "Courses",
    description: "Cursos gratuitos de programación y ciencias de la computación",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-2.png",
    saves: 0,
    type: "link",
    url: "https://www.khanacademy.org/computing/computer-programming",
    tags: ["curso", "gratuito", "programación", "educación"],
    author: "Khan Academy",
    date: "2024-12-07"
},

// CURSO 7: Coursera Free
{
    id: 35,
    title: "Coursera - Cursos Gratuitos",
    category: "Courses",
    description: "Miles de cursos gratuitos de universidades de todo el mundo",
    icon: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-2.png",
    saves: 0,
    type: "link",
    url: "https://www.coursera.org/courses?query=free",
    tags: ["curso", "gratuito", "universidad", "certificado"],
    author: "Coursera",
    date: "2024-12-07"
},

// CURSO 8: edX Free
{
    id: 36,
    title: "edX - Cursos Gratuitos",
    category: "Courses",
    description: "Cursos gratuitos de MIT, Harvard y otras universidades prestigiosas",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-3.png",
    saves: 0,
    type: "link",
    url: "https://www.edx.org/",
    tags: ["curso", "gratuito", "mit", "harvard", "universidad"],
    author: "edX",
    date: "2024-12-07"
},

// TU CURSO PERSONALIZADO
{
    id: 37, // Cambia el ID
    title: "Título de tu Curso",
    category: "Courses",
    description: "Descripción de tu curso gratuito",
    icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
    saves: 0,
    type: "link",
    url: "https://ejemplo.com/tu-curso", // ← CAMBIA ESTA URL
    tags: ["curso", "gratuito", "tag1"],
    author: "Tu Nombre",
    date: "2024-12-07"
}

// ========== INSTRUCCIONES ==========
/*
1. Copia el recurso que quieras agregar (PDF, LINK, DOWNLOAD o VIDEO)
2. Abre script.js
3. Busca: const resourcesData = [
4. Pega tu recurso dentro del array (antes del último corchete ])
5. Asegúrate de poner una coma (,) después del recurso anterior
6. Cambia:
   - id: Usa un número único
   - title: Título de tu recurso
   - category: Categoría apropiada
   - description: Descripción completa
   - url: ← LA URL REAL DE TU RECURSO
   - tags: Tags relevantes
   - author: Tu nombre
7. Guarda el archivo
8. Recarga index.html en tu navegador
9. ¡Tu recurso aparecerá en la biblioteca!

CATEGORÍAS DISPONIBLES:
- Guides (Guías y tutoriales)
- Components (Componentes y frameworks)
- Terminals (Configuraciones de terminal)
- Repositories (Repositorios de código)
- Customization (Personalización y diseño)
- Systems (Sistemas operativos)
- User Uploads (Subidas de usuarios)
- Courses (Cursos gratuitos) ← NUEVA CATEGORÍA

TIPOS DISPONIBLES:
- pdf (para PDFs)
- link (para enlaces web)
- download (para archivos descargables)
- video (para videos de YouTube, etc.)

NOTA: Todos los ejemplos de cursos son REALES y GRATUITOS.
Puedes copiarlos directamente en script.js
*/
