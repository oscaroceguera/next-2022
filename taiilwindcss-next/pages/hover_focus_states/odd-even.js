const items = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisherr",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Leonard Krasner",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Emily Selman",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Anna Roberts",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
];

export default function OddEven() {
  return (
    <table className="my-12">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className="odd:bg-white even:bg-slate-200">
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
