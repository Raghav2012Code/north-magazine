import Image from "next/image";
import Reveal from "./Reveal";
import Folio from "./Folio";

export default function FeatureSpread() {
  return (
    <section id="feature" className="scroll-mt-20 bg-night py-16 text-paper md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Folio left="N° 18 / Object studies" right="A visual essay" dark />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-[13vw] leading-[0.92] font-medium tracking-[-0.01em] sm:text-6xl md:text-7xl">
                Objects with a <em className="font-light">life of their own.</em>
              </h2>
              <p className="prose-measure mt-6 max-w-sm text-[15px] leading-relaxed text-paper/70">
                From furniture to cameras to the things we carry every day, the objects
                around us quietly tell us who we are.
              </p>
              <figure className="mt-6 border-l border-paper/25 pl-4">
                <blockquote className="font-serif text-lg leading-snug italic text-paper/85">
                  We borrow the stories of things for a while, then pass them on.
                </blockquote>
                <figcaption className="mt-3 font-mono text-xs text-paper/50">
                  Studio Norr, Copenhagen
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <figure className="col-span-12 sm:col-span-7 lg:col-span-4">
            <div className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop"
                alt="White minimal chair against a plain wall"
                width={800}
                height={1050}
                className="aspect-[3/4] w-full object-cover"
                sizes="(max-width:1024px) 100vw, 30vw"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 font-mono text-xs text-paper/50">
              Fig. 02. Chair N°4, ash and canvas.
            </figcaption>
          </figure>

          <figure className="col-span-12 sm:col-span-5 lg:col-span-3 lg:pt-24">
            <div className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop"
                alt="Vintage film camera on a wooden surface"
                width={700}
                height={850}
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width:1024px) 50vw, 22vw"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 font-mono text-xs text-paper/50">
              Fig. 03. Polaroid OneStep2. Still loaded.
            </figcaption>
            <p className="mt-6 hidden text-sm leading-relaxed text-paper/60 lg:block">
              Twelve objects, six owners, one photographer. Shot over three mornings
              in natural light. No retouching.
            </p>
          </figure>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop"
              alt="Quiet room with a small sofa, dresser and floor lamp in soft daylight"
              width={2000}
              height={900}
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
              sizes="100vw"
              loading="lazy"
            />
            <span className="absolute bottom-3 left-4 bg-night/70 px-3 py-1 font-mono text-[11px] tracking-[0.06em] text-paper uppercase backdrop-blur-sm">
              The keeping room, Porto, 7:40am
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
