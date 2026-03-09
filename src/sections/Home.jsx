import { Typography, Button, Stack } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  const RESUME_URL = "/kian-tubalinal-resume-03092026.pdf";
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="home">
      <Typography variant="h3">Hi, I'm Kian</Typography>

      <Typography variant="h5">
        Computer Engineer | Software Developer
      </Typography>

      <Typography className="center">
        I build mobile apps, web applications, and small games while exploring
        backend systems and software design.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" marginTop={3}>
        <Button
          variant="outlined"
          style={{ padding: 15 }}
          onClick={() => scrollTo("projects")}
        >
          View Projects
        </Button>

        <Button variant="outlined" href={RESUME_URL} target="_blank">
          Download Resume
        </Button>
      </Stack>
    </SectionWrapper>
  );
}
