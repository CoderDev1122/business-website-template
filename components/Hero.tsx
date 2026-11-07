import { siteContent } from "@/lib/content";

/**
 * Hero: passes the 5-second test — who, what, for whom, one next step —
 * with the practice's strongest trust facts and its new-patient offer
 * beside the calls to action, where the decision is made.
 */
export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="bg-mist">
      <div className="wrap grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brass-600">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-ink-soft">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-quiet">
              {hero.secondaryCta.label}
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-sm leading-snug text-ink-soft">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-2xl font-semibold text-pine-800 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-pine-800 p-8 text-white shadow-lift sm:p-10">
          <h2 className="font-display text-2xl font-semibold">
            {hero.cardTitle}
          </h2>
          <ul className="mt-6 space-y-4">
            {hero.cardLines.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-pine-200"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-pine-50">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/15 pt-5 text-sm text-pine-100">
            {hero.cardNote}
          </p>
          <a
            href={hero.primaryCta.href}
            className="mt-6 inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg bg-white px-6 py-3 font-semibold text-pine-900 transition-colors hover:bg-pine-50"
          >
            Claim the new patient visit
          </a>
        </div>
      </div>
    </section>
  );
}
