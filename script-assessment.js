// Dropdown functionality for all assessment pages
document.addEventListener('DOMContentLoaded', function() {
    // Custom select dropdown functionality
    const customSelects = document.querySelectorAll('.custom-select');
    
    customSelects.forEach(select => {
        select.addEventListener('click', function() {
            // Close all other open panels first
            document.querySelectorAll('.options-panel').forEach(panel => {
                if (panel !== this.nextElementSibling.nextElementSibling) {
                    panel.style.display = 'none';
                }
            });
            
            // Toggle the current panel
            const panel = this.nextElementSibling.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    // Options selection
    document.querySelectorAll('.option-item').forEach(option => {
        option.addEventListener('click', function() {
            const selectedText = this.querySelector('.option-text').textContent;
            const selectBox = this.closest('.form-select-wrapper').querySelector('.custom-select');
            selectBox.textContent = selectedText;
            selectBox.style.color = '#000000';
            this.closest('.options-panel').style.display = 'none';
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.custom-select') && 
            !e.target.closest('.options-panel')) {
            document.querySelectorAll('.options-panel').forEach(panel => {
                panel.style.display = 'none';
            });
        }
    });
});

// Add the remaining assessment sections to the page
function addAssessmentSections() {
    const container = document.querySelector('.content-group');
    if (!container) return;
    
    // Marketing Section
    const marketingSection = `
        <!-- Marketing Form -->            
        <div class="assessment-form" x-show="currentPage === 'marketing'" x-transition.duration.300ms>
            <div class="form-title">Kapabilitas Tim Marketing</div>
            
            <!-- Form Item 1 -->
            <div class="form-item">
                <div class="form-item-number">1.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan riset pasar</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Items 2-6 (abbreviated for brevity) -->
            <!-- Form Item 2 -->
            <div class="form-item">
                <div class="form-item-number">2.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan menulis konten yang menarik</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Additional form items would go here -->
            
            <!-- Next Button -->
            <div class="next-button" @click="nextPage()">
                <div class="next-text">Next</div>
            </div>
        </div>
    `;
    
    // Sales Section
    const salesSection = `
        <!-- Sales Form -->            
        <div class="assessment-form" x-show="currentPage === 'sales'" x-transition.duration.300ms>
            <div class="form-title">Kapabilitas Tim Sales</div>
            
            <!-- Form Item 1 -->
            <div class="form-item">
                <div class="form-item-number">1.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan presentasi</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 2 -->
            <div class="form-item">
                <div class="form-item-number">2.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan negosiasi</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 3 -->
            <div class="form-item">
                <div class="form-item-number">3.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan mendengarkan klien</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 4 -->
            <div class="form-item">
                <div class="form-item-number">4.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan mengatasi keberatan</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 5 -->
            <div class="form-item">
                <div class="form-item-number">5.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan follow up</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 6 -->
            <div class="form-item">
                <div class="form-item-number">6.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan membangun relasi jangka panjang</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Next Button -->
            <div class="next-button" @click="nextPage()">
                <div class="next-text">Next</div>
            </div>
        </div>
    `;
    
    // Operation Section
    const operationSection = `
        <!-- Operation Form -->            
        <div class="assessment-form" x-show="currentPage === 'operation'" x-transition.duration.300ms>
            <div class="form-title">Kapabilitas Tim Operation</div>
            
            <!-- Form Item 1 -->
            <div class="form-item">
                <div class="form-item-number">1.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan perencanaan produksi</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 2 -->
            <div class="form-item">
                <div class="form-item-number">2.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan quality control</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 3 -->
            <div class="form-item">
                <div class="form-item-number">3.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan manajemen inventori</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 4 -->
            <div class="form-item">
                <div class="form-item-number">4.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan manajemen rantai pasok</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 5 -->
            <div class="form-item">
                <div class="form-item-number">5.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan logistik</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 6 -->
            <div class="form-item">
                <div class="form-item-number">6.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan continuous improvement</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Next Button -->
            <div class="next-button" @click="nextPage()">
                <div class="next-text">Next</div>
            </div>
        </div>
    `;
    
    // SDM Section
    const sdmSection = `
        <!-- SDM Form -->            
        <div class="assessment-form" x-show="currentPage === 'sdm'" x-transition.duration.300ms>
            <div class="form-title">Kapabilitas Tim SDM</div>
            
            <!-- Form Item 1 -->
            <div class="form-item">
                <div class="form-item-number">1.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan rekrutmen dan seleksi</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 2 -->
            <div class="form-item">
                <div class="form-item-number">2.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan pelatihan dan pengembangan</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 3 -->
            <div class="form-item">
                <div class="form-item-number">3.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan manajemen kinerja</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 4 -->
            <div class="form-item">
                <div class="form-item-number">4.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan kompensasi dan benefit</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 5 -->
            <div class="form-item">
                <div class="form-item-number">5.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan employee engagement</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Form Item 6 -->
            <div class="form-item">
                <div class="form-item-number">6.</div>
                <div class="form-item-question">Anggota tim yang memiliki kemampuan hubungan industrial</div>
                <div class="form-select-wrapper">
                    <div class="custom-select">Select an option</div>
                    <div class="down-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                    <div class="options-panel">
                        <div class="options-note">*Pilih salah satu</div>
                        <div class="option-item">
                            <div class="option-text">Ya</div>
                        </div>
                        <div class="option-item">
                            <div class="option-text">Tidak</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Next Button -->
            <div class="next-button" @click="nextPage()">
                <div class="next-text">Submit</div>
            </div>
        </div>
    `;
    
    // Add all sections to the container
    container.insertAdjacentHTML('beforeend', marketingSection);
    container.insertAdjacentHTML('beforeend', salesSection);
    container.insertAdjacentHTML('beforeend', operationSection);
    container.insertAdjacentHTML('beforeend', sdmSection);
    
    // Initialize dropdowns for the new sections
    initializeDropdowns();
}

function initializeDropdowns() {
    // Re-initialize custom selects for the newly added sections
    const customSelects = document.querySelectorAll('.custom-select');
    
    customSelects.forEach(select => {
        select.addEventListener('click', function() {
            // Close all other open panels first
            document.querySelectorAll('.options-panel').forEach(panel => {
                if (panel !== this.nextElementSibling.nextElementSibling) {
                    panel.style.display = 'none';
                }
            });
            
            // Toggle the current panel
            const panel = this.nextElementSibling.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    // Options selection for newly added elements
    document.querySelectorAll('.option-item').forEach(option => {
        option.addEventListener('click', function() {
            const selectedText = this.querySelector('.option-text').textContent;
            const selectBox = this.closest('.form-select-wrapper').querySelector('.custom-select');
            selectBox.textContent = selectedText;
            selectBox.style.color = '#000000';
            this.closest('.options-panel').style.display = 'none';
        });
    });
}

// Call the function as soon as possible to ensure sections are added before Alpine.js initializes
// Use both DOMContentLoaded and immediate execution for best reliability
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure the content-group element is available
    setTimeout(function() {
        addAssessmentSections();
        initializeDropdowns();
    }, 100);
});

// Also try to run immediately in case the DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(function() {
        addAssessmentSections();
        initializeDropdowns();
    }, 100);
}
