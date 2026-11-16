import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
}
