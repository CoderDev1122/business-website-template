import { siteContent } from "@/lib/content";

function Stars() {
  return (
    <span className="flex gap-1 text-brass-500" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}

/** Patient proof, placed between the services and the booking form. */
export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="bg-mist py-16 lg:py-24"
    >
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brass-600">
            {testimonials.eyebrow}
          </p>
          <h2
            id="stories-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{testimonials.summary}</p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-card"
            >
              <Stars />
              <blockquote className="mt-4 flex-1">
                <p className="text-ink-soft">&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <p className="mt-6 border-t border-mist pt-4">
                <span className="block font-semibold text-ink">{item.name}</span>
                <span className="block text-sm text-ink-faint">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
