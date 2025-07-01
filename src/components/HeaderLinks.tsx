import {
  CodeIcon,
  GitPullRequestIcon,
  GraphIcon,
  IssueOpenedIcon,
  PlayIcon,
  TableIcon,
  ShieldIcon,
} from "@primer/octicons-react"

const HeaderLinks = () => {
  const links = [
    {
      icon: <CodeIcon size={16} />,
      name: "Code",
    },
    {
      icon: <IssueOpenedIcon size={16} />,
      name: "Issues",
    },
    {
      icon: <GitPullRequestIcon size={16} />,
      name: "Pull Requests",
    },
    {
      icon: <PlayIcon size={16} />,
      name: "Actions",
    },
    {
      icon: <TableIcon size={16} />,
      name: "Projects",
    },
    // {
    //     icon: <BookIcon size={16} />,
    //     name: "Wiki"
    // },
    {
      icon: <ShieldIcon size={16} />,
      name: "Security",
    },
    {
      icon: <GraphIcon size={16} />,
      name: "Insights",
    },
    // {
    //     icon: <GearIcon size={16} />,
    //     name: "Settings"
    // },
  ]
  return (
    <div className="flex items-center gap-2.5">
      {links.map((link) => (
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-zinc-800/65 cursor-pointer transition-all duration-200">
          <div className="text-zinc-400">{link.icon}</div>
          <span className="text-zinc-200 font-medium">{link.name}</span>
        </div>
      ))}
    </div>
  )
}

export default HeaderLinks
