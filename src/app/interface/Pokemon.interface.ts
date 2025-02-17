export interface AttackProps {
  name: string
  type: string
  damage: number
}

export interface EvolutionRequirementProps {
  amount: number
  name: string
}

export interface PokemonAttackProps {
  fast: AttackProps[]
  special: AttackProps[]
}

export interface PokemonDimension {
  minimum: string
  maximum: string
}

export interface PokemonProps {
  id: string;
  number: string;
  name: string
  weight: PokemonDimension
  height: PokemonDimension
  classification: string
  types: string[]
  resistant: string[]
  attacks: PokemonAttackProps
  weaknesses: string[]
  fleeRate: number
  maxCP: number
  evolutions: PokemonProps[]
  evolutionRequirements: EvolutionRequirementProps
  maxHP: number
  image: string
}
