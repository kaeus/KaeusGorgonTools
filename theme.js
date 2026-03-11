// Apply theme immediately before paint to prevent FOUC
(function () {
    var theme = localStorage.getItem('gorgon-theme') || 'light';
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
})();

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    var wrapper = document.createElement('div');
    wrapper.className = 'settings-wrapper';
    wrapper.innerHTML =
        '<button class="cog-btn" id="cogBtn" title="Settings" aria-label="Settings">⚙</button>' +
        '<div class="settings-dropdown" id="settingsDropdown">' +
        '<div class="settings-section-label">Appearance</div>' +
        '<label class="settings-item theme-toggle-label">' +
        '<span>Dark Mode</span>' +
        '<span class="toggle-track' + (isDark ? ' on' : '') + '" id="toggleTrack">' +
        '<span class="toggle-thumb"></span>' +
        '</span>' +
        '</label>' +
        '</div>';

    nav.appendChild(wrapper);

    var cogBtn = document.getElementById('cogBtn');
    var dropdown = document.getElementById('settingsDropdown');
    var track = document.getElementById('toggleTrack');

    cogBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function () {
        dropdown.classList.remove('open');
    });

    // Prevent closing when clicking inside the dropdown
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.getElementById('toggleTrack').closest('label').addEventListener('click', function (e) {
        e.preventDefault();
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (dark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('gorgon-theme', 'light');
            track.classList.remove('on');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('gorgon-theme', 'dark');
            track.classList.add('on');
        }
    });
});
