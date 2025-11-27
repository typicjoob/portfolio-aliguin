"use client";
import React, { useState, useTransition } from "react";
import TabHandler from "./TabHandler";

const AboutMeSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Education", "Certifications", "Skills", "Hobbies"];

  return (
    <section id="about" className="mt-12 px-4 sm:px-12 scroll-mt-24">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4 mt-5">About Me</h2>
        <p className="text-base md:text-lg pb-5">
          I’m a creative person at heart, and I like to approach everything I do
          with care and attention to detail. I tend to be introverted, which
          gives me time to think deeply and reflect on my ideas, but it also
          means I value meaningful connections when I engage with others. I
          consider myself meticulous and thorough, always striving to get things
          right while keeping my work and projects polished. I’m driven by
          passion, whether it’s in my creative pursuits, coding projects, or
          learning something new, and I try to stay as authentic as I can in
          everything I do. Overall, I like to blend creativity with
          thoughtfulness, making sure that both my work and the way I express
          myself truly reflect who I am.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-2 border-b border-gray-700 -mx-4 px-4 overflow-x-auto">
        {tabs.map((tab, index) => (
          <TabHandler
            key={index}
            active={activeTab === index}
            selectTab={() => setActiveTab(index)}
          >
            {tab}
          </TabHandler>
        ))}
      </div>

      <div className="mt-4 text-gray-300 pb-5 min-h-[450px] md:min-h-[200px] font-thin">
        {activeTab === 0 && (
          <p>
            I spent the formative years of my education at Hua Siong College of
            Iloilo, where I developed both academically and personally from
            Kindergarten through Senior High School. Throughout my time there, I
            immersed myself in a rigorous curriculum, ultimately pursuing the
            STEM strand in Senior High, which strengthened my foundation in
            science, technology, engineering, and mathematics. In addition to my
            STEM focus, I honed my linguistic skills, particularly in Mandarin,
            achieving strong proficiency in both reading and writing. This
            comprehensive educational experience nurtured my analytical
            thinking, problem-solving abilities, and communication skills,
            shaping the discipline, curiosity, and versatility that I bring to
            my development projects and professional endeavors today.
          </p>
        )}

        {activeTab === 1 && (
          <p>
            To complement my technical skills, I have pursued several
            foundational certifications that validate my expertise and
            commitment to continuous learning. I earned the Microsoft “Querying
            Data with Transact‑SQL” certification, which strengthened my
            knowledge of relational databases and T‑SQL. From W3Schools, I
            completed their Certified Python Developer and Certified C#
            Developer programs, solidifying my proficiency in these essential
            programming languages. Additionally, I have gained entry-level
            networking and hardware skills through Cisco certifications,
            including the Cisco Certified Support Technician for Networking and
            IT Essentials: PC Hardware & Software. These certifications reflect
            my well-rounded technical foundation, bridging programming, database
            management, networking, and hardware knowledge to support a
            versatile approach to development projects.
          </p>
        )}

        {activeTab === 2 && (
          <p>
            Over the course of my development journey, I’ve built a versatile
            skill set that bridges both technical programming and creative
            design. I bring ideas to life with JavaScript, React, Flutter, and
            Dart, creating interactive, cross-platform applications, while CSS
            helps me refine the aesthetics and usability of interfaces. For
            graphic design and digital art, I rely on Photoshop and Affinity to
            produce visually compelling visuals that enhance user experience. On
            the backend, I leverage C# and SQL to build robust, data-driven
            solutions, and Python empowers me to automate workflows, analyze
            data, and streamline processes. Additionally, Excel serves as a
            powerful tool for organizing, visualizing, and interpreting
            information, helping me make strategic, informed decisions across
            projects. Together, these skills enable me to approach development
            with both creativity and precision, producing solutions that are
            functional, aesthetically appealing, and maintainable.
          </p>
        )}

        {activeTab === 3 && (
          <p>
            In my free time, I love keeping myself both creative and active.
            Dancing is one of my favorite outlets—it’s a fun way to express
            myself, stay energized, and even challenge my coordination and
            rhythm. I also spend a lot of time creating digital art and doing
            graphic design, experimenting with colors, shapes, and compositions
            to bring my ideas to life. Fashion design is another passion of
            mine, where I enjoy exploring different styles, textures, and
            aesthetics, imagining unique pieces and putting together creative
            looks. And when I just want to relax and have fun, I dive into
            gaming, which not only entertains me but also sparks creativity and
            inspires new ideas for my digital and design projects. Overall,
            these hobbies keep me balanced, motivated, and constantly inspired
            to explore new creative avenues.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutMeSection;
