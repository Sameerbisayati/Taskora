
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

function Hero() {
  const tasks = [
    { title: "Finish the project proposal", tag: "Completed", done: true },
    { title: "Review website changes", tag: "In progress", done: false },
    { title: "Prepare weekly update", tag: "Upcoming", done: false },
  ];

  return (
    <section
      id="home"
    className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-12 pb-20 lg:grid-cols-2 lg:px-10 lg:pt-16 lg:pb-28"
    >
      <Reveal>
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#82966e]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77776e]">
              A simpler way to work
            </p>
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Good work starts with a little{" "}
            <span className="font-serif italic font-normal text-[#82966e]">
              organisation.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#6e6e66]">
            Keep your projects, tasks and team on the same page. Taskora helps
            you organise your day and make progress without the extra noise.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#82966e]"
            >
              Explore Taskora
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#55554f] transition-colors hover:text-[#82966e]"
            >
              See how it works
            </a>
          </div>

          <div className="mt-16 grid max-w-md grid-cols-3 gap-5 border-t border-black/10 pt-6">
            <div>
              <p className="text-xl font-semibold">01.</p>
              <p className="mt-2 text-xs text-[#77776e]">Plan clearly</p>
            </div>
            <div>
              <p className="text-xl font-semibold">02.</p>
              <p className="mt-2 text-xs text-[#77776e]">Work together</p>
            </div>
            <div>
              <p className="text-xl font-semibold">03.</p>
              <p className="mt-2 text-xs text-[#77776e]">Move forward</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-8 h-32 w-32 rounded-full bg-[#dce4d4] blur-2xl" />

          <div className="relative rounded-4xl border border-black/10 bg-[#eeefe8] p-6 sm:p-9">
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#77776e]">
                  Your workspace
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  This week
                </h2>
              </div>

              <span className="rounded-full bg-[#dce4d4] px-4 py-2 text-xs font-medium text-[#526247]">
                3 tasks
              </span>
            </div>

            <div className="mt-7 space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={task.title}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-[#f7f7f2] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      task.done
                        ? "bg-[#82966e] text-white"
                        : "border border-black/15 text-[#77776e]"
                    }`}
                  >
                    {task.done ? <Check size={17} /> : <span>{index + 1}</span>}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="mt-1 text-xs text-[#85857c]">{task.tag}</p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#99998f] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#82966e] p-5 text-white">
              <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                A small reminder
              </p>
              <p className="mt-2 text-lg font-medium">
                Progress is better than perfection.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-[#77776e]">
              <span>Made for focused work</span>
              <span>Taskora / 01</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="col-span-full mt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-[#89897f]">
        <ArrowDown size={14} />
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
