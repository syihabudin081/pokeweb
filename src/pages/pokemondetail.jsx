import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemondetail() {
  const [detailPokemondata, setdetailPokemondata] = useState(null);
  let { idData } = useParams();
  let fetchdata = async () => {
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idData}`);
      setdetailPokemondata([res.data]);
      console.log(detailPokemondata)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);


  return (
   
  )
}

export default Pokemondetail;
