const people = [
  { name: "Oscar Oceguera", tiitle: "FrontEnd" },
  { name: "Fernando Guterrez", title: "backend" },
  { name: "Pedro Almodivas", title: "cineaste" },
];

export default function DiffNestedGroups() {
  return (
    <ul>
      {people.map((person) => (
        <li className="group/item hover:bg-slate-100">
          <div>
            <a>{person.name}</a>
            <p>{person.title}</p>
          </div>
          <a
            class="group/edit invisible hover:bg-slate-200 group-hover/item:visible"
            href="tel:{person.phone}"
          >
            <span class="group-hover/edit:text-gray-700 group-hover/edit:bg-red-700">
              Call
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
