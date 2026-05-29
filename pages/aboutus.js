import Head from "next/head";
import { pageTitle } from "../lib/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutGrid from "../components/AboutGrid";
import AboutTeam from "../components/AboutTeam";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{pageTitle("About Us")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center py-2 m-auto w-4/5">
        <AboutGrid/>
        <AboutTeam/>
      </div>
      <Footer />
    </div>
  );
}
