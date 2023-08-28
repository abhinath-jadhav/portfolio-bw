import React from "react";
import SkillWrapper from "./child-components/SkillWrapper";
import { MdSchool } from "react-icons/md";

const Skills = () => {
  const backend = [
    { skill: "Java", icon: <MdSchool size={30} /> },

    { skill: "Springboot", icon: <MdSchool size={30} /> },

    { skill: "Kafka", icon: <MdSchool size={30} /> },
    { skill: "Docker", icon: <MdSchool size={30} /> },
    { skill: "MongoDB", icon: <MdSchool size={30} /> },
    { skill: "MS SQL", icon: <MdSchool size={30} /> },
  ];

  const fronted = [
    { skill: "Typescript", icon: <MdSchool size={30} /> },
    { skill: "Javascript", icon: <MdSchool size={30} /> },
    { skill: "React", icon: <MdSchool size={30} /> },
    { skill: "NextJS", icon: <MdSchool size={30} /> },
    { skill: "Redux", icon: <MdSchool size={30} /> },
    { skill: "Tailwind", icon: <MdSchool size={30} /> },
  ];
  return (
    <div
      name="skills"
      className="max-w-[1440px] h-[110vh] md:h-[90vh] mx-auto px-4 flex justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl">Skills</h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="mb-4">
            <SkillWrapper title="Backend" skills={backend} />
          </div>
          <div className="mb-4">
            <SkillWrapper title="Fronted" skills={fronted} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
