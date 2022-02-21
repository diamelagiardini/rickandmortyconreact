import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/diamelagiardini/">
        <LinkedInIcon sx={{mr:1}}></LinkedInIcon>
        diamelagiardini
      </a>
      <a href="https://github.com/diamelagiardini">
        <GitHubIcon sx={{mr:1}}></GitHubIcon>diamelagiardini
      </a>
      <a href="https://twitter.com/diame_gi">
        <TwitterIcon sx={{mr:1}}></TwitterIcon>diame_gi
      </a>
    </div>
  );
};

export default Footer;
