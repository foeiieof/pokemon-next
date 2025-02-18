"use client"
import React, { Suspense, useMemo } from "react"
import PokemonId from "../components/PokemonId"
const PokemonPage = React.memo(({ params }: { params: { slug: string } }) => {
  const name = useMemo(() => decodeURIComponent(params.slug), [params.slug])
  console.log("Rendering PokemonId with name:", name);
  return (
    <main
      className="w-full h-full border rounded-md  flex flex-wrap gap-8 row-start-2 justify-around items-center "
    >
      <div className="w-full h-[100vh] bg-gray-300/30 flex justify-center items-center py-10">
        <Suspense fallback={
          <div className="w-[70vw] sm:h-[80vh] bg-white/60 flex justify-center items-center rounded-md">
            <p className="font-bold text-[42px] w-full text-center"><span className="transition-transform ease-in-out duration-300 after:contents-['·...'] after:animate-movingDots"></span></p>
          </div>
        }>
          <PokemonId name={name} />
        </Suspense>
      </div>
    </main>
  )
})
PokemonPage.displayName = "PokemonPage"
export default PokemonPage
