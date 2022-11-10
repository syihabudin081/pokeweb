/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import pokedexlogo from "./assets/pokeball.png"

function Landingpage() {
  return (
    <>
      <div class=" overflow-hidden h-screen w-full font-Quicksand  ">
        <img
          src="https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          class="absolute h-full w-full object-cover "
          alt="banner image"
        />
        
        <div class="container mx-auto relative z-10 flex items-center py-32 xl:py-40 w-3/4">
          <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span class="font-bold  text-red-500 flex gap-3 text-5xl items-center justify-center">
              Welcome To PokeWeb
            </span>
            <h1 class="font-bold  text-3xl text-black leading-tight mt-4">
              Situs pokemon yang menyediakan informasi terlengkap!
            </h1>
            <Link to="/pokedex" class="block bg-white hover:text-black   py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
              Discover
            </Link>
          </div>
        </div>
      </div>
      <div class=" overflow-hidden flex items-center justify-center h-screen font-Quicksand ">
        <img
          src="https://images.unsplash.com/photo-1612454376902-577cd469d008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="absolute h-full w-full object-cover brightness-75 "
        />
        <div class="inset-0 bg opacity-25 absolute"></div>

        <div class="container w-3/4 mx-auto  relative z-10 flex-col items-center justify-center ">
        <div class="flex  justify-between">
          <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10 h-1/2 my-auto ">
            <span class="font-bold  text-white flex gap-3 text-5xl items-center justify-center">
              Pokedex
            </span>
            <h1 class="font-bold  text-3xl text-white leading-tight mt-4">
              complete pokedex from all-over regions!
            </h1>
            <Link
              to="/pokedex"
              class="block bg-white hover:text-black  py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10 "
            >
              Discover
            </Link>
          </div>
          <img src={pokedexlogo} class="w-500px hover:scale-150"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
