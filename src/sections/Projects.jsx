import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Acoustic-Based Rice Weevil Detection Mobile App | Project Design",
      description:
        "A mobile app to remotely monitor and control an acoustic-based rice weevil detection system. This is submitted as part of the final project of the Computer Engineering program.",
      bullets: [
        "Built mobile monitoring interface with React Native",
        "Enabled remote activation of the pest elimination process",
        "Integrated with Django backend API",
        "Part of a larger embedded IoT system",
      ],
      technologies: ["React Native", "Django", "REST API", "IoT System"],
      ctaText: "View in Github",
      ctaUrl: "https://github.com/Clipph/pd2_mobapp",
    },
    {
      title: "Repertoire Tracker | Available in Google Play Store",
      description:
        "A mobile application that helps musicians to log, organize, and revisit their repertoire. Whether you're practicing for a recital or just want to remember what you've played, this is for you.",
      bullets: [
        "Built full mobile interface using React Native",
        "Implemented CRUD operations for managing repertoire list",
        "Integrated with Django backend for backup cloud storage",
        "Deployed to Google Play Store for public access",
      ],
      technologies: ["React Native", "Django", "REST API", "Deployment"],
      ctaText: "View in Google Play",
      ctaUrl:
        "https://play.google.com/store/apps/details?id=com.bananaillukit.Repertoire_Tracker&hl=en",
    },
    {
      title: "Duet Pass | Game Made with Unity",
      description:
        "A small game developed in Unity using C#, focusing on basic gameplay mechanics and object-oriented programming principles. Playable directly in the browser via itch.io.",
      bullets: [
        "Implemented core gameplay mechanics using C#",
        "Applied object-oriented programming concepts to structure the game",
        "Learned the basics of game loop, input handling, and Unity engine workflow",
        "Published as a browser-playable project on itch.io to practice game development fundamentals",
      ],
      technologies: [
        "Unity",
        "C#",
        "Game Development",
        "Object-Oriented Programming",
      ],
      ctaText: "Play on itch.io",
      ctaUrl: "https://unblaital.itch.io/duet-pass",
    },
    {
      title: "Tonicist Association | Community Website",
      description:
        "A React-based website built for the Tonicist Association, a private community of musicians formed from the Tonic practice app. The site centralizes announcements, schedules, staff information, and curated media resources that were previously scattered across WhatsApp.",
      bullets: [
        "Developed the frontend using React for a responsive community portal",
        "Built a simple admin panel to allow non-technical staff to edit site content",
        "Implemented a lightweight CMS approach using a GitHub Gist JSON file as the data source",
        "Enabled dynamic updates by pulling and pushing content to the Gist without redeploying the site",
      ],
      technologies: [
        "React",
        "Javascript",
        "Github Gist API",
        "Responsive Design",
      ],
      ctaText: "Visit Website",
      ctaUrl: "https://tonicist-association.vercel.app/",
    },
    {
      title: "Flex Your Art | Roblox Game",
      description:
        "A Roblox game that allows players to upload and showcase their artworks from external platforms such as IbisPaint, Sketchbook, or traditional drawings. Players can claim canvases, display their work with titles and descriptions, and explore other players’ creations in a virtual gallery environment.",
      bullets: [
        "Developed gameplay systems using Lua in Roblox Studio",
        "Implemented artwork display system with player metadata such as title, description, and likes",
        "Used Roblox built-in data storage services to persist player statistics and artwork likes",
        "Designed social interaction features including likes, reporting, and selfie mode for sharing artworks",
      ],
      technologies: [
        "Lua Scripting",
        "Roblox Studio",
        "Roblox Data Storage",
        "Game Systems Design",
      ],
      ctaText: "View in Roblox",
      ctaUrl: "https://www.roblox.com/games/73643519481857/Flex-Your-Art",
    },
  ];

  return (
    <SectionWrapper id="projects">
      {/* Section Title */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Projects
      </Typography>

      {/* Section Intro */}
      <Typography sx={{ mb: 2 }}>
        Here are a few projects I have built to showcase my skills in software
        development.
      </Typography>

      {/* Project Cards */}
      {projectList.map((proj, i) => (
        <ProjectCard
          key={i}
          title={proj.title}
          description={proj.description}
          bullets={proj.bullets}
          technologies={proj.technologies}
          ctaText={proj.ctaText}
          ctaUrl={proj.ctaUrl}
        />
      ))}
    </SectionWrapper>
  );
}
