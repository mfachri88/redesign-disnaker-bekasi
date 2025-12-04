document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu is now handled by components.js

    // Dropdown Logic (Desktop)
    const dropdowns = document.querySelectorAll('.group');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.group-hover\\:block');

        if (button) {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                }
            });
        }
    });

    // Complete Job Data from Disnaker Website
    const jobs = [
        {
            id: 1,
            title: "Fresh Graduate Trainee (Production Engineering)",
            company: "PT Kawasaki Motor Indonesia",
            location: "Cikarang Barat",
            type: "Internship",
            category: "Engineering",
            deadline: "10 Jan 2026",
            quota: 1,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/0f03f797-be60-4a4c-bcc7-d5fe7a1d8593",
            logo: "K"
        },
        {
            id: 2,
            title: "Programmer Java Eclipse & VB .Net",
            company: "PT. Sumco Indonesia",
            location: "Cikarang Barat",
            type: "IT & Software",
            category: "IT",
            deadline: "28 Jan 2026",
            quota: 1,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/65f2fb0a-d1eb-4929-8ea3-8549d2636ad4",
            logo: "S"
        },
        {
            id: 3,
            title: "SPG/SPB Penempatan All Jabodetabek",
            company: "PT Winn Appliance",
            location: "Cikarang Pusat",
            type: "Full Time",
            category: "Sales",
            deadline: "31 Des 2025",
            quota: 14,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/dddc0984-28b7-42df-8421-55d5d7e8988b",
            logo: "W"
        },
        {
            id: 4,
            title: "Laboratory Assistant",
            company: "Colorobbia Indonesia",
            location: "Cikarang Selatan",
            type: "Laboratory",
            category: "Science",
            deadline: "17 Jan 2026",
            quota: 2,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/a4cb8dac-36ad-4d11-8936-335cf79e17ca",
            logo: "C"
        },
        {
            id: 5,
            title: "Operator Produksi",
            company: "PT Denso Indonesia Bekasi",
            location: "Cikarang Barat",
            type: "Full Time",
            category: "Manufacturing",
            deadline: "06 Des 2025",
            quota: 50,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/c4889b38-040b-401e-b8bd-9c0aebb19dd1",
            logo: "D"
        },
        {
            id: 6,
            title: "FIELD COLLECTION (JABODETABEK)",
            company: "PT Swakarya Insan Mandiri",
            location: "Tambun Selatan",
            type: "Sales & Marketing",
            category: "Sales",
            deadline: "21 Feb 2026",
            quota: 20,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/c5d8786b-8e09-4f24-bd85-8d2b2fa94f2d",
            logo: "S"
        },
        {
            id: 7,
            title: "Engineer berbahasa Jepang",
            company: "PT. Sumco Indonesia",
            location: "Cikarang Barat",
            type: "Engineering",
            category: "Engineering",
            deadline: "28 Jan 2026",
            quota: 2,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/0079ce80-529f-4494-a531-f15bd12adeb8",
            logo: "S"
        },
        {
            id: 8,
            title: "Supervisor - Assistant Manager (Mechanical Design Engineering)",
            company: "Nadesco Indonesia",
            location: "Cikarang Utara",
            type: "Media & Creative",
            category: "Engineering",
            deadline: "30 Des 2025",
            quota: 2,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/087cc405-76f0-4788-a5d4-31d95050c364",
            logo: "N"
        },
        {
            id: 9,
            title: "MECHANIC",
            company: "Ykk Zipco Indonesia",
            location: "Cikarang Barat",
            type: "Manufacturing",
            category: "Manufacturing",
            deadline: "27 Des 2025",
            quota: 2,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/2606adc4-7bc5-4883-8cbe-967c9499b16d",
            logo: "Y"
        },
        {
            id: 10,
            title: "Pramuniaga (Gadai)",
            company: "Solusi Gadai Pintar",
            location: "Cibitung",
            type: "Sales & Marketing",
            category: "Sales",
            deadline: "31 Mar 2026",
            quota: 20,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/c698f569-7300-4ad1-98d6-bd036bba1586",
            logo: "S"
        },
        {
            id: 11,
            title: "Drafter",
            company: "PT Maju Jaya",
            location: "Cikarang Selatan",
            type: "Design",
            category: "Design",
            deadline: "15 Feb 2026",
            quota: 3,
            link: "https://karirhub.kemnaker.go.id/lowongan-dalam-negeri/lowongan/3a1f455f-3aef-4833-a53d-c94163142373",
            logo: "M"
        }
    ];

    // Job Listing Logic with Real-time Search
    const jobListContainer = document.getElementById('job-list-container');
    const paginationContainer = document.getElementById('pagination-container');
    const noResultsMessage = document.getElementById('no-results');
    const keywordInput = document.getElementById('keyword-input');
    const locationSelect = document.getElementById('location-select');
    const resultsCount = document.getElementById('results-count');
    const filterStatus = document.getElementById('filter-status');

    if (jobListContainer) {
        let currentPage = 1;
        const itemsPerPage = 6;
        let filteredJobs = [...jobs];

        function updateResultsCounter() {
            if (resultsCount) {
                resultsCount.textContent = filteredJobs.length;
            }

            if (filterStatus) {
                const keyword = keywordInput ? keywordInput.value : '';
                const location = locationSelect ? locationSelect.value : '';

                if (keyword || location) {
                    let statusText = '';
                    if (keyword && location) {
                        statusText = `untuk "${keyword}" di ${location}`;
                    } else if (keyword) {
                        statusText = `untuk "${keyword}"`;
                    } else if (location) {
                        statusText = `di ${location}`;
                    }
                    filterStatus.textContent = statusText;
                } else {
                    filterStatus.textContent = '';
                }
            }
        }

        function renderJobs(page) {
            jobListContainer.innerHTML = '';
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedJobs = filteredJobs.slice(start, end);

            if (paginatedJobs.length === 0) {
                jobListContainer.classList.add('hidden');
                noResultsMessage.classList.remove('hidden');
            } else {
                jobListContainer.classList.remove('hidden');
                noResultsMessage.classList.add('hidden');

                paginatedJobs.forEach(job => {
                    const jobCard = document.createElement('article');
                    jobCard.className = 'job-card bg-white rounded-xl border border-gray-100 p-6 relative group';
                    jobCard.innerHTML = `
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex gap-4">
                                <div class="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                                    <span class="text-xl font-bold text-gray-400">${job.logo}</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-primary text-lg group-hover:text-accent transition-colors line-clamp-2">
                                        ${job.title}
                                    </h3>
                                    <p class="text-sm text-gray-500">${job.company}</p>
                                </div>
                            </div>
                            <button class="bookmark-btn text-gray-300 hover:text-accent-pink transition-colors">
                                <i class="fa-regular fa-bookmark text-xl"></i>
                            </button>
                        </div>
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <i class="fa-solid fa-location-dot text-accent w-4"></i> ${job.location}
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <i class="fa-solid fa-briefcase text-accent w-4"></i> ${job.type}
                            </div>
                            <div class="flex items-center gap-2 text-sm text-red-500">
                                <i class="fa-solid fa-calendar-xmark w-4"></i> Deadline: ${job.deadline}
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-50">
                            <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Kuota: ${job.quota}</span>
                            <a href="${job.link}" target="_blank" class="text-sm font-bold text-accent-pink hover:text-accent-pink-hover flex items-center gap-1">
                                Lamar <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    `;
                    jobListContainer.appendChild(jobCard);
                });

                // Re-attach bookmark listeners
                attachBookmarkListeners();
            }
            renderPagination();
            updateResultsCounter();
        }

        function renderPagination() {
            paginationContainer.innerHTML = '';
            const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

            if (totalPages <= 1) return;

            // Prev Button
            const prevBtn = document.createElement('button');
            prevBtn.className = `px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-accent hover:text-accent ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`;
            prevBtn.textContent = 'Prev';
            prevBtn.disabled = currentPage === 1;
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderJobs(currentPage);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(prevBtn);

            // Page Numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `px-4 py-2 rounded-lg font-bold ${currentPage === i ? 'bg-accent text-white' : 'border border-gray-200 text-gray-500 hover:border-accent hover:text-accent'}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    currentPage = i;
                    renderJobs(currentPage);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                paginationContainer.appendChild(pageBtn);
            }

            // Next Button
            const nextBtn = document.createElement('button');
            nextBtn.className = `px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-accent hover:text-accent ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`;
            nextBtn.textContent = 'Next';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderJobs(currentPage);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(nextBtn);
        }

        function filterJobs() {
            const keyword = keywordInput.value.toLowerCase();
            const location = locationSelect.value;

            filteredJobs = jobs.filter(job => {
                const matchKeyword = job.title.toLowerCase().includes(keyword) ||
                    job.company.toLowerCase().includes(keyword) ||
                    job.type.toLowerCase().includes(keyword);
                const matchLocation = location === '' || job.location.includes(location);
                return matchKeyword && matchLocation;
            });

            currentPage = 1;
            renderJobs(currentPage);
        }

        function attachBookmarkListeners() {
            const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
            bookmarkBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const icon = btn.querySelector('i');
                    if (icon.classList.contains('fa-regular')) {
                        icon.classList.remove('fa-regular');
                        icon.classList.add('fa-solid');
                        icon.classList.add('text-accent-pink');
                    } else {
                        icon.classList.remove('fa-solid');
                        icon.classList.remove('text-accent-pink');
                        icon.classList.add('fa-regular');
                    }
                });
            });
        }

        // Real-time Search Event Listeners
        if (keywordInput) {
            keywordInput.addEventListener('input', filterJobs);
        }

        if (locationSelect) {
            locationSelect.addEventListener('change', filterJobs);
        }

        // Initial Render
        renderJobs(currentPage);
    }

    // Floating WhatsApp Helpdesk Button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://api.whatsapp.com/send/?phone=6281313131967&text=Helpdesk+TIK&type=phone_number&app_absent=0';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 group';
    whatsappBtn.innerHTML = `
        <i class="fa-brands fa-whatsapp text-2xl"></i>
        <span class="font-bold">Helpdesk Disnaker</span>
    `;
    document.body.appendChild(whatsappBtn);

    // Page Transition Trigger
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50);
});
