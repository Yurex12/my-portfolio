import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 md:px-0" id="contact">
      <div className="mb-4 space-y-4">
        <h1 className="text-2xl sm:text-3xl">Get in touch</h1>
        <p>
          Ready to collaborate on your next project? Let's connect and build
          something amazing together.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="h-full w-full rounded-sm border"></div>
        <ContactForm />
      </div>
    </section>
  );
}
