/* =============================================================================
 *  ESTADO DA APLICAÇÃO
 * -----------------------------------------------------------------------------
 *  Dados mutáveis da sessão (percorso do quiz, pontuação e progresso).
 *  Tudo que muda em tempo de execução mora aqui para ficar fácil de rastrear.
 * ============================================================================= */
<<<<<<< HEAD
const STATE_STORAGE_KEY = 'cyberquiz_state_v1';

=======
>>>>>>> a7d8cd93f1f2c9e6158539ccc60371634b51f844
const State = {
    moduleIndex: 0,             // módulo atual (índice em MODULES)
    questionIndex: 0,           // questão atual (índice na lista sorteada)
    moduleQuestions: [],        // questões do módulo já embaralhadas (com o gabarito remapeado)
    moduleScore: 0,             // pontos do módulo atual
    globalScore: 0,             // pontos acumulados na sessão
    moduleScores: {},           // melhor pontuação por módulo (evita duplicação ao repetir)
    completedModules: new Set(), // ids dos módulos concluídos (>= CONFIG.quiz.passScore)
    answered: false,            // a questão atual já foi respondida?
    zoomIndex: 0,               // posição atual na lista CONFIG.ui.zoomLevels
    guideModuleId: 'cpu',       // componente aberto no guia de estudo
};
<<<<<<< HEAD

function saveState() {
    try {
        const data = {
            globalScore: State.globalScore,
            moduleScores: State.moduleScores,
            completedModules: Array.from(State.completedModules),
            guideModuleId: State.guideModuleId,
            zoomIndex: State.zoomIndex
        };
        localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        // ignore storage errors (private mode/file://)
    }
}

function loadState() {
    try {
        const raw = localStorage.getItem(STATE_STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (typeof data.globalScore === 'number') State.globalScore = data.globalScore;
        if (data.moduleScores && typeof data.moduleScores === 'object') State.moduleScores = data.moduleScores;
        if (Array.isArray(data.completedModules)) {
            State.completedModules = new Set(data.completedModules);
        }
        if (typeof data.guideModuleId === 'string') State.guideModuleId = data.guideModuleId;
        if (typeof data.zoomIndex === 'number') State.zoomIndex = data.zoomIndex;
    } catch (e) {
        // ignore
    }
}

function resetProgress() {
    try {
        localStorage.removeItem(STATE_STORAGE_KEY);
    } catch (e) {}
    State.globalScore = 0;
    State.moduleScores = {};
    State.completedModules = new Set();
    State.guideModuleId = 'cpu';
    updateGlobalStats();
    if (typeof renderModulesGrid === 'function') renderModulesGrid();
    alert('Progresso reiniciado com sucesso!');
}
=======
>>>>>>> a7d8cd93f1f2c9e6158539ccc60371634b51f844
