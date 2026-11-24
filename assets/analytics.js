(() => {
  if (!['winesett.com', 'www.winesett.com'].includes(location.hostname)) return;

  const key = 'winesett-analytics-consent';
  const panel = document.querySelector('#cookie-panel');
  const settings = document.querySelector('#cookie-settings');
  const decline = document.querySelector('#cookie-decline');
  let choice;
  try { choice = localStorage.getItem(key); } catch { /* Storage is optional. */ }

  function showSettings(open) {
    panel.hidden = !open;
    settings.hidden = open;
  }

  function loadAnalytics() {
    if (document.getElementById('hs-script-loader')) return;
    const script = document.createElement('script');
    script.id = 'hs-script-loader';
    script.async = true;
    script.src = 'https://js-na2.hs-scripts.com/248114120.js';
    document.head.append(script);
  }

  function save(value) {
    try { localStorage.setItem(key, value); } catch { /* Apply for this page only. */ }
    showSettings(false);
    settings.focus();
    if (value === 'allow') {
      loadAnalytics();
    } else if (document.getElementById('hs-script-loader')) {
      window._hsp = window._hsp || [];
      window._hsp.push(['revokeCookieConsent']);
      location.reload();
    }
  }

  document.querySelector('.cookie-controls').hidden = false;
  showSettings(!['allow', 'decline'].includes(choice));
  settings.addEventListener('click', () => { showSettings(true); decline.focus(); });
  decline.addEventListener('click', () => save('decline'));
  document.querySelector('#cookie-allow').addEventListener('click', () => save('allow'));
  if (choice === 'allow') loadAnalytics();
})();
