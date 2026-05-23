/**
 * FedEx Case Study - Teaser and Full HTML content
 * Replace the placeholder sections with your real copy, images, screenshots, metrics, etc.
 * Keep the outer structure similar so the teaser ↔ full transition feels seamless.
 */

export const teaserHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>FedEx Real-Time Tracking Platform • Winesett</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600&amp;display=swap');
    
    :root {
      --font-sans: 'Inter', system_ui, sans-serif;
      --font-display: 'Space Grotesk', 'Inter', sans-serif;
    }
    
    body { font-family: var(--font-sans); }
    .font-display { font-family: var(--font-display); }

    .blurred-content {
      filter: blur(8px);
      user-select: none;
      pointer-events: none;
      opacity: 0.95;
    }

    .case-study-hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e2937 100%);
    }

    .metric-card {
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .section-title {
      font-size: 1.1rem;
      letter-spacing: -0.025em;
    }

    .modal {
      animation: modalPop 0.2s cubic-bezier(0.32, 0.72, 0, 1);
    }

    @keyframes modalPop {
      from { opacity: 0; transform: translateY(20px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .nav-link {
      transition: color 0.1s ease;
    }
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
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-orange-500/90 text-xs font-semibold tracking-wider">FEDEX</div>
      </div>
      
      <h1 class="font-display text-6xl tracking-tighter font-semibold leading-none mb-4">Real-Time Global<br>Tracking Platform</h1>
      <p class="max-w-lg text-xl text-white/80">A complete redesign of FedEx's customer-facing shipment visibility experience used by millions of businesses worldwide.</p>
      
      <div class="flex items-center gap-x-4 mt-8 text-sm">
        <div class="flex -space-x-2">
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/1011/32/32" class="object-cover"></div>
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/1005/32/32" class="object-cover"></div>
          <div class="w-8 h-8 rounded-full bg-white/90 border border-white/30 overflow-hidden"><img src="https://picsum.photos/id/201/32/32" class="object-cover"></div>
        </div>
        <span class="text-white/70 text-sm">Lead Design Partner • 14 months</span>
      </div>
    </div>
  </div>

  <!-- BLURRED TEASER CONTENT -->
  <div class="blurred-content max-w-5xl mx-auto px-6 pt-12 pb-24">
    <!-- Overview -->
    <div class="grid md:grid-cols-12 gap-x-12">
      <div class="md:col-span-7">
        <div class="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">THE CHALLENGE</div>
        <h2 class="font-display text-4xl tracking-tighter font-semibold leading-none mb-6">Visibility was fragmented across 12 legacy systems.</h2>
        
        <div class="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-600">
          <p>FedEx needed a unified, real-time view of every package journey — from pickup to final mile — that worked equally well for enterprise shippers, small businesses, and internal operations teams.</p>
          <p class="mt-4">Previous interfaces were slow, inconsistent, and lacked predictive insights. Customers were calling support centers at high rates just to ask "Where is my package?"</p>
        </div>
      </div>
      
      <div class="md:col-span-5 mt-10 md:mt-0">
        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8">
          <div class="text-xs uppercase tracking-widest text-slate-500 mb-4">KEY OUTCOMES (TEASER)</div>
          <div class="space-y-6">
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">42%</div>
              <div class="text-sm text-slate-600 mt-1">Reduction in support ticket volume</div>
            </div>
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">3.8×</div>
              <div class="text-sm text-slate-600 mt-1">Faster time-to-insight for operations</div>
            </div>
            <div>
              <div class="text-4xl font-semibold tabular-nums tracking-tighter">91</div>
              <div class="text-sm text-slate-600 mt-1">NPS score from enterprise customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Approach teaser -->
    <div class="mt-16">
      <div class="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">OUR APPROACH</div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-magnifying-glass text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Discovery &amp; Research</div>
          <p class="text-sm text-slate-600 leading-relaxed">Shadowed dispatchers, interviewed 40+ enterprise shippers, mapped every touchpoint in the package lifecycle.</p>
        </div>
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-layer-group text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Unified Data Model</div>
          <p class="text-sm text-slate-600 leading-relaxed">Created a single source of truth by harmonizing data from WMS, TMS, last-mile carriers, and IoT sensors.</p>
        </div>
        <div class="border border-slate-200 rounded-3xl p-7">
          <div class="text-slate-400 mb-4"><i class="fa-solid fa-palette text-2xl"></i></div>
          <div class="font-semibold text-lg tracking-tight mb-2">Design System &amp; Prototyping</div>
          <p class="text-sm text-slate-600 leading-relaxed">Built a scalable component library and ran 6 major usability rounds with real FedEx customers.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PASSWORD MODAL -->
  <div id="password-modal" class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 backdrop-blur-md">
    <div class="modal w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      <div class="px-8 pt-8 pb-6">
        <div class="flex justify-center mb-5">
          <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
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
    // Tailwind script
    function initTailwind() {
      document.documentElement.style.setProperty('--accent', '#f97316');
    }
    
    // Password form handler
    function initPasswordForm() {
      const form = document.getElementById('password-form');
      const input = document.getElementById('password-input');
      const errorEl = document.getElementById('error-message');
      const submitBtn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      const btnSpinner = document.getElementById('btn-spinner');
      
      // Auto focus
      setTimeout(() => input.focus(), 800);
      
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const password = input.value.trim();
        if (!password) return;
        
        // UI loading state
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
            // Short delay so user sees success, then reload to get full content
            setTimeout(() => {
              window.location.reload();
            }, 420);
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
      
      // Allow Enter to submit (default behavior)
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          // form submit will handle
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
  <title>FedEx Real-Time Tracking Platform • Winesett</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600&amp;display=swap');
    
    body { font-family: 'Inter', system_ui, sans-serif; }
    .font-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }

    .nav-link { transition: color 0.1s ease; }
    .nav-link:hover { color: #0f172a; }

    .prose-custom p { margin-bottom: 1.1em; line-height: 1.7; }
    .metric { font-variant-numeric: tabular-nums; }
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
  <div class="bg-slate-950 text-white">
    <div class="max-w-5xl mx-auto px-6 pt-16 pb-14">
      <div class="flex items-center gap-x-3 mb-6">
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-medium tracking-[1px] border border-white/20">ENTERPRISE • 2025</div>
        <div class="inline-flex items-center px-3.5 py-1 rounded-full bg-orange-500 text-xs font-semibold tracking-wider">FEDEX</div>
      </div>
      
      <h1 class="font-display text-6xl tracking-tighter font-semibold leading-none mb-4">Real-Time Global<br>Tracking Platform</h1>
      <p class="max-w-xl text-2xl text-white/80">Redesigned end-to-end shipment visibility for FedEx's 15+ million daily package journeys.</p>
      
      <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
        <div><span class="font-medium text-white">Role:</span> Lead Product Design + Frontend Architecture</div>
        <div><span class="font-medium text-white">Duration:</span> 14 months</div>
        <div><span class="font-medium text-white">Team:</span> 4 designers, 7 engineers, FedEx product</div>
      </div>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-6">
    <!-- STATS -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 -mt-px">
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter metric">42%</div>
        <div class="mt-1 text-sm text-slate-600">Reduction in support volume</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter metric">3.8×</div>
        <div class="mt-1 text-sm text-slate-600">Faster time-to-insight</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter metric">91</div>
        <div class="mt-1 text-sm text-slate-600">Enterprise NPS</div>
      </div>
      <div class="bg-white p-8">
        <div class="text-5xl font-semibold tracking-tighter metric">2.4m</div>
        <div class="mt-1 text-sm text-slate-600">Monthly active users</div>
      </div>
    </div>

    <!-- Challenge -->
    <div class="pt-16 pb-12 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">01 — THE CHALLENGE</div>
      <div class="max-w-3xl">
        <h2 class="font-display text-4xl tracking-tighter font-semibold">Legacy systems created a fragmented, frustrating experience for every stakeholder.</h2>
        <div class="prose-custom text-[15.2px] text-slate-600 mt-6">
          <p>FedEx's existing tracking tools were a patchwork of internal systems built over 15 years. Enterprise customers had to log into multiple portals. Operations teams lacked predictive ETAs. The mobile experience for recipients was particularly poor.</p>
          <p>Our goal was to create one beautiful, fast, trustworthy interface that served shippers, recipients, and internal teams from a single unified data platform.</p>
        </div>
      </div>
    </div>

    <!-- Approach -->
    <div class="py-16 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">02 — APPROACH</div>
      <div class="grid md:grid-cols-12 gap-x-12">
        <div class="md:col-span-5">
          <h3 class="font-semibold text-2xl tracking-tight">Research &amp; Co-Design</h3>
          <p class="mt-3 text-slate-600">We embedded with FedEx teams in Memphis and conducted 40+ interviews with power users at major retailers and 3PLs. We also analyzed 2 years of anonymized support tickets.</p>
        </div>
        <div class="md:col-span-7 mt-8 md:mt-0">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-slate-50 p-5 rounded-2xl text-sm"><span class="font-semibold">Shadowing</span><br>12 dispatch centers + 9 driver ride-alongs</div>
            <div class="bg-slate-50 p-5 rounded-2xl text-sm"><span class="font-semibold">Usability</span><br>6 iterative rounds with 48 participants</div>
            <div class="bg-slate-50 p-5 rounded-2xl text-sm"><span class="font-semibold">Data Audit</span><br>Unified 14 disparate data sources</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution -->
    <div class="py-16 border-b">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">03 — SOLUTION</div>
      <h3 class="font-display text-3xl tracking-tighter font-semibold max-w-3xl">A single source of truth with beautiful, predictive interfaces for every user type.</h3>
      
      <div class="mt-10 grid md:grid-cols-2 gap-8">
        <div>
          <img src="https://picsum.photos/id/1015/900/600" class="rounded-3xl shadow-xl w-full" alt="FedEx dashboard desktop view">
          <p class="text-xs text-slate-500 mt-3">Main operations command center — predictive ETAs and exception highlighting</p>
        </div>
        <div class="space-y-8">
          <div>
            <div class="font-semibold mb-2 flex items-center gap-x-2"><i class="fa-solid fa-globe text-orange-500"></i> <span>Global Map View</span></div>
            <p class="text-sm text-slate-600">Real-time map with live package density, weather delays, and carrier performance overlays. Built with WebGL for buttery 60fps performance even with 400k+ active shipments.</p>
          </div>
          <div>
            <div class="font-semibold mb-2 flex items-center gap-x-2"><i class="fa-solid fa-robot text-orange-500"></i> <span>Predictive ETAs</span></div>
            <p class="text-sm text-slate-600">Machine learning model (trained on 3 years of historical data) surfaces 4-hour delivery windows with 94% accuracy, updated every 90 seconds.</p>
          </div>
          <div>
            <div class="font-semibold mb-2 flex items-center gap-x-2"><i class="fa-solid fa-mobile-screen text-orange-500"></i> <span>Recipient Experience</span></div>
            <p class="text-sm text-slate-600">Completely new recipient-facing experience with proactive notifications, one-tap reschedule, and photo proof-of-delivery gallery.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div class="py-16">
      <div class="uppercase text-xs tracking-[2px] font-semibold text-slate-500 mb-3">04 — IMPACT</div>
      <div class="max-w-3xl">
        <h3 class="font-display text-3xl tracking-tighter font-semibold">The new platform became the default interface for all FedEx tracking within 5 months of launch.</h3>
        
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div class="border-l-2 border-orange-500 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">42%</div>
            <div class="text-slate-600 mt-1">Drop in support tickets related to tracking</div>
          </div>
          <div class="border-l-2 border-orange-500 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">19 min</div>
            <div class="text-slate-600 mt-1">Average time saved per operations shift</div>
          </div>
          <div class="border-l-2 border-orange-500 pl-5">
            <div class="font-mono text-3xl font-semibold tracking-tighter">+31 pts</div>
            <div class="text-slate-600 mt-1">Increase in enterprise customer satisfaction</div>
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
