"use client";
import Image from "next/image";
import { useState } from "react";
import { PokemonProps } from "../interface/Pokemon.interface";
import { useRouter } from "next/navigation";
import ColorType from "./ColorType";
import { BiBook } from "react-icons/bi";

const CardPokemon = ({ charactor }: { charactor: PokemonProps }) => {
  const router = useRouter()
  const [loadImg, setLoadImg] = useState(false)

  const OnPokemonPage = ({ name }: { name: string }) => {
    router.push(`/pokemon/${name}`)
  }

  return (
    <div
      className="relative w-[200px] h-[260px] rounded-xl bg-[var(--card)] flex flex-col items-start 
      justify-start border border-black/5 hover:scale-[1.04] p-1 gap-1 transition-transform duration-300 ease-in-out hover:drop-shadow-lg">
      <div className="absolute w-[35px] h-[38px] z-30 right-2 -top-1 flex flex-col justify-center items-center bg-zinc-300/80 rounded-b-lg text-white  p-1 border border-slate-300/50 rounded-tr-sm">
        <span className="font-bold text-[10px] leading-[12px]">No.</span>
        <span className="font-bold text-[12px] leading-[16px]">{charactor.number}</span>
      </div>

      <div className="drop-shadow w-[190px] h-[190px] bg-white flex flex-col justify-center items-center rounded-md ">
        {!loadImg && <p className="font-bold w-full text-center">Loading&nbsp;
          <span className="transition-transform ease-in-out duration-300 after:contents-['·...'] after:animate-movingDots"></span>?</p>
        }
        <Image
          src={charactor.image}
          width={90}
          height={90}
          alt={charactor.name || ".."}
          onLoad={() => setLoadImg(true)}
          className={`w-auto max-w-[100px] h-auto ${loadImg ? "visible" : "invisible"}`}
        />
      </div>
      {charactor.types ? (
        <>
          <span className="px-2 font-semibold text-black/70">{charactor.name}</span>
          <div className="w-full flex flex-row justify-between items-center gap-1 px-2">
            <div className="w-fit flex flex-row justify-start items-center gap-1">
              {charactor.types.map((t: string, _) => { return <ColorType key={_} name={t} /> })}
            </div>
            <BiBook
              onClick={() => OnPokemonPage({ name: charactor.id })}
              className="cursor-pointer w-6 h-6 flex justify-center rounded-xl items-center border border-black/10 hover:bg-white hover:border-black/40 text-[#a8a8a8] hover:text-black/40 p-1" size={14} />
          </div>
        </>
      ) : ""}
    </div>
  );
};

export default CardPokemon;
