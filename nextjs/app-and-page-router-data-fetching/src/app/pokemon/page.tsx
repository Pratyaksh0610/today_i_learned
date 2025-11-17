import Link from "next/link";

interface PokemonResult {
  name: string;
  url: string;
}

interface Pokemon {
  count: number;
  next: string;
  results: PokemonResult[];
}

export default async function Pokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data: Pokemon = await response.json();
  const now = new Date().toISOString();

  return (
    <>
      <h1>Pokemon Page</h1>
      <p>Data fetched at: {now}</p>
      {data.results.map((pokemon) => (
        <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`} prefetch={true} >
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
