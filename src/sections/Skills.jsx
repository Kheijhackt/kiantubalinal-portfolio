import { Typography, Box } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C#", "C++", "Lua", "Java"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React Native",
        "React",
        "Django",
        "Spring Boot (basic exposure)",
      ],
    },
    {
      title: "Development Tools & Platforms",
      skills: [
        "Git",
        "Vercel",
        "PythonAnywhere",
        "Roblox Studio",
        "Unity Editor",
      ],
    },
    {
      title: "Software Development Concepts",
      skills: [
        "REST APIs",
        "Full-Stack Development",
        "Mobile App Development",
        "Game Development",
        "Basic System Design",
        "Object-Oriented Programming",
        "Debugging & Bug Fixing",
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <Typography variant="h4" sx={{ mb: 3 }}>
        Skills
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Here are the technologies, tools, and development concepts I work with.
      </Typography>

      {/* Width limiter */}
      {skillsData.map((item, index) => (
        <SkillsCard key={index} title={item.title} skills={item.skills} />
      ))}
    </SectionWrapper>
  );
}
