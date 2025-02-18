import { gql } from "@apollo/client";

export const GET_POKEMON_NAME = gql`
  query ($name: String!){
    pokemon(name: $name){
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
`
export const GET_POKEMON_ID = gql`
  query ($id: String){
    pokemon(id: $id){
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
`
export const GET_POKEMON_ALL = gql`
  query ($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      types
      image
    }
  }
`

