import Layout from "@/comps/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
        <Component key={router.pathname}  {...pageProps} />
    </Layout>
  );
} 
