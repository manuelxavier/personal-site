import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@manuelxavier",
    icon: Icons.gitHub,
    link: "https://github.com/manuelxavier",
  },
  {
    name: "LinkedIn",
    username: "Manuel Xavier",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/manuelxavier",
  },
  {
    name: "Twitter",
    username: "@manuelxavier",
    icon: Icons.twitter,
    link: "https://twitter.com/manuelxavier",
  },
  {
    name: "Gmail",
    username: "manuelxavier",
    icon: Icons.gmail,
    link: "mailto:manueloliveiraxavier@gmail.com",
  },
];
