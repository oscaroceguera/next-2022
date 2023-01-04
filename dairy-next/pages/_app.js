import "../styles/globals.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
// export default function MyApp({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);

//   return getLayout(<Component {...pageProps} />);
// }
