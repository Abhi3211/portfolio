export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between max-w-5xl mx-auto w-full">
        <span className="font-semibold tracking-tight">Abhishek Dangi</span>
        <nav className="flex gap-6 text-sm text-[var(--muted)]">
          <a className="hover:text-white transition-colors" href="#work">
            Work
          </a>
          <a className="hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 md:py-28">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-5">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl">
          Building products for real businesses.
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl mb-10 leading-relaxed">
          Founder of Dairy Hisab and other products. This site will hold selected
          work, case studies, and how to reach me.
        </p>
        <a
          href="#work"
          className="inline-flex items-center rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
        >
          View work
        </a>

        <section id="work" className="mt-28 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6">Selected work</h2>
          <div className="grid gap-4">
            <a
              href="https://github.com/Abhi3211/dairy-hisab"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-[var(--accent)]/50 transition"
            >
              <h3 className="text-lg font-semibold mb-1">Dairy Hisab</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Milk collection, AI register photo import, party bills, and
                payments for dairies in India.
              </p>
            </a>
            <div className="rounded-xl border border-dashed border-white/15 p-6 text-sm text-[var(--muted)]">
              More projects coming — gas station, and others.
            </div>
          </div>
        </section>

        <section id="about" className="mt-28 scroll-mt-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Placeholder. We will replace this with your story, skills, and what
            you want people to hire you for.
          </p>
        </section>

        <section id="contact" className="mt-28 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-[var(--muted)] mb-4">
            Prefer email for now — update this when you have a preferred address.
          </p>
          <a
            className="text-[var(--accent)] hover:underline"
            href="mailto:adangi555@gmail.com"
          >
            adangi555@gmail.com
          </a>
        </section>
      </main>

      <footer className="px-6 py-8 border-t border-white/10 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Abhishek Dangi
      </footer>
    </div>
  )
}
