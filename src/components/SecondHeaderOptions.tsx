"use client"
import {
  EyeIcon,
  RepoForkedIcon,
  TriangleDownIcon,
} from "@primer/octicons-react"
import React, { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { FaRegStar } from "react-icons/fa6"

interface StarData {
  stargazers_count: number
  watchers_count: number
  forks_count: number
}

const SecondHeaderOptions = () => {
  const [stars, setStars] = useState<number | null>(null)
  const [watchers, setWatchers] = useState<number | null>(null)
  const [forks, setForks] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/rinkitadhana/switchfolio`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data: StarData = await response.json()
        setStars(data.stargazers_count)
        setWatchers(data.watchers_count)
        setForks(data.forks_count)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch")
      } finally {
        setLoading(false)
      }
    }
    fetchStars()
  }, [])

  return (
    <div className="flex items-center gap-2">
      <a
        className="  px-2 border py-1 border-gray-700  flex items-center gap-1 rounded-md bg-button hover:bg-button/80 transition-all duration-200"
        target="_blank"
        href="https://github.com/rinkitadhana/Switchfolio"
      >
        <EyeIcon className="size-[16px] text-gray-400" />
        <span className="text-xs">{"Watch"}</span>
        <span className="bg-gray-700 rounded-xl px-1.5 py-0.5 text-xs font-medium">
          {error ? (
            "16"
          ) : loading ? (
            <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5" />
          ) : (
            watchers
          )}
        </span>

        <TriangleDownIcon className="size-[16px] text-gray-400" />
      </a>
      <a
        className="  px-3 border border-gray-700  flex items-center gap-1 rounded-md bg-button hover:bg-button/80 transition-all duration-200"
        target="_blank"
        href="https://github.com/rinkitadhana/Switchfolio"
      >
        <RepoForkedIcon className="size-[16px] text-gray-400" />
        <span className="text-xs">{"Fork"}</span>
        <span className="bg-gray-700 rounded-xl px-1.5 py-0.5 text-xs font-medium">
          {error ? (
            "16"
          ) : loading ? (
            <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5" />
          ) : (
            forks
          )}
        </span>

        <div className="w-px h-[26px] bg-gray-700 mx-1" />

        <TriangleDownIcon className="size-[16px] text-gray-400" />
      </a>
      <a
        className="  px-3 border border-gray-700  flex items-center gap-2 rounded-md bg-button hover:bg-button/80 transition-all duration-200"
        target="_blank"
        href="https://github.com/rinkitadhana/Switchfolio"
      >
        <FaRegStar className="size-[16px] text-gray-400" />
        <span className="text-xs">{"Star"}</span>
        <span className="bg-gray-700 rounded-xl px-1.5 py-0.5 text-xs font-medium">
          {error ? (
            "16"
          ) : loading ? (
            <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5" />
          ) : (
            stars
          )}
        </span>

        <div className="w-px h-[26px] bg-gray-700" />

        <TriangleDownIcon className="size-[16px] text-gray-400" />
      </a>
    </div>
  )
}

export default SecondHeaderOptions
