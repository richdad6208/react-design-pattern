import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold">HOC - High Order Component</h2>
      </section>
      <nav>
        <ul className="flex gap-2">
          {[
            { label: "Case 1", href: "/hoc" },
            { label: "Case 2", href: "/hoc/2" },
            { label: "Composing", href: "/hoc/3" },
            { label: "Hooks", href: "/hoc/4" },
          ].map((link) => (
            <Link href={link.href} key={link.label} className="font-semibold">
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
