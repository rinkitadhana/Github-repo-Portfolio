import Image from "next/image"
import React from "react"
import user from "../data/user.json"
import SecondHeaderOptions from "./SecondHeaderOptions"

const SecondHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-zinc-700">
      <div className="flex items-center gap-2 ">
        <div className="rounded-full">
          <Image
            src={user.avatar_url}
            alt="avatar"
            width={32}
            height={32}
            className="size-[24px] rounded-full"
          />
        </div>
        <h1 className="text-zinc-200 text-xl font-semibold hover:underline cursor-pointer">
          Portfolio
        </h1>
        <div className="border border-zinc-600 rounded-full px-2 text-zinc-400 text-xs">
          Public
        </div>
      </div>
      <SecondHeaderOptions />
    </div>
  )
}

export default SecondHeader
