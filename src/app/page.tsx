'use client';

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import About from "@/containers/home/about";
import Contact from "@/containers/home/contact";
import Experience from "@/containers/home/experience";
import Hero from "@/containers/home/hero";
import Portfolio from "@/containers/home/portfolio";
import Service from "@/containers/home/service";
import Tools from "@/containers/home/tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tools />
      <Experience />
      <Portfolio />
      <Contact /> 
      <Footer />
    </>
  );
}
