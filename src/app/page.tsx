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

      <p className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
        Preview only — Stage 4 sequence prototype, not the final production build
      </p>
    </div>
  );
}
