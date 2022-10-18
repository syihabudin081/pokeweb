import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Pokedex() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data)
  // const [pokemontype, setType] = useState([]);
  const [status, setFetchStatus] = useState(false);
  const colors = {
    // fire: '#FDDFDF',
    // grass: '#DEFDE0',
    // electric: '#FCF7DE',
    // water: '#DEF3FD',
    // ground: '#f4e7da',
    // rock: '#d5d5d4',
    // fairy: '#fceaff',
    // poison: '#98d7a5',
    // bug: '#f8d5a3',
    // dragon: '#97b3e6',
    // psychic: '#eaeda1',
    // flying: '#F5F5F5',
    // fighting: '#E6E0D4',
    // normal: '#F5F5F5',
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: " #B7B7CE",
    fairy: "#D685AD",
  };
  //   const [pokemon, setPokemon] = useState([]);
  //   const [loading, setLoading] = useState(true)

  //   const getPokemonList = async () => {

  //     let pokemonArray = [];
  //     for(let i = 1; i <= 100; i ++){

  //         pokemonArray.push(await getPokemonData(i));

  //     }

  //     setPokemon(pokemonArray);
  //     setLoading(false);
  // }

  // const getPokemonData = async (id) => {
  //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     return res;
  // }

  // useEffect(() => {
  //     getPokemonList();
  // }, [])

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.filter((data) => {
    return data.name.search(value) != -1;
    });
    setFilteredData(result);
    }





  let fetchdata = async () => {
    try {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=200")
        .then((res) => {
          return res.data.results;
        })
        .then((results) => {
          return Promise.all(results.map((res) => axios.get(res.url)));
        })
        .then((results) => {
          setData(results.map((res) => res.data));
          setFilteredData(results.map((res) => res.data));
          
          
        });
     
      setFetchStatus(true);
      // console.log(res);
      // setData([...res.data.results]);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // let fetchdatatype = async (id) => {
  //   console.log(id);
  //   try {
  //     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     console.log(res);
  //     setType([...res.data]);
  //     console.log(pokemontype);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };

  return (
    <>
      <div class="text-center text-7xl font-Quicksand  w-full py-12 mb-4 bg-yellow-300">
        Pokedex
      </div>
      
<form class="m-7">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" onChange={(event)=>handleSearch(event)} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search pokemon names" required=""/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


      
        {status == false ? (
          <div class="text-center mt-20">
            <div role="status">
              <svg
                class="inline mr-2 w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mb-12 font-Quicksand">

          {
          filteredData.map((res, index) => {
            return (
              <div
                class={`mx-2 max-w-sm  rounded-lg shadow-md border-4 `}
                style={{ "border-color": colors[res.types[0].type.name] }}
              >
                <div class="flex justify-end px-4 pt-4"></div>
                <div class="flex  flex-col items-center pb-10">
                  <img
                    class="mb-3 w-32 h-32 rounded-full shadow-lg bg-white object-contain border-gray-400 border-2"
                    // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    //   index + 1
                    // }.png`}
                    src={res.sprites.other.dream_world.front_default}
                    alt="Bonnie image"
                    style={{ "border-color": colors[res.types[0].type.name] }}
                  />
                  <h5 class="mb-1 text-xl font-bold  ">#{res.id}</h5>
                  <h5 class="mb-1 text-xl font-bold text-fire ">{res.name}</h5>
                  <h5
                    class="mb-1 mt-1 text-lg font-bold  text-white text-center px-2 rounded "
                    style={{ background: colors[res.types[0].type.name] }}
                  >
                    {res.types[0].type.name}
                  </h5>

                  <div class="flex mt-4 space-x-3 lg:mt-6">
                    <button
                      to="/detail_job"
                      value={res.id}
                      class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}</div>
        )}
      
    </>
  );
}

export default Pokedex;
