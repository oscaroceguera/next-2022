import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray p-12">
      <h1 className="bg-yellow text-black p-4 text-xl text-center">
        Hola Bienvenido!
      </h1>
      <div className="container flex items-center flex-col mt-4">
        <button className="bg-tahiti">Guardar</button>
      </div>
    </div>
  );
}
