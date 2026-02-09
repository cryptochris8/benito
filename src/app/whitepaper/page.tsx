export default function WhitePaper() {
  return (
    <main className="min-h-screen bg-darker">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-darker/80 backdrop-blur-md border-b border-neon/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-black">
            <span className="neon-text">$BENITO</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
            <a href="/" className="hover:text-neon transition-colors">Home</a>
            <a href="/#about" className="hover:text-neon transition-colors">About</a>
            <a href="/#tokenomics" className="hover:text-neon transition-colors">Tokenomics</a>
            <a href="/#roadmap" className="hover:text-neon transition-colors">La Ruta</a>
          </nav>
          <a
            href="/#how-to-buy"
            className="btn-neon bg-neon text-black font-heading font-black px-5 py-2 rounded-full text-sm uppercase tracking-wider"
          >
            Buy $BENITO
          </a>
        </div>
      </header>

      {/* White Paper Content */}
      <article className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <p className="text-hotpink font-heading uppercase tracking-[0.3em] text-sm mb-4">
              Official Documentation
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-black neon-text mb-4">
              El Papel Blanco
            </h1>
            <p className="text-xl text-gray-400">
              The $BENITO White Paper
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Version 1.0 &mdash; February 2026 &mdash; Super Bowl LX Edition
            </p>
          </div>

          {/* Table of Contents */}
          <div className="gradient-border p-8 mb-16">
            <div className="relative z-10">
              <h2 className="text-xl font-heading font-black text-neon mb-4">Table of Contents</h2>
              <ol className="space-y-2 text-gray-300">
                <li><a href="#abstract" className="hover:text-neon transition-colors">1. Abstract</a></li>
                <li><a href="#problem" className="hover:text-neon transition-colors">2. The Problem</a></li>
                <li><a href="#solution" className="hover:text-neon transition-colors">3. The $BENITO Solution</a></li>
                <li><a href="#who-is-benito" className="hover:text-neon transition-colors">4. Who is Benito?</a></li>
                <li><a href="#wp-tokenomics" className="hover:text-neon transition-colors">5. Tokenomics</a></li>
                <li><a href="#wp-roadmap" className="hover:text-neon transition-colors">6. La Ruta (Roadmap)</a></li>
                <li><a href="#community-governance" className="hover:text-neon transition-colors">7. Community &amp; La Familia</a></li>
                <li><a href="#meme-economics" className="hover:text-neon transition-colors">8. Meme Economics</a></li>
                <li><a href="#risk-factors" className="hover:text-neon transition-colors">9. Risk Factors</a></li>
                <li><a href="#conclusion" className="hover:text-neon transition-colors">10. Conclusion</a></li>
              </ol>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-16 text-gray-300 leading-relaxed">

            {/* 1. Abstract */}
            <section id="abstract">
              <h2 className="text-3xl font-heading font-black text-neon mb-6">1. Abstract</h2>
              <div className="gradient-border p-6 mb-6">
                <p className="relative z-10 italic text-lg text-gray-200">
                  &ldquo;In a world of countless meme coins, only one is blessed by the rhythm of
                  reggaeton and the energy of the biggest sporting event on Earth.
                  That coin is $BENITO.&rdquo;
                </p>
              </div>
              <p className="mb-4">
                $BENITO is a community-driven meme token launched on the Solana blockchain via Pump.fun,
                timed to coincide with Bad Bunny&apos;s historic Super Bowl LX halftime performance.
                This paper outlines the vision, tokenomics, and roadmap of a coin born from the
                intersection of global music culture, sports spectacle, and decentralized finance.
              </p>
              <p>
                With zero taxes, a fully burned liquidity pool, a renounced contract, and a 100% fair launch,
                $BENITO represents the purest form of community-powered meme economics.
                No VCs. No insiders. Just vibes, papi.
              </p>
            </section>

            {/* 2. The Problem */}
            <section id="problem">
              <h2 className="text-3xl font-heading font-black text-hotpink mb-6">2. The Problem</h2>
              <p className="mb-4">
                The Super Bowl is the single largest cultural event in the United States, attracting
                over 120 million viewers annually. The halftime show alone generates billions of
                social media impressions within minutes. Yet, the crypto industry has consistently
                failed to produce a meme coin worthy of this moment.
              </p>
              <p className="mb-4">
                Previous attempts have suffered from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><span className="text-hotpink font-semibold">Low effort</span> &mdash; No website, no white paper, no community infrastructure</li>
                <li><span className="text-hotpink font-semibold">Rug pulls</span> &mdash; Insider allocations, hidden wallets, and exit scams</li>
                <li><span className="text-hotpink font-semibold">Poor timing</span> &mdash; Launching too early or too late to capture momentum</li>
                <li><span className="text-hotpink font-semibold">Generic branding</span> &mdash; Forgettable names that fail to capture cultural energy</li>
              </ul>
              <p>
                The world deserves a Super Bowl meme coin with <span className="text-neon font-semibold">substance</span> (well,
                as much substance as a meme coin can have). The world deserves $BENITO.
              </p>
            </section>

            {/* 3. The Solution */}
            <section id="solution">
              <h2 className="text-3xl font-heading font-black text-neon mb-6">3. The $BENITO Solution</h2>
              <p className="mb-4">
                $BENITO solves the Super Bowl meme coin problem by combining three critical elements:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="gradient-border p-4">
                  <div className="relative z-10 text-center">
                    <p className="text-2xl mb-2">🎯</p>
                    <h3 className="font-heading font-black text-neon text-sm">Perfect Timing</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Launched during the halftime show for maximum cultural impact
                    </p>
                  </div>
                </div>
                <div className="gradient-border p-4">
                  <div className="relative z-10 text-center">
                    <p className="text-2xl mb-2">🏗️</p>
                    <h3 className="font-heading font-black text-hotpink text-sm">Full Infrastructure</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Professional website, white paper, Telegram, and X presence from day one
                    </p>
                  </div>
                </div>
                <div className="gradient-border p-4">
                  <div className="relative z-10 text-center">
                    <p className="text-2xl mb-2">🐰</p>
                    <h3 className="font-heading font-black text-neon text-sm">Cultural Icon</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Backed by the energy of the most streamed artist on Earth
                    </p>
                  </div>
                </div>
              </div>
              <p>
                By launching with complete infrastructure on day one, $BENITO immediately differentiates
                itself from the sea of low-effort pump-and-dumps that flood the market during major events.
                When a potential holder searches for the halftime show coin, they will find a professional
                website, a published white paper, and an active community &mdash; not a blank Pump.fun page
                with a stock image.
              </p>
            </section>

            {/* 4. Who is Benito */}
            <section id="who-is-benito">
              <h2 className="text-3xl font-heading font-black text-hotpink mb-6">4. Who is Benito?</h2>
              <p className="mb-4">
                <span className="text-neon font-semibold">Benito Antonio Mart&iacute;nez Ocasio</span>,
                known globally as <span className="text-hotpink font-semibold">Bad Bunny</span>,
                is a Puerto Rican rapper, singer, and songwriter who has redefined Latin music
                and global pop culture.
              </p>

              <div className="gradient-border p-6 mb-6">
                <div className="relative z-10">
                  <h3 className="font-heading font-black text-neon mb-4">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-heading font-black text-hotpink">46B+</p>
                      <p className="text-xs text-gray-400">Total streams</p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-black text-neon">#1</p>
                      <p className="text-xs text-gray-400">Most streamed on Spotify (3 years)</p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-black text-hotpink">3</p>
                      <p className="text-xs text-gray-400">Grammy Awards</p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-black text-neon">1</p>
                      <p className="text-xs text-gray-400">WWE Royal Rumble win</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Bad Bunny broke every rule. He sang in Spanish and topped English-language charts.
                He wore skirts on red carpets. He body-slammed wrestlers at the Royal Rumble.
                He turned reggaeton from a regional genre into the global soundtrack.
              </p>
              <p>
                Now he&apos;s performing at the Super Bowl LX halftime show, and $BENITO is the
                community&apos;s way of celebrating the moment. Not with a boring tweet. Not with a
                TikTok. With a <span className="text-neon font-bold">coin on the blockchain that lives forever</span>.
              </p>
            </section>

            {/* 5. Tokenomics */}
            <section id="wp-tokenomics">
              <h2 className="text-3xl font-heading font-black text-neon mb-6">5. Tokenomics</h2>
              <p className="mb-6">
                $BENITO tokenomics are designed with one principle:
                <span className="text-hotpink font-bold"> maximum simplicity, maximum fairness</span>.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Token Name</td>
                      <td className="py-3">Benito</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Ticker</td>
                      <td className="py-3">$BENITO</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Blockchain</td>
                      <td className="py-3">Solana (SPL Token)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Launch Platform</td>
                      <td className="py-3">Pump.fun</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Total Supply</td>
                      <td className="py-3">1,000,000,000 (1 Billion)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Buy Tax</td>
                      <td className="py-3">0%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Sell Tax</td>
                      <td className="py-3">0%</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Presale</td>
                      <td className="py-3">None</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Team Allocation</td>
                      <td className="py-3">None (0%)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 text-neon font-semibold">Liquidity Pool</td>
                      <td className="py-3">Burned 🔥</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-neon font-semibold">Contract</td>
                      <td className="py-3">Renounced</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The Pump.fun bonding curve model ensures that early buyers are rewarded naturally
                through price discovery, while the burned LP and renounced contract provide
                maximum security guarantees for all holders. There are no hidden mechanisms,
                no admin functions, and no ability to mint additional tokens.
              </p>
            </section>

            {/* 6. Roadmap */}
            <section id="wp-roadmap">
              <h2 className="text-3xl font-heading font-black text-hotpink mb-6">6. La Ruta (The Roadmap)</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-black text-neon mb-2">
                    Phase 1: Calentamiento (The Warmup)
                  </h3>
                  <p className="mb-2">The foundation. Everything launches together:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                    <li>Token deployment on Pump.fun (Solana)</li>
                    <li>Website launch with full branding</li>
                    <li>El Papel Blanco (this document) published</li>
                    <li>Telegram group &amp; X account activated</li>
                    <li>Initial community building &amp; first 100 holders</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-black text-hotpink mb-2">
                    Phase 2: El Perreo (The Dance)
                  </h3>
                  <p className="mb-2">The halftime show hits. The world watches. We capitalize:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                    <li>Real-time meme creation during the halftime performance</li>
                    <li>Viral marketing across X, TikTok, Instagram, Reddit</li>
                    <li>Trending hashtag campaigns (#BENITO #BenitoCoin #SuperBowlCrypto)</li>
                    <li>Target: 1,000+ holders and DEX listing on Raydium</li>
                    <li>CoinGecko &amp; CoinMarketCap listing applications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-black text-neon mb-2">
                    Phase 3: Reggaetonero (The Movement)
                  </h3>
                  <p className="mb-2">Beyond the Super Bowl. Building lasting culture:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                    <li>10,000+ holders milestone</li>
                    <li>CEX listing applications (MEXC, Gate.io, etc.)</li>
                    <li>Influencer and KOL partnership campaigns</li>
                    <li>$BENITO merch drop (shirts, hats, stickers)</li>
                    <li>Community AMA events and Twitter Spaces</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-black text-hotpink mb-2">
                    Phase 4: La Luna (The Moon)
                  </h3>
                  <p className="mb-2">The final form. El Conejo reaches the moon:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                    <li>100,000+ holder community</li>
                    <li>Major centralized exchange listings</li>
                    <li>Bad Bunny acknowledgement (the ultimate validation)</li>
                    <li>Global media coverage and mainstream recognition</li>
                    <li>$BENITO becomes a permanent part of crypto culture</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Community */}
            <section id="community-governance">
              <h2 className="text-3xl font-heading font-black text-neon mb-6">7. Community &amp; La Familia</h2>
              <p className="mb-4">
                $BENITO is not a company. It is not a startup. It is <span className="text-hotpink font-bold">La Familia</span> &mdash;
                a community of degens, reggaeton lovers, sports fans, and crypto enthusiasts
                united by one moment in time: Bad Bunny at the Super Bowl.
              </p>
              <p className="mb-4">
                Community channels:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><span className="text-neon font-semibold">Telegram</span> &mdash; &ldquo;La Familia Benito&rdquo; &mdash; the main hub for discussion, memes, and alpha</li>
                <li><span className="text-neon font-semibold">X (Twitter)</span> &mdash; Real-time updates, meme campaigns, and community engagement</li>
                <li><span className="text-neon font-semibold">DexScreener</span> &mdash; Live chart and trading data</li>
              </ul>
              <p>
                The community drives everything. Meme creation, marketing pushes, partnership
                suggestions, and the overall direction of $BENITO are determined by La Familia.
                We are all Benito.
              </p>
            </section>

            {/* 8. Meme Economics */}
            <section id="meme-economics">
              <h2 className="text-3xl font-heading font-black text-hotpink mb-6">8. Meme Economics</h2>
              <p className="mb-4">
                The value proposition of a meme coin is fundamentally different from utility tokens.
                Meme coins derive value from three pillars:
              </p>
              <div className="space-y-4 mb-6">
                <div className="gradient-border p-4">
                  <div className="relative z-10">
                    <h3 className="font-heading font-black text-neon">1. Cultural Relevance</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      $BENITO is tied to the most-watched television event in America and the
                      most-streamed artist on the planet. Cultural relevance doesn&apos;t get bigger than this.
                    </p>
                  </div>
                </div>
                <div className="gradient-border p-4">
                  <div className="relative z-10">
                    <h3 className="font-heading font-black text-hotpink">2. Community Strength</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      La Familia is built from day one with real infrastructure &mdash; not an afterthought.
                      A Telegram group, X presence, and this white paper signal commitment.
                    </p>
                  </div>
                </div>
                <div className="gradient-border p-4">
                  <div className="relative z-10">
                    <h3 className="font-heading font-black text-neon">3. Shareability</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      &ldquo;I bought a Bad Bunny coin during the Super Bowl halftime show&rdquo; is a story
                      people WANT to tell. That organic word-of-mouth is the most powerful
                      marketing engine in crypto.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                The intersection of these three pillars creates what we call the
                <span className="text-neon font-bold"> Perreo Flywheel</span>: cultural moment drives attention,
                attention drives community, community drives memes, memes drive more attention.
                The cycle repeats until La Luna.
              </p>
            </section>

            {/* 9. Risk Factors */}
            <section id="risk-factors">
              <h2 className="text-3xl font-heading font-black text-neon mb-6">9. Risk Factors</h2>
              <p className="mb-4">
                In the spirit of full transparency (and because our lawyers &mdash; just kidding,
                we don&apos;t have lawyers &mdash; would want us to say this):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-400">
                <li>$BENITO is a meme coin. It has <span className="text-hotpink">no intrinsic value</span>.</li>
                <li>Meme coins are extremely volatile. Price can go up or down dramatically.</li>
                <li>This is <span className="text-hotpink">not financial advice</span>. Never invest more than you can afford to lose.</li>
                <li>There is no guarantee of any return on investment.</li>
                <li>$BENITO has no affiliation with Bad Bunny, the NFL, or any associated entities.</li>
                <li>Cryptocurrency investments carry inherent risks including total loss of capital.</li>
                <li>Past performance of other meme coins does not predict $BENITO&apos;s performance.</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Seriously though &mdash; only put in what you&apos;re comfortable losing.
                This is a meme coin born from a halftime show. Treat it like buying a foam finger
                at the game: it&apos;s fun, it&apos;s part of the experience, and you probably shouldn&apos;t
                bet your mortgage on it. DYOR. 🐰
              </p>
            </section>

            {/* 10. Conclusion */}
            <section id="conclusion">
              <h2 className="text-3xl font-heading font-black text-hotpink mb-6">10. Conclusion</h2>
              <p className="mb-4">
                $BENITO is more than a meme coin. It&apos;s a cultural timestamp &mdash; a permanent,
                on-chain record of the moment Bad Bunny took the Super Bowl LX stage and the
                crypto community collectively lost its mind.
              </p>
              <p className="mb-4">
                With a fair launch, zero taxes, burned liquidity, a professional web presence,
                and the most passionate community in crypto, $BENITO is positioned to be
                THE definitive halftime show coin.
              </p>
              <div className="gradient-border p-8 text-center mt-8">
                <div className="relative z-10">
                  <p className="text-3xl font-heading font-black neon-text mb-2">
                    &ldquo;Yo no soy santo, pero soy Benito.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500">
                    &mdash; El Papel Blanco, $BENITO, 2026
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to home */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="btn-neon bg-neon text-black font-heading font-black px-8 py-4 rounded-full text-lg uppercase tracking-wider inline-block"
            >
              🐰 Back to Home
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-neon/20 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            $BENITO is a meme coin with no intrinsic value. Not financial advice. DYOR. 🐰
          </p>
          <p className="text-xs text-gray-600 mt-2">
            &copy; 2026 $BENITO &mdash; El Conejo Malo of Crypto
          </p>
        </div>
      </footer>
    </main>
  );
}
