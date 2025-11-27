"use client";
import React from "react";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-12 text-white scroll-mt-16">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative rounded-full overflow-hidden border-4 border-white bg-linear-to-r from-amber-500 via-orange-500 to-red-700 shadow-2xl w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/images/me.png"
              alt="Joevany Aliguin"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <span className="break-all">aliguinjoevany123@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <span>+63 926 714 1479</span>
          </div>
          <div className="flex items-center gap-3">
            <LinkIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
              linkedin.com/in/joevanyaliguin
          </div>
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <a
              href="https://github.com/typicjoob"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition"
            >
              github.com/typicjoob
            </a>
          </div>
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <span>facebook.com/joevanyaliguinjr</span>
          </div>
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <span>instagram.com/@typicalvee</span>
          </div>
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-400" />
            <span>typicalvee.eth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;