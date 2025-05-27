import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-0 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">
              Azka Zufar Hanif
            </p>
            <p>
              Fresh graduate with 3 years of web development experience.
              Expertise in Web Development & Design. Interest in the world of
              technology opens up opportunities to work and contribute to
              projects.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">Quick Links</p>
            <a href="" className="text-gray-700 mb-2 block">
              About Me
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Projects
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Blog
            </a>
            <a href="" className="text-gray-700 mb-2 block">
              Resume
            </a>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-xl mb-2">Connects</p>
            <div className="flex gap-2 items-center">
              <Link
                href={"https://www.linkedin.com/in/azka-zufar-hanif-7174641a9/"}
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  width={32}
                  height={32}
                  alt="Linkedin"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/azkazufarh/"}
                target="_blank"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={32}
                  height={32}
                  alt="Instagram"
                />
              </Link>
              <Link href={"https://www.tiktok.com/@azkazufarh"} target="_blank">
                <Image
                  src="/icons/tiktok.svg"
                  width={32}
                  height={32}
                  alt="Tiktok"
                />
              </Link>
              <Link href={"https://github.com/azkazufarh"} target="_blank">
                <Image
                  src="/icons/github.svg"
                  width={32}
                  height={32}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border border-gray-300 w-full my-4" />
        <p className="text-center">Copyright 2025. Azka Zufar Hanif</p>
      </div>
    </div>
  );
};

export default Footer;
