import { GiSeaDragon } from "react-icons/gi";
import { BiSolidLeaf, BiSolidVial, BiMeteor, BiCloud, BiDroplet, BiBug, BiWorld, BiBoltCircle, BiCube, BiMale, BiDumbbell, BiShow, BiRocket, BiGhost, BiMagnet, BiCubeAlt, BiBrightness } from "react-icons/bi";

const ColorType = ({ name, size }: { name: string, size?: number }) => {
  let icon: React.ReactElement = <></>
  let classStyle: string = ""


  const style = {
    "Grass": { icon: <BiSolidLeaf size={14} className="text-white/80" />, color: "bg-green-500/50" },
    "Poison": { icon: <BiSolidVial size={14} className="text-white/80" />, color: "bg-purple-500/50" },
    "Fire": { icon: <BiMeteor size={14} className="text-white/80" />, color: "bg-red-500/50" },
    "Flying": { icon: <BiCloud size={15} className="text-white/80" />, color: "bg-sky-500/50" },
    "Water": { icon: <BiDroplet size={15} className="text-white/80" />, color: "bg-blue-500/50" },
    "Bug": { icon: <BiBug size={15} className="text-white/80" />, color: "bg-lime-500/50" },
    "Normal": { icon: <BiCube size={15} className="text-white/80" />, color: "bg-neutral-400/50" },
    "Electric": { icon: <BiBoltCircle size={15} className="text-white/80" />, color: "bg-yellow-300/80" },
    "Groud": { icon: <BiWorld size={15} className="text-white/80" />, color: "bg-stone-700/50" },
    "Fairy": { icon: <BiMale size={15} className="text-white/80" />, color: "bg-emerald-500/50" },
    "Rock": { icon: <BiDumbbell size={15} className="text-white/80" />, color: "bg-stone-700/60" },
    "Psychic": { icon: <BiShow size={15} className="text-white/80" />, color: "bg-purple-600/70" },
    "Fighting": { icon: <BiRocket size={15} className="text-white/80" />, color: "bg-rose-600/70" },
    "Ghost": { icon: <BiGhost size={15} className="text-white/80" />, color: "bg-purple-900/80" },
    "Steel": { icon: <BiMagnet size={15} className="text-white/80" />, color: "bg-zinc-700" },
    "Ice": { icon: <BiCubeAlt size={15} className="text-white/80" />, color: "bg-cyan-400/60" },
    "Dragon": { icon: <GiSeaDragon size={15} className="text-white/80" />, color: "bg-rose-500/60" },
    "Dark": {
      icon: <BiBrightness size={15} className="text-white/80" />, color: "bg-black/80"
    },

  }

  switch (name) {
    case ("Grass"):
      icon = style["Grass"].icon
      classStyle = style["Grass"].color
      break
    case ("Poison"):
      icon = style["Poison"].icon
      classStyle = style["Poison"].color
      break
    case ("Fire"):
      icon = style["Fire"].icon
      classStyle = style["Fire"].color
      break
    case ("Flying"):
      icon = style["Flying"].icon
      classStyle = style["Flying"].color
      break
    case ("Water"):
      icon = style["Water"].icon
      classStyle = style["Water"].color
      break
    case ("Bug"):
      icon = style["Bug"].icon
      classStyle = style["Bug"].color
      break
    case ("Normal"):
      icon = style["Normal"].icon
      classStyle = style["Normal"].color
      break
    case ("Electric"):
      icon = style["Electric"].icon
      classStyle = style["Electric"].color
      break
    case ("Ground"):
      icon = style["Groud"].icon
      classStyle = style["Groud"].color
      break
    case ("Fairy"):
      icon = style["Fairy"].icon
      classStyle = style["Fairy"].color
      break
    case ("Rock"):
      icon = style["Rock"].icon
      classStyle = style["Rock"].color
      break
    case ("Psychic"):
      icon = style["Psychic"].icon
      classStyle = style["Psychic"].color
      break
    case ("Fighting"):
      icon = style["Fighting"].icon
      classStyle = style["Fighting"].color
      break
    case ("Ghost"):
      icon = style["Ghost"].icon
      classStyle = style["Ghost"].color
      break
    case ("Steel"):
      icon = style["Steel"].icon
      classStyle = style["Steel"].color
      break
    case ("Ice"):
      icon = style["Ice"].icon
      classStyle = style["Ice"].color
      break
    case ("Dragon"):
      icon = style["Dragon"].icon
      classStyle = style["Dragon"].color
      break
    case ("Dark"):
      icon = style["Dark"].icon
      classStyle = style["Dark"].color
      break
    default:
      break
  }

  return (
    <div id={name} className={`w-6 h-6 text-black/20 flex justify-center items-center rounded-md border border-black/10 ${classStyle}`}>
      {icon}
    </div>
  )
}

export default ColorType
