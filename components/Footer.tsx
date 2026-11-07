import { siteContent } from "@/lib/content";

/** Footer: contact, hours and navigation repeated for visitors who scroll. */
export default function Footer() {
  const { business, hours, nav, footer } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-pine-900 text-pine-100">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-pine-200">
            {footer.blurb}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-widest text-pine-200">
            Explore
          </h2>
          <ul className="mt-4 space-y-1">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap text-[15px] font-medium text-pine-100 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                className="inline-flex min-h-[44px] items-center whitespace-nowrap text-[15px] font-medium text-pine-100 hover:text-white"
              >
                Request an appointment
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-pine-200">
            Contact
          </h2>
          <address className="mt-4 text-[15px] not-italic leading-relaxed text-pine-100">
            {business.street}
            <br />
            {business.city}, {business.region} {business.postcode}
          </address>
          <p className="mt-3 space-y-1 text-[15px]">
            <a
              href={business.phoneHref}
              className="block font-bold text-white hover:text-pine-200"
            >
              {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="block text-pine-100 hover:text-white"
            >
              {business.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-pine-200">
            Opening hours
          </h2>
          <dl className="mt-4 space-y-2 text-[15px]">
            {hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-4">
                <dt className="text-pine-200">{row.days}</dt>
                <dd className="whitespace-nowrap font-semibold text-white">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-pine-200">{footer.note}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-2 py-5 text-sm text-pine-200">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
