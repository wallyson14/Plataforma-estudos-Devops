
        const coursesData = {
            "Fase 1: Fundamentos": [
                {code: "124", name: "Terminal: aprenda comandos para executar tarefas"},
                {code: "126", name: "Windows Prompt: utilizando o CMD"},
                {code: "081", name: "Linux Onboarding: localizando arquivos e conteúdos"},
                {code: "082", name: "Linux Onboarding: obtendo e tratando informações do sistema"},
                {code: "083", name: "Linux Onboarding: trabalhe com usuários, permissões e dispositivos"},
                {code: "084", name: "Linux Onboarding: usando a CLI de uma forma rápida e prática"},
                {code: "030", name: "Certificação Linux LPI Essentials: Command Line Basics"},
                {code: "033", name: "Certificação Linux LPI Essentials: Redirecting I/O Redirection"},
                {code: "118", name: "Scripting: automatizando tarefas com Bash e Docker"},
                {code: "122", name: "Shell Scripting parte 2: fazendo monitoramento, agendando tarefas e backup"},
                {code: "113", name: "Redes onboarding: uma perspectiva prática"},
                {code: "116", name: "Redes: dos conceitos iniciais à criação de uma intranet"},
                {code: "117", name: "Redes: implementando roteamento, DNS e IPv6"}
            ],
            "Fase 2: Cloud e AWS": [
                {code: "035", name: "Cloud Onboarding: conhecendo os principais provedores parte 2"},
                {code: "036", name: "Cloud Onboarding: trabalhando com os principais provedores"},
                {code: "023", name: "AWS: entendendo e controlando os custos dos serviços"},
                {code: "006", name: "Amazon S3: manipule e armazene objetos na nuvem"},
                {code: "007", name: "Amazon VPC: configurando redes na AWS"},
                {code: "002", name: "Amazon EC2: alta disponibilidade e escalabilidade em uma aplicação"},
                {code: "028", name: "Banco de dados na AWS: gerencie RDS e DynamoDB"},
                {code: "022", name: "AWS Storage Híbrido: soluções de armazenamento na nuvem"},
                {code: "097", name: "Observabilidade na AWS: utilizando o CloudWatch"}
            ],
            "Fase 3: IaC (Infraestrutura como Código)": [
                {code: "008", name: "Ansible: implementando sua infraestrutura como código"},
                {code: "059", name: "Infraestrutura como código: montando uma infraestrutura elástica na AWS"},
                {code: "060", name: "Infraestrutura como código: preparando máquinas na AWS com Ansible e Terraform"},
                {code: "061", name: "Infraestrutura como código: separando ambientes na AWS com Ansible e Terraform"},
                {code: "062", name: "Infraestrutura como código: Terraform e Kubernetes"},
                {code: "063", name: "Infraestrutura como código: Terraform, Docker e Elastic Container Service"},
                {code: "058", name: "Infraestrutura como código: Docker e Elastic Beanstalk na AWS"}
            ],
            "Fase 4: Contêineres e Orquestração": [
                {code: "047", name: "Docker: criando e gerenciando containers"},
                {code: "043", name: "DevOps: construindo e gerindo containers com o Docker"},
                {code: "003", name: "Amazon ECS: gerencie Docker na nuvem da AWS"},
                {code: "004", name: "Amazon EKS: gerenciando aplicações conteinerizadas com Kubernetes"},
                {code: "079", name: "Kubernetes: Pods, Services e ConfigMaps"},
                {code: "078", name: "Kubernetes: Deployments, Volumes e Escalabilidade"},
                {code: "080", name: "Kubernetes: prática, Helm e Cloud"},
                {code: "077", name: "Kubernetes na Digital Ocean: gerenciando aplicações conteinerizadas"}
            ],
            "Fase 5: CI/CD e Pipelines": [
                {code: "045", name: "DevOps: trabalhando com repositórios no GitHub"},
                {code: "064", name: "Integração Contínua: automatizando a entrega no Kubernetes"},
                {code: "065", name: "Integração Contínua: automatize o deploy no Amazon ECS"},
                {code: "066", name: "Integração Contínua: mais qualidade e menos risco no desenvolvimento"},
                {code: "067", name: "Integração Contínua: Pipeline de entrega e implementação contínua na EC2"},
                {code: "068", name: "Integração Contínua: Pipeline Docker no GitHub Actions"},
                {code: "070", name: "Integração Contínua: testes automatizados e pipeline no GitHub Actions"},
                {code: "071", name: "Jenkins e Docker: Pipeline de entrega contínua"},
                {code: "048", name: "Entrega Contínua: confiabilidade e qualidade na implantação de software"},
                {code: "069", name: "Integração Contínua: Rollback e teste de carga"}
            ],
            "Fase 6: Observabilidade e Monitoramento": [
                {code: "037", name: "Confiabilidade: centralizando logs com Grafana Loki"},
                {code: "038", name: "Confiabilidade: garantindo o estado de integridade de sistemas através de logs"},
                {code: "094", name: "Monitoramento: Prometheus, Grafana e Alertmanager"},
                {code: "098", name: "Observabilidade: coletando métricas de uma aplicação com Prometheus"},
                {code: "112", name: "Rastreamento: fazendo tracing com Jaeger e OpenTelemetry"},
                {code: "123", name: "SRE: entenda a confiabilidade dos sistemas"}
            ],
            "Fase 7: Multicloud e Certificações": [
                {code: "017", name: "AWS Certified Cloud Practitioner: Domain 1 e 2"},
                {code: "018", name: "AWS Certified Cloud Practitioner: Domain 3 e 4"},
                {code: "013", name: "AWS Certification: Solutions Architect Associate Parte 1"},
                {code: "014", name: "AWS Certification: Solutions Architect Associate Parte 2"},
                {code: "015", name: "AWS Certification: Solutions Architect Associate Parte 3"},
                {code: "016", name: "AWS Certification: Solutions Architect Associate Parte 4"},
                {code: "009", name: "Associate Cloud Engineer parte 1"},
                {code: "010", name: "Associate Cloud Engineer parte 2"},
                {code: "024", name: "Azure Cloud: criando um servidor com banco de dados"},
                {code: "025", name: "Azure Cloud: segurança e recursos avançados"}
            ],
            "Fase 8: DevSecOps e Segurança": [
                {code: "040", name: "Desenvolvimento Seguro: estratégias de segurança para dados de entrada"},
                {code: "041", name: "Desenvolvimento Seguro: implementando Secret Scanning e SAST na esteira de CI"},
                {code: "042", name: "Desenvolvimento Seguro: lidando com erros e logs"},
                {code: "039", name: "Desenvolvimento seguro DAST SCA: protegendo dependências"},
                {code: "101", name: "OWASP Top 10: de Injections a Broken Access Control"},
                {code: "102", name: "OWASP Top 10: Security misconfiguration, logging e monitoramento"},
                {code: "049", name: "Firewall ASA: configuração de segurança"}
            ],
            "Fase 9: SRE e Práticas Avançadas": [
                {code: "125", name: "The Twelve-Factor App: metodologia para aplicações robustas"},
                {code: "046", name: "DevOps: trabalhando com tráfego seguro em comunicações web"},
                {code: "090", name: "Microsserviços: conceitos e padrões parte 1"},
                {code: "091", name: "Microsserviços: conceitos e padrões parte 2"},
                {code: "072", name: "Kafka: mensageria parte 1"},
                {code: "073", name: "Kafka: mensageria parte 2"},
                {code: "095", name: "NGINX: servidor Web"},
                {code: "096", name: "NGINX: Proxy Reverso e API Gateway"}
            ]
        };

        let currentCourse = null;
        let progressData = JSON.parse(localStorage.getItem('devopsProgress')) || {};

        function initApp() {
            renderPhases();
            updateStats();
            setupFilters();
        }

        function renderPhases() {
            const container = document.getElementById('phasesContainer');
            container.innerHTML = '';

            Object.keys(coursesData).forEach((phase, index) => {
                const courses = coursesData[phase];
                const completedCount = courses.filter(c => progressData[c.code]?.status === 'done').length;
                const progressPercent = Math.round((completedCount / courses.length) * 100);

                const phaseDiv = document.createElement('div');
                phaseDiv.className = 'phase-container';
                phaseDiv.innerHTML = `
                    <div class="phase-header" onclick="togglePhase(this)">
                        <div class="phase-title">${phase}</div>
                        <div class="phase-progress">${completedCount}/${courses.length} (${progressPercent}%)</div>
                    </div>
                    <div class="courses-grid">
                        ${courses.map(course => renderCourse(course)).join('')}
                    </div>
                `;
                container.appendChild(phaseDiv);
            });
        }

        function renderCourse(course) {
            const data = progressData[course.code] || {status: 'todo', notes: ''};
            const statusClass = data.status === 'done' ? 'completed' : data.status === 'progress' ? 'in-progress' : '';
            const statusLabel = data.status === 'done' ? 'Concluído' : data.status === 'progress' ? 'Em Andamento' : 'A Fazer';
            const statusColor = data.status === 'done' ? 'status-done' : data.status === 'progress' ? 'status-progress' : 'status-todo';

            return `
                <div class="course-item ${statusClass}" data-status="${data.status}">
                    <input type="checkbox" class="checkbox" 
                           ${data.status === 'done' ? 'checked' : ''} 
                           onchange="toggleCourse('${course.code}')">
                    <span class="course-code">(${course.code})</span>
                    <span class="course-name">${course.name}</span>
                    <span class="course-status ${statusColor}">${statusLabel}</span>
                    <button class="notes-btn" onclick="openNotes('${course.code}', '${course.name.replace(/'/g, "\\'")}')">📝</button>
                </div>
            `;
        }

        function toggleCourse(code) {
            if (!progressData[code]) {
                progressData[code] = {status: 'todo', notes: ''};
            }
            
            if (progressData[code].status === 'todo') {
                progressData[code].status = 'progress';
            } else if (progressData[code].status === 'progress') {
                progressData[code].status = 'done';
            } else {
                progressData[code].status = 'todo';
            }

            localStorage.setItem('devopsProgress', JSON.stringify(progressData));
            renderPhases();
            updateStats();
        }

        function togglePhase(header) {
            header.parentElement.classList.toggle('collapsed');
        }

        function updateStats() {
            let total = 0;
            let completed = 0;

            Object.values(coursesData).forEach(courses => {
                total += courses.length;
                completed += courses.filter(c => progressData[c.code]?.status === 'done').length;
            });

            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

            document.getElementById('totalCourses').textContent = total;
            document.getElementById('completedCourses').textContent = completed;
            document.getElementById('progressPercent').textContent = percent + '%';
            
            const progressBar = document.getElementById('mainProgressBar');
            progressBar.style.width = percent + '%';
            progressBar.textContent = percent + '%';
        }

        function setupFilters() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    filterCourses(this.dataset.filter);
                });
            });
        }

        function filterCourses(filter) {
            document.querySelectorAll('.course-item').forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else {
                    const status = item.dataset.status;
                    item.style.display = status === filter ? 'flex' : 'none';
                }
            });
        }

        function openNotes(code, name) {
            currentCourse = code;
            document.getElementById('modalTitle').textContent = `Anotações: ${name}`;
            document.getElementById('notesTextarea').value = progressData[code]?.notes || '';
            document.getElementById('notesModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('notesModal').classList.remove('active');
            currentCourse = null;
        }

        function saveNote() {
            if (!currentCourse) return;
            
            if (!progressData[currentCourse]) {
                progressData[currentCourse] = {status: 'todo', notes: ''};
            }
            
            progressData[currentCourse].notes = document.getElementById('notesTextarea').value;
            localStorage.setItem('devopsProgress', JSON.stringify(progressData));
            closeModal();
            alert('✅ Anotação salva com sucesso!');
        }

        function exportProgress() {
            const data = {
                exportDate: new Date().toISOString(),
                progress: progressData,
                stats: {
                    total: document.getElementById('totalCourses').textContent,
                    completed: document.getElementById('completedCourses').textContent,
                    percent: document.getElementById('progressPercent').textContent
                }
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `devops-progress-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
        }

        window.onclick = function(event) {
            const modal = document.getElementById('notesModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        initApp();
    
