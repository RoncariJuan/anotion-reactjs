import React from "react";
import Carro from "./Carro";
import Servicos from "./Servicos";
import Informacaos from "./Informacaos";
import Percepcao from "./Percepcao";
import Robo from "./Robo";
import Industria from "./Industria";
import Carreira from "./Carreira";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <main className=" mx-auto flex flex-col items-center justify-center bg-[url(/assets/fundo.avif)] bg-cover bg-no-repeat h-screen bg-center">
        <h1 className="text-center text-8xl max-sm:text-3xl" style={{ width: "20ch" }}>
          O FUTURO DA MOBILIDADE CHEGOU
        </h1>
        <p className="text-center text-3xl font-bold py-5 max-sm:text-sm" style={{ width: "50ch" }}>
          Prove uma direção autônoma mais segura com Autono.
        </p>
      </main>
      <Carro />
      <Servicos />
      <Informacaos />
      <Percepcao />
      <Robo />
      <Industria />
      <Carreira />
      <Footer />
    </>
  );
};

export default Home;
