import {
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
  Box,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  const API_ROUTE = "/api/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: "center", color: "#7fb3ff" }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: 6,
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "flex-start",
            backgroundColor: "#1c2942",
            p: 4,
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            height: "fit-content",
          }}
        >
          <Typography variant="h6" sx={{ color: "#7fb3ff", mb: 1 }}>
            Get in Touch
          </Typography>

          <Typography sx={{ color: "#e0e6f0" }}>
            <strong>Email:</strong> kheijhackt@gmail.com
          </Typography>

          <Typography sx={{ color: "#e0e6f0" }}>
            <strong>Location:</strong> Metro Manila, Philippines
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton
              component="a"
              href="https://github.com/Kheijhackt"
              target="_blank"
              sx={{
                color: "#7fb3ff",
                backgroundColor: "#2a3a5a",
                "&:hover": { backgroundColor: "#3a4d75" },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/kian-jacob-anthony-t-823696204/"
              target="_blank"
              sx={{
                color: "#7fb3ff",
                backgroundColor: "#2a3a5a",
                "&:hover": { backgroundColor: "#3a4d75" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        {/* RIGHT COLUMN (FORM) */}
        <Stack spacing={2} sx={{ flex: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
            InputLabelProps={{ style: { color: "#7fb3ff" } }}
            InputProps={{ style: { color: "#e0e6f0" } }}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
            InputLabelProps={{ style: { color: "#7fb3ff" } }}
            InputProps={{ style: { color: "#e0e6f0" } }}
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
            InputLabelProps={{ style: { color: "#7fb3ff" } }}
            InputProps={{ style: { color: "#e0e6f0" } }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              backgroundColor: "#7fb3ff",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#5a9cff" },
              fontWeight: 700,
              py: 1.5,
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              "Send Message"
            )}
          </Button>

          {status && (
            <Typography sx={{ mt: 1, color: "#e0e6f0" }}>{status}</Typography>
          )}
        </Stack>
      </Box>
    </SectionWrapper>
  );
}
