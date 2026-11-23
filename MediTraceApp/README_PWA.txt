MEDITRACE — INSTALLABLE PWA (presentation demo)

1. Copy ALL files and the images folder to your MediTraceApp directory, replacing previous versions after backup.
2. Open index.html with VS Code Live Server. Check that Home, Calendar, Medications, Settings and Premium work.
3. Upload the entire folder to HTTPS static hosting such as Cloudflare Pages.
4. Android Chrome: open the HTTPS site, choose three-dot menu > Install app / Add to Home screen; accept the prompt.
5. iPhone Safari: open the HTTPS site, tap Share > Add to Home Screen > Add.
6. The installed icon uses MediTrace's calendar/pill/bell mark, without the long wordmark.

NOTES:
- Link 127.0.0.1:5500 works only on your own computer, not your friends' phones. Hosting is needed for sharing/installing on other devices.
- Install buttons appear only if the browser provides an install prompt; use the browser menu otherwise.
- Data is stored per browser/device via localStorage, not shared among users.
- Reminder notifications are a demo, not background medication alarms.
- When updating online PWA assets, refresh/sw cache may require reload; bump CACHE version in sw.js on subsequent releases.
