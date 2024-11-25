"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectGroup } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "(+216) 50 688 219",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "Nezih.Boujdidi@enicar.ucar.tn",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    content: "Nezih Boujdidi",
  },

];



const Contact = () => {
  return <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
    className="py-6">
    <div className="container mx-auto mt-22 xl:mt-24">
      <div className=" mb-6 xl:mb-none" >
        <p className="text-4xl text-accent">
          Let's create something amazing together!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* image / text */}


        <div className="order-2 xl:order-none xl:w-[580px] xl:h-[693px] w-[380px] h-[498px] mix-blend-lighten relative">
          <Image
            src="/assets/contactimg.jpg"
            alt="contactImage"
            fill
            quality={100}
            className=""
          ></Image>
        </div>
        {/* info */}
        <div className="flex-1 flex flex-col xl:justify-center order-1 xl:order-none mb-8 ">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[22px]">{item.icon}</div>
                </div>
                <div>
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">
                    {/* {item.content} */}
                    {/* Check if the item is email and make it clickable */}
                    {item.title.toLowerCase() === 'email' ? (
                      <a href={`mailto:${item.content}`} className="text-accent hover:underline">{item.content}</a>
                    ) : (
                      item.content
                    )}
                  </h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>

};
export default Contact;