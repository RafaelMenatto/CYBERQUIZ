/* =============================================================================
 *  CYBERQUIZ · MONTAGEM DE PC 3D — INICIALIZAÇÃO
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

        try { window.PCMBuilder.init(); } catch (err) { console.error('[3D]', err); }

        const reset = document.getElementById('build-reset');
        if (reset) reset.addEventListener('click', () => { Sound.play('click'); window.PCMBuilder.reset(); });

        const rotate = document.getElementById('build-rotate');
        if (rotate) rotate.addEventListener('click', () => { Sound.play('click'); window.PCMBuilder.rotate(); });

        const again = document.querySelector('[data-build-again]');
        if (again) again.addEventListener('click', () => { Sound.play('click'); window.PCMBuilder.reset(); });

        // botão LIGAR — aparece quando o PC fica completo
        const power = document.getElementById('build-power');
        if (power) {
            power.addEventListener('click', () => {
                if (power.disabled) return;
                window.PCMBuilder.powerOn();
            });
        }

        // "ver o PC ligado": esconde o resumo para admirar o PC aceso
        const view = document.querySelector('[data-build-view]');
        if (view) {
            view.addEventListener('click', () => {
                Sound.play('click');
                const win = document.getElementById('build-win');
                if (win) win.classList.add('hidden');
                // o foco estava dentro do resumo que acabou de sumir
                const rot = document.getElementById('build-rotate');
                if (rot) rot.focus();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

    // atalho: R gira o gabinete
    document.addEventListener('keydown', (ev) => {
        if (ev.ctrlKey || ev.metaKey || ev.altKey) return;      // Ctrl+R = recarregar
        const alvo = ev.target;
        if (alvo && alvo.closest && alvo.closest('input, textarea, select, [contenteditable="true"]')) return;
        if ((ev.key === 'r' || ev.key === 'R') && window.PCMBuilder) window.PCMBuilder.rotate();
    });
})();
