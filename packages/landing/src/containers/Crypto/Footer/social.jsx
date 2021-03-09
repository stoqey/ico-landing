import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { github } from "react-icons-kit/fa/github";
import { instagram } from "react-icons-kit/fa/instagram";

export const socialLinks = [
  {
    id: 0,
    icon: <Icon icon={github} />,
    name: "github",
    link: "https://github.com/stoqey",
  },
  {
    id: 1,
    icon: <Icon icon={instagram} />,
    name: "instagram",
    link: "https://instagram.com/stoqey",
  },
  {
    id: 2,
    icon: <Icon icon={twitter} />,
    name: "twitter",
    link: "https://twitter.com/stoqey_",
  },
  {
    id: 3,
    icon: <Icon icon={linkedin} />,
    name: "linkedin",
    link: "https://www.linkedin.com/company/stoqey",
  },
  // {
  //   id: 3,
  //   icon: <Icon icon={facebook} />,
  //   name: 'facebook',
  //   link: 'https://www.facebook.com/STOQEY/',
  // },

  // {
  //   id: 4,
  //   icon: <Icon icon={github} />,
  //   name: 'github',
  //   link: '4#',
  // },
];
