import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Services />
      <Testimonials />
      <AppointmentForm />
    </main>
  );
}
