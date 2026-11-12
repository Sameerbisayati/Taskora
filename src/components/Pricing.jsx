
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Free",
    description: "For people who want to organise their daily work.",
    price: "$0",
    period: "forever",
    features: [
      "Your own workspace",
      "Create and manage tasks",
      "Organise your projects",
      "Track your progress",
    ],
    featured: false,
  },
  {
    name: "Pro",
    description: "For teams who want to work better together.",
    price: "$12",
    period: "per user / month",
    features: [
      "Everything in Free",
      "Work with your team",
      "Plan and manage more projects",
      "Get priority support",
    ],
    featured: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-[#eeefe8] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82966e]">
                Simple pricing
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Choose what works
                <br />
                for your team.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#73736a]">
              Start for free and upgrade when you need more features.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.15}>
              <div
                className={`h-full rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-10 ${
                  plan.featured
                    ? "border-[#171717] bg-[#171717] text-white"
                    : "border-black/10 bg-[#f7f7f2]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>

                  {plan.featured && (
                    <span className="rounded-full bg-[#82966e] px-4 py-2 text-xs text-white">
                      Recommended
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 min-h-12 max-w-sm text-sm leading-6 ${
                    plan.featured ? "text-white/60" : "text-[#73736a]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-9 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </span>

                  <span
                    className={`pb-2 text-sm ${
                      plan.featured ? "text-white/60" : "text-[#73736a]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <a
                  href="#contact"
                  className={`mt-9 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "bg-[#82966e] text-white hover:bg-[#95a987]"
                      : "bg-[#171717] text-white hover:bg-[#82966e]"
                  }`}
                >
                  Get started
                  <ArrowUpRight size={17} />
                </a>

                <div
                  className={`my-9 border-t ${
                    plan.featured ? "border-white/15" : "border-black/10"
                  }`}
                />

                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em]">
                  What's included
                </p>

                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        size={18}
                        className="shrink-0 text-[#82966e]"
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-white/75" : "text-[#55554f]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
