import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <Typography variant="h4">About Me</Typography>

      <Typography>
        Computer Engineering graduate interested in software development and
        building practical projects.
      </Typography>

      <Typography>
        I have experience developing mobile applications using React Native,
        building simple backend APIs with Django, and creating web applications
        with React.
      </Typography>

      <Typography>
        I’ve also explored game development using Unity (C#) and Roblox (Lua),
        publishing small games as personal projects.
      </Typography>

      <Typography>
        During my internship as a software developer, I worked on a full-stack
        application using Java Spring Boot and React, mainly fixing bugs and
        improving existing features in a production system.
      </Typography>

      <Typography>
        Currently, I’m focused on improving my skills in mobile development,
        backend systems, and software architecture.
      </Typography>
    </SectionWrapper>
  );
}
