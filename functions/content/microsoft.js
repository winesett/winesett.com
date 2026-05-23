/**
 * Microsoft Case Study - Teaser and Full HTML content
 * Replace placeholders with your actual content, screenshots, process diagrams, etc.
 */

export const teaserHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Microsoft AI Collaboration Suite • Winesett</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600&amp;display=swap');
    
    body { font-family: 'Inter', system_ui, sans-serif; }
    .font-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }

    .blurred-content {
      filter: blur(8px);
      user-select: none;
      pointer-events: none;
      opacity: 0.95;
    }

    .case-study-hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
    }

    .metric-card {
      transition: transform 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .modal {
      animation: modalPop 0.2s cubic-bezier(0.32, 0.72, 0, 1);
    }

    @keyframes modalPop {
      from { opacity: 0; transform: translateY(20px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .nav-link { transition: color 0.1s ease; }
    .nav-link:hover { color: #0f172a; }
  </style>
</head>
<body class="bg-white text-slate-900">
  <!-- NAV -->
  <nav class="border-b border-slate-200 bg-white/95 backdrop-blur-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-x-3">
        <a href="/" class="flex items-center gap-x-2.5">
          <div class="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center">
            <span class="text-white text-xl font-semibold tracking-tighter">W</span>
          </div>
          <span class="font-semibold text-2xl tracking-tighter">Winesett</span>
        </a>
      </div>
      
      <div class="flex items-center gap-x-8 text-sm font-medium">
        <a href="/" class="nav-link text-slate-600 hover:text-slate-900">Home</a>
        <a href="/work" class="nav-link text-slate-600 hover:text-slate-900">Work</a>
        <a href="/about" class="nav-link text-slate-600 hover:text-slate-900">About</a>
        <a href="/contact" class="nav-link text-slate-600 hover:text-slate-900">Contact</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <div class="case-study-hero text-white">
    <div class="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <div class="flex items-center gap-x-3 mb-6">
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-medium tracking-[1px] border border-white/20">ENTERPRISE • 2025</div>
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-600 text-xs font-semibold tracking-wider">MICROSOFT</div>
      </div>
      
      <h1 class="font-display text-6xl tracking-tighter font-semibold leading-none mb-4">AI-Powered<br>Collaboration Suite</h1>
      <p class="max-w-lg text-xl text-white/80">Designing and building the internal AI assistant and knowledge platform rolled out to 180,000 Microsoft employees.</p>
      
      <div class="flex items-center gap-x-4 mt-8 text-sm">
        <div class="flex -space-x-2">
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/1005/32/32" class="object-cover"></div>
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/201/32/32" class="object-cover"></div>
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/29/32/32" class="object-cover"></div>
        </div>
        <span class="text-white/70 text-sm">Design Systems Lead • 11 months</span>
      </div>
    </div>
  </div>

  <!-- BLURRED TEASER CONTENT -->
  <div class="blurred-content max-w-5xl mx-auto px-6 pt-12 pb-24">
    <div class="grid md:grid-cols-12 gap-x-12">
      <div class="md:col-span-7">
        <div class="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">THE CHALLENGE</div>
        <h2 class="font-display text-4xl tracking-tighter font-semibold leading-none mb-6">Knowledge was scattered across 40+ tools. AI was underutilized.</h2>
        
        <div class="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-600">
          <p>Microsoft wanted every employee to have a personal AI assistant deeply integrated with internal knowledge bases, documents, and communication tools — while maintaining enterprise-grade security and compliance.</p>
          <p class="mt-4">Previous attempts at internal AI tools had low adoption because they felt bolted-on and required constant context switching.</p>
        </div>
      </div>
      
      <div class="md:col-span-5 mt-10 md:mt-0">
        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8">
          <div class="text-xs uppercase tracking-widest text-slate-500 mb-4">KEY OUTCOMES (TEASER)</div>
          <div class="space-y-6">
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">68%</div>
              <div class="text-sm text-slate-600 mt-1">of employees use the assistant weekly</div>
            </div>
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">4.2 hrs</div>
              <div class="text-sm text-slate-600 mt-1">Average time saved per employee / week</div>
            </div>
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">94</div>
              <div class="text-sm text-slate-600 mt-1">Internal NPS after 6 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <div class="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">OUR APPROACH</div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-users text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Cross-Org Research</div>
          <p class="text-sm text-slate-600 leading-relaxed">Worked with 11 different Microsoft business units to understand how knowledge work actually happens across engineering, sales, marketing, and legal.</p>
        </div>
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-shield-halved text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Trust &amp; Safety First</div>
          <p class="text-sm text-slate-600 leading-relaxed">Designed guardrails, citation systems, and human-in-the-loop review flows before any generative feature was released.</p>
        </div>
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-puzzle-piece text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Native Integration</div>
          <p class="text-sm text-slate-600 leading-relaxed">Deep hooks into Microsoft 365 Graph, Teams, SharePoint, and internal wikis so the assistant felt native everywhere.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PASSWORD MODAL -->
  <div id="password-modal" class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 backdrop-blur-md">
    <div class="modal w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      <div class="px-8 pt-8 pb-6">
        <div class="flex justify-center mb-5">
          <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
            <i class="fa-solid fa-lock text-3xl"></i>
          </div>
        </div>
        
        <h3 class="text-center font-semibold text-2xl tracking-tight">This case study is confidential</h3>
        <p class="text-center text-slate-600 mt-2 text-[15px]">Enter the shared password to unlock the full case study.</p>
        
        <form id="password-form" class="mt-7">
          <div>
            <label for="password-input" class="block text-xs font-medium tracking-wider text-slate-500 mb-1.5">PASSWORD</label>
            <input 
              type="password" 
              id="password-input" 
              class="w-full border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 rounded-2xl px-5 py-3.5 text-base placeholder:text-slate-400 outline-none transition-all" 
              placeholder="Enter password" 
              required
              autocomplete="off"
            >
          </div>
          
          <div id="error-message" class="hidden mt-3 text-sm text-red-600 flex items-center gap-x-2">
            <i class="fa-solid fa-exclamation-circle"></i>
            <span>Incorrect password. Please try again.</span>
          </div>
          
          <button 
            type="submit"
            id="submit-btn"
            class="mt-5 w-full bg-slate-900 hover:bg-black active:bg-slate-950 transition-colors text-white font-semibold tracking-wider text-sm py-4 rounded-2xl flex items-center justify-center gap-x-2"
          >
            <span id="btn-text">Unlock Case Study</span>
            <span id="btn-spinner" class="hidden"><i class="fa-solid fa-spinner fa-spin"></i></span>
          </button>
        </form>
      </div>
      
      <div class="bg-slate-50 border-t border-slate-100 px-8 py-4 text-center">
        <p class="text-xs text-slate-500">Shared with approved partners only • <a href="mailto:hello@winesett.com" class="underline hover:text-slate-700">Request access</a></p>
      </div>
    </div>
  </div>

  <script>
    function initTailwind() {
      // Microsoft-themed accent if desired
    }
    
    function initPasswordForm() {
      const form = document.getElementById('password-form');
      const input = document.getElementById('password-input');
      const errorEl = document.getElementById('error-message');
      const submitBtn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      const btnSpinner = document.getElementById('btn-spinner');
      
      setTimeout(() => input.focus(), 800);
      
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = input.value.trim();
        if (!password) return;
        
        submitBtn.disabled = true;
        btnText.textContent = 'Verifying...';
        btnSpinner.classList.remove('hidden');
        errorEl.classList.add('hidden');
        
        try {
          const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
          });
          const data = await res.json();
          
          if (res.ok && data.success) {
            btnText.textContent = 'Access granted';
            setTimeout(() => window.location.reload(), 420);
          } else {
            throw new Error(data.error || 'Invalid password');
          }
        } catch (err) {
          errorEl.classList.remove('hidden');
          submitBtn.disabled = false;
          btnText.textContent = 'Try Again';
          btnSpinner.classList.add('hidden');
          input.select();
        }
      });
    }
    
    window.onload = () => {
      initTailwind();
      initPasswordForm();
    };
  </script>
</body>
</html>`;

export const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Microsoft AI Collaboration Suite • Winesett</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    body { font-family: 'Inter', system_ui, sans-serif; }
    .font-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }
    .nav-link { transition: color 0.1s ease; }
    .nav-link:hover { color: #0f172a; }
    .prose-custom p { margin-bottom: 1.1em; line-height: 1.7; }
  </style>
</head>
<body class="bg-white text-slate-900">
  <!-- NAV -->
  <nav class="border-b border-slate-200 bg-white/95 backdrop-blur-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-x-3">
        <a href="/" class="flex items-center gap-x-2.5">
          <div class="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center">
            <span class="text-white text-xl font-semibold tracking-tighter">W</span>
          </div>
          <span class="font-semibold text-2xl tracking-tighter">Winesett</span>
        </a>
      </div>
      
      <div class="flex items-center gap-x-8 text-sm font-medium">
        <a href="/" class="nav-link text-slate-600 hover:text-slate-900">Home</a>
        <a href="/work" class="nav-link text-slate-600 hover:text-slate-900">Work</a>
        <a href="/about" class="nav-link text-slate-600 hover:text-slate-900">About</a>
        <a href="/contact" class="nav-link text-slate-600 hover:text-slate-900">Contact</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <div class="bg-[#0f172a] text-white">
    <div class="max-w-5xl mx-auto px-6 pt-16 pb-14">
      <div class="flex items-center gap-x-3 mb-6">
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-medium tracking-[1px] border border-white/20">ENTERPRISE • 2025</div>
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-600 text-xs font-semibold tracking-wider">MICROSOFT</div>
      </div>
      
      <h1 class="font-display text-6xl tracking-tighter font-semibold leading-none mb-4">AI-Powered<br>Collaboration Suite</h1>
      <p class="max-w-xl text-2xl text-white/80">Internal AI knowledge assistant and collaboration layer deployed to 180,000 Microsoft employees.</p>
      
      <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
        <div><span class="font-medium text-white">Role:</span> Design Systems + Product Design Lead</div>
        <div><span class="font-medium text-white">Duration:</span> 11 months</div>
        <div><span class="font-medium text-white">Impact:</span> 180k employees • 42 countries</div>
      </div>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-6">
    <!-- STATS -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 -mt-px">
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter">68%</div>
        <div class="mt-1 text-sm text-slate-600">Weekly active usage</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter">4.2 hrs</div>
        <div class="mt-1 text-sm text-slate-600">Avg. time saved / employee / week</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter">94</div>
        <div class="mt-1 text-sm text-slate-600">Internal NPS (6 months)</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter">2.1m</div>
        <div class="mt-1 text-sm text-slate-600">Queries per month</div>
      </div>
    </div>

    <!-- Challenge -->
    <div class="pt-16 pb-12 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">01 — THE CHALLENGE</div>
      <div class="max-w-3xl">
        <h2 class="font-display text-4xl tracking-tighter font-semibold">Knowledge lived in dozens of tools. AI felt like an afterthought.</h2>
        <div class="prose-custom text-[15.2px] text-slate-600 mt-6">
          <p>Despite having world-class AI research, Microsoft’s own employees struggled to find internal information. Copilot existed but adoption inside the company was low because it wasn’t deeply connected to the messy reality of how work actually happens.</p>
          <p>We were tasked with building something that felt like a true teammate — proactive, trustworthy, and available in every tool employees already used.</p>
        </div>
      </div>
    </div>

    <!-- Approach -->
    <div class="py-16 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">02 — APPROACH</div>
      <div class="grid md:grid-cols-12 gap-x-12">
        <div class="md:col-span-5">
          <h3 class="font-semibold text-2xl tracking-tight">Grounded in Real Workflows</h3>
          <p class="mt-3 text-slate-600">We spent months shadowing teams across engineering, finance, legal, sales, and marketing. The biggest insight: most “knowledge work” is actually finding, synthesizing, and acting on information that already exists inside the company.</p>
        </div>
        <div class="md:col-span-7 mt-8 md:mt-0">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div class="bg-slate-50 p-5 rounded-2xl"><span class="font-semibold">180k</span><br>employees in scope</div>
            <div class="bg-slate-50 p-5 rounded-2xl"><span class="font-semibold">11</span><br>business units co-designed with</div>
            <div class="bg-slate-50 p-5 rounded-2xl"><span class="font-semibold">94</span><br>internal NPS target</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution -->
    <div class="py-16 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">03 — SOLUTION</div>
      <h3 class="font-display text-3xl tracking-tighter font-semibold max-w-3xl">One assistant. Everywhere. With citations, guardrails, and beautiful UX.</h3>
      
      <div class="mt-10 grid md:grid-cols-5 gap-8">
        <div class="md:col-span-3">
          <img src="https://picsum.photos/id/160/1100/720" class="rounded-3xl shadow-xl w-full" alt="Microsoft internal AI assistant interface">
          <p class="text-xs text-slate-500 mt-3">The assistant embedded directly in Teams, Outlook, and the new internal portal</p>
        </div>
        <div class="md:col-span-2 space-y-8 text-sm">
          <div>
            <div class="font-semibold mb-1.5 flex items-center gap-x-2 text-blue-600"><i class="fa-solid fa-link"></i> <span>Deep Microsoft 365 Integration</span></div>
            <p class="text-slate-600">Uses Microsoft Graph + internal RAG pipelines to ground every answer in verified company sources with automatic citations.</p>
          </div>
          <div>
            <div class="font-semibold mb-1.5 flex items-center gap-x-2 text-blue-600"><i class="fa-solid fa-shield-halved"></i> <span>Enterprise Guardrails</span></div>
            <p class="text-slate-600">Every response includes confidence scoring, source links, and the ability for humans to flag or correct answers. Sensitive topics require manager approval workflows.</p>
          </div>
          <div>
            <div class="font-semibold mb-1.5 flex items-center gap-x-2 text-blue-600"><i class="fa-solid fa-magic"></i> <span>Proactive Assistance</span></div>
            <p class="text-slate-600">The assistant surfaces relevant documents and meeting prep before you even ask, based on your calendar and recent activity.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact -->
    <div class="py-16">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">04 — IMPACT</div>
      <div class="max-w-3xl">
        <h3 class="font-display text-3xl tracking-tighter font-semibold">Became one of the highest-adopted internal tools in Microsoft history within the first year.</h3>
        
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="border-l-2 border-blue-600 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">68%</div>
            <div class="text-slate-600 mt-1 text-sm">of employees use it at least weekly</div>
          </div>
          <div class="border-l-2 border-blue-600 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">4.2 hrs</div>
            <div class="text-slate-600 mt-1 text-sm">average weekly time saved per person</div>
          </div>
          <div class="border-l-2 border-blue-600 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">+41 pts</div>
            <div class="text-slate-600 mt-1 text-sm">improvement in “I can find what I need” score</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="border-t border-slate-100 bg-slate-50 mt-12">
    <div class="max-w-5xl mx-auto px-6 py-9 text-xs text-slate-500 flex flex-col md:flex-row md:items-center justify-between gap-y-3">
      <div>© Winesett 2025 • Confidential case study shared under NDA</div>
      <div class="flex gap-x-5">
        <a href="/work" class="hover:text-slate-700">Back to Work</a>
        <a href="mailto:hello@winesett.com" class="hover:text-slate-700">Discuss a similar project</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
