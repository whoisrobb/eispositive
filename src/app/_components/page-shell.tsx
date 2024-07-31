
type PageShellProps = {
    title: string;
    subtitle: string;
    type: 'video' | 'image';
    source: string;
};

const PageShell = ({ title, subtitle, type, source }: PageShellProps) => {
  return (
    <div>
        <div className="md:h-[75vh] h-[50vh] flex flex-col justify-center items-center text-center">
            <div className="max-w-[50rem] space-y-4">
                <h1 className="font-anton lg:text-8xl text-6xl uppercase">{title}</h1>
                <p className="text-muted-foreground">{subtitle}</p>
            </div>
        </div>

        <div className="">
            <div className="overflow-hidden rounded-lg md:h-full h-[75vh] w-full">
                {type === 'video' ?
                <video
                    src={source}
                    className='object-cover h-[100%] w-[100%]'
                    autoPlay
                    loop
                    muted
                />
                :
                <img
                    src={source}
                    className='object-cover h-[100%] w-[100%]'
                />}
            </div>
        </div>
    </div>
  )
}

export default PageShell