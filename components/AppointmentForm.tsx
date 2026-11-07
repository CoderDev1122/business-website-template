"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";

/**
 * Short appointment-request form: name, one contact route, one choice,
 * one optional detail. Submitting composes a prefilled email in the
 * visitor's own mail app, addressed to the practice — the channel the
 * business actually answers. Swap the handler for an API route or a
 * form provider when the business has one.
 */
export default function AppointmentForm() {
  const { appointment, business, services, hours } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Appointment request — ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email") || "Not given"}`,
        `Treatment: ${data.get("service")}`,
        `Preferred time: ${data.get("time")}`,
        "",
        `${data.get("details") || ""}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="py-16 lg:py-24"
    >
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brass-600">
            {appointment.eyebrow}
          </p>
          <h2
            id="appointment-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {appointment.heading}
          </h2>
          <p className="mt-4 max-w-[55ch] text-lg text-ink-soft">
            {appointment.intro}
          </p>
          <ul className="mt-8 space-y-4">
            {appointment.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-pine-600"
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
                <span className="text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>

          <div id="hours" className="mt-10 rounded-2xl bg-mist p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Opening hours
            </h3>
            <dl className="mt-3 space-y-2">
              {hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-ink-soft">{row.days}</dt>
                  <dd className="whitespace-nowrap font-semibold text-ink">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-2xl border border-pine-100 bg-white p-8 shadow-card sm:p-10">
          {submitted ? (
            <div role="status">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {appointment.successHeading}
              </h3>
              <p className="mt-4 text-ink-soft">{appointment.successBody}</p>
              <p className="mt-6 text-ink-soft">
                In a hurry? Call us on{" "}
                <a
                  href={business.phoneHref}
                  className="font-bold text-pine-800 underline decoration-pine-200 decoration-2 underline-offset-4"
                >
                  {business.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="field-label">
                    Your name
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="field-input"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="f-phone" className="field-label">
                    Phone number
                  </label>
                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="field-input"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="f-email" className="field-label">
                  Email address <span className="font-normal text-ink-faint">(optional)</span>
                </label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-service" className="field-label">
                    What do you need?
                  </label>
                  <select id="f-service" name="service" className="field-input" required defaultValue={services.items[0].title}>
                    {services.items.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="f-time" className="field-label">
                    Preferred time
                  </label>
                  <select id="f-time" name="time" className="field-input" defaultValue="First available">
                    <option>First available</option>
                    <option>Weekday morning</option>
                    <option>Weekday afternoon</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="f-details" className="field-label">
                  Anything we should know?{" "}
                  <span className="font-normal text-ink-faint">(optional)</span>
                </label>
                <textarea
                  id="f-details"
                  name="details"
                  rows={3}
                  className="field-input"
                  placeholder="e.g. Sensitivity in a lower molar since last week"
                />
              </div>

              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                {appointment.submitLabel}
              </button>
              <p className="mt-4 text-sm text-ink-faint">{appointment.responseNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
