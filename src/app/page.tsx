import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-[100vh]">
      <header className="hero flex flex-row w-full items-center justify-center h-full">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-white text-5xl text-center"><span>Fun way to quickly find a <br></br></span> <span className="font-bold text-primary text-8xl">movie or show</span></h1>
          <button className="border-2 border-primary bg-transparent text-white rounded-lg p-3 text-center font-semibold w-[15vw] transition-all hover:bg-primary">Start Playing</button>
        </div>
      </header>
    </main>
  );
}
