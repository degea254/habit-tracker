import { Button } from "./button";

export function HabitList() {
  const habits = [
    { id: "fsdf", name: "read1" },
    { id: "fdfsdfsdfa", name: "poop" },
  ];

  if (habits.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-10 text-center text-sm text-slate-400">
        No habits yet. Add one to get started.
      </p>
    );
  }

  return (
    <section aria-label="Your habits" className="mt-6 grid gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </section>
  );
}

type HabitItemProps = {
  habit: { id: string; name: string };
};

function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = ["Mon", "Tue", "Wed"];
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-black/10 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-lg text-violet-300" aria-hidden="true">
            ✓
          </span>
          <div className="min-w-0">
            <h2 className="truncate font-semibold text-slate-100">{habit.name}</h2>
            <p className="mt-0.5 text-xs text-slate-400">🔥 3 day streak</p>
          </div>
        </div>
        <Button>Delete</Button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {visibleDates.map((date, index) => (
          <Button key={`${date}-${index}`}>
            <span className="block text-[10px] font-medium uppercase tracking-wide text-slate-400">{date}</span>
            <span className="mt-1 block text-sm font-semibold">{index + 2}</span>
          </Button>
        ))}
      </div>
    </article>
  );
}
