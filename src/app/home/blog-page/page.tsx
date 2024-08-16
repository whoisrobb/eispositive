import ContentShell from "@/components/shells/content-shell";
import { useParams } from "react-router-dom";
import data from "./blog-data.json";
import "./style.css"

const Page = () => {
    const { index } = useParams();

    const blogData = data[Number(index)]

  return (
    <ContentShell
        title="Eispositive blog"
        className="pt-[6rem] space-y-12"
    >
        <h1 className="text-8xl font-anton font-bold">{blogData.title}</h1>

        <div className="flex md:flex-row flex-col gap-12 justify-between items-start">
            <div
                className="overflow-hidden rounded-lg md:w-full h-full md:h-auto aspect-square relative"
            >
                <img
                    className="h-full w-full object-cover"
                    src={blogData.image}
                    alt=""
                />
            </div>

            <div className="w-full space-y-4 text-muted-foreground">
                <div className="" dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>
        </div>
    </ContentShell>
  )
}

export default Page