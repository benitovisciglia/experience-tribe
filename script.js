document.addEventListener('DOMContentLoaded', () => {
    const isAuth = localStorage.getItem('et_auth') || localStorage.getItem('tribe_auth');
    if (isAuth === 'true') {
        loadApp();
    }
    
    // Anti-Zoom logic
    document.addEventListener('touchstart', e => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
    let lastTouchEnd = 0;
    document.addEventListener('touchend', e => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) e.preventDefault();
        lastTouchEnd = now;
    }, false);
});

document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = e => {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 67, 74].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) return false;
};

function checkAuth() {
    const pass = document.getElementById('password-input').value || document.getElementById('passwordInput').value;
    if(pass === THE_PASSWORD) {
        localStorage.setItem('et_auth', 'true');
        localStorage.setItem('tribe_auth', 'true');
        loadApp();
    } else {
        const err = document.getElementById('auth-error');
        if(err) { err.classList.remove('hidden'); setTimeout(() => err.classList.add('hidden'), 3000); }
    }
}

function loadApp() {
    document.getElementById('loginPage')?.classList.add('hidden');
    document.getElementById('auth-container')?.classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    renderHero();
    renderVideos();
}

function logout() {
    localStorage.clear();
    location.reload();
}

function renderHero() {
    document.getElementById('heroTitle').innerText = HERO_VIDEO.title;
    document.getElementById('heroDesc').innerText = HERO_VIDEO.desc;
    document.getElementById('heroPlayer').innerHTML = `
        <video controls playsinline class="w-full h-full object-cover">
            <source src="${HERO_VIDEO.id}" type="video/mp4">
        </video>`;
}

window.scrollRow = (id, dir) => {
    const row = document.getElementById(id);
    const card = row.querySelector('.video-card');
    if (card) {
        const step = card.offsetWidth + (parseFloat(getComputedStyle(row).gap) || 24);
        row.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
};

function renderVideos(search = "") {
    const container = document.getElementById('categoriesContainer');
    const hero = document.getElementById('heroSection');
    if(!container) return;
    container.innerHTML = "";

    if (search.trim().length > 0) {
        hero.classList.add('hidden');
        hero.querySelector('video')?.pause();
    } else {
        hero.classList.remove('hidden');
    }

    categories.forEach((cat, idx) => {
        const filtered = cat.videos.filter(v => v.title.toLowerCase().includes(search.toLowerCase()));
        if (filtered.length === 0) return;

        const rowId = `row-${idx}`;
        const vcards = filtered.map(v => `
            <div class="video-card">
                <div class="aspect-video bg-black">
                    <video preload="metadata" poster="${v.poster || 'favicon.png'}" playsinline class="w-full h-full object-cover"
                           onclick="this.paused ? (this.play(), this.controls=true) : (this.pause())">
                        <source src="${v.id.replace('dl=0', 'raw=1')}#t=0.5" type="video/mp4">
                    </video>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-[11px] text-zinc-100 uppercase line-clamp-2 h-8 leading-tight">${v.title}</h3>
                    <div class="mt-3 flex items-center justify-between">
                        <span class="text-[8px] text-blue-500 font-black tracking-widest uppercase">Academy</span>
                        <i class="fas fa-bolt text-blue-500 text-[8px]"></i>
                    </div>
                </div>
            </div>`).join('');

        container.innerHTML += `
            <div class="category-header">
                <h2 class="category-title"><i class="fas fa-play play-icon"></i> ${cat.name}</h2>
                <div class="nav-controls">
                    <button class="nav-btn" onclick="scrollRow('${rowId}', -1)"><i class="fas fa-chevron-left"></i></button>
                    <button class="nav-btn" onclick="scrollRow('${rowId}', 1)"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div id="${rowId}" class="video-row">${vcards}</div>`;
    });
}

// Event Listeners
document.getElementById('searchInput')?.addEventListener('input', e => renderVideos(e.target.value));
document.getElementById('password-input')?.addEventListener('keypress', e => { if(e.key === 'Enter') checkAuth(); });
