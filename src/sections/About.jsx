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
        building practical projects. I have developed several personal projects
        including mobile applications using React Native, backend APIs with
        Django, and web applications built with React. I’ve also explored game
        development using Unity (C#) and Roblox (Lua), publishing small games as
        part of my learning process. During my internship as a software
        developer, I contributed to a full-stack web application built with Java
        Spring Boot and React, mainly fixing bugs and improving existing
        features in a production system. Currently, I continue to expand my
        skills in mobile development, web development, backend systems, and
        software architecture.
      </Typography>
    </SectionWrapper>
  );
}
