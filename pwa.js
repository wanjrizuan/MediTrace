// Installable PWA feature: existing medication demo logic stays in script.js.
(() => {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost','127.0.0.1'].includes(location.hostname))) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Service worker unavailable:', err)));
  }
  let installEvent = null;
  const installBtn = document.createElement('button');
  installBtn.type = 'button';
  installBtn.textContent = '⬇ Install App';
  installBtn.id = 'pwaInstallBtn';
  installBtn.className = 'pwa-install';
  installBtn.hidden = true;
  const header = document.querySelector('.top');
  if (header) header.insertBefore(installBtn, header.lastElementChild);
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); installEvent = e;
    if (!standalone()) installBtn.hidden = false;
  });
  installBtn.addEventListener('click', async () => {
    if (!installEvent) return;
    const event = installEvent; installEvent = null; installBtn.hidden = true;
    await event.prompt();
  });
  window.addEventListener('appinstalled', () => { installEvent = null; installBtn.hidden = true; });
})();
