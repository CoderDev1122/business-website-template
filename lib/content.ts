/**
 * Single source of truth for every word on the site.
 *
 * To re-skin this template for a different business, edit this file only:
 * components read their copy, links, prices and hours from here.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SiteContent {
  business: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    street: string;
    city: string;
    region: string;
    postcode: string;
    established: number;
  };
  hours: OpeningHours[];
  nav: NavLink[];
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Stat[];
    cardTitle: string;
    cardLines: string[];
    cardNote: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Service[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    summary: string;
    items: Testimonial[];
  };
  appointment: {
    eyebrow: string;
    heading: string;
    intro: string;
    points: string[];
    responseNote: string;
    submitLabel: string;
    successHeading: string;
    successBody: string;
  };
  footer: {
    blurb: string;
    note: string;
  };
}

export const siteContent: SiteContent = {
  business: {
    name: "Willow Creek Dental",
    shortName: "Willow Creek",
    tagline: "Gentle, modern dentistry for the whole family",
    description:
      "Willow Creek Dental is a family dental practice in Maple Grove offering preventive, cosmetic and restorative dentistry — with honest advice, transparent fees and appointments that run on time.",
    phoneDisplay: "(555) 014-2280",
    phoneHref: "tel:+15550142280",
    email: "care@willowcreekdental.com",
    street: "214 Willow Creek Drive",
    city: "Maple Grove",
    region: "MN",
    postcode: "55311",
    established: 2009,
  },
  hours: [
    { days: "Monday – Thursday", hours: "8:00am – 5:30pm" },
    { days: "Friday", hours: "8:00am – 2:00pm" },
    { days: "Saturday", hours: "By appointment" },
    { days: "Sunday", hours: "Closed" },
  ],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Patient Stories", href: "#stories" },
    { label: "Opening Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Family dental practice · Maple Grove",
    heading: "A calmer kind of dental visit.",
    subheading:
      "Exams, cleanings, implants and clear aligners from a team that explains everything before it happens and charges exactly what was quoted. New patients are welcome, and most first visits take under an hour.",
    primaryCta: { label: "Request an appointment", href: "#appointment" },
    secondaryCta: { label: "Call (555) 014-2280", href: "tel:+15550142280" },
    stats: [
      { value: "15+", label: "Years serving Maple Grove" },
      { value: "6,400+", label: "Patients cared for" },
      { value: "4.9 / 5", label: "Average patient rating" },
    ],
    cardTitle: "New patient visit — $149",
    cardLines: [
      "Full examination and digital X-rays",
      "Professional clean and polish",
      "Written treatment plan with exact fees",
      "No obligation to book further treatment",
    ],
    cardNote: "Most dental plans accepted. Ask us to check yours before you book.",
  },
  services: {
    eyebrow: "What we do",
    heading: "Complete care under one roof",
    intro:
      "From a six-month check-up to a full smile rebuild, treatment is planned in the open: you see the options, the fees and the order of work before anything starts.",
    items: [
      {
        title: "Preventive care & hygiene",
        description:
          "Examinations, digital X-rays, professional cleaning and fluoride treatment, with a recall plan matched to your teeth — not a one-size schedule.",
        detail: "Exam & clean from $149",
      },
      {
        title: "Cosmetic dentistry",
        description:
          "Professional whitening, composite bonding and porcelain veneers, planned with a digital preview so you see the likely result before committing.",
        detail: "Whitening from $299",
      },
      {
        title: "Dental implants",
        description:
          "Permanent replacements for missing teeth, from a single implant to full-arch restorations, with 3D-guided placement and staged payment options.",
        detail: "Single implant from $1,850",
      },
      {
        title: "Clear aligners",
        description:
          "Discreet orthodontic treatment for adults and teens. Straighten crowded or gapped teeth without fixed braces, with progress checked every six weeks.",
        detail: "Treatment from $2,400",
      },
      {
        title: "Emergency dentistry",
        description:
          "Toothache, a broken tooth or a lost crown — call before 10am and we will hold a same-day emergency slot for you. Pain relief first, paperwork second.",
        detail: "Same-day slots daily",
      },
      {
        title: "Children's dentistry",
        description:
          "Short, friendly first visits for children from age three, sealants and fluoride to protect growing teeth, and no lectures — for them or for you.",
        detail: "Under-5s seen free with a parent visit",
      },
    ],
  },
  testimonials: {
    eyebrow: "Patient stories",
    heading: "Why Maple Grove keeps coming back",
    summary: "Rated 4.9 out of 5 across 480+ verified patient reviews.",
    items: [
      {
        quote:
          "I avoided dentists for six years after a bad experience. The team here explained every step, never rushed me, and the implant work was finished exactly at the price on the plan. I should have done it years ago.",
        name: "Margaret Ellison",
        detail: "Implant patient, Maple Grove",
      },
      {
        quote:
          "They got my son in the same morning he chipped a tooth at football practice, and he walked out laughing. As a parent, that is the whole review.",
        name: "Daniel Okafor",
        detail: "Parent of two young patients",
      },
      {
        quote:
          "Straightforward fees, appointments that actually start on time, and my aligner results matched the preview almost exactly. The most organised practice I have ever used.",
        name: "Priya Raman",
        detail: "Clear aligner patient",
      },
    ],
  },
  appointment: {
    eyebrow: "Book a visit",
    heading: "Request an appointment",
    intro:
      "Send the short form and we will call or email back to confirm a time that suits you. Nothing is booked until you have agreed the time with us.",
    points: [
      "We reply within one working hour, Monday to Friday.",
      "Tell us if you are in pain — emergency slots are held every day.",
      "Prefer to talk? Call (555) 014-2280 and we will book you in directly.",
    ],
    responseNote:
      "Your request opens in your own email app, addressed to the practice — nothing is sent until you press send there.",
    submitLabel: "Send appointment request",
    successHeading: "Your request is ready to send",
    successBody:
      "We have opened your email app with the request filled in. Once you send it, expect a call or email from us within one working hour (Monday to Friday) to confirm your time.",
  },
  footer: {
    blurb:
      "Family dental practice in Maple Grove since 2009. Preventive, cosmetic and restorative dentistry with transparent fees and appointments that run on time.",
    note: "In an emergency out of hours, call the practice number and follow the voicemail instructions.",
  },
};
