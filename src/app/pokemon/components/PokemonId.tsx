import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSuspenseQuery } from '@apollo/client'
import { GET_POKEMON_ID } from '@/app/services/pokemon'
import { PokemonProps } from '@/app/interface/Pokemon.interface'
import { useRouter } from 'next/navigation'
import ColorType from '@/app/components/ColorType'
import { BiDna, BiHorizontalCenter, BiLineChart, BiSolidHeartCircle, BiSolidInjection } from 'react-icons/bi'

const PokemonId = React.memo(({ name }: { name: string }) => {
  const router = useRouter()
  console.log('name:', name)
  const OnNav = (id: string) => { router.push(`/pokemon/${id}`) }
  const [pokemon, setPokemon] = useState<PokemonProps>()
  const { data }: { data: { pokemon: PokemonProps } } = useSuspenseQuery(GET_POKEMON_ID, { variables: { id: name } })

  if (data && data?.pokemon && !pokemon) setPokemon(data.pokemon)

  useEffect(() => {
    if (data?.pokemon && pokemon?.id !== data.pokemon.id) setPokemon(data.pokemon)
  }, [data, pokemon])

  return (
    <div className="w-[70vw] sm:h-[80vh] h-full bg-white/60 border rounded-xl  flex  flex-col sm:flex-row gap-8 row-start-2 justify-center items-start p-6">
      <div className="w-full sm:w-[70%] p-4 gap-2 h-full shadow-md flex flex-col justify-center items-center bg-zinc-100/20 rounded-md border border-slate-300/60">
        <div className="w-full h-full rounded-md border flex justify-center items-center bg-white">
          <Image src={pokemon?.image || ""} width={250} height={250} alt='' />
        </div>
        <div className=" w-full h-[320px] bg-white border rounded-md flex flex-row justify-around items-center">
          {!pokemon?.evolutions ? <span className="text-center font-bold text-[46px] text-black/5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">Untimate Evolutions</span>
            : pokemon?.evolutions?.map((p, i) => {
              return (
                <div key={i}
                  onClick={() => OnNav(p.id)}
                  className="cursor-pointer hover:scale-[1.03] transition-transform ease-in-out duration-300 relative w-[160px] h-[180px] bg-zinc-100/30 px-1 rounded-md border flex flex-col justify-around items-center ">
                  <div className="absolute -top-1 bg-zinc-200/95 border right-2 rounded-b-md px-2 text-white/70">{p.number}</div>
                  <div className="w-full h-[70%] flex justify-center items-center border rounded-md bg-white">
                    <Image src={p.image} width={70} height={70} className="w-[100px] h-[100px]" alt={p.name} />
                  </div>
                  <div className="w-full flex flex-row justify-evenly items-center">
                    <span className="font-bold text-[14px] ">{p.name}</span>
                    {p.types.map((e, i) => { return (<ColorType key={i} name={e} />) })}
                  </div>
                </div>)
            })}
        </div>
      </div>
      <div className="w-full sm:w-[40%] h-full gap-2 bg-zinc-100/20 shadow-lg border rounded-md flex flex-col justify-start items-start p-4 font-semibold">
        {/* Detail */}
        <div className="w-full h-fit flex flex-col justify-center items-center sm:items-start bg-white px-4 py-2 rounded-lg border font-semibold text-[12px] text-black/70 ">
          <span className="font-bold text-[42px] leading-10 text-black"> {pokemon?.name} </span>
          {/* Class */}
          <div className="flex flex-row justify-start items-center gap-1"><BiDna /> : {pokemon?.classification}</div>
          {/* H/W */}
          <div className="flex flex-row justify-start items-center gap-1">
            <BiHorizontalCenter size={14} className="" /> {pokemon?.weight.minimum + " | " + pokemon?.weight.maximum} : {pokemon?.height.minimum + " | " + pokemon?.height.maximum}
          </div>
          {/* Flee rate */}
          <div className="flex flex-row justify-start items-center gap-1">< BiLineChart size={14} /> : {pokemon?.fleeRate}</div>
          {/* HP/CP */}
          <div className="flex flex-row justify-start items-center gap-1">
            <BiSolidHeartCircle size={14} className="text-red-600/90" />
            <span>&nbsp;{pokemon?.maxHP}</span>
            <BiSolidInjection size={14} className="text-emerald-500/90" />
            <span>&nbsp;{pokemon?.maxCP}</span>
          </div>
        </div>
        {/* Condition */}
        <div className="w-full h-fit flex flex-col justify-center items-start bg-white px-4 py-2 rounded-lg border text-black/80">
          <span className="">Fast</span>
          <div className="w-full h-fit flex flex-row justify-around items-center ">
            {pokemon?.attacks?.fast.map((a, i) => {
              return (
                <div key={i} className="text-[10px] w-[75px] h-[85px] border rounded-lg gap-1 flex flex-col justify-center items-center">
                  <ColorType name={a.type} />
                  <span>{a.name}</span>
                  <span>{a.damage}</span>
                </div>)
            })}
          </div>
        </div>
        {/* Special */}
        <div className="w-full h-fit flex flex-col justify-center items-start bg-white px-4 py-2 rounded-lg border text-black/80">
          <span> Special </span>
          <div className="w-full h-fit flex flex-row justify-around items-center ">
            {pokemon?.attacks?.special?.map((a, i) => {
              return (
                <div key={i} className="text-[10px] w-[75px] h-[85px] border rounded-lg gap-1 flex flex-col justify-center items-center">
                  <ColorType name={a.type} />
                  <span>{a.name}</span>
                  <span>{a.damage}</span>
                </div>)
            })}
          </div>
        </div>
        {/* Resistance */}
        <div className="w-full h-fit flex flex-col justify-evenly items-start bg-white px-4 py-2 gap-2 rounded-lg border text-black/80">
          <span> Resistance </span>
          <div className="w-full h-fit flex flex-row justify-around items-center mb-2">
            {pokemon?.resistant?.map((r, i) => { return (<ColorType key={i} name={r} />) })}
          </div>
        </div>
        {/* Weakness */}
        <div className="w-full h-fit flex flex-col justify-center items-start bg-white px-4 py-2 gap-2 rounded-lg border text-black/80 ">
          <span> Weakness </span>
          <div className="w-full h-fit flex flex-row justify-around items-center mb-2">
            {pokemon?.weaknesses?.map((r, i) => { return (<ColorType key={i} name={r} />) })}
          </div>
        </div>
      </div>
    </div>
  )
})

export default PokemonId
