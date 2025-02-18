"use client"
import React, { Suspense, useMemo } from "react"
import PokemonId from "../components/PokemonId"
const PokemonPage = React.memo(({ params }: { params: { slug: string } }) => {
  const name = useMemo(() => decodeURIComponent(params.slug), [params.slug])
  console.log("Rendering PokemonId with name:", name);
  return (
    <div className="bg-gray-300/30 grid grid-rows-[20px_1fr_20px] min-h-[100vh] items-center justify-items-center px-16 py-10 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={
        <div className="w-full h-[100vh] bg-gray-300/30 flex justify-center items-center py-10">
          <div className="w-[50vw] h-full bg-white/60 flex justify-center items-center rounded-md">
            <p className="font-bold text-[42px] w-full text-center"><span className="transition-transform ease-in-out duration-300 after:contents-['·...'] after:animate-movingDots"></span></p>
          </div>
        </div>}>
        <PokemonId name={name} />
      </Suspense>
    </div>
  )
})
PokemonPage.displayName = "PokemonPage"
export default PokemonPage
