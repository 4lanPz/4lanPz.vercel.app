'use client'
import Link from "next/link";
import React from "react";
import Particles from "./Components/particulas";
import Typewriter from "typewriter-effect";

const navigation = [
  { name: "Sobre mi", href: "/alan"},
  { name: "Conocimientos", href: "/conocimientos"},
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Alan Pérez
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="text-xl my-16 text-center animate-fade-in">
        <Typewriter
          options={{
            strings: ["Soy Desarrollador Web", "Soy Desarrollador Móvil", "Soy Desarrollador Backend", "Soy Futuro Desarrollador de Videojuegos"],
            autoStart: true,
            delay:40,
            deleteSpeed:25,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}