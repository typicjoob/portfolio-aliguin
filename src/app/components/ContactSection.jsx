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
    <section id="contact" className="px-6 py-12 text-white scroll-mt-10">
      <h2 className="text-4xl font-bold mb-8 mt-8 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="flex justify-center md:justify-start">
            <div className="w-75 h-75 relative rounded-full overflow-hidden border-4 border-white bg-linear-to-r from-amber-500 via-orange-500 to-red-700 p-1 lg:ml-75">
              <Image
                src="/images/me.png"
                alt="Joevany"
                width={250}
                height={200}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:ml-20">
          <div className="flex items-center gap-4">
            <EnvelopeIcon className="h-6 w-6 text-amber-500" />
            <span>aliguinjoevany123@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="h-6 w-6 text-amber-500" />
            <span>+63 926 714 1479</span>
          </div>
          <div className="flex items-center gap-4">
            <LinkIcon className="h-6 w-6 text-amber-500" />
            <span>linkedin.com/in/joevanyaliguin</span>
          </div>
          <div className="flex items-center gap-4">
            <UserCircleIcon className="h-6 w-6 text-amber-500" />
            <span>github.com/typicjoob</span>
          </div>
          <div className="flex items-center gap-4">
            <UserCircleIcon className="h-6 w-6 text-amber-500" />
            <span>facebook.com/joevanyaliguinjr</span>
          </div>
          <div className="flex items-center gap-4">
            <UserCircleIcon className="h-6 w-6 text-amber-500" />
            <span>instagram.com/@typicalvee</span>
          </div>
          <div className="flex items-center gap-4">
            <UserCircleIcon className="h-6 w-6 text-amber-500" />
            <span>typicalvee.eth</span>
          </div>
        </div>
      </div>
      <footer className="mt-16 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; 2025 Joevany Aliguin. All rights reserved.
      </footer>
    </section>
  );
};

export default ContactSection;
