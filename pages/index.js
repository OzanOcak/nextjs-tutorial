import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await res.json());
    }
    getPokemon();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                  height={90}
                  width={80}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
