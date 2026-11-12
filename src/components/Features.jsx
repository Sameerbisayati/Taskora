
import {
  ListChecks,
  Users,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    number: "01",
    title: "Everything in one place",
    description:
      "Keep your tasks, project details and important updates organised in one workspace.",
    icon: ListChecks,
  },
  {
    number: "02",
    title: "Better team coordination",
    description:
      "Make it easier for everyone to understand what needs to be done and who is responsible.",
    icon: Users,
  },
  {
    number: "03",
    title: "A clearer daily plan",
    description:
      "Organise your priorities, keep track of deadlines and make your workday more manageable.",
    icon: CalendarDays,
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-[#eeefe8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82966e]">
                What makes it useful
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                Less time organising.
                <br />
                More time doing.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#73736a] md:justify-self-end">
              Work becomes easier when you know what matters, what comes next
              and where everything belongs.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-black/15">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.number} delay={index * 0.12}>
                <div className="group grid gap-5 border-b border-black/15 py-9 transition-colors duration-300 hover:bg-white/40 md:grid-cols-[80px_1fr_1fr_60px] md:items-center md:px-5">
                  <span className="text-sm font-medium text-[#82966e]">
                    {feature.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dce4d4] text-[#526247] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#cbd8c0]">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#82966e] sm:text-2xl">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-7 text-[#73736a]">
                    {feature.description}
                  </p>

                  <a
                    href="#how-it-works"
                    aria-label={`Learn more about ${feature.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#82966e] transition-all duration-300 hover:border-[#82966e] hover:bg-[#82966e] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82966e] md:justify-self-center"
                  >
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 hover:-translate-y-0.5 hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#73736a]">
              A little more clarity can change the way you work.
            </p>

            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#526247] transition-colors hover:text-[#82966e]"
            >
              See how Taskora works
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Features;
