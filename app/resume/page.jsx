"use client";

import { FaHtml5, FaCss3, FaAngular, FaNodeJs, FaFigma, FaJs  } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


const about = {
  title : "About me",
  description:
  "Motivated and enthusiastic, I possess a strong ability to adapt and a quick understanding of workflow, making me an ideal candidate to meet your expectations!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nezih Boujdidi"
    },
    {
      fieldName: "Email",
      fieldValue: "Nezih.Boujdidi@enicar.ucar.tn"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216) 50 688 219"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian"
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic - Native English - B2 French - B2 Spanish - A2"
    },
  ],
};

//MYyEexperience

const experience = {
   title: "My Experience",
   description:
   "Gained valuable hands-on experience and built a strong foundation by contributing to real-world projects in professional settings!",
   items: [
    {
      company: "Teamwill",
      position: "Summer Internship",
      duration: "July 2024 - Aug 2024",
    },
    {
      company: "Codix",
      position: "Summer Internship",
      duration: "June 2023 - Aug 2023",
    },
   ], 
  };

  //education
const education = {
  title: "My Education",
  description:
  "Strong academic foundation, complemented by hands-on experience and continuous learning in modern technologies!",
  items: [
   {
     institution: "National School of Engineers of Carthage, Enicarthage",
     degree: "Computer Engineering Diploma",
     duration: "Sep 2022 - July 2025",
   },
   {
     institution: "Preparatory Institute for Engineering Studies, IPEIT",
     degree: "Highly intensive classes in advanced mathematics and physics",
     duration: "Sep 2020 - July 2022",
   },
   {
    institution: "Bourguiba Pioneer High School",
    degree: "Bachelor's Degree in Mathematics",
    duration: "Sep 2016 - June 2020",
  },
  ] 
 };

const skills = {
  title: "My Skills",
  decription:
  "Versatile developer with expertise in a wide range of technologies, including Next.js, Angular, and more!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <RiNextjsFill />,
      name: "next.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <SiSpringboot />,
      name: "spring boot",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

import { Tabs , TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { animate, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const resume = () => {
  return <motion.div initial={{ opacity:"0" }}
  animate={{ opacity:"1",
    transition: {
      delay: 2.4, duration: 0.4, ease:'easeIn'
    },
  }}
  className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0 xl:mt-32">
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        {/* content */}
        <div className="min-h-[100vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full min-h-[100vh]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return ( 
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        {/* data */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li> 
                    );
                  })}
                </ul>
              </ScrollArea>
            
            </div>
          </TabsContent>
           {/* education */}
           <TabsContent value="education" className="w-full min-h-[100vh]">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=> {
                    return ( 
                    <li key={index} className="bg-[#232329] h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[270px] min-h-[60px]">{item.degree}</h3>
                      <div className="flex items-baseline gap-3">
                        {/* data */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li> 
                    );
                  })}
                </ul>
              </ScrollArea>
            
            </div>
          </TabsContent>
           {/* skills */}
           <TabsContent value="skills" className="w-full h-full min-h-[100vh]">
            {/* <div className="flex flex-col gap-[30px]"> */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.decription}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
           {/*  </div> */}
           </TabsContent>


           {/* about */}
           <TabsContent value="about" className="w-full text-center xl:text-left min-h-[100vh]">
             <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >
              {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return (
                      <li className="flex items-baseline justify-center xl:justify-start gap-4" key={index}>
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
              </ul>
             </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
  
};

export default resume;