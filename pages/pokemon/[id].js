import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Details() {
  const {
    query: { id },
  } = useRouter();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      setPokemon(await res.json());
    }
    if (id) {
      getPokemon();
    }
  }, [id]);
  if (!pokemon) {
    return null;
  }
  return <div>{JSON.stringify(pokemon)}</div>;
}
