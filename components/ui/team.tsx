import React from "react";
import { Marquee } from "./marquee";
import { Users } from "lucide-react";

const teamMembers = [
  { image: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Chinedu Okafor", role: "Lead Architecture Instructor" },
  { image: "https://images.unsplash.com/photo-1678282342910-a135f7b900ae?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Adaeze Nwosu", role: "Interior Design Expert" },
  { image: "https://images.pexels.com/photos/36813835/pexels-photo-36813835.jpeg", name: "Emeka Adeyemi", role: "3D Visualization & AI Coach" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop&crop=face", name: "James Carter", role: "SketchUp & V-Ray Mentor" },
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=560&fit=crop&crop=face", name: "Sofia Reyes", role: "Lumion & Rendering Specialist" },
];

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
            <Users size={24} />
          </div>
          <h2 className="mb-4 font-display font-bold text-4xl text-slate-900 tracking-tight sm:text-5xl">
            Meet Your Design Mentors
          </h2>
          <p className="max-w-2xl text-slate-500 text-lg">
            Industry professionals with years of real-world experience in architecture, interior design, and 3D visualization — guiding you every step of the way.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32" style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <Marquee className="[--gap:1.5rem] [--duration:35s]" pauseOnHover>
            {teamMembers.map((member) => (
              <div className="group flex w-56 shrink-0 flex-col" key={member.name}>
                <div className="relative overflow-hidden rounded-2xl bg-slate-100" style={{ height: "320px" }}>
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    src={member.image}
                    style={{ display: "block" }}
                  />
                  <div className="absolute bottom-0 w-full rounded-b-2xl bg-white/90 backdrop-blur-sm p-3">
                    <h3 className="font-semibold text-slate-900 text-sm">{member.name}</h3>
                    <p className="text-slate-500 text-xs">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-6 font-medium text-lg text-slate-900 leading-relaxed md:text-xl">
            "The mentorship at Avada Design is unmatched. Our instructors don't just teach software — they guide you through the entire professional workflow, from concept to stunning final render."
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <img
                alt="Chinedu Okafor"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=200&auto=format&fit=crop"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-900">Chinedu Okafor</p>
              <p className="text-slate-500 text-sm">Lead Architecture Instructor · Avada Design Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
