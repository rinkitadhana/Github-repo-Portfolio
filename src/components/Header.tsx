import HeaderLinks from "./HeaderLinks"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
  return (
    <header className="relative flex flex-col gap-4 px-4 pt-4 pb-2 bg-[#010409] border-b border-zinc-700">
      <HeaderOptions />
      <HeaderLinks />
      <div className="absolute bottom-0 left-4 w-[75px] h-[2px] bg-orange-400" />
    </header>
  )
}

export default Header
