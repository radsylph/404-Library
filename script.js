// ========== DATA STRUCTURE ==========
// This structure allows easy addition of real resources with PDFs, links, etc.
const resourcesData = [
    {
        id: 1,
        title: "WinXP CSS Kit",
        category: "Components",
        description: "Complete framework for building Windows XP interfaces.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 1024,
        type: "download", // download, link, pdf, video
        url: "https://github.com/khang-nd/7.css",
        downloadSize: "1.2 MB",
        tags: ["CSS", "Framework", "UI"],
        author: "PixelMaster",
        date: "2024-10-24"
    },
    {
        id: 2,
        title: "ZSH Ultimate",
        category: "Terminals",
        description: "The ultimate configuration for ZSH users. Oh-My-Zsh ready.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 856,
        type: "link",
        url: "https://github.com/ohmyzsh/ohmyzsh",
        tags: ["Terminal", "ZSH", "Config"],
        author: "ShellMaster",
        date: "2024-09-15"
    },
    {
        id: 3,
        title: "Arch Install Guide",
        category: "Guides",
        description: "Step-by-step guide to installing Arch Linux manually.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 2301,
        type: "pdf",
        url: "#", // Replace with actual PDF URL
        tags: ["Linux", "Tutorial", "Installation"],
        author: "LinuxGuru",
        date: "2024-11-01"
    },
    {
        id: 4,
        title: "Pixel Icons Pack",
        category: "Customization",
        description: "500+ free pixel art icons for your retro projects.",
        icon: "https://win98icons.alexmeub.com/icons/png/paint_file-0.png",
        saves: 542,
        type: "download",
        url: "https://win98icons.alexmeub.com/",
        downloadSize: "5.8 MB",
        tags: ["Icons", "Graphics", "Pixel Art"],
        author: "PixelArtist",
        date: "2024-08-20"
    },
    {
        id: 5,
        title: "Clippy.js",
        category: "Repositories",
        description: "Add Clippy to any website with this simple JS library.",
        icon: "https://win98icons.alexmeub.com/icons/png/msagent-0.png",
        saves: 9999,
        type: "link",
        url: "https://www.smore.com/clippy-js",
        tags: ["JavaScript", "Library", "Fun"],
        author: "RetroDevs",
        date: "2024-07-10"
    },
    {
        id: 6,
        title: "Vaporwave Mix",
        category: "User Uploads",
        description: "2 hour mix of the best vaporwave tracks for coding.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 128,
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        tags: ["Music", "Vaporwave", "Playlist"],
        author: "MusicLover",
        date: "2024-12-01"
    },
    // ========== 🎓 CURSOS GRATUITOS ==========
    // Frontend
    {
        id: 7,
        title: "MDN Web Docs - HTML/CSS/JS",
        category: "Courses",
        description: "La documentación más completa y oficial para aprender HTML, CSS y JavaScript. Guías, tutoriales y referencias.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 5420,
        type: "link",
        url: "https://developer.mozilla.org/",
        tags: ["Frontend", "HTML", "CSS", "JavaScript", "Documentación"],
        author: "Mozilla",
        date: "2024-12-07"
    },
    {
        id: 8,
        title: "Curso JavaScript Completo",
        category: "Courses",
        description: "Curso completo de JavaScript en español por freeCodeCamp. Aprende desde cero hasta nivel avanzado.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 8934,
        type: "video",
        url: "https://www.youtube.com/watch?v=jS4aFq5-91M",
        tags: ["Frontend", "JavaScript", "Curso", "Español", "Video"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    {
        id: 9,
        title: "Curso HTML/CSS desde Cero",
        category: "Courses",
        description: "Aprende HTML y CSS desde cero con este curso completo de freeCodeCamp. Ideal para principiantes.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 7621,
        type: "video",
        url: "https://www.youtube.com/watch?v=mU6anWqZJcc",
        tags: ["Frontend", "HTML", "CSS", "Curso", "Principiantes"],
        author: "freeCodeCamp Español",
        date: "2024-12-07"
    },
    // Backend
    {
        id: 10,
        title: "Curso Node.js Completo",
        category: "Courses",
        description: "Curso completo de Node.js por freeCodeCamp. Aprende backend con JavaScript.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 6543,
        type: "video",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        tags: ["Backend", "Node.js", "JavaScript", "Servidor", "API"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    {
        id: 11,
        title: "Curso Python Completo (4 horas)",
        category: "Courses",
        description: "Aprende Python desde cero en 4 horas. Curso completo y gratuito de freeCodeCamp.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 12450,
        type: "video",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        tags: ["Backend", "Python", "Programación", "Curso", "Principiantes"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    // Bases de Datos
    {
        id: 12,
        title: "SQL para Principiantes",
        category: "Courses",
        description: "Aprende SQL desde cero con Khan Academy. Curso interactivo y gratuito de bases de datos.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 4532,
        type: "link",
        url: "https://www.khanacademy.org/computing/computer-programming/sql",
        tags: ["Bases de Datos", "SQL", "Khan Academy", "Interactivo"],
        author: "Khan Academy",
        date: "2024-12-07"
    },
    {
        id: 13,
        title: "PostgreSQL Tutorial Completo",
        category: "Courses",
        description: "Tutorial completo de PostgreSQL. Aprende una de las bases de datos más populares.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 3421,
        type: "link",
        url: "https://www.postgresqltutorial.com/",
        tags: ["Bases de Datos", "PostgreSQL", "SQL", "Tutorial"],
        author: "PostgreSQL Tutorial",
        date: "2024-12-07"
    },
    // DevOps
    {
        id: 14,
        title: "Docker para Principiantes",
        category: "Courses",
        description: "Curso completo de Docker por freeCodeCamp. Aprende contenedores desde cero.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 5678,
        type: "video",
        url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        tags: ["DevOps", "Docker", "Contenedores", "Curso"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    },
    {
        id: 15,
        title: "Curso Linux Completo",
        category: "Courses",
        description: "Aprende Linux desde cero con este curso completo de freeCodeCamp. Terminal, comandos y más.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 8901,
        type: "video",
        url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak",
        tags: ["DevOps", "Linux", "Terminal", "Comandos", "Sistema Operativo"],
        author: "freeCodeCamp",
        date: "2024-12-07"
    }
];

// LocalStorage for saved resources
let savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];

// Loading Screen
window.addEventListener('load', () => {
    const bar = document.getElementById('loadingBar');
    const screen = document.getElementById('loadingScreen');

    // Only run if loading screen exists
    if (bar && screen) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    screen.style.opacity = '0';
                    screen.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        screen.style.display = 'none';
                        playSound('popup');
                    }, 500);
                }, 500);
            } else {
                width += Math.random() * 10;
                if (width > 100) width = 100;
                bar.style.width = width + '%';
            }
        }, 200);
    }

    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);

    // Load saved resources count
    updateSaveCounts();
});

// ========== UTILITY FUNCTIONS ==========
// Update clock in footer
function updateClock() {
    const timeEl = document.querySelector('.time');
    if (timeEl) {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        timeEl.textContent = `${hours}:${minutes} ${ampm}`;
    }
}

// Sound Effects
const clickSound = document.getElementById('clickSound');
const popupSound = document.getElementById('popupSound');

function playSound(type) {
    // Only play if sound elements exist
    if (type === 'click' && clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log('Audio play failed', e));
    } else if (type === 'popup' && popupSound) {
        popupSound.currentTime = 0;
        popupSound.play().catch(e => console.log('Audio play failed', e));
    }
}

// Update save counts from localStorage
function updateSaveCounts() {
    document.querySelectorAll('.xp-card').forEach((card) => {
        const id = parseInt(card.dataset.id);
        if (!id) return;

        const isSaved = savedResources.includes(id);
        const saveBtn = card.querySelector('.save-btn');
        if (saveBtn) {
            saveBtn.textContent = isSaved ? 'SAVED ✓' : 'SAVE ⭐';
            saveBtn.style.background = isSaved ?
                'linear-gradient(to bottom, #FFE88C 0%, #FFCC00 100%)' :
                'linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%)';

            if (isSaved) saveBtn.classList.add('saved');
            else saveBtn.classList.remove('saved');
        }
    });
}

// Add click sounds to buttons and cards
document.querySelectorAll('button, .xp-card, .sidebar-link').forEach(el => {
    el.addEventListener('mousedown', () => playSound('click'));
});

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.panel-toggle');

if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('collapsed');
    });
}

// Draggable Window Logic
const windowEl = document.getElementById('resourceWindow');
const headerEl = document.getElementById('windowHeader');

if (windowEl && headerEl) {
    let isDragging = false;
    let offsetX, offsetY;

    headerEl.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowEl.offsetLeft;
        offsetY = e.clientY - windowEl.offsetTop;
        windowEl.style.zIndex = 1001;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            windowEl.style.left = (e.clientX - offsetX) + 'px';
            windowEl.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function closeWindow() {
    const windowEl = document.getElementById('resourceWindow');
    if (windowEl) {
        windowEl.style.display = 'none';
    }
}

// Card Click -> Open Window (but not when clicking buttons)
document.querySelectorAll('.xp-card').forEach((card) => {
    card.addEventListener('click', (e) => {
        // Don't open window if clicking on a button
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }

        const windowEl = document.getElementById('resourceWindow');
        if (!windowEl) return;

        const id = parseInt(card.dataset.id);
        const resource = resourcesData.find(r => r.id === id);
        if (!resource) return;

        // Populate Window
        const winTitle = document.getElementById('winTitle');
        const winHeading = document.getElementById('winHeading');
        const winDesc = document.getElementById('winDesc');
        const winCategory = document.getElementById('winCategory');
        const winImage = document.getElementById('winImage');
        const winIcon = document.getElementById('winIcon');
        const winTags = document.getElementById('winTags');

        if (winTitle) winTitle.innerText = resource.title;
        if (winHeading) winHeading.innerText = resource.title;
        if (winDesc) winDesc.innerText = resource.description;
        if (winCategory) winCategory.innerText = resource.category;
        if (winImage) winImage.src = resource.icon;
        if (winIcon) winIcon.src = resource.icon;

        // Add tags
        if (winTags && resource.tags) {
            winTags.innerHTML = resource.tags.map(tag =>
                `<span style="background: #E6E6E6; padding: 3px 8px; border-radius: 3px; font-size: 10px;">${tag}</span>`
            ).join('');
        }

        // Update "Open Resource" button to navigate to detail page
        const openBtn = windowEl.querySelector('.window-body button');
        if (openBtn) {
            openBtn.onclick = () => {
                window.location.href = 'resource.html?id=' + resource.id;
            };
        }

        // Show Window
        windowEl.style.display = 'flex';
        windowEl.style.top = '50%';
        windowEl.style.left = '50%';
        windowEl.style.transform = 'translate(-50%, -50%)'; // Ensure centering works nicely

        playSound('popup');
    });
});

// ========== SAVE FUNCTIONALITY ==========
document.querySelectorAll('.xp-card .save-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const card = btn.closest('.xp-card');
        const id = parseInt(card.dataset.id);
        if (!id) return;

        const resource = resourcesData.find(r => r.id === id);
        if (!resource) return;

        const isSaved = savedResources.includes(id);

        if (isSaved) {
            // Remove from saved
            savedResources = savedResources.filter(savedId => savedId !== id);
            btn.textContent = 'SAVE ⭐';
            btn.style.background = 'linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%)';
            btn.classList.remove('saved');
            showNotification('Removed from favorites');
        } else {
            // Add to saved
            savedResources.push(id);
            btn.textContent = 'SAVED ✓';
            btn.style.background = 'linear-gradient(to bottom, #FFE88C 0%, #FFCC00 100%)';
            btn.classList.add('saved');
            showNotification('Added to favorites!');
        }

        localStorage.setItem('savedResources', JSON.stringify(savedResources));
        playSound('click');

        // If we are currently viewing favorites, refresh the view by triggering a click on the active filter if it's favorites
        const activeLink = document.querySelector('.sidebar-link.active');
        if (activeLink && (activeLink.textContent.toLowerCase().includes('favorit') || activeLink.textContent.includes('favorit'))) {
            // Re-trigger filtering to hide removed item instantly
            activeLink.click();
        }
    });
});

// OPEN buttons - navigate to resource detail page
document.querySelectorAll('.xp-card .xp-button').forEach((btn) => {
    if (btn.textContent.trim() === 'OPEN') {
        const card = btn.closest('.xp-card');
        const id = parseInt(card.dataset.id);

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!id) {
                window.location.href = 'resource.html';
                return;
            }

            // Navigate to resource detail page
            playSound('click');
            window.location.href = 'resource.html?id=' + id;
        });
    }
});

// Category Filtering
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const linkText = link.textContent.trim().toLowerCase();

        // Skip navigation links (Home, Submit, etc.)
        if (linkText.includes('home') || linkText.includes('submit') ||
            linkText.includes('browse') || linkText.includes('all resources')) {
            return; // Let default navigation happen
        }

        // For category links, filter cards
        e.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        const cards = document.querySelectorAll('.xp-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const id = parseInt(card.dataset.id);
            const resource = resourcesData.find(r => r.id === id);

            // Should be visible defaults
            let shouldShow = false;

            if (resource) {
                const category = resource.category.toLowerCase();
                const title = resource.title.toLowerCase();

                // Match categories
                if (linkText.includes('course') && category.includes('course')) shouldShow = true;
                if (linkText.includes('curso') && category.includes('course')) shouldShow = true;
                if (linkText.includes('system') && category.includes('system')) shouldShow = true;
                if (linkText.includes('terminal') && category.includes('terminal')) shouldShow = true;
                if (linkText.includes('guide') && category.includes('guide')) shouldShow = true;
                if (linkText.includes('guía') && category.includes('guide')) shouldShow = true;
                if (linkText.includes('repositor') && category.includes('repositor')) shouldShow = true;
                if (linkText.includes('component') && category.includes('component')) shouldShow = true;
                if (linkText.includes('customiz') && category.includes('customiz')) shouldShow = true;
                if (linkText.includes('personaliz') && category.includes('customiz')) shouldShow = true;
                if (linkText.includes('upload') && category.includes('user upload')) shouldShow = true;
                if (linkText.includes('subida') && category.includes('user upload')) shouldShow = true;

                // Special filters
                if (linkText.includes('favorit')) shouldShow = savedResources.includes(id);
                if (linkText.includes('trash') || linkText.includes('basura')) shouldShow = false; // Trash is empty for now
            }

            if (shouldShow) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.3s ease-in-out';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show message if no cards found
        const grid = document.querySelector('.resource-grid');
        let noResultsMsg = document.getElementById('noResultsMsg');

        if (visibleCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMsg';
                noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 40px; background: #FFFFE1; border: 1px solid #F2963D; border-radius: 3px; font-size: 14px; color: #003399;';
                noResultsMsg.innerHTML = '⚠️ No resources found in this category.';
                grid.appendChild(noResultsMsg);
            } else {
                noResultsMsg.innerHTML = '⚠️ No resources found in this category.';
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }

        playSound('click');
    });
});

// ========== SEARCH FUNCTIONALITY ==========
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search-wrapper .xp-button');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.xp-card');
    let visibleCount = 0;

    if (!query) {
        // Show all if empty
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
        });
        removeNoResultsMessage();
        return;
    }

    cards.forEach((card, index) => {
        const resource = resourcesData[index];
        if (!resource) return;

        const searchableText = `${resource.title} ${resource.description} ${resource.category} ${resource.tags.join(' ')}`.toLowerCase();

        if (searchableText.includes(query)) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0) {
        showNoResultsMessage(`No results found for "${query}"`);
    } else {
        removeNoResultsMessage();
    }

    playSound('click');
}

if (searchButton) {
    searchButton.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function showNoResultsMessage(message) {
    removeNoResultsMessage();
    const grid = document.querySelector('.resource-grid');
    if (!grid) return;

    const noResultsMsg = document.createElement('div');
    noResultsMsg.id = 'noResultsMsg';
    noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 40px; background: #FFFFE1; border: 1px solid #F2963D; border-radius: 3px; font-size: 14px; color: #003399;';
    noResultsMsg.innerHTML = `⚠️ ${message}`;
    grid.appendChild(noResultsMsg);
}

function removeNoResultsMessage() {
    const noResultsMsg = document.getElementById('noResultsMsg');
    if (noResultsMsg) noResultsMsg.remove();
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message) {
    // Remove existing notification
    const existing = document.getElementById('xpNotification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'xpNotification';
    notification.style.cssText = `
        position: fixed;
        bottom: 50px;
        right: 20px;
        background: linear-gradient(to bottom, #F8F8F8 0%, #ECE9D8 100%);
        border: 1px solid #003399;
        border-radius: 3px;
        padding: 10px 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: var(--font-main);
        font-size: 12px;
        color: #003399;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// "Show All" functionality - click on panel headers to show all
document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('dblclick', () => {
        const cards = document.querySelectorAll('.xp-card');
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
        });

        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

        // Clear search
        if (searchInput) searchInput.value = '';
        removeNoResultsMessage();

        playSound('popup');
    });
});


// ========== FORM SUBMISSION ==========
const submitForm = document.querySelector('form');
if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            title: submitForm.querySelector('input[type="text"]').value,
            category: submitForm.querySelector('select').value,
            description: submitForm.querySelector('textarea').value,
            url: submitForm.querySelectorAll('input[type="text"]')[1].value,
            screenshot: submitForm.querySelector('input[type="file"]').files[0]?.name || 'No file'
        };

        // Validation
        if (!formData.title || !formData.category || formData.category === 'Select a category...' || !formData.description || !formData.url) {
            showNotification('⚠️ Please fill all required fields!');
            playSound('popup');
            return;
        }

        // URL validation
        try {
            new URL(formData.url);
        } catch {
            showNotification('⚠️ Please enter a valid URL!');
            playSound('popup');
            return;
        }

        // Success
        playSound('popup');
        showNotification('✓ Resource submitted successfully!');

        // Show success dialog
        setTimeout(() => {
            if (confirm('Your resource has been submitted for review!\n\nWould you like to submit another resource?')) {
                submitForm.reset();
            } else {
                window.location.href = 'index.html';
            }
        }, 500);
    });

    // Cancel button
    const cancelBtn = submitForm.querySelector('button[type="button"]');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to cancel? All data will be lost.')) {
                window.location.href = 'index.html';
            }
        });
    }
}

// ========== RESOURCE DETAIL PAGE ==========
// Check if we're on resource.html and load data from URL params
if (window.location.pathname.includes('resource.html')) {
    window.addEventListener('load', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const resourceId = parseInt(urlParams.get('id'));

        if (resourceId) {
            const resource = resourcesData.find(r => r.id === resourceId);
            if (resource) {
                loadResourceDetails(resource);
            } else {
                showResourceNotFound();
            }
        } else {
            showResourceNotFound();
        }
    });
}

function loadResourceDetails(resource) {
    // Update page title
    document.title = `404 Retro Library - ${resource.title}`;

    // Get content container
    const contentDiv = document.getElementById('resourceContent');
    if (!contentDiv) return;

    // Check if resource is saved
    const isSaved = savedResources.includes(resource.id);

    // Get type badge
    const typeBadge = getTypeBadge(resource.type);

    // Build the HTML
    contentDiv.innerHTML = `
        <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="min-width: 200px; height: 150px; display: flex; align-items: center; justify-content: center; border: 2px solid #003399; background: white;">
                <img src="${resource.icon}" alt="${resource.title}" style="max-width: 128px; max-height: 128px;">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <h1 style="margin: 0; color: #003399; font-size: 20px;">${resource.title}</h1>
                    ${typeBadge}
                </div>
                <div style="font-size: 11px; color: #666; margin-bottom: 15px;">
                    Uploaded by: <strong>${resource.author}</strong> | 
                    Date: <strong>${resource.date}</strong> | 
                    Category: <strong>${resource.category}</strong>
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="xp-button save-btn" onclick="openResourceUrl('${resource.url}', '${resource.type}')" style="padding: 6px 15px; font-weight: bold;">
                        ${getActionButtonText(resource.type)}
                    </button>
                    <button class="xp-button" onclick="toggleResourceFavorite(${resource.id})" id="favBtn-${resource.id}" style="padding: 6px 15px;">
                        ${isSaved ? 'SAVED ✓' : 'Add to Favorites ⭐'}
                    </button>
                    <button class="xp-button" onclick="window.history.back()" style="padding: 6px 15px;">
                        ← Back
                    </button>
                </div>
            </div>
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px;">Description</h3>
            <p style="font-size: 12px; line-height: 1.5; margin-bottom: 15px;">
                ${resource.description}
            </p>
            ${resource.downloadSize ? `<p style="font-size: 12px;"><strong>Size:</strong> ${resource.downloadSize}</p>` : ''}
            ${resource.tags && resource.tags.length > 0 ? `
                <div style="margin-top: 15px;">
                    <strong style="font-size: 12px;">Tags:</strong>
                    <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px;">
                        ${resource.tags.map(tag => `<span style="background: #E6E6E6; padding: 3px 8px; border-radius: 3px; font-size: 11px;">${tag}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px;">Resource Information</h3>
            <table style="width: 100%; font-size: 12px;">
                <tr>
                    <td style="padding: 5px; font-weight: bold; width: 150px;">Type:</td>
                    <td style="padding: 5px;">${resource.type.toUpperCase()}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Category:</td>
                    <td style="padding: 5px;">${resource.category}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Author:</td>
                    <td style="padding: 5px;">${resource.author}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Date Added:</td>
                    <td style="padding: 5px;">${resource.date}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Times Saved:</td>
                    <td style="padding: 5px;">${resource.saves.toLocaleString()}</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">URL:</td>
                    <td style="padding: 5px;"><a href="${resource.url}" target="_blank" style="color: #003399; word-break: break-all;">${resource.url}</a></td>
                </tr>
            </table>
        </div>

        <div style="background: white; padding: 15px; border: 1px solid #D1CFC4;">
            <h3 style="margin: 0 0 10px 0; color: #003399; font-size: 14px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                User Comments
            </h3>
            <div style="margin-bottom: 15px; border-bottom: 1px dotted #ccc; padding-bottom: 10px;">
                <div style="font-weight: bold; font-size: 11px; color: #003399;">RetroFan99 says:</div>
                <div style="font-size: 12px; margin-top: 5px;">This is exactly what I was looking for! Thanks for sharing.</div>
            </div>
            <div style="margin-bottom: 15px; border-bottom: 1px dotted #ccc; padding-bottom: 10px;">
                <div style="font-weight: bold; font-size: 11px; color: #003399;">WebDev2024 says:</div>
                <div style="font-size: 12px; margin-top: 5px;">Great resource! Works perfectly on modern browsers.</div>
            </div>
            <div style="background: #FFFFE1; padding: 10px; border: 1px solid #F2963D; border-radius: 3px; margin-top: 15px;">
                <p style="font-size: 11px; margin: 0;">💬 Comments are coming soon! Stay tuned for the next update.</p>
            </div>
        </div>
    `;

    playSound('popup');
}

function showResourceNotFound() {
    const contentDiv = document.getElementById('resourceContent');
    if (!contentDiv) return;

    contentDiv.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <img src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png" width="48" alt="Error">
            <h2 style="color: #D32F2F; margin: 20px 0 10px 0;">Resource Not Found</h2>
            <p style="font-size: 12px; color: #666; margin-bottom: 20px;">
                The resource you're looking for doesn't exist or has been removed.
            </p>
            <a href="index.html" class="xp-button" style="display: inline-block; padding: 6px 15px; text-decoration: none;">
                ← Back to Library
            </a>
        </div>
    `;
}

function getTypeBadge(type) {
    const badges = {
        pdf: '<span style="background: #D32F2F; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">PDF</span>',
        link: '<span style="background: #1976D2; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">LINK</span>',
        download: '<span style="background: #388E3C; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">DOWNLOAD</span>',
        video: '<span style="background: #7B1FA2; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: bold;">VIDEO</span>'
    };
    return badges[type] || '';
}

function getActionButtonText(type) {
    const texts = {
        pdf: '📄 Open PDF',
        link: '🔗 Visit Link',
        download: '💾 Download',
        video: '🎥 Watch Video'
    };
    return texts[type] || 'Open Resource';
}

function openResourceUrl(url, type) {
    playSound('popup');

    switch (type) {
        case 'pdf':
            showNotification('Opening PDF in new window...');
            break;
        case 'link':
            showNotification('Opening link in new window...');
            break;
        case 'download':
            showNotification('Initiating download...');
            break;
        case 'video':
            showNotification('Opening video...');
            break;
    }

    setTimeout(() => {
        window.open(url, '_blank');
    }, 500);
}

function toggleResourceFavorite(resourceId) {
    const isSaved = savedResources.includes(resourceId);
    const btn = document.getElementById(`favBtn-${resourceId}`);

    if (isSaved) {
        savedResources = savedResources.filter(id => id !== resourceId);
        if (btn) btn.textContent = 'Add to Favorites ⭐';
        showNotification('Removed from favorites');
    } else {
        savedResources.push(resourceId);
        if (btn) btn.textContent = 'SAVED ✓';
        showNotification('Added to favorites!');
    }

    localStorage.setItem('savedResources', JSON.stringify(savedResources));
    playSound('click');
}
