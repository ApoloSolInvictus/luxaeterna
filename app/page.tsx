</Button>
              <Button asChild variant="ghost">
                <Link href="/mediator">Try mediator</Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[35rem] rounded-[8px] border border-white/12 bg-white/[0.05] p-4 shadow-glass backdrop-blur-2xl">
            <div className="absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_50%_0%,rgba(214,178,94,.16),transparent_36%)]" />
            <div className="relative grid h-full gap-4">
              <div className="rounded-[8px] border border-white/10 bg-deep-space/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-accent text-xs tracking-[0.26em] text-solar-gold">RELATIONSHIP PULSE</span>
                  <span className="rounded-[8px] bg-harmony-green/15 px-3 py-1 text-xs text-harmony-green">Stable</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Connection", "Empathy", "Stress"].map((label, index) => (
                    <div key={label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-ivory-light/48">{label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{["87%", "High", "Low"][index]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[.9fr_1.1fr]">
                <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                  <BrainCircuit className="h-5 w-5 text-aura-blue" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">SophIA reflection</h3>
                  <p className="mt-3 text-sm leading-6 text-ivory-light/62">
                    Name care first, then the boundary, then the request.
                  </p>
                </div>
                <div className="rounded-[8px] border border-solar-gold/20 bg-solar-gold/10 p-5">
                  <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-solar-gold/35 bg-white/[0.05] shadow-aura">
                    <div className="grid h-28 w-28 place-items-center rounded-full border border-aura-blue/35 bg-aura-blue/10">
                      <span className="text-sm font-semibold text-white">Breathe</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[8px] border border-harmony-green/20 bg-harmony-green/10 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-harmony-green" aria-hidden="true" />
                  <p className="font-semibold text-white">Protected emotional field</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-ivory-light/62">
                  Shared visibility, private notes, AI transparency, and consent boundaries remain visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marble-faint px-4 py-24 text-deep-space">
        <div className="mx-auto max-w-7xl">
          <p className="font-accent text-xs tracking-[0.32em] text-deep-space/58">CORE MODULES</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-display text-5xl leading-none md:text-6xl">
              Every chamber opens into a different kind of emotional intelligence.
            </h2>
            <Button asChild variant="gold">
              <Link href="/dashboard">
                Enter Lux Aeterna <Sparkles className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {osModules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group rounded-[8px] border border-deep-space/10 bg-white/65 p-5 shadow-[0_20px_70px_rgba(13,15,20,.08)] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <module.icon className="h-5 w-5 text-deep-space" aria-hidden="true" />
                  <span className="rounded-[8px] bg-deep-space px-3 py-1 text-xs text-ivory-light">
                    {module.signal}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{module.title}</h3>
                <p className="mt-4 text-sm leading-6 text-deep-space/62">{module.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-deep-space">
                  Open module <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-accent text-xs tracking-[0.32em] text-solar-gold">AI CIVILIZATION</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_.8fr]">
          <GlassCard luminous className="p-8 md:p-10">
            <LockKeyhole className="h-6 w-6 text-harmony-green" aria-hidden="true" />
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-none text-white md:text-6xl">
              Spiritual luxury with serious privacy architecture.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory-light/64">
              NSA Core Redimido gives the platform a secure, transparent, protective layer for
              sensitive emotional data and AI consent.
            </p>
          </GlassCard>
          <GlassCard className="p-8 md:p-10">
            <p className="font-accent text-xs tracking-[0.28em] text-harmony-green">TRUST SIGNALS</p>
            <div className="mt-7 grid gap-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                  <ShieldCheck className="h-4 w-4 text-harmony-green" aria-hidden="true" />
                  <span className="text-sm text-ivory-light/72">{signal}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
