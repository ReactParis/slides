import { ITalk } from "../common/types";

export const talks: ITalk[] = [
  {
    title: "Tester mon application React, pourquoi les mocks et spys ne sont pas vos amis",
    description:
      "Explorez pourquoi les mocks et spys peuvent compliquer les tests de votre application React. Découvrez quand ces pratiques peuvent réellement être utiles.",
    speaker: {
      name: "Mathieu Kahlaoui",
      title: "",
    },
  },
  {
    title: "De Redux à Valtio : une gestion de state par logique métier",
    description:
      "Retour d'expérience sur la migration de Redux à Valtio dans une application React. Quels sont les avantages d'un gestionnaire de state plus proche des user stories ?",
    speaker: {
      name: "Thomas Dupont",
      title: "Développeur Node.js / React freelance (anciennement Albin Michel)",
    },
  },
  {
    title: "Astro pour les devs React",
    description:
      "Découvrez Astro, un framework conçu pour les sites majoritairement statiques. Une alternative intéressante à Next.js ou Gatsby pour concevoir des blogs ou des sites vitrines.",
    speaker: {
      name: "Arnaud Barré",
      title: "Software Engineer @ Carbometrix",
    },
  },
];

export const orgs = [
  {
    name: "L'atelier",
    logo: "./latelier.png",
    url: "https://www.latelier.co/",
  },
];

export const communityMeetups = [
  {
    title: "React Paris Meetup #7",
    date: "19 Feb 2025",
    location: "46 rue de l'Arbre Sec, 75001 Paris",
    groupName: "L'atelier",
  },
  {
    title: "Paris.JS #118",
    date: "26 Feb 2025",
    location: "Swan",
    groupName: "Paris.JS • Paris, FR",
  },
  {
    title: "Paris TypeScript la Conf'",
    date: "28 Feb 2025",
    location: "Paris",
    groupName: "Paris TypeScript • Paris, FR",
  },
  {
    title: "Node.js Paris #5, Chapitre 12 - UpFast",
    date: "5 Mar 2025",
    location: "Paris",
    groupName: "Node.js Paris • Paris, FR",
  },
  {
    title: "Remix Épique - Kent C. Dodds",
    date: "18 Mar 2025",
    location: "Paris",
    groupName: "Remix Paris • Paris, FR",
  },
  {
    title: "React Paris Conf",
    date: "20-21 Mar 2025",
    location: "Paris",
    groupName: "React Paris",
  },
];
