import Header from "@/components/Header"
import SecondHeader from "@/components/SecondHeader"
import FileStructureWrapper from "@/layout/FileStructureWrapper"

export default function Home() {
  return (
    <div>
      <Header />
      <FileStructureWrapper>
        <SecondHeader />
        <div className="h-screen"></div>
      </FileStructureWrapper>
    </div>
  )
}
