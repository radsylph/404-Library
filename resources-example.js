// ========== EJEMPLO DE RECURSOS REALES ==========
// Copia este contenido en script.js para reemplazar el array resourcesData

const resourcesData = [
    // ===== COMPONENTS & FRAMEWORKS =====
    {
        id: 1,
        title: "7.css - Windows 7 CSS Framework",
        category: "Components",
        description: "A design library for building faithful recreations of old UIs. Windows 7 edition.",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        saves: 1024,
        type: "link",
        url: "https://khang-nd.github.io/7.css/",
        tags: ["CSS", "Framework", "Windows7", "UI"],
        author: "khang-nd",
        date: "2024-10-24"
    },
    {
        id: 2,
        title: "98.css - Windows 98 CSS",
        category: "Components",
        description: "A design system for building faithful recreations of old UIs with Windows 98 style.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png",
        saves: 2156,
        type: "link",
        url: "https://jdan.github.io/98.css/",
        tags: ["CSS", "Framework", "Windows98", "Retro"],
        author: "jdan",
        date: "2024-09-15"
    },
    {
        id: 3,
        title: "XP.css - Windows XP CSS",
        category: "Components",
        description: "A CSS library for building interfaces that look like Windows XP.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-0.png",
        saves: 1847,
        type: "link",
        url: "https://botoxparty.github.io/XP.css/",
        tags: ["CSS", "Framework", "WindowsXP", "UI"],
        author: "botoxparty",
        date: "2024-08-20"
    },

    // ===== TERMINALS & SHELLS =====
    {
        id: 4,
        title: "Oh My Zsh",
        category: "Terminals",
        description: "A delightful, open source, community-driven framework for managing your Zsh configuration.",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-0.png",
        saves: 3421,
        type: "link",
        url: "https://ohmyz.sh/",
        tags: ["Terminal", "ZSH", "Shell", "Config"],
        author: "ohmyzsh",
        date: "2024-11-01"
    },
    {
        id: 5,
        title: "Starship - Cross-Shell Prompt",
        category: "Terminals",
        description: "The minimal, blazing-fast, and infinitely customizable prompt for any shell!",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-1.png",
        saves: 2890,
        type: "link",
        url: "https://starship.rs/",
        tags: ["Terminal", "Prompt", "Shell", "Customization"],
        author: "starship",
        date: "2024-10-15"
    },
    {
        id: 6,
        title: "Windows Terminal Themes",
        category: "Terminals",
        description: "A collection of themes for Windows Terminal. Make your terminal beautiful!",
        icon: "https://win98icons.alexmeub.com/icons/png/console_prompt-2.png",
        saves: 1567,
        type: "link",
        url: "https://windowsterminalthemes.dev/",
        tags: ["Terminal", "Windows", "Themes", "Colors"],
        author: "atomcorp",
        date: "2024-09-28"
    },

    // ===== GUIDES & TUTORIALS =====
    {
        id: 7,
        title: "Arch Linux Installation Guide",
        category: "Guides",
        description: "Official installation guide for Arch Linux. Step-by-step instructions for beginners.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-0.png",
        saves: 4521,
        type: "link",
        url: "https://wiki.archlinux.org/title/Installation_guide",
        tags: ["Linux", "Arch", "Installation", "Tutorial"],
        author: "Arch Wiki",
        date: "2024-11-20"
    },
    {
        id: 8,
        title: "Git Cheat Sheet PDF",
        category: "Guides",
        description: "A comprehensive Git cheat sheet with all the essential commands you need.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_small-0.png",
        saves: 3245,
        type: "pdf",
        url: "https://education.github.com/git-cheat-sheet-education.pdf",
        tags: ["Git", "CheatSheet", "Version Control", "PDF"],
        author: "GitHub",
        date: "2024-10-05"
    },
    {
        id: 9,
        title: "The Missing Semester",
        category: "Guides",
        description: "MIT course about tools and techniques that will help you master the command-line.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_cool-0.png",
        saves: 5678,
        type: "link",
        url: "https://missing.csail.mit.edu/",
        tags: ["Tutorial", "CLI", "Tools", "MIT"],
        author: "MIT",
        date: "2024-09-12"
    },

    // ===== REPOSITORIES & TOOLS =====
    {
        id: 10,
        title: "Clippy.js",
        category: "Repositories",
        description: "Add Clippy or his friends to any website for instant nostalgia.",
        icon: "https://win98icons.alexmeub.com/icons/png/msagent-0.png",
        saves: 9999,
        type: "link",
        url: "https://www.smore.com/clippy-js",
        tags: ["JavaScript", "Clippy", "Fun", "Nostalgia"],
        author: "smore",
        date: "2024-07-10"
    },
    {
        id: 11,
        title: "Awesome Selfhosted",
        category: "Repositories",
        description: "A list of Free Software network services and web applications which can be hosted locally.",
        icon: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-0.png",
        saves: 6234,
        type: "link",
        url: "https://github.com/awesome-selfhosted/awesome-selfhosted",
        tags: ["Selfhosted", "Tools", "List", "GitHub"],
        author: "awesome-selfhosted",
        date: "2024-11-15"
    },
    {
        id: 12,
        title: "DevDocs - API Documentation",
        category: "Repositories",
        description: "DevDocs combines multiple API documentations in a fast, organized, and searchable interface.",
        icon: "https://win98icons.alexmeub.com/icons/png/help_book_big-1.png",
        saves: 4567,
        type: "link",
        url: "https://devdocs.io/",
        tags: ["Documentation", "API", "Reference", "Dev"],
        author: "freeCodeCamp",
        date: "2024-10-22"
    },

    // ===== CUSTOMIZATION & DESIGN =====
    {
        id: 13,
        title: "Win98 Icons Collection",
        category: "Customization",
        description: "500+ Windows 98 icons in PNG format. Perfect for retro projects!",
        icon: "https://win98icons.alexmeub.com/icons/png/paint_file-0.png",
        saves: 3421,
        type: "link",
        url: "https://win98icons.alexmeub.com/",
        tags: ["Icons", "Windows98", "Graphics", "PNG"],
        author: "Alex Meub",
        date: "2024-08-30"
    },
    {
        id: 14,
        title: "Pixel Art Tutorial",
        category: "Customization",
        description: "Learn pixel art from scratch. Complete guide with examples and exercises.",
        icon: "https://win98icons.alexmeub.com/icons/png/paint_brush-0.png",
        saves: 2890,
        type: "link",
        url: "https://blog.studiominiboss.com/pixelart",
        tags: ["PixelArt", "Tutorial", "Art", "Design"],
        author: "Studio Miniboss",
        date: "2024-09-18"
    },
    {
        id: 15,
        title: "Coolors - Color Palette Generator",
        category: "Customization",
        description: "The super fast color palettes generator! Create, save and share perfect palettes.",
        icon: "https://win98icons.alexmeub.com/icons/png/desk_properties-1.png",
        saves: 4123,
        type: "link",
        url: "https://coolors.co/",
        tags: ["Colors", "Palette", "Design", "Tool"],
        author: "Coolors",
        date: "2024-10-08"
    },

    // ===== MUSIC & MEDIA =====
    {
        id: 16,
        title: "Lofi Hip Hop Radio",
        category: "User Uploads",
        description: "24/7 lofi hip hop radio - beats to relax/study to. Perfect for coding sessions.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-0.png",
        saves: 7890,
        type: "video",
        url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        tags: ["Music", "Lofi", "Study", "YouTube"],
        author: "Lofi Girl",
        date: "2024-11-25"
    },
    {
        id: 17,
        title: "Vaporwave Essentials",
        category: "User Uploads",
        description: "The ultimate vaporwave playlist. 2+ hours of aesthetic vibes.",
        icon: "https://win98icons.alexmeub.com/icons/png/media_player_stream_no-1.png",
        saves: 2345,
        type: "video",
        url: "https://www.youtube.com/watch?v=cU8HrO7XuiE",
        tags: ["Vaporwave", "Music", "Aesthetic", "Playlist"],
        author: "Various Artists",
        date: "2024-10-30"
    },
    {
        id: 18,
        title: "Windows XP Sounds Pack",
        category: "User Uploads",
        description: "All the iconic Windows XP sounds in high quality. Nostalgia guaranteed!",
        icon: "https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png",
        saves: 5432,
        type: "download",
        url: "https://archive.org/details/WinXPSounds",
        downloadSize: "8.5 MB",
        tags: ["Sounds", "WindowsXP", "Audio", "Nostalgia"],
        author: "Microsoft",
        date: "2024-09-05"
    },

    // ===== SYSTEMS & OS =====
    {
        id: 19,
        title: "ReactOS - Open Source Windows",
        category: "Systems",
        description: "A free Windows-compatible Operating System. Run Windows applications and drivers.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-1.png",
        saves: 3210,
        type: "link",
        url: "https://reactos.org/",
        tags: ["OS", "Windows", "OpenSource", "System"],
        author: "ReactOS Team",
        date: "2024-11-10"
    },
    {
        id: 20,
        title: "VirtualBox User Manual",
        category: "Systems",
        description: "Complete guide to using VirtualBox for running virtual machines.",
        icon: "https://win98icons.alexmeub.com/icons/png/computer_explorer-2.png",
        saves: 2876,
        type: "pdf",
        url: "https://www.virtualbox.org/manual/UserManual.html",
        tags: ["VirtualBox", "VM", "Manual", "Virtualization"],
        author: "Oracle",
        date: "2024-10-18"
    }
];

// ===== INSTRUCCIONES DE USO =====
/*
1. Copia todo este archivo
2. Abre script.js
3. Reemplaza el array resourcesData existente con este
4. Guarda y recarga la página
5. ¡Disfruta de recursos reales!

NOTA: Todos estos recursos son reales y funcionan. 
Puedes agregar más siguiendo el mismo formato.
*/
