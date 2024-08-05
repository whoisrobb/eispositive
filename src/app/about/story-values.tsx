import ContentShell from "@/components/shells/content-shell"
import { useRef } from "react";
import useSplitPara from "../hooks/useSplitPara";

const text = 'The inspiration behind Everything is Positive came from a deep belief in the transformative power of positivity. Bill Mann and Malcolm Mann recognized the potential for a brand that not only delivers inspiring content but also cultivates a community where people can feel supported and uplifted. With this vision, they set out to create a platform that celebrates the beauty of life and encourages everyone to focus on the good.';

const values = [
    {
        val: "Positivity",
        text: "We celebrate the good in life and strive to spread joy in everything we do."
    },
    {
        val: "Inclusivity",
        text: "Our community is open to everyone, regardless of background or beliefs."
    },
    {
        val: "Empowerment",
        text: "We encourage people to believe in themselves and harness the power of positive thinking."
    },
    {
        val: "Creativity",
        text: "Through fashion, music, and multimedia, we express our unique vision and inspire others to do the same."
    },
    {
        val: "Community",
        text: "We are stronger together, and we cherish the connections we build with our supporters."
    }
];

const StoryAndValues = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);

  return (
    <ContentShell
        title="Our story and core values"
    >
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-16">
            <div ref={container} className="space-y-4 lg:max-w-[50%] flex gap-4 lg:flex-row flex-col justify-between w-full max-w-[900px] items-start">
                <p className="leading-tight flex flex-wrap gap-x-2 text-muted-foreground">
                    {paragraph}
                </p>
            </div>

            <div className="space-y-4">
                {values.map((value) => (
                    <div className="" key={value.text}>
                        <h1 className="text-4xl font-anton">{value.val}</h1>
                        <p className="text-muted-foreground">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </ContentShell>
  )
}

export default StoryAndValues