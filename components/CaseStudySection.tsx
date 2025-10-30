// components/CaseStudySection.tsx
import Image from "next/image";
import React from "react";

type CaseStudy = {
    client: string;
    channelName: string;
    channelLink: string;
    subscribers?: string;
    problem: string;
    solution: string;
    result: string;
    stats?: string;
    link?: string;
    testimonial?: string;
    image: string;
};

const caseStudies: CaseStudy[] = [
    // {
    //     client: "One Message Foundation",
    //     channelName: "One Message Foundation",
    //     channelLink: "https://www.youtube.com/@OneMessageFoundation",
    //     subscribers: "1.28M subscribers",
    //     problem:
    //         "Client’s YouTube Shorts were not gaining significant traction, with most videos averaging under 10,000 views.",
    //     solution:
    //         "I crafted a high-impact edit with fast-paced transitions, subtitles, and a strong opening hook to grab attention.",
    //     result:
    //         "The video gained over 120,000 views — more than 100K higher than their typical reach.",
    //     stats: "Before: ~9K views | After: 120K+ views",
    //     link: "https://youtube.com/shorts/O2NPZbiN0bY?si=ecxCp0B4J8OQpf-n",
    //     testimonial:
    //         "“Your editing took our content to a whole new level. The engagement blew up!”",
    //     image: "/case1f.png"
    // },
    {
        client: "Erick Ronaldo",
        channelName: "Erick Ronaldo",
        channelLink: "https://www.youtube.com/@ErickRonaldo",
        subscribers: "386K followers",
        problem:
            "Erick’s Instagram reels usually received low traction, stuck around 2–3K views.",
        solution:
            "I added bold text animation, cinematic music, and fast-paced transitions to create a highly shareable reel.",
        result:
            "The reel organically hit 75,000+ views and drove profile growth.",
        stats: "Before: ~100K views | After: 300K+ views",
        link: "https://www.instagram.com/reel/DHuGgtbxQrM/?utm_source=ig_web_copy_link",
        testimonial:
            "“The response was insane. Everyone loved the pacing and look — best reel performance so far!”",
        image: "/case2f.png"
    },
];

const CaseStudySection = () => {
    return (
        <section className="py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12 text-white">
                    Case Studies
                </h2>

                <div className="space-y-16">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-8 bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 overflow-x-auto border-2 border-blue-500 rounded-xl">
                                <div className="min-w-[600px] md:min-w-0 h-64 bg-black flex items-center justify-center">
                                    <Image
                                        src={study.image}
                                        alt="Case Study Image"
                                        className="h-64 object-contain rounded-xl"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 space-y-3">
                                <h3 className="text-2xl font-semibold text-blue-500">
                                    <a
                                        href={study.channelLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {study.channelName}
                                    </a>
                                </h3>
                                <p>
                                    <strong>Client:</strong> {study.client}
                                </p>
                                {study.subscribers && (
                                    <p>
                                        <strong>Subscribers:</strong> {study.subscribers}
                                    </p>
                                )}
                                <p>
                                    <strong>Problem:</strong> {study.problem}
                                </p>
                                <p>
                                    <strong>What I Did:</strong> {study.solution}
                                </p>
                                <p>
                                    <strong>Result:</strong> {study.result}
                                </p>
                                {study.stats && (
                                    <p>
                                        <strong>Stats:</strong> {study.stats}
                                    </p>
                                )}
                                {study.link && (
                                    <p>
                                        <a
                                            href={study.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 underline"
                                        >
                                            Watch Video
                                        </a>
                                    </p>
                                )}
                                {study.testimonial && (
                                    <blockquote className="text-sm italic border-l-4 border-blue-600 pl-4 mt-2 text-gray-300">
                                        “{study.testimonial}”
                                    </blockquote>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
