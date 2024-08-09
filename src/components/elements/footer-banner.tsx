
const FooterBanner = () => {
  return (
    <div 
      className='relative lg:h-screen md:h-[75vh] hidden md:block'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className="lg:h-screen w-full md:h-[75vh] hidden md:flex items-center justify-center fixed bottom-0 overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src={'https://utfs.io/f/0322892d-e452-4547-8ee4-70be6f38731e-vilrxf.mp4'}
          autoPlay
          loop
          muted
        />
        <p
          className="absolute bg-black w-full left-0 right-0 text-white mix-blend-multiply select-none lg:text-[37rem] text-[23rem] font-anton m-0 p-0 font-[900]"
        >
          EPLUS
        </p>
      </div>
    </div>
  )
}

export default FooterBanner
/*
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background-color: #000;
    color: #fff;
    font-weight: 900;
    font-size: 100px;
    font-family: sans-serif;
    
    mix-blend-mode: multiply;
    user-select: none;
    
    <div 
      className='relative h-[800px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-full'>
        <Content />
      </div>
    </div>

    <div className="h-screen hidden md:flex items-center justify-center relative overflow-hidden text-white bg-background">
        <h1 className="relative z-10 lg:text-[35rem] text-[23rem] font-anton m-0 p-0 font-[900]">
            EPLUS
        </h1>

        <video
            src={'https://utfs.io/f/0322892d-e452-4547-8ee4-70be6f38731e-vilrxf.mp4'}
            className="absolute inset-0 object-cover w-full h-full mix-blend-screen z-0"
            autoPlay
            loop
            muted
        />
    </div>
*/