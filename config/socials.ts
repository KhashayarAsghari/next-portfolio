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
    username: "@khashayarasghari",
    icon: Icons.gitHub,
    link: "https://github.com/khashayarAsghari",
  },
  {
    name: "LinkedIn",
    username: "Khashayar Asghari",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/khashayar-asghari",
  },
  {
    name: "Gmail",
    username: "khasgharidev@gmail.com",
    icon: Icons.gmail,
    link: "mailto:khasgharidev@gmail.com",
  },
];
