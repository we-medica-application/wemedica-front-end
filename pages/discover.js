import Head from "next/head";
import { pageTitle } from "../lib/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscoverDropDown from "../components/DiscoverDropDown";
import DiscoverForm from "../components/DiscoverForm";
import { useState } from "react";
import useResource from '../contexts/hooks/useResource'

export default function Discover() {
const { resources, loading, createResource, deleteResource } = useResource()
const [selectedDisease, selectDisease] = useState(0);



  return (
    // <div className="flex flex-col min-h-screen justify-around">
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{pageTitle("Discover")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-20">
        <DiscoverDropDown selectDisease={selectDisease}/>
        <DiscoverForm 
        selectedDisease={selectedDisease}       
        deleteResource={deleteResource}
        createResource={createResource}/>
      </div>
      <Footer />
    </div>
  );
}
