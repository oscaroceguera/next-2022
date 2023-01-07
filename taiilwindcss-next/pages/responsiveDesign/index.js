import ImageResponsive from "./imageResponsive";
import CardResponsive from "./cardResponsive";

export default function ResponsiveDesign() {
  return (
    <div className="container mx-auto my-4 border-solid border-2 bg-slate-100 p-2">
      <ImageResponsive />
      <br />
      <CardResponsive />
    </div>
  );
}
