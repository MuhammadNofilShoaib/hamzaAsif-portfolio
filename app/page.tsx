import Button from "@/components/Button";
// import CaseStudySection from "@/components/CaseStudySection";
import Feedbacks from "@/components/Feedbacks";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CreatorsSlider from "@/components/CreatorsSlider";
import NicheButtons from "@/components/NicheButtons";
import VideoTestimonials from "@/components/VideoTestimonials";

const creators = [
  {
    name: "Camerxn Breen",
    image: "/1up.jpg",
    link: "https://www.instagram.com/camerxnbreen/",
  },
  {
    name: "Joe Butler",
    image: "/joeb.real.jpg",
    link: "https://www.instagram.com/joeb.real/",
  },
  {
    name: "Mel Cobian",
    image: "/3up.jpg",
    link: "https://www.instagram.com/melcobian.official/",
  },
  {
    name: "Twin Dentists",
    image: "/4up.jpg",
    link: "https://www.instagram.com/twindentists/",
  },
  {
    name: "Erick Ronaldo",
    image: "/5up.jpg",
  },
  {
    name: "John Savage Crypto",
    image: "/6up.jpg",
    link: "https://www.youtube.com/@johnsavagefuture/videos",
  },
  {
    name: "One Message Foundation",
    image: "/omf.jpg",
  },
  {
    name: "Chris Kubby",
    image: "/ck.jpg",
    link: "https://www.instagram.com/chriskubby/",
  },
  {
    name: "Kellan Reck",
    image: "/kr.jpg",
    link: "https://www.youtube.com/@KellanReck/videos",
  },

  // NEW ONES 👇

  {
    name: "Daren SV",
    image: "/DarensV.jpg",
    link: "https://www.youtube.com/@darensv/videos",
  },
  {
    name: "Izzy Tatum UGC",
    image: "/izzy.jpg",
    link: "https://www.instagram.com/izzytatumugc/",
  },
  {
    name: "Nate Flake",
    image: "/nate.jpg",
    link: "https://www.instagram.com/nateflakecreates/",
  },
  {
    name: "Abbott Fitness",
    image: "/abbott.jpg",
    link: "https://www.instagram.com/abbottfitnessofficial/",
  },
  {
    name: "Evryday Club",
    image: "/evryday.jpg",
    link: "https://www.instagram.com/evrydayclub/",
  },
  {
    name: "Jessica Seabound",
    image: "/jessica.jpg",
    link: "https://www.instagram.com/seabound.jessica/",
  },
  {
    name: "Positive Money Project",
    image: "/pmp.jpg",
    link: "https://www.instagram.com/positivemoneyproject/",
  },
  {
    name: "Wanhee Kim",
    image: "/wanhee.jpg",
    link: "https://www.youtube.com/@wanheekim/videos",
  },
  {
    name: "Tomas Pospisil",
    image: "/tomas.jpg",
    link: "https://www.instagram.com/tomaspospisil_fx/",
  },
  {
    name: "Nabeel Mussarat",
    image: "/nabeel.jpg",
    link: "https://www.instagram.com/nabeel_mussarat/",
  },
  {
    name: "Nikki Vinck",
    image: "/nikki.jpg",
    link: "https://www.instagram.com/nikkivinck/",
  },
  {
    name: "Oladisha",
    image: "/oladisha.jpg",
    link: "https://www.instagram.com/oladisha18/",
  },
  {
    name: "Jake Moscato",
    image: "/jake.jpg",
    link: "https://www.instagram.com/jakemoscato/",
  },
  {
    name: "Lashzaddy Lizz",
    image: "/lizz.jpg",
    link: "https://www.instagram.com/lashzaddylizz/",
  },
  {
    name: "Keeley Mazurek",
    image: "/keeley.jpg",
    link: "https://www.instagram.com/keeleymazurek/",
  },
  {
    name: "Kieon Marshal",
    image: "/kieon.jpg",
    link: "https://www.instagram.com/kieon.marshal/",
  },
  {
    name: "Ceoline",
    image: "/ceoline.jpg",
    link: "https://www.instagram.com/ceoline_/",
  },
  {
    name: "Melissa Renell",
    image: "/melissa.jpg",
    link: "https://www.instagram.com/melissarenellcreates/",
  },
  {
    name: "Carla Jade",
    image: "/carla.jpg",
    link: "https://www.instagram.com/carla_jjade/",
  },
  {
    name: "Will Howorth",
    image: "/will.jpg",
    link: "https://www.youtube.com/@Will.Howorth/videos",
  },
  {
    name: "Philipp Buehl",
    image: "/philipp.jpg",
    link: "https://www.youtube.com/@buehlphilipp",
  },
  {
    name: "Stefania Mogollon",
    image: "/stefania.jpg",
    link: "https://www.youtube.com/@stefaniamogollon/videos",
  },
  {
    name: "Wild Rapha",
    image: "/rapha.jpg",
    link: "https://www.youtube.com/@wildrapha/videos",
  },
  {
    name: "Lexi Rose",
    image: "/lexi.jpg",
    link: "https://www.youtube.com/@LexirosemusicLXR/videos",
  },
  {
    name: "Loch UGC",
    image: "/loch.jpg",
    link: "https://www.instagram.com/lochugc/",
  },
  {
    name: "Ahmed Khan",
    image: "/ahmed.jpg",
    link: "https://www.youtube.com/@ThatAhmedKhan/videos",
  },
  {
    name: "Natty B Trading",
    image: "/natty.jpg",
    link: "https://www.instagram.com/nattybtrading/",
  },
  {
    name: "Cliff Cheqona",
    image: "/cliff.jpg",
    link: "https://www.instagram.com/cliff_cheqona/",
  },
  {
    name: "Luca NoLimit",
    image: "/luca.jpg",
    link: "https://www.youtube.com/@Luca.nolimit/videos",
  },
  {
    name: "Kayo Martin",
    image: "/kayo.jpg",
    link: "https://www.instagram.com/kayo_martin/",
  },
  {
    name: "Vanja Moves",
    image: "/vanja.jpg",
    link: "https://www.instagram.com/vanja.moves/",
  },
];

// const videos = [
//   {
//     title: "The Best Type Of Property You Should Buy in Dubai 2025",
//     embedUrl: "https://www.youtube.com/embed/X6Id4lE6knY?si=mL-9PruKvMHIixka",
//     tags: ["Video Editing", "Motion Graphics"],
//   },
//   {
//     title: "How to Grow an Instagram Account from SCRATCH in 2025 (With ZERO Followers!)",
//     embedUrl: "https://www.youtube.com/embed/h2KCXR88FIc?si=U3RkPbLvSdcPg3uS",
//     tags: ["Video Editing", "Motion Graphics"],

//   },
//   // {
//   //   title: "Steal This: The Exact Playbook 3 Fitness Creators Used to Blow Up",
//   //   embedUrl: "https://www.youtube.com/embed/Rlftu8i6gLY?si=gt9jJsXPN6c5UYjz",
//   //   tags: ["Video Editing", "Motion Graphics"],
//   // },

//   // Add more videos here as needed
// ];

const companies = [
  {
    name: 'Illumiflow',
    logo: '/if.png',
    link: 'https://illumiflow.com/?srsltid=AfmBOopNtA8S2Aq9Yn6wMQrMST0ATDrnnSsXCYCMcrUhxUOOJZ0rsZfv'
  },
  {
    name: 'Kiierr',
    logo: '/k.png',
    link: 'https://kiierrhealth.com/'

  },
  {
    name: 'Smile White',
    logo: '/sm.png',
    link: 'https://www.smilewhite.co.uk/?srsltid=AfmBOorTS8zxEwchb11PCjT2-gYeLfZ2H9e1PKa1zQr6mIOjbVmV80rq'

  },
];

export default function Home() {

  return (
    <div className=" space-y-[64px]">

      <section className="flex flex-col justify-center items-center gap-10 text-center relative px-4 overflow-hidden h-[70vh] md:h-screen bg-[url('/bg.png')] bg-cover bg-center w-full rounded-b-4xl">

        {/* Subheadline */}
        <div className="flex justify-center items-center ">
          <div className="w-[120px] h-[2px] bg-gradient-to-r from-black to-blue-600"></div>
          <div className="rounded-full">
            <div className="font-[16px] text-[12px] md:text-xl bg-black px-4 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-r whitespace-nowrap from-white to-blue-500">
              Explode Your Channel Growth
            </div>
          </div>
          <div className="w-[120px] h-[2px] bg-gradient-to-l from-black to-blue-600"></div>


        </div>

        {/* Headline */}
        <h1 className="text-[30px] md:text-[48px] md:w-1/2 sm:text-5xl md:text-6xl font-extrabold leading-[2.5rem] capitalize md:leading-tight text-center text-white md:bg-gradient-to-b from-gray-800 via-white to-gray-800 bg-clip-text md:text-transparent">
          I help creators increase ROI by improving

          watch time and retention through strategic
          <span className="bg-blue-600 text-white px-3 py-1 rounded-md inline-block italic">
            editing
          </span>
        </h1>

        {/* CTA Button */}
        <div className="">
          <Button />

        </div>

      </section>

      <hr className="opacity-30" />

      <section id="about" className="bg-black flex flex-col gap-5 justify-center items-center mx-auto text-center text-[18px] md:w-[80%] lg:w-1/2 h-[50vh]">

        <h2 className="text-5xl md:text-5xl font-semibold mb-5 capitalize text-center text-white">About me:</h2>

        <h1 className="text-lg md:text-2xl text-white">{`Hi, I’m Hamza. I help creators save time and grow their business by taking care of the entire video editing process and creating high-retention videos that increase watch time and engagement.`}

        </h1>
        <Link className="text-lg text-white md:text-[30px] font-semibold flex justify-center items-center gap-3 underline underline-offset-8 hover:no-underline duration-300" href="https://drive.google.com/drive/folders/1Pr60kkPSBncs_4wNHeEwNXM6BQPPyb3b?usp=drive_link">See Portfolio <span className="hover:-rotate-45 duration-300 ease-in-out"><FaArrowRight size={20} /></span></Link>

      </section>

      <hr className="opacity-30" />

      <section>
        {/* <CaseStudySection/> */}
      </section>

      {/* <hr className="opacity-30" /> */}



      {/* <section className="py-16 px-4 bg-black flex flex-col justify-center items-center gap-10 text-white text-center">
        <h2 className="text-5xl font-semibold mb-10 text-white">Creators I worked with:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[768px] mx-auto">
          {creators.map((creator) => (
            <Link href={`${creator.link}`} key={creator.name} className="flex flex-col gap-4 items-center justify-center">

              <Image
                src={creator.image}
                alt={creator.name}
                width={260}
                height={260}
                className="object-cover rounded-full border border-white hover:shadow-[0px_0px_60px_#ffffff] duration-200 ease-in-out"
              />

              <p className="text-lg font-medium text-white">{creator.name}</p>
            </Link>
          ))}
        </div>
      </section> */}
      <CreatorsSlider creators={creators} />;


      <hr className="opacity-30" />

      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-2xl md:text-4xl mx-2 font-bold mb-12">
          Some of the biggest companies I have worked with:
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {companies.map((company, index) => (
            <Link href={company.link} key={index} target="_blank" className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 bg-white border-white hover:shadow-[0px_0px_60px_#ffffff] transition-shadow duration-300 ease-in-out">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={160}
                  className="object-cover  transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-4 text-sm md:text-base">{company.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="opacity-30" />


      <section id="showcases" className="px-4 py-10">
        {/* <div className="flex flex-col justify-center items-center gap-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center text-white">Selected Projects:</h2>

          {videos.map((vid) => (
            <div
              key={vid.title}
              className="flex flex-col justify-center items-start gap-4 rounded-xl bg-white p-2 sm:p-3 shadow-md w-full max-w-[1000px]"
            >
              <div className="w-full aspect-video">
                <iframe
                  className="rounded-xl w-full h-full"
                  src={vid.embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-black">
                {vid.title.length > 20 ? vid.title.slice(0, 20) + "..." : vid.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {vid.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-700 text-white text-sm px-3 py-1 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div
            className="flex flex-col justify-center items-start gap-4 rounded-xl bg-white p-2 sm:p-3 shadow-md w-full max-w-[1000px]"
          >
            <div className="w-full aspect-video">
              <iframe
                className="rounded-xl w-full h-full"
                src="https://www.youtube.com/embed/EpQRDgi2Ttc?si=Kg0TKYNP-Mb-jjkG"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-black">
              BEST Video Editing Program to Use in 2025

            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-xl">Video Editing</span>
              <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-xl">Motion Graphics</span>


            </div>
          </div>


          <Link
            href="https://drive.google.com/drive/folders/1Pr60kkPSBncs_4wNHeEwNXM6BQPPyb3b?usp=drive_link"
            className="text-xl sm:text-2xl font-semibold flex justify-center items-center gap-2 text-white underline underline-offset-8 hover:no-underline duration-300"
          >
            See Portfolio{" "}
            <span className="hover:-rotate-45 duration-300 ease-in-out">
              <FaArrowRight size={20} />
            </span>
          </Link>
        </div> */}
        <NicheButtons />
      </section>


      <hr className="opacity-30" />

      <section id="testimonials" className="flex flex-col justify-center items-center">
        {/* <h2 className="text-5xl font-semibold mb-10 text-center text-white">Don&apos;t listen to us, Listen to them...</h2> */}

        <Feedbacks />

      </section>

      <VideoTestimonials />

      <hr className="opacity-30" />

      <section id="contact" className="flex justify-center items-center">
        <iframe className="flex justify-center items-center w-[800px] h-[1000px] rounded-xl" src="https://calendly.com/hamzaasifworks/30min"></iframe>

      </section>

      <hr className="opacity-30" />

    </div>

  );
}
