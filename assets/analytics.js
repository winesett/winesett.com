(() => {
  if (!['winesett.com', 'www.winesett.com'].includes(location.hostname)) return;

  const key = 'winesett-analytics-consent-v2';
  const measurementId = 'G-8DKSDREY9Q';
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

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(tag);
  }

  function save(value) {
    try { localStorage.setItem(key, value); } catch { /* Apply for this page only. */ }
    showSettings(false);
    settings.focus();
    if (value === 'allow') {
      loadAnalytics();
    } else if (document.getElementById('hs-script-loader')) {
      window['ga-disable-' + measurementId] = true;
      for (const name of ['_ga', '_ga_' + measurementId.slice(2)]) {
        document.cookie = name + '=; Max-Age=0; Path=/; Domain=winesett.com';
        document.cookie = name + '=; Max-Age=0; Path=/';
      }
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
