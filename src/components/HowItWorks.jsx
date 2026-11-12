
import { ArrowUpRight, FolderPlus, ListTodo, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description:
      "Start with a project and bring the people and information you need together.",
    icon: FolderPlus,
    link: "#features",
    action: "Explore features",
  },
  {
    number: "02",
    title: "Organise your tasks",
    description:
      "Break your work into manageable tasks and decide what needs your attention first.",
    icon: ListTodo,
    link: "#features",
    action: "Explore features",
  },
  {
    number: "03",
    title: "Make steady progress",
    description:
      "Follow your progress, keep everyone updated and finish work with more clarity.",
    icon: TrendingUp,
    link: "#pricing",
    action: "View plans",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82966e]">
              Getting started
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              A better workflow,
              <br />
              in three simple steps.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#73736a]">
              You don't need a complicated system to get organised. Start
              small, build a routine and keep moving.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.15}>
                <div className="group border-t border-black/15 pt-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#82966e]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eeefe8] text-[#526247] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#dce4d4]">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#73736a]">
                    {step.description}
                  </p>

                  <a
                    href={step.link}
                    className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#82966e] transition-colors hover:text-[#526247] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82966e]"
                  >
                    {step.action}
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
