import { PokemonProps } from "../interface/Pokemon.interface";
import api from "../lib/axios";

export const getPokemon = async ({ id, name }: { id?: string, name?: string }): Promise<PokemonProps | undefined> => {
  console.log(id, name)
  const queryName = `
    query getPokemon(${name ? `$name: String!` : `$id: String!`}) {
      pokemon(${name ? `name: $name` : `id: $id`}) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        attacks {
          fast { 
            name
            type
            damage
          }
          special { 
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
        evolutions{
          id
          number
          name
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }
    }
  `;

  try {
    const response = await api.post("/", {
      query: queryName, variables: { name, id },
    });
    // console.log(queryName)
    console.log(response.data)
    return response.data.data.pokemon;
  } catch (error) {
    console.error("GraphQL Error:", error);
    return undefined;
  }
};

export const getPokemons = async ({ first }: { first: number }): Promise<PokemonProps[] | []> => {
  const queryName = `
    query getPokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        attacks {
          fast { 
            name
            type
            damage
          }
          special { 
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  `;
  // evolutions: PokemonProps[]
  //       evolutionRequirements {
  //   amount
  //   name
  // }
  // console.log(queryName)
  try {
    const response = await api.post("/", {
      query: queryName, variables: { first },
    });
    // console.log('getPokemonsList:', response.data.data.pokemons)
    return response.data.data.pokemons;
  } catch (error) {
    console.error("GraphQL Error:", error);
    return [];
  }

}
