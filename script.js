const modulesData = [
  {
    title: "🧩 Fase 1 — Fundamentos de Linux, Redes e Automação",
    goal: "Dominar terminal, shell scripting e redes.",
    lessons: [
      "Terminal: aprenda comandos para executar tarefas",
      "Windows Prompt: utilizando o CMD",
      "Linux Onboarding: localizando arquivos e conteúdos",
      "Linux Onboarding: obtendo e tratando informações do sistema",
      "Linux Onboarding: usuários, permissões e dispositivos",
      "Scripting: automatizando tarefas com Bash e Docker",
      "Shell Scripting parte 2: monitoramento, tarefas e backup",
      "Redes onboarding: uma perspectiva prática",
      "Redes: dos conceitos iniciais à criação de uma intranet",
      "Redes: roteamento, DNS e IPv6"
    ]
  },
  {
    title: "☁️ Fase 2 — Fundamentos de Cloud e AWS",
    goal: "Entender nuvem e iniciar com AWS.",
    lessons: [
      "Cloud Onboarding: conhecendo provedores",
      "Cloud Onboarding: trabalhando com provedores",
      "AWS: entendendo e controlando custos",
      "Amazon S3: armazenando objetos",
      "Amazon VPC: redes na AWS",
      "Amazon EC2: alta disponibilidade",
      "Banco de dados na AWS (RDS/DynamoDB)",
      "AWS Storage Híbrido",
      "Observabilidade na AWS"
    ]
  },
  {
    title: "🧱 Fase 3 — Infraestrutura como Código (IaC)",
    goal: "Automatizar tudo com Ansible e Terraform.",
    lessons: [
      "Ansible: infraestrutura como código",
      "IaC: infraestrutura elástica na AWS",
      "IaC: preparando máquinas com Ansible e Terraform",
      "IaC: separando ambientes AWS",
      "IaC: Terraform e Kubernetes",
      "IaC: Terraform, Docker e ECS",
      "IaC: Docker e Elastic Beanstalk"
    ]
  },
  {
    title: "🐳 Fase 4 — Contêineres e Orquestração",
    goal: "Dominar Docker, ECS e Kubernetes.",
    lessons: [
      "Docker: criando e gerenciando containers",
      "DevOps: containers com Docker",
      "Amazon ECS: Docker na AWS",
      "Amazon EKS: Kubernetes gerenciado",
      "Kubernetes: Pods, Services e ConfigMaps",
      "Kubernetes: Deployments, Volumes, Escalabilidade",
      "Kubernetes: prática, Helm e Cloud",
      "Kubernetes na Digital Ocean"
    ]
  },
  {
    title: "⚙️ Fase 5 — Integração e Entrega Contínua (CI/CD)",
    goal: "Automatizar build, testes e deploys.",
    lessons: [
      "DevOps: GitHub e repositórios",
      "CI: entrega no Kubernetes",
      "CI: deploy no ECS",
      "CI: qualidade e risco reduzido",
      "CI: pipeline EC2",
      "CI: pipeline Docker GitHub Actions",
      "CI: testes automatizados",
      "Jenkins e Docker: pipeline completa",
      "Entrega Contínua: confiabilidade e qualidade",
      "CI: rollback e teste de carga"
    ]
  },
  {
    title: "🔍 Fase 6 — Observabilidade e Confiabilidade (SRE)",
    goal: "Monitorar e garantir disponibilidade.",
    lessons: [
      "Grafana Loki: logs centralizados",
      "Logs e integridade",
      "Prometheus, Grafana e Alertmanager",
      "Observabilidade: métricas com Prometheus",
      "Jaeger e OpenTelemetry",
      "SRE: fundamentos de confiabilidade"
    ]
  },
  {
    title: "🛡️ Fase 8 — DevSecOps e Segurança",
    goal: "Integrar segurança ao ciclo DevOps.",
    lessons: [
      "Desenvolvimento Seguro",
      "OWASP Top 10 e padrões de verificação",
      "Pentest em aplicações web",
      "Segurança de rede e WAF",
      "Modelagem de ameaças"
    ]
  },
  {
    title: "🏁 Fase 9 — Consolidação e Projeto Final",
    goal: "Unir tudo em um projeto DevOps real.",
    lessons: [
      "The Twelve-Factor App",
      "Tráfego seguro e HTTPS",
      "Microsserviços",
      "Kafka e Streams",
      "NGINX e Proxy reverso"
    ]
  }
];

// === Renderização dinâmica ===
const container = document.getElementById("modules");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

function renderModules() {
  modulesData.forEach((mod, index) => {
    const moduleDiv = document.createElement("div");
    moduleDiv.classList.add("module");

    const header = document.createElement("div");
    header.classList.add("module-header");
    header.innerHTML = `<h2>${mod.title}</h2><span>▼</span>`;

    const content = document.createElement("div");
    content.classList.add("module-content");

    const desc = document.createElement("p");
    desc.innerText = mod.goal;
    content.appendChild(desc);

    const ul = document.createElement("ul");
    mod.lessons.forEach((lesson) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${index}-${lesson}`;
      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = lesson;

      li.appendChild(checkbox);
      li.appendChild(label);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    moduleDiv.appendChild(header);
    moduleDiv.appendChild(content);
    container.appendChild(moduleDiv);

    header.addEventListener("click", () => {
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
}

// === Progresso ===
function updateProgress() {
  const all = document.querySelectorAll("input[type='checkbox']");
  const checked = document.querySelectorAll("input[type='checkbox']:checked");
  const percent = Math.round((checked.length / all.length) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `Progresso Total: ${percent}%`;
}

document.addEventListener("change", updateProgress);

renderModules();
