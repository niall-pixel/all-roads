/* ============================================================
   ALLROADS — Simple Hash Router
   ============================================================ */

const routes = {};
let currentCleanup = null;

export function registerRoute(path, { render, init }) {
    routes[path] = { render, init };
}

export function navigate(path) {
    window.location.hash = path;
}

export function startRouter(outletId) {
    const outlet = document.getElementById(outletId);
    if (!outlet) return;

    function handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        let route = routes[hash];

        // Prefix matching for wildcard routes (e.g. '/product/*')
        if (!route) {
            for (const [pattern, r] of Object.entries(routes)) {
                if (pattern.endsWith('/*') && hash.startsWith(pattern.slice(0, -2) + '/')) {
                    route = r;
                    break;
                }
            }
        }

        // Cleanup previous page
        if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup();
        }

        if (route) {
            // Fade out
            outlet.style.opacity = '0';
            outlet.style.transform = 'translateY(12px)';

            setTimeout(() => {
                outlet.innerHTML = route.render();
                window.scrollTo({ top: 0, behavior: 'instant' });

                // Fade in
                requestAnimationFrame(() => {
                    outlet.style.opacity = '1';
                    outlet.style.transform = 'translateY(0)';
                });

                // Initialize page interactivity
                if (route.init) {
                    currentCleanup = route.init();
                }

                // Update active nav links
                updateActiveNav(hash);
            }, 200);
        } else {
            // Fallback to home
            window.location.hash = '/';
        }
    }

    // Style the outlet for transitions
    outlet.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Initial route
}

function updateActiveNav(hash) {
    document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${hash}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
