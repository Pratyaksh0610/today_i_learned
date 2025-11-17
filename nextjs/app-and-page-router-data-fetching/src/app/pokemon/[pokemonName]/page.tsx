import Image from "next/image";
import Link from "next/link";

export default async function PokemonName(props: any) {
  const { pokemonName } = await props.params;
  console.log("Pokemon Name:", pokemonName);

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
//   console.log("Pokemon Data:", data);

  return (
    <>
      <h1>{pokemonName}</h1>
      <Image
        src={data.sprites.front_default}
        alt={pokemonName}
        width={200}
        height={200}
      />
      <Link href="/pokemon">Back to Pokemon List</Link>
    </>
  );
}

// app/pokemon/[pokemonName]/page.tsx
export async function generateStaticParams() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await res.json();
    const result = data.results.map((p: { name: string }) => ({ pokemonName: p.name }));
    // console.log("Static params generated:", result);
    return result;
}

export const dynamicParams = false; // anything not returned by generateStaticParams will 404
