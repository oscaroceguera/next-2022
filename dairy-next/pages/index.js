import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const products = [{ name: "phone" }, { name: "computer" }, { name: "tablet" }];

// export default function Home() {
//   return (
//     <div>
//       <ul>
//         {products.map((product) => {
//           return (
//             <li key={product.name}>
//               <Link href={`/products/${product.name}`}>{product.name}</Link>
//             </li>
//           );
//         })}
//         <li style={{ marginTop: "100em" }}>
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>
//       <h2>Welcome to my homepage!</h2>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={products[0].name} />
        <meta property="og:title" content={products[0].name} />
        <meta property="og:description" content={products[0].name} />
      </Head>
      <h2 className={styles.heading}>Welcome to my homepage</h2>
      <h2 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-gray-200 hover:underline">
        Tailwind CSS in Next.js
      </h2>
      <Image src="/demo.png" alt="asdss" width={500} height={300} />
      <Image
        src="https://images.pexels.com/photos/9832430/pexels-photo-9832430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1demo.jpeg"
        width={500}
        height={300}
        alt="asd"
      />
    </div>
  );
}
