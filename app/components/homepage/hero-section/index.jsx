// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">

        {/* LEFT — Identity */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">

          {/* Available badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-[#2a2060] bg-[#1a1443]/60 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16f2b3]"></span>
            </span>
            <span className="text-sm font-medium text-[#16f2b3]">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-white lg:text-[2.8rem] lg:leading-[1.2]">
            Hi, I&apos;m{' '}
            <span className="text-pink-500">{personalData.name}</span>
            <br />
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          {/* Tagline */}
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400 lg:text-base">
            I engineer <span className="font-medium text-white">production-grade systems</span> — payment
            pipelines, recommendation engines, real-time apps, and scalable multi-role APIs. Currently
            building at{' '}
            <span className="font-semibold text-pink-400">NuLook</span>, Bengaluru.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">API Modules</p>
            </div>
            <div className="h-10 w-px bg-[#2a2060]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">2</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">Companies</p>
            </div>
            <div className="h-10 w-px bg-[#2a2060]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">Live Products</p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5">
            <Link href={personalData.github} target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125 hover:text-white">
              <BsGithub size={26} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125 hover:text-white">
              <BsLinkedin size={26} />
            </Link>
            <Link href={personalData.leetcode} target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125 hover:text-white">
              <SiLeetcode size={26} />
            </Link>
            <Link href={personalData.twitter} target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125 hover:text-white">
              <FaTwitterSquare size={26} />
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#contact"
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="flex items-center gap-2 rounded-full bg-[#0d1224] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:gap-3">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link href={personalData.resume} target="_blank"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:gap-3">
              <span>Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>

        {/* RIGHT — Code terminal */}
        <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="flex items-center justify-between px-4 py-5 lg:px-8">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
            <span className="font-mono text-xs text-gray-500">amod.js</span>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">amod</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">role:</span>
                <span className="text-amber-300">&apos;Software Engineer&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">currentlyAt:</span>
                <span className="text-amber-300">&apos;NuLook, Bengaluru&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="mt-1">
                <span className="ml-4 mr-2 text-white lg:ml-8">stack:</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-violet-400 lg:ml-16">backend:</span>
                <span className="text-gray-400">{'['}</span>
                <span className="text-amber-300">&apos;FastAPI&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;PostgreSQL&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;Redis&apos;</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-violet-400 lg:ml-16">frontend:</span>
                <span className="text-gray-400">{'['}</span>
                <span className="text-amber-300">&apos;React&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;Next.js&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;Tailwind&apos;</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-violet-400 lg:ml-16">devops:</span>
                <span className="text-gray-400">{'['}</span>
                <span className="text-amber-300">&apos;Docker&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;AWS&apos;</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">&apos;Railway&apos;</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
              <div>
                <span className="ml-4 text-gray-400 lg:ml-8">{'},'}</span>
              </div>
              <div className="mt-1">
                <span className="ml-4 mr-2 text-white lg:ml-8">built:</span>
                <span className="text-gray-400">{'['}</span>
              </div>
              <div>
                <span className="ml-8 text-green-400 lg:ml-16">&apos;Razorpay payment pipelines&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-8 text-green-400 lg:ml-16">&apos;Recommendation engines&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-8 text-green-400 lg:ml-16">&apos;Real-time collaborative apps&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 text-gray-400 lg:ml-8">{'],'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">openTo:</span>
                <span className="text-[#16f2b3]">&apos;Full-time SDE roles&apos;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="text-gray-400">{'}; '}</span>
              </div>
            </code>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
