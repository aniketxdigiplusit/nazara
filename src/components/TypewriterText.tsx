"use client";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import banner from "../../public/images/banner.png"

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "a",
    },
    {
      text: "Diversified",
    },
    {
      text: "&",
    },
    {
        text: "Profitable",
      },
      {
        text: "Sports",
        className: "text-blue-700 dark:text-blue-500"
      },
      {
        text: "&",
        className: "text-blue-700 dark:text-blue-500"
      },
      {
        text: "Gaming",
        className: "text-blue-700 dark:text-blue-500"
      },
      {
        text: "Ecosystem.",
      },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
    <div className="flex items-center justify-between h-[40rem] w-full px-[50px] rounded-xl">
        <div className="w-[50vw] xs:w-[100vw]">
            <TypewriterEffect words={words} />
        </div>
        <div className="w-[50vw] xs:w-[100vw]">
            {/* <Image src={banner} alt="banner" /> */}
            <img src="https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner.png"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner-p-500.png 500w, https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner-p-800.png 800w, https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner-p-1080.png 1080w, https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner-p-1600.png 1600w, https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner-p-2000.png 2000w, https://cdn.prod.website-files.com/646d9666493cce6bd175b184/6477a47e1ee8645861b57f59_main-banner.png 2872w"
            className="align-middle max-w-full inline-block border-0 box-border rounded-xl shadow-lg shadow-blue-800 transform transition duration-300 hover:transform hover:scale-105"></img>
        </div>
    </div>
  );
}
