let progress = {};

function loadProgress() {
    const saved = JSON.parse(window.localStorage?.getItem('devops-progress') || '{}');
    progress = saved;
}

function saveProgress() {
    window.localStorage?.setItem('devops-progress', JSON.stringify(progress));
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

// Inicialização
loadProgress();
renderPhases();
