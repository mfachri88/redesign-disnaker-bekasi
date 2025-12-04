// Function to get base path based on current page location
function getBasePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;

    // Determine the base path based on folder depth
    if (path.includes('/jobs/') || path.includes('/profile/') || path.includes('/demo/')) {
        return '../';
    }
    return './';
}

// Function to generate navbar with dynamic paths
function generateNavbarHTML() {
    const base = getBasePath();

    return `
<nav class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <a href="${base}index.html" class="flex items-center gap-3 group">
                <img src="${base}assets/img/logodisnaker.png" class="w-40" alt="Logo Disnaker Kab. Bekasi">
            </a>

            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center space-x-8">
                <a href="${base}index.html" class="text-gray-700 hover:text-accent font-medium transition-colors">Beranda</a>

                <!-- Dropdown: Profil -->
                <div class="relative group">
                    <button
                        class="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors py-2"
                        aria-expanded="false">
                        Profil <i class="fa-solid fa-chevron-down text-xs opacity-70"></i>
                    </button>
                    <!-- Mega Menu -->
                    <div
                        class="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4">
                        <div class="flex flex-col space-y-2">
                            <a href="${base}profile/struktur.html"
                                class="block px-4 py-2 rounded-lg hover:bg-neutral-bg text-gray-700 hover:text-accent transition-colors">
                                <i class="fa-solid fa-sitemap w-5 text-gray-400"></i> Struktur Organisasi
                            </a>
                            <a href="${base}profile/tugas-fungsi.html"
                                class="block px-4 py-2 rounded-lg hover:bg-neutral-bg text-gray-700 hover:text-accent transition-colors">
                                <i class="fa-solid fa-list-check w-5 text-gray-400"></i> Tugas & Fungsi
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Dropdown: Layanan -->
                <div class="relative group">
                    <button
                        class="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors py-2"
                        aria-expanded="false">
                        Layanan <i class="fa-solid fa-chevron-down text-xs opacity-70"></i>
                    </button>
                    <div
                        class="absolute top-full left-0 w-72 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4">
                        <div class="flex flex-col space-y-2">
                            <a href="https://sippn.menpan.go.id/instansi/185834" target="_blank"
                                rel="noopener noreferrer"
                                class="block px-4 py-2 rounded-lg hover:bg-neutral-bg text-gray-700 hover:text-accent transition-colors">
                                <i class="fa-solid fa-globe w-5 text-gray-400"></i> SIPPN
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScE3YXQ70ALyR73NW9NjGVk09XPziNv3gknepgOe5rNhS58-Q/viewform?pli=1" target="_blank" rel="noopener noreferrer"
                                class="block px-4 py-2 rounded-lg hover:bg-neutral-bg text-gray-700 hover:text-accent transition-colors">
                                <i class="fa-solid fa-bullhorn w-5 text-gray-400"></i> Whistle Blowing
                            </a>
                            <a href="https://www.lapor.go.id/instansi/dinas-tenaga-kerja-8" target="_blank"
                                rel="noopener noreferrer"
                                class="block px-4 py-2 rounded-lg hover:bg-neutral-bg text-gray-700 hover:text-accent transition-colors">
                                <i class="fa-solid fa-envelope-open-text w-5 text-gray-400"></i> Pengaduan (SP4N)
                            </a>
                        </div>
                    </div>
                </div>

                <a href="${base}jobs/index.html"
                    class="text-gray-700 hover:text-accent font-medium transition-colors">Sipkerja</a>
            </div>

            <!-- CTA Button -->
            <div class="hidden lg:block">
                <a href="https://karirhub.kemnaker.go.id" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-accent-pink hover:bg-accent-pink-hover text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-pink-900/20 transition-all transform hover:scale-105">
                    <i class="fa-solid fa-briefcase"></i>
                    <span>Lamar Sekarang</span>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn"
                class="lg:hidden text-gray-700 hover:text-primary p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                aria-label="Toggle menu">
                <i id="mobile-menu-icon" class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>
    </div>

    <!-- Mobile Menu - Slide Down -->
    <div id="mobile-menu" class="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0;" aria-hidden="true">
        <div class="container mx-auto px-4 py-4 space-y-2">
            <a href="${base}index.html" class="block text-base font-medium text-gray-800 hover:text-accent hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors">
                <i class="fa-solid fa-home w-5 text-gray-400 mr-2"></i> Beranda
            </a>

            <!-- Mobile Dropdown: Profil -->
            <div class="mobile-dropdown">
                <button class="mobile-dropdown-btn flex items-center justify-between w-full text-base font-medium text-gray-800 hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors">
                    <span><i class="fa-solid fa-building w-5 text-gray-400 mr-2"></i> Profil</span>
                    <i class="fa-solid fa-chevron-down text-xs text-gray-400 transition-transform duration-300"></i>
                </button>
                <div class="mobile-dropdown-content overflow-hidden transition-all duration-300 ease-in-out pl-6 space-y-1 border-l-2 border-gray-200 ml-5" style="max-height: 0; opacity: 0;">
                    <a href="${base}profile/struktur.html" class="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                        <i class="fa-solid fa-sitemap w-5 text-gray-400"></i> Struktur Organisasi
                    </a>
                    <a href="${base}profile/tugas-fungsi.html" class="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                        <i class="fa-solid fa-list-check w-5 text-gray-400"></i> Tugas & Fungsi
                    </a>
                </div>
            </div>

            <!-- Mobile Dropdown: Layanan -->
            <div class="mobile-dropdown">
                <button class="mobile-dropdown-btn flex items-center justify-between w-full text-base font-medium text-gray-800 hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors">
                    <span><i class="fa-solid fa-concierge-bell w-5 text-gray-400 mr-2"></i> Layanan</span>
                    <i class="fa-solid fa-chevron-down text-xs text-gray-400 transition-transform duration-300"></i>
                </button>
                <div class="mobile-dropdown-content overflow-hidden transition-all duration-300 ease-in-out pl-6 space-y-1 border-l-2 border-gray-200 ml-5" style="max-height: 0; opacity: 0;">
                    <a href="https://sippn.menpan.go.id/instansi/185834" target="_blank" class="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                        <i class="fa-solid fa-globe w-5 text-gray-400"></i> SIPPN
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScE3YXQ70ALyR73NW9NjGVk09XPziNv3gknepgOe5rNhS58-Q/viewform?pli=1" target="_blank" class="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                        <i class="fa-solid fa-bullhorn w-5 text-gray-400"></i> Whistle Blowing
                    </a>
                    <a href="https://www.lapor.go.id/instansi/dinas-tenaga-kerja-8" target="_blank" class="block py-2 px-3 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                        <i class="fa-solid fa-envelope-open-text w-5 text-gray-400"></i> Pengaduan (SP4N)
                    </a>
                </div>
            </div>

            <a href="${base}jobs/index.html" class="block text-base font-medium text-gray-800 hover:text-accent hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors">
                <i class="fa-solid fa-briefcase w-5 text-gray-400 mr-2"></i> Sipkerja
            </a>

            <!-- CTA Button -->
            <div class="pt-3 mt-2 border-t border-gray-100">
                <a href="https://karirhub.kemnaker.go.id" target="_blank"
                    class="flex items-center justify-center gap-2 w-full bg-accent-pink hover:bg-accent-pink-hover text-white py-3 rounded-xl font-bold shadow-md transition-colors">
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>Lamar Sekarang</span>
                </a>
            </div>
        </div>
    </div>
</nav>
`;
}

// Function to generate footer with dynamic paths
function generateFooterHTML() {
    const base = getBasePath();

    return `
<footer class="bg-white border-t border-gray-200 pt-12 pb-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <!-- About -->
            <div>
                <img src="${base}assets/img/logokujang.png" class="w-20"alt="Logo Kujang">
                <p class="text-gray-600 leading-relaxed text-sm">
                    Mewujudkan tenaga kerja yang kompeten, produktif, dan berdaya saing untuk mendukung pertumbuhan
                    industri di Kabupaten Bekasi.
                </p>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-primary font-bold mb-6">Tautan Cepat</h4>
                <ul class="space-y-3 text-sm text-gray-600">
                    <li><a href="${base}profile/struktur.html" class="hover:text-accent transition-colors">Struktur
                            Organisasi</a></li>
                    <li><a href="${base}profile/tugas-fungsi.html" class="hover:text-accent transition-colors">Tugas &
                            Fungsi</a></li>
                    <li><a href="${base}jobs/index.html" class="hover:text-accent transition-colors">Sipkerja</a></li>
                    <li><a href="https://sippn.menpan.go.id/instansi/185834" target="_blank"
                            class="hover:text-accent transition-colors">Pelayanan Publik</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="text-primary font-bold mb-6">Hubungi Kami</h4>
                <ul class="space-y-4 text-sm text-gray-600">
                    <a href="https://maps.app.goo.gl/Nkqc9u7YRH5uGp1bA" target="_blank" class="flex items-start gap-3">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-location-dot mt-1 text-accent"></i>
                            <span>Komplek Perkantoran Pemkab Bekasi, Desa Sukamahi, Cikarang Pusat.</span>
                        </li>
                    </a>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-envelope text-accent"></i>
                        <span>disnaker@bekasikab.go.id</span>
                    </li>
                </ul>
                <!-- Social -->
                <div class="flex gap-4 mt-6">
        
                    <a href="https://www.instagram.com/bekasikab.ketenagakerjaan/"
                        class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.instagram.com/informasipasarkerjakabbekasi/"
                        class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    
                </div>
            </div>
        </div>

        <div class="border-t border-gray-100 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Dinas Ketenagakerjaan Kabupaten Bekasi. All rights reserved.</p>
        </div>
    </div>
</footer>
`;
}

// Function to load components
function loadComponents() {
    // Load Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = generateNavbarHTML();
        initMobileMenu();
    }

    // Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooterHTML();
    }
}

// Function to initialize mobile menu and dropdowns
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
        // Toggle mobile menu with animation
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!isMenuOpen) {
                // Open menu with slide down animation
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                mobileMenu.setAttribute('aria-hidden', 'false');
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-xmark');
                mobileMenuIcon.style.transform = 'rotate(180deg)';
                isMenuOpen = true;
            } else {
                // Close menu with slide up animation
                mobileMenu.style.maxHeight = '0';
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenuIcon.classList.remove('fa-xmark');
                mobileMenuIcon.classList.add('fa-bars');
                mobileMenuIcon.style.transform = 'rotate(0deg)';
                isMenuOpen = false;
                
                // Also close all dropdowns when menu closes
                const allDropdownContents = document.querySelectorAll('.mobile-dropdown-content');
                const allDropdownIcons = document.querySelectorAll('.mobile-dropdown-btn i.fa-chevron-down');
                allDropdownContents.forEach(function(content) {
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                    content.style.marginTop = '0';
                });
                allDropdownIcons.forEach(function(icon) {
                    icon.style.transform = 'rotate(0deg)';
                });
            }
        });
    }

    // Initialize mobile dropdowns with animation
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const dropdown = btn.closest('.mobile-dropdown');
            const content = dropdown.querySelector('.mobile-dropdown-content');
            const icon = btn.querySelector('i.fa-chevron-down');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            if (!isOpen) {
                // Open dropdown with animation
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                content.style.marginTop = '4px';
                if (icon) icon.style.transform = 'rotate(180deg)';
                
                // Update parent menu height
                if (mobileMenu) {
                    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + content.scrollHeight + 'px';
                }
            } else {
                // Close dropdown with animation
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                content.style.marginTop = '0';
                if (icon) icon.style.transform = 'rotate(0deg)';
                
                // Update parent menu height
                if (mobileMenu) {
                    setTimeout(function() {
                        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                    }, 300);
                }
            }
        });
    });
}

// Add transition style for hamburger icon
const style = document.createElement('style');
style.textContent = `
    #mobile-menu-icon {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}