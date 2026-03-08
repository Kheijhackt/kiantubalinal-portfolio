import { Typography, Box } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  const skillsData = [
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "C#", "Lua", "Java"],
    },
    {
      title: "Frameworks",
      skills: [
        "React Native",
        "React",
        "Django",
        "Spring Boot (basic exposure)",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Vercel",
        "PythonAnywhere",
        "Roblox Studio",
        "Unity Editor",
      ],
    },
    {
      title: "Concepts",
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
        Here are my main technical skills, organized by category.
      </Typography>

      {/* Width limiter */}
      {skillsData.map((item, index) => (
        <SkillsCard key={index} title={item.title} skills={item.skills} />
      ))}
    </SectionWrapper>
  );
}
