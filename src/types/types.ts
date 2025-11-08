import { IconType } from "react-icons";

export type Link = {
  href: string;
  name: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
};

export type Language = {
  image: string;
  name: string;
};

export type SocialLink = {
  name: string;
  Icon: IconType;
  url: string;
};

export type Service = {
  icon: IconType;
  title: string;
  description: string;
};
