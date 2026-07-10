import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Base layer: room lit, no beam */}
      <Image
        src="/images/backgroundimage-light.png"
        alt="The Projection — room in natural light, empty wall space reserved for the projected interface"
        fill
        className="object-cover"
        priority
      />

      {/* Beat 1: welcome text in the empty wall space, fades in then out */}
      <div className="hero-welcome-text pointer-events-none absolute inset-0 flex items-center justify-center px-8">
        <p className="max-w-4xl text-center font-sans text-6xl font-semibold tracking-tight text-black sm:text-7xl md:text-8xl">
          Welcome to my portfolio
        </p>
      </div>

      {/* Beat 2+3: crossfades to the real dark-room photo, which already has the projector, light rays, and projected rectangle baked in */}
      <div className="hero-dark-crossfade pointer-events-none absolute inset-0">
        <Image
          src="/images/backgroundimage-dark.png"
          alt="The Projection — room darkened, projector powered on and projecting the interface onto the wall"
          fill
          className="object-cover"
        />
      </div>

      {/* Green power LED — appears as the crossfade begins, ~2s ahead of the dark photo (and its baked-in beam) reaching full opacity */}
      <div
        className="hero-led pointer-events-none absolute h-[7px] w-[7px] rounded-full bg-[#4ADE80]"
        style={{ left: "43%", top: "79%", boxShadow: "0 0 6px 2px rgba(74,222,128,0.9)" }}
      />

      {/* Nav — appears with the same beat as the projected content ("nav live" per the interactive-state beat). Placeholder items — see chat flag re: missing "AI in Design" and "Contact me" as a nav item. */}
      <nav className="hero-projected-content pointer-events-auto absolute top-0 left-0 right-0 flex justify-center gap-12 pt-10">
        <button className="font-sans text-[0.85vw] font-medium uppercase tracking-[0.12em] text-[#2a2420] transition-opacity hover:opacity-60">
          My Work
        </button>
        <button className="font-sans text-[0.85vw] font-medium uppercase tracking-[0.12em] text-[#2a2420] transition-opacity hover:opacity-60">
          About
        </button>
        <button className="font-sans text-[0.85vw] font-medium uppercase tracking-[0.12em] text-[#2a2420] transition-opacity hover:opacity-60">
          Contact Me
        </button>
      </nav>

      {/* Projected content — lands inside the projection rectangle once the crossfade completes. Placeholder copy — see chat flag re: original site's hero text. */}
      <div
        className="hero-projected-content pointer-events-none absolute flex flex-col items-center justify-center gap-6 px-[3%] text-center"
        style={{ left: "32%", right: "26%", top: "10%", bottom: "48%" }}
      >
        <p className="max-w-[34ch] font-sans text-[1.25vw] leading-[1.65] tracking-tight text-[#2a2420]">
          I am passionate about improving digital products so people can
          interact with them naturally and intuitively. I also strive to
          create meaningful and lasting connections through UI and visual
          design.
        </p>
        <p className="text-[0.8vw] font-medium uppercase tracking-[0.18em] text-[#8a7a68]">
          Take a look at my case studies
        </p>
        <button className="pointer-events-auto w-fit rounded-none border border-black bg-transparent px-9 py-2.5 font-sans text-[0.85vw] font-medium uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-black hover:text-white">
          View my work
        </button>
      </div>

      <p className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
        Preview only — Stage 4 sequence prototype, not the final production build
      </p>
    </div>
  );
}
