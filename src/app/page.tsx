export default function Home() {
  return (
    <main className="min-h-screen bg-darker">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 bg-darker/80 backdrop-blur-md border-b border-neon/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-heading font-black">
            <span className="neon-text">$BENITO</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-neon transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-neon transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-neon transition-colors">La Ruta</a>
            <a href="#how-to-buy" className="hover:text-neon transition-colors">How to Buy</a>
            <a href="/whitepaper" className="hover:text-neon transition-colors">White Paper</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://pump.fun/coin/2cR5kpMkQgg9FY4VrfJ4k11Z3Ad1Py97C9cquLzMpump"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon bg-neon text-black font-heading font-black px-5 py-2 rounded-full text-sm uppercase tracking-wider"
            >
              Buy $BENITO
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-animate pt-20 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">🐰</div>
          <div className="absolute top-40 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: "1s" }}>🏈</div>
          <div className="absolute bottom-40 left-1/4 text-4xl animate-float opacity-20" style={{ animationDelay: "0.5s" }}>🎤</div>
          <div className="absolute bottom-20 right-1/3 text-5xl animate-float opacity-25" style={{ animationDelay: "1.5s" }}>🔥</div>
          <div className="absolute top-1/3 right-10 text-4xl animate-float opacity-15" style={{ animationDelay: "2s" }}>🎶</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-hotpink font-heading uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-pulse">
            Super Bowl LX Halftime Show
          </p>

          <h1 className="text-7xl md:text-9xl font-heading font-black mb-2 animate-pulse-neon neon-text">
            $BENITO
          </h1>

          <p className="text-2xl md:text-4xl font-heading font-black text-white mb-6">
            El Conejo Malo of Crypto
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Bad Bunny hits the Super Bowl LX halftime stage.
            <br />
            <span className="text-neon font-semibold">$BENITO hits the blockchain.</span>
          </p>

          <p className="text-base text-gray-400 max-w-xl mx-auto mb-10">
            The most unhinged halftime show meme coin ever created.
            Fair launch. No presale. No team tokens. Just pure reggaeton-fueled degen energy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://pump.fun/coin/2cR5kpMkQgg9FY4VrfJ4k11Z3Ad1Py97C9cquLzMpump"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon bg-neon text-black font-heading font-black px-8 py-4 rounded-full text-lg uppercase tracking-wider"
            >
              🐰 Buy on Pump.fun
            </a>
            <a
              href="/whitepaper"
              className="btn-pink border-2 border-hotpink text-hotpink font-heading font-black px-8 py-4 rounded-full text-lg uppercase tracking-wider"
            >
              📄 El Papel Blanco
            </a>
            <a
              href="https://t.me/badbunnyhalftime"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon border-2 border-neon text-neon font-heading font-black px-8 py-4 rounded-full text-lg uppercase tracking-wider"
            >
              💬 Join La Familia
            </a>
          </div>

          {/* Live stats placeholder */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="gradient-border px-6 py-4 min-w-[140px]">
              <p className="relative z-10 text-2xl font-heading font-black text-neon">1B</p>
              <p className="relative z-10 text-xs text-gray-400 uppercase tracking-wider">Total Supply</p>
            </div>
            <div className="gradient-border px-6 py-4 min-w-[140px]">
              <p className="relative z-10 text-2xl font-heading font-black text-hotpink">0%</p>
              <p className="relative z-10 text-xs text-gray-400 uppercase tracking-wider">Tax</p>
            </div>
            <div className="gradient-border px-6 py-4 min-w-[140px]">
              <p className="relative z-10 text-2xl font-heading font-black text-neon">100%</p>
              <p className="relative z-10 text-xs text-gray-400 uppercase tracking-wider">Fair Launch</p>
            </div>
            <div className="gradient-border px-6 py-4 min-w-[140px]">
              <p className="relative z-10 text-2xl font-heading font-black text-hotpink">🔥</p>
              <p className="relative z-10 text-xs text-gray-400 uppercase tracking-wider">LP Burned</p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-darker to-transparent" />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-center mb-4">
            What is <span className="neon-text">$BENITO</span>?
          </h2>
          <p className="text-center text-hotpink font-heading uppercase tracking-widest text-sm mb-12">
            The Coin That Perreos Into Your Wallet
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-border p-8">
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-black text-neon mb-4">🐰 The Story</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Benito Antonio Mart&iacute;nez Ocasio &mdash; aka <span className="text-hotpink font-bold">Bad Bunny</span> &mdash;
                  is performing at the Super Bowl LX halftime show. The biggest stage on planet Earth.
                  Over 120 million people watching.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When Bad Bunny performs, the world stops. When the world stops,
                  degens ape. When degens ape, <span className="text-neon font-bold">$BENITO pumps</span>.
                  It&apos;s simple economics, papi.
                </p>
              </div>
            </div>

            <div className="gradient-border p-8">
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-black text-hotpink mb-4">🎤 Why $BENITO?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-neon text-xl">&#x2714;</span>
                    <span><strong className="text-white">Benito is his REAL name</strong> &mdash; insider knowledge energy. You&apos;re early if you know.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon text-xl">&#x2714;</span>
                    <span><strong className="text-white">Bad Bunny is the most streamed artist on Earth</strong> &mdash; 4+ billion streams. Global reach.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon text-xl">&#x2714;</span>
                    <span><strong className="text-white">Halftime = maximum eyeballs</strong> &mdash; the single most viral moment of the year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon text-xl">&#x2714;</span>
                    <span><strong className="text-white">100% fair launch</strong> &mdash; no presale, no team tokens, no BS. Just vibes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon text-xl">&#x2714;</span>
                    <span><strong className="text-white">Built different</strong> &mdash; full website, white paper, and a community that perreos together.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fun quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-heading font-black italic text-gray-400">
              &ldquo;Yo perreo sola... <span className="pink-text">into the blockchain</span>&rdquo;
            </blockquote>
            <p className="text-sm text-gray-500 mt-2">&mdash; The $BENITO Community, probably</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== TOKENOMICS ===== */}
      <section id="tokenomics" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-center mb-4">
            Tokenomics
          </h2>
          <p className="text-center text-hotpink font-heading uppercase tracking-widest text-sm mb-12">
            Simple. Clean. No Tricks, Papi.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="gradient-border p-8 text-center">
              <div className="relative z-10">
                <p className="text-5xl mb-4">🪙</p>
                <h3 className="text-xl font-heading font-black text-neon mb-2">Total Supply</h3>
                <p className="text-3xl font-heading font-black text-white">1,000,000,000</p>
                <p className="text-gray-400 text-sm mt-1">One Billion $BENITO</p>
              </div>
            </div>

            <div className="gradient-border p-8 text-center">
              <div className="relative z-10">
                <p className="text-5xl mb-4">🔥</p>
                <h3 className="text-xl font-heading font-black text-hotpink mb-2">LP Status</h3>
                <p className="text-3xl font-heading font-black text-white">BURNED</p>
                <p className="text-gray-400 text-sm mt-1">Liquidity Locked Forever</p>
              </div>
            </div>

            <div className="gradient-border p-8 text-center">
              <div className="relative z-10">
                <p className="text-5xl mb-4">📜</p>
                <h3 className="text-xl font-heading font-black text-neon mb-2">Contract</h3>
                <p className="text-3xl font-heading font-black text-white">RENOUNCED</p>
                <p className="text-gray-400 text-sm mt-1">No Rug, No Cap</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="gradient-border p-8 text-center">
              <div className="relative z-10">
                <p className="text-5xl mb-4">🚫</p>
                <h3 className="text-xl font-heading font-black text-hotpink mb-2">Buy/Sell Tax</h3>
                <p className="text-4xl font-heading font-black text-neon">0% / 0%</p>
                <p className="text-gray-400 text-sm mt-1">Zero tax. Every token is yours.</p>
              </div>
            </div>

            <div className="gradient-border p-8 text-center">
              <div className="relative z-10">
                <p className="text-5xl mb-4">🤝</p>
                <h3 className="text-xl font-heading font-black text-neon mb-2">Fair Launch</h3>
                <p className="text-4xl font-heading font-black text-hotpink">100%</p>
                <p className="text-gray-400 text-sm mt-1">No presale. No team tokens. No insiders.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 gradient-border p-8">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-heading font-black text-neon mb-4">The $BENITO Promise</h3>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We believe meme coins should be simple. No complicated vesting schedules.
                No hidden team wallets. No sneaky taxes that drain your bag.
                Just a coin, a community, and the biggest halftime show on Earth.
                <span className="text-hotpink font-bold"> Punto.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-center mb-4">
            La Ruta <span className="pink-text">(The Roadmap)</span>
          </h2>
          <p className="text-center text-gray-400 text-sm mb-16 max-w-xl mx-auto">
            Every great reggaeton track has a buildup, a drop, and a perreo.
            So does $BENITO.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1 */}
            <div className="gradient-border p-6">
              <div className="relative z-10">
                <div className="text-neon font-heading font-black text-sm uppercase tracking-widest mb-2">Phase 1</div>
                <h3 className="text-xl font-heading font-black text-white mb-1">Calentamiento</h3>
                <p className="text-hotpink text-sm font-semibold mb-4">The Warmup</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>&#x2714; Token launch on Pump.fun</li>
                  <li>&#x2714; Website goes live</li>
                  <li>&#x2714; El Papel Blanco published</li>
                  <li>&#x2714; Telegram &amp; X launch</li>
                  <li>&#x2714; First 100 holders</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="gradient-border p-6">
              <div className="relative z-10">
                <div className="text-neon font-heading font-black text-sm uppercase tracking-widest mb-2">Phase 2</div>
                <h3 className="text-xl font-heading font-black text-white mb-1">El Perreo</h3>
                <p className="text-hotpink text-sm font-semibold mb-4">The Dance</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>&#9744; Halftime show goes live</li>
                  <li>&#9744; Viral meme campaign</li>
                  <li>&#9744; Trending on X &amp; TikTok</li>
                  <li>&#9744; 1,000+ holders</li>
                  <li>&#9744; DEX listings</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="gradient-border p-6">
              <div className="relative z-10">
                <div className="text-neon font-heading font-black text-sm uppercase tracking-widest mb-2">Phase 3</div>
                <h3 className="text-xl font-heading font-black text-white mb-1">Reggaetonero</h3>
                <p className="text-hotpink text-sm font-semibold mb-4">The Movement</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>&#9744; 10,000+ holders</li>
                  <li>&#9744; CEX listing applications</li>
                  <li>&#9744; Influencer partnerships</li>
                  <li>&#9744; Merch drop</li>
                  <li>&#9744; Community events</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="gradient-border p-6">
              <div className="relative z-10">
                <div className="text-neon font-heading font-black text-sm uppercase tracking-widest mb-2">Phase 4</div>
                <h3 className="text-xl font-heading font-black text-white mb-1">La Luna</h3>
                <p className="text-hotpink text-sm font-semibold mb-4">The Moon</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>&#9744; 100,000+ holders</li>
                  <li>&#9744; Major CEX listings</li>
                  <li>&#9744; Bad Bunny notices us</li>
                  <li>&#9744; Global media coverage</li>
                  <li>&#9744; El Conejo reaches the moon 🌙</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== HOW TO BUY ===== */}
      <section id="how-to-buy" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-center mb-4">
            How to Buy <span className="neon-text">$BENITO</span>
          </h2>
          <p className="text-center text-hotpink font-heading uppercase tracking-widest text-sm mb-12">
            Four Steps to Perreo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gradient-border p-6 text-center">
              <div className="relative z-10">
                <div className="text-4xl font-heading font-black text-neon mb-4">01</div>
                <h3 className="text-lg font-heading font-black text-white mb-2">Get a Wallet</h3>
                <p className="text-sm text-gray-400">
                  Download <span className="text-neon font-semibold">Phantom Wallet</span> on your phone or browser.
                  It&apos;s free and takes 30 seconds.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 text-center">
              <div className="relative z-10">
                <div className="text-4xl font-heading font-black text-hotpink mb-4">02</div>
                <h3 className="text-lg font-heading font-black text-white mb-2">Buy SOL</h3>
                <p className="text-sm text-gray-400">
                  Buy <span className="text-neon font-semibold">Solana (SOL)</span> from any exchange
                  (Coinbase, Binance, etc.) and send it to your Phantom wallet.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 text-center">
              <div className="relative z-10">
                <div className="text-4xl font-heading font-black text-neon mb-4">03</div>
                <h3 className="text-lg font-heading font-black text-white mb-2">Go to Pump.fun</h3>
                <p className="text-sm text-gray-400">
                  Visit <span className="text-hotpink font-semibold">pump.fun</span> and
                  search for <span className="text-neon font-bold">$BENITO</span>. Connect your Phantom wallet.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 text-center">
              <div className="relative z-10">
                <div className="text-4xl font-heading font-black text-hotpink mb-4">04</div>
                <h3 className="text-lg font-heading font-black text-white mb-2">Ape In, Papi</h3>
                <p className="text-sm text-gray-400">
                  Set your amount, hit swap, and welcome to
                  <span className="text-neon font-bold"> La Familia</span>.
                  You&apos;re now a Benito holder. 🐰
                </p>
              </div>
            </div>
          </div>

          {/* Contract Address Box */}
          <div className="mt-12 gradient-border p-8 text-center">
            <div className="relative z-10">
              <h3 className="text-xl font-heading font-black text-neon mb-4">Contract Address (CA)</h3>
              <div className="bg-black/50 rounded-xl p-4 border border-neon/30">
                <p className="text-neon font-mono text-sm md:text-base break-all select-all cursor-pointer" id="contract-address">
                  2cR5kpMkQgg9FY4VrfJ4k11Z3Ad1Py97C9cquLzMpump
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Always verify the CA. Only buy from official links. DYOR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== COMMUNITY ===== */}
      <section id="community" className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
            Join <span className="pink-text">La Familia</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Every meme coin is only as strong as its community.
            La Familia Benito doesn&apos;t just hold &mdash; we perreo together. 🐰
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://t.me/badbunnyhalftime"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 text-center hover:scale-105 transition-transform cursor-pointer block"
            >
              <div className="relative z-10">
                <p className="text-4xl mb-3">💬</p>
                <h3 className="text-lg font-heading font-black text-neon">Telegram</h3>
                <p className="text-sm text-gray-400 mt-1">La Familia Chat</p>
              </div>
            </a>

            <a
              href="#"
              className="gradient-border p-6 text-center hover:scale-105 transition-transform cursor-pointer block"
            >
              <div className="relative z-10">
                <p className="text-4xl mb-3">🐦</p>
                <h3 className="text-lg font-heading font-black text-hotpink">X (Twitter)</h3>
                <p className="text-sm text-gray-400 mt-1">@BenitoCoinSol</p>
              </div>
            </a>

            <a
              href="https://dexscreener.com/solana/2cR5kpMkQgg9FY4VrfJ4k11Z3Ad1Py97C9cquLzMpump"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 text-center hover:scale-105 transition-transform cursor-pointer block sm:col-span-2 lg:col-span-1"
            >
              <div className="relative z-10">
                <p className="text-4xl mb-3">📊</p>
                <h3 className="text-lg font-heading font-black text-neon">Chart</h3>
                <p className="text-sm text-gray-400 mt-1">DexScreener</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== FUN SECTION - BAD BUNNY FACTS ===== */}
      <section className="py-24 px-4 bg-gradient-animate">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12">
            Why <span className="neon-text">Bad Bunny</span> = <span className="pink-text">Moon</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🌍</p>
                <p className="text-3xl font-heading font-black text-neon">#1</p>
                <p className="text-sm text-gray-400 mt-1">Most streamed artist on Spotify globally</p>
              </div>
            </div>

            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🎵</p>
                <p className="text-3xl font-heading font-black text-hotpink">46B+</p>
                <p className="text-sm text-gray-400 mt-1">Total streams across platforms</p>
              </div>
            </div>

            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🏟️</p>
                <p className="text-3xl font-heading font-black text-neon">120M+</p>
                <p className="text-sm text-gray-400 mt-1">Super Bowl halftime viewers</p>
              </div>
            </div>

            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🤼</p>
                <p className="text-3xl font-heading font-black text-hotpink">WWE</p>
                <p className="text-sm text-gray-400 mt-1">Royal Rumble champion. Yes, really.</p>
              </div>
            </div>

            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🏆</p>
                <p className="text-3xl font-heading font-black text-neon">3x</p>
                <p className="text-sm text-gray-400 mt-1">Grammy winner</p>
              </div>
            </div>

            <div className="gradient-border p-6">
              <div className="relative z-10">
                <p className="text-3xl mb-2">🐰</p>
                <p className="text-3xl font-heading font-black text-hotpink">100%</p>
                <p className="text-sm text-gray-400 mt-1">Certified Bad (and Bunny)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-neon/20 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl font-heading font-black neon-text mb-4">$BENITO</p>
          <p className="text-sm text-gray-500 max-w-lg mx-auto mb-6">
            $BENITO is a meme coin with no intrinsic value or expectation of financial return.
            It is a community-driven token created for entertainment purposes.
            This is not financial advice. Always DYOR. 🐰
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-neon transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-neon transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-neon transition-colors">Roadmap</a>
            <a href="/whitepaper" className="hover:text-neon transition-colors">White Paper</a>
          </div>
          <p className="text-xs text-gray-600 mt-8">
            &copy; 2026 $BENITO &mdash; El Conejo Malo of Crypto. All rights reserved (lol not really, it&apos;s a meme).
          </p>
        </div>
      </footer>
    </main>
  );
}
