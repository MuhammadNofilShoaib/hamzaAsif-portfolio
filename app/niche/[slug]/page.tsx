import { niches } from "@/data/niches";
import { notFound } from "next/navigation";

export default async function NichePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const niche = niches.find((n) => n.slug === slug);

  if (!niche) return notFound();

  return (
    <section className="px-4 py-10 bg-black text-white mt-24">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10">

        <h1 className="text-4xl font-semibold text-center">
          {niche.name}
        </h1>

        {/* VIDEOS */}
        {niche.videos.map((vid) => (
          <div key={vid.title} className="bg-white p-3 rounded-xl text-black">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={vid.embedUrl}
                allowFullScreen
              />
            </div>

            <h3 className="mt-3 font-medium">{vid.title}</h3>

            <div className="flex gap-2 mt-2 flex-wrap">
              {vid.tags.map((tag, i) => (
                <span key={i} className="bg-gray-700 text-white px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* SHORTS */}
        {niche.shorts.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold">Shorts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {niche.shorts.map((short) => (
                <div key={short.title} className="aspect-[9/16]">
                  {/* <iframe
                    className="w-full h-full rounded-xl"
                    src={short.embedUrl}
                    allowFullScreen
                  /> */}
                  <div className="w-full max-w-[300px] mx-auto">
                    <div className="relative w-full h-[80vh] md:h-[500px] rounded-xl overflow-hidden">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={short.embedUrl}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}