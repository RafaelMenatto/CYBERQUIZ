/* =============================================================================
 *  CYBERQUIZ · JOGO DA MEMÓRIA — INICIALIZAÇÃO
 * ============================================================================= */

(function () {
    'use strict';

    function setupSound() {
        const btn = document.getElementById('sound-btn');
        if (!btn) return;

        function paint() {
            const on = Sound.enabled;
            btn.setAttribute('aria-pressed', String(on));
            btn.classList.toggle('muted', !on);
            btn.innerHTML = '<i class="fa-solid ' + (on ? 'fa-volume-high' : 'fa-volume-xmark') + '" aria-hidden="true"></i>' +
                '<span>' + (on ? 'SOM ON' : 'SOM OFF') + '</span>';
        }

        btn.addEventListener('click', () => { Sound.setEnabled(!Sound.enabled); paint(); });
        paint();
    }

    function boot() {
        setupSound();
        try { MemoryGame.init(); } catch (err) { console.error('[memória]', err); }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
