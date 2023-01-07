const items = ["ONE", "TWO", "THREE"];

export default function FirstLast() {
  return (
    <ul className="p-2 divide-y divide-slate-200">
      {items.map((item) => (
        <li
          className="flex py-4 first:pt-0 first:bg-sky-500 last:pb-0"
          key={item}
        >
          <h4>{item}</h4>
          <div>
            <p>-NEW</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
