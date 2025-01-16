import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-semibold">React Design Patterns</h1>
      </Link>

      <nav>
        <ul>
          {[{ label: "HOC", href: "/hoc" }].map((li) => (
            <li key={li.label} className="p-2">
              <Link href={li.href}>{li.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
