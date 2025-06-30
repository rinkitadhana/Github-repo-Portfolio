import { SiGithub } from "react-icons/si"
import user from "../data/user.json"
import { RiMenuFill } from "react-icons/ri";
import { BookIcon, CodeIcon, CopilotIcon, GearIcon, GitPullRequestIcon, GraphIcon, InboxIcon, IssueOpenedIcon, PlayIcon, PlusIcon, ProjectIcon, SearchIcon, ShieldIcon, TableIcon, TriangleDownIcon } from "@primer/octicons-react";

const Header = () => {

    const links = [
        {
            icon: <CodeIcon size={16} />,
            name: "Code"
        },
        {
            icon: <IssueOpenedIcon size={16} />,
            name: "Issues"
        },
        {
            icon: <GitPullRequestIcon size={16} />,
            name: "Pull Requests"
        },
        {
            icon: <PlayIcon size={16} />,
            name: "Actions"
        },
        {
            icon: <TableIcon size={16} />,
            name: "Projects"
        },
        {
            icon: <BookIcon size={16} />,
            name: "Wiki"
        },
        {
            icon: <ShieldIcon size={16} />,
            name: "Security"
        },
        {
            icon: <GraphIcon size={16} />,
            name: "Insights"
        },
        {
            icon: <GearIcon size={16} />,
            name: "Settings"
        },
    ]

  return (
    <header className="relative flex flex-col gap-4 px-4 pt-4 pb-2 bg-[#010409] border-b border-zinc-700">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3.5 ">
                <span className="border p-1.5 rounded-md border-zinc-600 hover:bg-zinc-800/65 cursor-pointer transition-all duration-200">
                    <RiMenuFill size={18} className="text-zinc-400" />
                </span>
                <span className="text-zinc-200">
                    <SiGithub size={30} />
                </span>
                <div className="flex items-center gap-1">
                    <span className="p-1 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                        {user.username}
                    </span>
                    <span className="text-zinc-400">{"/"}</span>
                    <span className="font-semibold p-1 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                        Portfolio
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-3.5">
                <div className="relative max-w-[272px]">
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 py-[1px] text-[11px] text-zinc-400">
                        <SearchIcon size={16} />
                    </div>
                    <input 
                        type="text"
                        className="w-full bg-[#010409] border border-zinc-600 rounded-md py-1.5 pl-8 pr-3 text-sm text-zinc-600 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-400">
                        Type <span className="border text-xs border-zinc-400 rounded-sm px-1.5">/</span> to search
                    </div>
                </div>
            <div className="px-1.5 flex items-center gap-0.5 border border-zinc-600 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                    <CopilotIcon size={20} className="pr-1" />
                    <div className="border-l border-zinc-600 h-7 " />
                    <TriangleDownIcon size={16} />
                </div>
                <div className="border-l border-zinc-600 h-5" />
                <div className="flex items-center gap-2">
                <div className="p-1.5 flex items-center gap-1.5 border border-zinc-600 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                    <PlusIcon size={16} />
                    <TriangleDownIcon size={16} />
                </div>
                    <div className="p-1.5 border border-zinc-600 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                    <IssueOpenedIcon size={16} />
                </div>
                <div className="p-1.5 border border-zinc-600 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                    <GitPullRequestIcon size={16} />
                </div>
                    <div className="p-1.5 border border-zinc-600 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
                    <InboxIcon size={16} />
                </div>
                </div>
                
                <div className="cursor-pointer">
                    <img src={user.avatar_url} alt="avatar" className="size-[30px] rounded-full" />
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2.5">
            {links.map((link) => (
                <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-zinc-800/65 cursor-pointer transition-all duration-200">
                    <div className="text-zinc-400">{link.icon}</div>
                    <span className="text-zinc-200 font-medium">{link.name}</span>
                </div>
            ))}
        </div>
        <div className="absolute bottom-0 left-4 w-[75px] h-[2px] bg-orange-400" />

    </header>
  )
}

export default Header
