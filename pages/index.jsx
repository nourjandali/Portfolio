import React from "react";
import Head from "next/head";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Nour&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="#">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
