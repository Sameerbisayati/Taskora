
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82966e]">
              Let's talk
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Have a project in mind?
              <span className="font-serif italic font-normal text-[#82966e]">
                {" "}Let's connect.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#73736a]">
              Have a question or want to learn more about Taskora? Send us a
              message using the form.
            </p>

            <div className="mt-14 border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#85857c]">
                A little reminder
              </p>
              <p className="mt-3 text-xl font-medium">
                Good things start with a conversation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-black/10 bg-[#eeefe8] p-6 sm:p-9"
          >
            {submitted ? (
              <div className="flex min-h-95 flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-[#82966e]" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Message received!
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-[#73736a]">
                  Thanks for reaching out. We appreciate your interest in Taskora.Our team ill contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-medium text-[#526247] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Send a message
                </h3>

                <p className="mt-2 text-sm text-[#73736a]">
                  Fill in the details below.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-4 text-sm outline-none transition-all focus:border-[#82966e] focus:ring-2 focus:ring-[#82966e]/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-4 text-sm outline-none transition-all focus:border-[#82966e] focus:ring-2 focus:ring-[#82966e]/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Your message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you have in mind..."
                      required
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-4 text-sm outline-none transition-all focus:border-[#82966e] focus:ring-2 focus:ring-[#82966e]/15"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#82966e]"
                >
                  Send message
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
