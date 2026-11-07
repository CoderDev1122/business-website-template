import { siteContent } from "@/lib/content";

/** Services grid — every card ends at the same next step: book a visit. */
export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 lg:py-24">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brass-600">
            {services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {services.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{services.intro}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <li
              key={service.title}
              className="flex flex-col rounded-2xl border border-pine-100 bg-white p-8 shadow-card"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-ink-soft">{service.description}</p>
              <p className="mt-5 border-t border-mist pt-4 text-sm font-bold text-pine-700">
                {service.detail}
              </p>
              <a
                href="#appointment"
                className="mt-3 inline-flex min-h-[44px] items-center font-semibold text-pine-800 underline decoration-pine-200 decoration-2 underline-offset-4 hover:decoration-pine-600"
              >
                Book this treatment
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
