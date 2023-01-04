import { useRouter } from "next/router";
export default function ProductGPU() {
  const router = useRouter();
  console.log(router.query);
  return (
    <h2>
      Viewing Product: {router.query.name} with {router.query.gpu} GPU
    </h2>
  );
}
