import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg text-black font-semibold text-center p-12">
        Home
      </h1>
      <ul className="text-center">
        <li className="underline">
          <Link href="/FirstFundamental">First Fundamental</Link>
        </li>
        <li className="underline">
          <Link href="/hover_focus_states">Hover Focus States</Link>
        </li>
        <li className="underline">
          <Link href="/responsiveDesign">Responsive Design</Link>
        </li>
        <li className="underline">
          <Link href="/darkMode">Dark Mode</Link>
        </li>
        <li className="underline">
          <Link href="/reusingStyles">Reusing Styles</Link>
        </li>
        <li className="underline">
          <Link href="/customStyles">Custom Styles</Link>
        </li>
      </ul>
    </div>
  );
}
