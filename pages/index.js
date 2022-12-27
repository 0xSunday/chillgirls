import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import NFT from "../components/NFT";
import About from "../components/About";
import RoadMap from "../components/RoadMap";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHeading />
      <NFT />
      <About />
      <RoadMap />
      <FAQ />
      <Footer />
    </div>
  );
}
