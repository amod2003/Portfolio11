// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-24 relative">
      {/* Section label */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-5 py-2 text-xl rounded-md">
            Contact
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT — Info */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#16f2b3] mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
              Let&apos;s Build Something{' '}
              <span className="text-pink-500">Together</span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm lg:text-base leading-relaxed">
              I&apos;m open to full-time SDE roles, freelance projects, and interesting collaborations.
              Whether you have a project in mind or just want to say hi — my inbox is always open.
            </p>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            <a href={`mailto:${personalData.email}`}
              className="group flex items-center gap-4 rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-4 transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1a1443] text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                <MdAlternateEmail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
                <p className="text-sm font-medium text-white">{personalData.email}</p>
              </div>
            </a>

            <a href={`tel:${personalData.phone}`}
              className="group flex items-center gap-4 rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-4 transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1a1443] text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                <IoMdCall size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Phone</p>
                <p className="text-sm font-medium text-white">{personalData.phone}</p>
              </div>
            </a>

            <div className="group flex items-center gap-4 rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1a1443] text-pink-500">
                <CiLocationOn size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
                <p className="text-sm font-medium text-white">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Find me on</p>
            <div className="flex items-center gap-4">
              <Link href={personalData.github} target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b2c68a0] bg-[#0d1224] text-gray-400 transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:scale-110">
                <IoLogoGithub size={20} />
              </Link>
              <Link href={personalData.linkedIn} target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b2c68a0] bg-[#0d1224] text-gray-400 transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:scale-110">
                <BiLogoLinkedin size={20} />
              </Link>
              <Link href={personalData.leetcode} target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b2c68a0] bg-[#0d1224] text-gray-400 transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:scale-110">
                <SiLeetcode size={18} />
              </Link>
              <Link href={personalData.twitter} target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b2c68a0] bg-[#0d1224] text-gray-400 transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:scale-110">
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <ContactForm />

      </div>
    </div>
  );
}

export default ContactSection;
