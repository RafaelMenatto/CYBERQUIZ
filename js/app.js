/* =============================================================================
 *  BOOTSTRAP - inicialização da aplicação
 * -----------------------------------------------------------------------------
 *  Carregado por último. Apenas prepara o estado inicial e desenha a tela.
 * ============================================================================= */

// nível de zoom inicial (CONFIG.ui.defaultZoom)
<<<<<<< HEAD
loadState();
if (typeof State.zoomIndex !== 'number' || State.zoomIndex < 0 || State.zoomIndex >= CONFIG.ui.zoomLevels.length) {
    State.zoomIndex = Math.max(0, CONFIG.ui.zoomLevels.indexOf(CONFIG.ui.defaultZoom));
}
=======
State.zoomIndex = Math.max(0, CONFIG.ui.zoomLevels.indexOf(CONFIG.ui.defaultZoom));
>>>>>>> a7d8cd93f1f2c9e6158539ccc60371634b51f844

document.addEventListener('DOMContentLoaded', () => {
    renderModulesGrid();   // grade de módulos com as fotos reais
    renderImageCredits();  // créditos de licença das imagens
    updateGlobalStats();   // pontos e módulos concluídos
    applyZoom();           // escala inicial da interface
    updateModulesBtn();    // na tela de módulos o botão vira "MINIGAME"
<<<<<<< HEAD
    if (typeof updateGuideBtnVisibility === 'function') updateGuideBtnVisibility();
=======
>>>>>>> a7d8cd93f1f2c9e6158539ccc60371634b51f844
});
