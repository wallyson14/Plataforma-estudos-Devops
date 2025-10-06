
    <script>
        const coursesData = {
            "Fase 1": {
                objective: "Dominar o terminal, entender o sistema Linux, redes e automação básica",
                courses: [
                    { code: "124", name: "Terminal: aprenda comandos para executar tarefas" },
                    { code: "126", name: "Windows Prompt: utilizando o CMD" },
                    { code: "081", name: "Linux Onboarding: localizando arquivos e conteúdos" },
                    { code: "082", name: "Linux Onboarding: obtendo e tratando informações do sistema" },
                    { code: "083", name: "Linux Onboarding: trabalhe com usuários, permissões e dispositivos" },
                    { code: "084", name: "Linux Onboarding: usando a CLI de uma forma rápida e prática" },
                    { code: "030", name: "Certificação Linux LPI Essentials: Command Line Basics" },
                    { code: "033", name: "Certificação Linux LPI Essentials: Redirecting I/O Redirection" },
                    { code: "118", name: "Scripting: automatizando tarefas com Bash e Docker" },
                    { code: "122", name: "Shell Scripting parte 2: fazendo monitoramento, agendando tarefas e backup" },
                    { code: "113", name: "Redes onboarding: uma perspectiva prática" },
                    { code: "116", name: "Redes: dos conceitos iniciais à criação de uma intranet" },
                    { code: "117", name: "Redes: implementando roteamento, DNS e IPv6" }
                ]
            },
            "Fase 2": {
                objective: "Entender o que é nuvem, os provedores e começar com AWS",
                courses: [
                    { code: "035", name: "Cloud Onboarding: conhecendo os principais provedores parte 2" },
                    { code: "036", name: "Cloud Onboarding: trabalhando com os principais provedores" },
                    { code: "023", name: "AWS: entendendo e controlando os custos dos serviços" },
                    { code: "006", name: "Amazon S3: manipule e armazene objetos na nuvem" },
                    { code: "007", name: "Amazon VPC: configurando redes na AWS" },
                    { code: "002", name: "Amazon EC2: alta disponibilidade e escalabilidade em uma aplicação" },
                    { code: "028", name: "Banco de dados na AWS: gerencie RDS e DynamoDB" },
                    { code: "022", name: "AWS Storage Híbrido: soluções de armazenamento na nuvem" },
                    { code: "097", name: "Observabilidade na AWS: utilizando o CloudWatch" }
                ]
            },
            "Fase 3": {
                objective: "Aprender a automatizar toda a infraestrutura com código",
                courses: [
                    { code: "008", name: "Ansible: implementando sua infraestrutura como código" },
                    { code: "059", name: "Infraestrutura como código: montando uma infraestrutura elástica na AWS" },
                    { code: "060", name: "Infraestrutura como código: preparando máquinas na AWS com Ansible e Terraform" },
                    { code: "061", name: "Infraestrutura como código: separando ambientes na AWS com Ansible e Terraform" },
                    { code: "062", name: "Infraestrutura como código: Terraform e Kubernetes" },
                    { code: "063", name: "Infraestrutura como código: Terraform, Docker e Elastic Container Service" },
                    { code: "058", name: "Infraestrutura como código: Docker e Elastic Beanstalk na AWS" }
                ]
            },
            "Fase 4": {
                objective: "Dominar Docker e Kubernetes — base do DevOps moderno",
                courses: [
                    { code: "047", name: "Docker: criando e gerenciando containers" },
                    { code: "043", name: "DevOps: construindo e gerindo containers com o Docker" },
                    { code: "003", name: "Amazon ECS: gerencie Docker na nuvem da AWS" },
                    { code: "004", name: "Amazon EKS: gerenciando aplicações conteinerizadas com Kubernetes" },
                    { code: "079", name: "Kubernetes: Pods, Services e ConfigMaps" },
                    { code: "078", name: "Kubernetes: Deployments, Volumes e Escalabilidade" },
                    { code: "080", name: "Kubernetes: prática, Helm e Cloud" },
                    { code: "077", name: "Kubernetes na Digital Ocean: gerenciando aplicações conteinerizadas" }
                ]
            },
            "Fase 5": {
                objective: "Dominar automação, integração contínua e entrega contínua",
                courses: [
                    { code: "045", name: "DevOps: trabalhando com repositórios no GitHub" },
                    { code: "064", name: "Integração Contínua: automatizando a entrega no Kubernetes" },
                    { code: "065", name: "Integração Contínua: automatize o deploy no Amazon ECS" },
                    { code: "066", name: "Integração Contínua: mais qualidade e menos risco no desenvolvimento" },
                    { code: "067", name: "Integração Contínua: Pipeline de entrega e implementação contínua na EC2" },
                    { code: "068", name: "Integração Contínua: Pipeline Docker no GitHub Actions" },
                    { code: "070", name: "Integração Contínua: testes automatizados e pipeline no GitHub Actions" },
                    { code: "071", name: "Jenkins e Docker: Pipeline de entrega contínua" },
                    { code: "048", name: "Entrega Contínua: confiabilidade e qualidade na implantação de software" },
                    { code: "069", name: "Integração Contínua: Rollback e teste de carga" }
                ]
            },
            "Fase 6": {
                objective: "Aprender a medir, rastrear e reagir aos problemas de produção",
                courses: [
                    { code: "037", name: "Confiabilidade: centralizando logs com Grafana Loki" },
                    { code: "038", name: "Confiabilidade: garantindo o estado de integridade de sistemas através de logs" },
                    { code: "094", name: "Monitoramento: Prometheus, Grafana e Alertmanager" },
                    { code: "098", name: "Observabilidade: coletando métricas de uma aplicação com Prometheus" },
                    { code: "112", name: "Rastreamento: fazendo tracing com Jaeger e OpenTelemetry" },
                    { code: "123", name: "SRE: entenda a confiabilidade dos sistemas" }
                ]
            },
            "Fase 7": {
                objective: "Se preparar para certificações e aprender outras clouds",
                courses: [
                    { code: "017", name: "AWS Certified Cloud Practitioner: Domain 1 e 2" },
                    { code: "018", name: "AWS Certified Cloud Practitioner: Domain 3 e 4" },
                    { code: "013", name: "AWS Certification: Solutions Architect Associate Parte 1" },
                    { code: "014", name: "AWS Certification: Solutions Architect Associate Parte 2" },
                    { code: "015", name: "AWS Certification: Solutions Architect Associate Parte 3" },
                    { code: "016", name: "AWS Certification: Solutions Architect Associate Parte 4" },
                    { code: "019", name: "AWS Certified Solutions Architect Associate: simulado comentado" },
                    { code: "009", name: "Associate Cloud Engineer parte 1" },
                    { code: "010", name: "Associate Cloud Engineer parte 2" },
                    { code: "011", name: "Associate Cloud Engineer parte 3" },
                    { code: "012", name: "Associate Cloud Engineer parte 4" },
                    { code: "050", name: "Google Associate Cloud Engineer: simulado comentado" },
                    { code: "051", name: "Google Cloud Compute Engine" },
                    { code: "052", name: "Google Cloud Endpoints" },
                    { code: "053", name: "Google Cloud Functions" },
                    { code: "054", name: "Google Cloud Serverless" },
                    { code: "055", name: "Google Cloud Storage" },
                    { code: "056", name: "Google Kubernetes Engine" },
                    { code: "057", name: "Google Kubernetes Engine: avançando com GKE" },
                    { code: "024", name: "Azure Cloud: criando um servidor com banco de dados" },
                    { code: "025", name: "Azure Cloud: segurança e recursos avançados" },
                    { code: "026", name: "Azure Functions: incorpore funções" },
                    { code: "027", name: "Azure: gerencie Kubernetes com AKS e ACR" },
                    { code: "085", name: "Microsoft AZ-900: Azure Fundamentals parte 1" },
                    { code: "086", name: "Microsoft AZ-900: Azure Fundamentals parte 2" },
                    { code: "087", name: "Microsoft AZ-900: Azure Fundamentals parte 3" },
                    { code: "088", name: "Microsoft AZ-900: Azure Fundamentals parte 4" },
                    { code: "089", name: "Microsoft AZ-900: Simulado" }
                ]
            },
            "Fase 8": {
                objective: "Integrar segurança desde o desenvolvimento até a operação",
                courses: [
                    { code: "040", name: "Desenvolvimento Seguro: estratégias de segurança para dados de entrada" },
                    { code: "041", name: "Desenvolvimento Seguro: implementando Secret Scanning e SAST na esteira de CI" },
                    { code: "042", name: "Desenvolvimento Seguro: lidando com erros e logs" },
                    { code: "039", name: "Desenvolvimento seguro DAST SCA: protegendo dependências" },
                    { code: "101", name: "OWASP Top 10: de Injections a Broken Access Control" },
                    { code: "102", name: "OWASP Top 10: Security misconfiguration, logging e monitoramento" },
                    { code: "104", name: "OWASP: padrão de verificação de segurança de aplicações parte 1" },
                    { code: "105", name: "OWASP: padrão de verificação de segurança de aplicações parte 2" },
                    { code: "106", name: "OWASP: padrão de verificação de segurança de aplicações parte 3" },
                    { code: "107", name: "Pentest: exploração e vulnerabilidades web parte 1" },
                    { code: "108", name: "Pentest: exploração e vulnerabilidades web parte 2" },
                    { code: "109", name: "Pentest: exploração e vulnerabilidades web parte 3" },
                    { code: "119", name: "Segurança de rede: conceitos fundamentais" },
                    { code: "120", name: "Segurança de rede: firewall e WAF" },
                    { code: "121", name: "Segurança de rede: SIEM, proxy reverso, SSH e DNS" },
                    { code: "049", name: "Firewall ASA: configuração de segurança" },
                    { code: "093", name: "Modelagem de ameaças: identifique riscos na concepção do software" }
                ]
            },
            "Fase 9": {
                objective: "Consolidar conhecimento, criar projetos e atuar com visão SRE",
                courses: [
                    { code: "125", name: "The Twelve-Factor App: metodologia para aplicações robustas" },
                    { code: "046", name: "DevOps: trabalhando com tráfego seguro em comunicações web" },
                    { code: "090", name: "Microsserviços: conceitos fundamentais" },
                    { code: "091", name: "Microsserviços: padrões de projeto" },
                    { code: "092", name: "Microsserviços: implementando com Node.js" },
                    { code: "072", name: "Kafka: produtores, consumidores e streams" },
                    { code: "073", name: "Kafka: fast delegate, evolução e cluster de brokers" },
                    { code: "074", name: "Kafka: batches, correlation ids e dead letters" },
                    { code: "075", name: "Kafka: idempotência e garantias" },
                    { code: "076", name: "Kafka Cluster: avançando em streams" },
                    { code: "095", name: "NGINX: servidor Web" },
                    { code: "096", name: "NGINX: Proxy Reverso e API Gateway" }
                ]
            }
        };

        let progress = {};

        function loadProgress() {
            const saved = JSON.parse(window.localStorage?.getItem('devops-progress') || '{}');
            progress = saved;
        }

        function saveProgress() {
            // State is already in memory via the progress object
        }

        function renderPhases() {
            const container = document.getElementById('phases-container');
            container.innerHTML = '';

            Object.entries(coursesData).forEach(([phaseName, phaseData], phaseIndex) => {
                const phaseDiv = document.createElement('div');
                phaseDiv.className = 'phase';

                const completed = phaseData.courses.filter(c => progress[c.code]).length;
                const total = phaseData.courses.length;
                const percentage = Math.round((completed / total) * 100);

                phaseDiv.innerHTML = `
                    <div class="phase-header" onclick="togglePhase(${phaseIndex})">
                        <div>
                            <div class="phase-title">🎯 ${phaseName} - Fundamentos ${phaseIndex === 0 ? 'de Linux e Redes' : phaseIndex === 1 ? 'de Cloud e AWS' : phaseIndex === 2 ? 'de IaC' : phaseIndex === 3 ? 'de Containers' : phaseIndex === 4 ? 'de CI/CD' : phaseIndex === 5 ? 'de Observabilidade' : phaseIndex === 6 ? 'Multicloud' : phaseIndex === 7 ? 'DevSecOps' : 'SRE'}</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div class="phase-progress">${completed}/${total} (${percentage}%)</div>
                            <div class="toggle-icon" id="toggle-${phaseIndex}">▼</div>
                        </div>
                    </div>
                    <div class="phase-content" id="content-${phaseIndex}">
                        <div class="objective">
                            <strong>🎯 Objetivo:</strong> ${phaseData.objective}
                        </div>
                        <div id="courses-${phaseIndex}"></div>
                    </div>
                `;

                container.appendChild(phaseDiv);

                const coursesContainer = document.getElementById(`courses-${phaseIndex}`);
                phaseData.courses.forEach(course => {
                    const courseDiv = document.createElement('div');
                    courseDiv.className = `course-item ${progress[course.code] ? 'completed' : ''}`;
                    courseDiv.innerHTML = `
                        <input type="checkbox" class="checkbox" ${progress[course.code] ? 'checked' : ''} 
                               onchange="toggleCourse('${course.code}')">
                        <span class="course-code">${course.code}</span>
                        <span class="course-name">${course.name}</span>
                    `;
                    coursesContainer.appendChild(courseDiv);
                });
            });

            updateStats();
        }

        function togglePhase(index) {
            const content = document.getElementById(`content-${index}`);
            const icon = document.getElementById(`toggle-${index}`);
            
            content.classList.toggle('active');
            icon.classList.toggle('active');
        }

        function toggleCourse(code) {
            progress[code] = !progress[code];
            saveProgress();
            renderPhases();
        }

        function updateStats() {
            const total = Object.values(coursesData).reduce((sum, phase) => sum + phase.courses.length, 0);
            const completed = Object.values(progress).filter(Boolean).length;
            const percentage = Math.round((completed / total) * 100);

            const phasesCompleted = Object.values(coursesData).filter(phase => {
                const phaseCompleted = phase.courses.filter(c => progress[c.code]).length;
                return phaseCompleted === phase.courses.length;
            }).length;

            document.getElementById('completed-count').textContent = completed;
            document.getElementById('total-count').textContent = total;
            document.getElementById('phases-completed').textContent = `${phasesCompleted}/9`;
            document.getElementById('progress-fill').style.width = `${percentage}%`;
            document.getElementById('progress-fill').textContent = `${percentage}%`;
        }

        function resetProgress() {
            if (confirm('Tem certeza que deseja resetar todo o progresso?')) {
                progress = {};
                saveProgress();
                renderPhases();
            }
        }

        loadProgress();
        renderPhases();
    </script>
