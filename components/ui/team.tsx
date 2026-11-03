import React from "react";
import { Marquee } from "./marquee";

const teamMembers = [
  { image: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chinedu Okafor", role: "Lead Architecture Instructor" },
  { image: "https://images.pexels.com/photos/36813835/pexels-photo-36813835.jpeg", name: "Emeka Adeyemi", role: "3D Visualization & AI Coach" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop&crop=face", name: "James Carter", role: "SketchUp & V-Ray Mentor" },
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=560&fit=crop&crop=face", name: "Sofia Reyes", role: "D5 Render & Visualization Specialist" },
];

export default function TeamSection() {
  return (
    <section className="screen-line-before screen-line-after border-x border-grid py-8 sm:py-12 bg-white relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto px-3 sm:px-4">
        <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center text-center">
          <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-3 py-0.5 rounded-full mb-3">
            👨‍🏫 Industry Experts &amp; Mentors
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 tracking-tight">
            Meet Your Design Mentors
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 max-w-xl">
            Industry professionals with years of real-world experience in AutoCAD, SketchUp, V-Ray, and D5 Render AI — guiding you 24/7 on WhatsApp every step of the way.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />

          <Marquee className="[--gap:1rem] [--duration:30s]" pauseOnHover>
            {teamMembers.map((member) => (
              <div className="group flex w-48 sm:w-56 shrink-0 flex-col mx-2" key={member.name}>
                <div className="relative overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200 shadow-xs" style={{ height: "300px" }}>
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={member.image}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-white/95 backdrop-blur-sm p-3 border-t border-zinc-100">
                    <h3 className="font-heading font-bold text-zinc-950 text-sm">{member.name}</h3>
                    <p className="text-zinc-500 text-xs font-mono">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-10 max-w-2xl px-4 text-center">
          <p className="mb-4 font-normal text-xs sm:text-sm text-zinc-800 leading-relaxed italic">
            "Our instructors don't just teach software buttons — they guide you through the entire professional workflow, from concept to stunning final client presentation."
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-emerald-500 shadow-xs">
              <img
                alt="Chinedu Okafor"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=200&auto=format&fit=crop"
              />
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-zinc-950 text-sm">Chinedu Okafor</p>
              <p className="text-zinc-500 text-[11px] font-mono">Lead Architecture Instructor · Avada Design Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
