(() => {
  const context = document.modelContext ?? navigator.modelContext;
  if (!context?.registerTool) return;

  const joke = "We tried adding a check engine light to our time machine. Now it just says, ‘Remember next Tuesday?’";
  const inputSchema = { type: 'object', properties: {}, additionalProperties: false };
  const annotations = { readOnlyHint: true };

  context.registerTool({
    name: 'discover_winesett',
    description: 'Find the Winesett company homepage and the Winesett Labs project directory.',
    inputSchema,
    annotations,
    execute: () => ({
      company: document.querySelector('main h1').textContent,
      tagline: document.querySelector('main header p').textContent,
      homepage: document.querySelector('link[rel="canonical"]').href,
      projects: document.querySelector('.labs-link').href,
      analytics: 'Visitors can allow or decline HubSpot and Google Analytics in Cookie settings.',
      joke
    })
  });

  context.registerTool({
    name: 'tell_winesett_joke',
    description: 'Tell a short joke from The Time Machine Company.',
    inputSchema,
    annotations,
    execute: () => joke
  });
})();
