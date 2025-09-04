document.addEventListener('DOMContentLoaded', () => {
    const modulesData = [
        { title: "Fundamentos Essenciais", color: "#f97316", icon: "terminal", courses: ["044: Linux CLI", "124: Terminal", "084: Linux Onboarding", "113: Redes Onboarding", "045: Repositórios no GitHub"] },
        { title: "Contêineres e Orquestração", color: "#3b82f6", icon: "box", courses: ["043: Docker", "047: Gerenciando Containers", "079: Kubernetes: Pods, Services", "078: Kubernetes: Deployments", "080: Kubernetes: Helm e Cloud"] },
        { title: "Introdução à Nuvem", color: "#8b5cf6", icon: "cloud", courses: ["036: Cloud Onboarding", "017: AWS Cloud Practitioner", "007: Amazon VPC", "006: Amazon S3", "085: Azure Fundamentals", "009: Google Cloud Engineer"] },
        { title: "Infraestrutura como Código (IaC)", color: "#10b981", icon: "code", courses: ["060: AWS com Ansible e Terraform", "062: Terraform e Kubernetes", "008: Ansible", "122: Shell Scripting", "110: PowerShell"] },
        { title: "Integração e Entrega Contínua (CI/CD)", color: "#ec4899", icon: "git-pull-request", courses: ["066: Conceitos de CI", "070: Pipeline no Github Actions", "071: Jenkins e Docker", "065: Deploy no Amazon ECS"] },
        { title: "Observabilidade e Confiabilidade (SRE)", color: "#f59e0b", icon: "activity", courses: ["123: SRE: Confiabilidade", "094: Prometheus e Grafana", "037: Logs com Grafana Loki", "112: Tracing com Jaeger"] },
        { title: "Segurança (DevSecOps)", color: "#ef4444", icon: "shield", courses: ["040: Desenvolvimento Seguro", "101: OWASP Top 10", "119: Segurança de Rede", "091: Microsserviços", "076: Kafka"] }
    ];

    const modulesContainer = document.getElementById('modules-container');
    const moduleNav = document.querySelector('.module-nav');
    const totalProgressFill = document.getElementById('total-progress-fill');
    const totalProgressText = document.getElementById('total-progress-text');
    
    let progress = JSON.parse(localStorage.getItem('devopsProgressHybrid')) || {};

    function saveProgress() {
        localStorage.setItem('devopsProgressHybrid', JSON.stringify(progress));
    }

    function renderPage() {
        modulesContainer.innerHTML = '';
        moduleNav.innerHTML = '';
        let totalCourses = 0;
        let completedCourses = 0;

        modulesData.forEach((module, moduleIndex) => {
            totalCourses += module.courses.length;
            const completedModuleCourses = module.courses.filter((_, i) => progress[`${moduleIndex}-${i}`]).length;
            completedCourses += completedModuleCourses;

            // 1. Criar link na navegação lateral
            const navLink = document.createElement('a');
            navLink.className = 'nav-link';
            navLink.href = `#module-${moduleIndex}`;
            navLink.style.setProperty('--module-color', module.color);
            navLink.innerHTML = `<img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/${module.icon}.svg" class="nav-icon"> ${module.title}`;
            navLink.addEventListener('click', (e ) => {
                e.preventDefault();
                document.querySelector(`#module-${moduleIndex}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            moduleNav.appendChild(navLink);

            // 2. Criar o card do módulo no conteúdo principal
            const moduleEl = document.createElement('div');
            moduleEl.className = 'module';
            moduleEl.id = `module-${moduleIndex}`;
            moduleEl.style.setProperty('--module-color', module.color);
            moduleEl.innerHTML = `
                <div class="module-header">
                    <img src="https://raw.githubusercontent.com/feathericons/feather/master/icons/${module.icon}.svg" class="module-icon">
                    <div class="module-title">
                        <h3>${module.title}</h3>
                        <p class="module-progress">${completedModuleCourses} / ${module.courses.length} aulas completas</p>
                    </div>
                    <span class="module-arrow">▶</span>
                </div>
                <div class="module-content">
                    <ul class="course-list">
                        ${module.courses.map((course, courseIndex ) => `
                            <li class="course-item">
                                <input type="checkbox" id="course-${moduleIndex}-${courseIndex}" data-module="${moduleIndex}" data-course="${courseIndex}" ${progress[`${moduleIndex}-${courseIndex}`] ? 'checked' : ''}>
                                <label for="course-${moduleIndex}-${courseIndex}" class="${progress[`${moduleIndex}-${courseIndex}`] ? 'completed' : ''}">${course}</label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            modulesContainer.appendChild(moduleEl);
        });

        updateTotalProgress(completedCourses, totalCourses);
        addEventListeners();
    }

    function addEventListeners() {
        // Evento para abrir/fechar o acordeão
        document.querySelectorAll('.module-header').forEach(header => {
            header.addEventListener('click', () => header.parentElement.classList.toggle('active'));
        });

        // Evento para o checklist
        document.querySelectorAll('.course-item input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const { module: moduleIndex, course: courseIndex } = e.target.dataset;
                progress[`${moduleIndex}-${courseIndex}`] = e.target.checked;
                document.querySelector(`label[for="course-${moduleIndex}-${courseIndex}"]`).classList.toggle('completed', e.target.checked);
                
                saveProgress();
                updateModuleProgress(moduleIndex);
                updateTotalProgress();
            });
        });
    }

    function updateModuleProgress(moduleIndex) {
        const moduleData = modulesData[moduleIndex];
        const completedCount = moduleData.courses.filter((_, i) => progress[`${moduleIndex}-${i}`]).length;
        const progressEl = document.querySelector(`#module-${moduleIndex} .module-progress`);
        if (progressEl) {
            progressEl.textContent = `${completedCount} / ${moduleData.courses.length} aulas completas`;
        }
    }

    function updateTotalProgress(completed = null, total = null) {
        let completedCourses = completed;
        let totalCourses = total;

        if (completedCourses === null || totalCourses === null) {
            completedCourses = 0;
            totalCourses = 0;
            modulesData.forEach((module, moduleIndex) => {
                totalCourses += module.courses.length;
                completedCourses += module.courses.filter((_, courseIndex) => progress[`${moduleIndex}-${courseIndex}`]).length;
            });
        }

        const percentage = totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0;
        totalProgressFill.style.width = `${percentage}%`;
        totalProgressFill.style.backgroundColor = `hsl(${120 * (percentage / 100)}, 60%, 50%)`; // Muda de vermelho para verde
        totalProgressText.textContent = `${percentage}%`;
        totalProgressText.style.color = `hsl(${120 * (percentage / 100)}, 60%, 50%)`;
    }

    renderPage();
});
