import React, { useEffect, useState } from 'react'
import { PokemonProps } from '../interface/Pokemon.interface'
import { useSuspenseQuery } from '@apollo/client';
import CardPokemon from './CardPokemon';
import { GET_POKEMON_ALL } from '../services/pokemon';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const { data }: { data: { pokemons: PokemonProps[] } } = useSuspenseQuery(GET_POKEMON_ALL, { variables: { first: 10 } })
  useEffect(() => {
    if (data.pokemons && !pokemons) setPokemons(data.pokemons)
  }, [data, pokemons])

  return (
    <main className="w-full h-full border rounded-md py-4  flex flex-wrap gap-8 row-start-2 justify-around items-center ">
      {data.pokemons.map((p, _) => (<CardPokemon key={_} charactor={p} />))}
    </main>

  )
}
export default PokemonList
