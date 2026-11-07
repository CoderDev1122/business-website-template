"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";

/**
 * Sticky site header.
 *
 * Navigation rule: link labels never wrap. The nav uses flex-nowrap and
 * every link is whitespace-nowrap; when space gets tight the phone number
 * yields first (hidden below xl), then the nav gives way to the menu
 * button below md. Labels themselves stay on one line at every width.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const { business, nav } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-pine-100 bg-white/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <a
          href="#top"
          className="flex min-h-[44px] items-center gap-3"
          aria-label={`${business.name} — home`}
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pine-700 font-display text-lg font-semibold text-white"
          >
            W
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap font-display text-lg font-semibold text-ink">
              {business.name}
            </span>
            <span className="block whitespace-nowrap text-xs font-medium uppercase tracking-wider text-ink-faint">
              {business.city} · Est. {business.established}
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex flex-nowrap items-center gap-5">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-semibold text-ink-soft transition-colors hover:text-pine-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="hidden whitespace-nowrap text-[15px] font-bold text-pine-800 hover:text-pine-600 xl:inline-flex"
          >
            {business.phoneDisplay}
          </a>
          <a href="#appointment" className="btn-primary hidden px-5 sm:inline-flex">
            Book a visit
          </a>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-pine-200 text-pine-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-pine-100 bg-white md:hidden"
        >
          <ul className="wrap flex flex-col py-2">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-mist py-2 font-semibold text-ink last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={business.phoneHref}
                className="flex min-h-[44px] items-center py-2 font-bold text-pine-800"
              >
                Call {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
