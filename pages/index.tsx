import Head from "next/head";
import Services from "../components/Services";
import Region from "../components/Region";
import data from "../public/data.json";
import Image from "next/image";

export default function Home() {
  const { services, regions } = data;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-950 to-cyan-700 p-2">
      <Head>
        <title>Genshin Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-2">

        <h1 className="text-6xl font-bold mb-4 text-pink-400">Hexglyph Genshin Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-pink-500">
          <div className="border-l-4 border-pink-100 p-2">
            <h2 className="text-xl font-semibold">Discord</h2>
            <p>Hexglyph#1045</p>
          </div>
          <div className="border-l-4 border-pink-100 p-2">
            <h2 className="text-xl font-semibold">Instagram</h2>
            <p>/hex.glyph</p>
          </div>
        </div>


        <h2 className="border-l-4 border-pink-100 text-4xl font-semibold mb-4 px-2 text-pink-400">Serviços / Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {services.map((service) => (
            <Services key={service.id} service={service} />
          ))}
        </div>

        <h2 className="border-l-4 border-pink-100 text-4xl font-semibold mb-4 px-2 text-pink-400">Regiões / Regions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {regions.map((region) => (
            <Region key={region.id} region={region} />
          ))}
        </div>
      </main>

      <footer className="w-full h-24 border-t flex flex-col justify-center items-center text-white text-sm">
        <div>
          <a
            className="flex items-center justify-center"
            href="https://danielniebraz.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            by {"danielniebraz.dev"}
            <Image src="/logo.png" alt="hexglyph Logo" className="h-4 ml-2" width={16} height={20} />
          </a>
        </div>
        <div>
          <p>
            art by u/Sevenix2
          </p>
        </div>

      </footer>
    </div>
  );
}

