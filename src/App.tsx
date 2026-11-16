import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";
import { HabitList } from "./components/HabitList";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-10">
      <Header />

      <HabitForm />

      <HabitList />
    </div>
  );
}
