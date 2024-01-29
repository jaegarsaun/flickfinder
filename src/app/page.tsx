import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-[100vh]">
      <header className="hero flex flex-row w-full items-center justify-start h-full">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-6xl font-semibold text-white w-1/2">Fun way to find a <span className="text-primary text-7xl font-bold">movie / show</span> qucikly</h1>
          <button className="border-2 border-primary bg-transparent text-white rounded-lg p-3 text-center font-semibold w-[15vw] transition-all hover:bg-primary">Start Playing</button>
        </div>
      </header>
    </main>
  );
}
