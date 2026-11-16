import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <HabitForm />
    </div>
  );
}
