import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <Typography variant="h4" sx={{ mb: 2 }}>
        About Me
      </Typography>

      <Typography
        sx={{
          lineHeight: 2,
          textAlign: "justify",
        }}
      >
        Computer Engineering graduate interested in software development and
        building practical projects. I have experience developing mobile
        applications using React Native, building backend APIs with Django, and
        creating web applications with React. I’ve also explored game
        development using Unity (C#) and Roblox (Lua), publishing small games as
        personal projects. During my internship as a software developer, I
        worked on a full-stack application using Java Spring Boot and React,
        mainly fixing bugs and improving existing features in a production
        system. Currently, I’m focused on improving my skills in mobile
        development, backend systems, and software architecture.
      </Typography>
    </SectionWrapper>
  );
}
