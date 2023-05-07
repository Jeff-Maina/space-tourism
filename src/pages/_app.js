import Layout from "@/comps/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component key={router.pathname}  {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
} 
