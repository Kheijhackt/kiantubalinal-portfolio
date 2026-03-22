import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function ProjectCard({
  title,
  description,
  bullets, // added bullets prop
  technologies,
  ctaText,
  ctaUrl,
  ctaText2,
  ctaUrl2,
}) {
  return (
    <Card
      sx={{
        width: "90%",
        bgcolor: "#1c2942",
        color: "#e0e6f0",
        mb: 3,
        boxShadow: "0 2vh 4vh rgba(0,0,0,0.5)",
        borderRadius: "1%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "150px",
        position: "relative",
        p: 2,
      }}
    >
      {/* Card content */}
      <Box>
        {title && (
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
        )}

        {description && (
          <Typography variant="body1" sx={{ color: "#e0e6f0", mb: 1 }}>
            {description}
          </Typography>
        )}

        {/* Render bullets if provided */}
        {bullets && bullets.length > 0 && (
          <Box component="ul" sx={{ mb: 1, pl: 3 }}>
            {bullets.map((bullet, i) => (
              <li key={i}>
                <Typography variant="body2" sx={{ color: "#e0e6f0" }}>
                  {bullet}
                </Typography>
              </li>
            ))}
          </Box>
        )}

        {technologies && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {technologies.map((tech, i) => (
              <Typography
                key={i}
                variant="caption"
                sx={{
                  backgroundColor: "#2a3a5a",
                  px: 1,
                  py: 0.5,
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                  color: "#7fb3ff",
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      {/* CTA buttons bottom-right */}
      {(ctaText && ctaUrl) || (ctaText2 && ctaUrl2) ? (
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}
        >
          {ctaText && ctaUrl && (
            <Button
              component="a"
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#7fb3ff",
                color: "#ffffff",
                fontSize: "0.9rem",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#5a9cff",
                },
              }}
            >
              {ctaText}
            </Button>
          )}

          {ctaText2 && ctaUrl2 && (
            <Button
              component="a"
              href={ctaUrl2}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                borderColor: "#7fb3ff",
                color: "#7fb3ff",
                fontSize: "0.9rem",
                px: 3,
                py: 1,
                "&:hover": {
                  borderColor: "#5a9cff",
                  color: "#5a9cff",
                },
              }}
            >
              {ctaText2}
            </Button>
          )}
        </Box>
      ) : null}
    </Card>
  );
}
