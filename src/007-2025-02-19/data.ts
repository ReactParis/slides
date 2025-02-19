import { ISpeaker, ITalk } from "../common/types";

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
    title: "",
    name: "Gabriel Pichot",
    profilePicture:
      "https://avatars.githubusercontent.com/u/1295737?s=400&u=d3bf0222d7fb990f0fe63b8424497fa308ce379f&v=4",
    social: {
      discord: "gabriel.pi",
      twitter: "gabrielpichot",
    },
  },
  {
    title: "",
    name: "Sylvain Pontoreau",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D5603AQElUf7P8xMVMQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631633898597?e=1736380800&v=beta&t=IvUNlvZHJjJQv3G1O8TnWFIzuVVF_uoV-H1VC8ELxhY",
    social: {
      discord: "spontoreau",
      twitter: "spontoreau",
    },
  },
  {
    title: "",
    name: "Jérémie Zarca",
    profilePicture:
      "https://media.licdn.com/dms/image/v2/D4E03AQG7MuxLmtWyNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675944197511?e=1736380800&v=beta&t=qw8O6jDuCr7K6_WnbDg-4YGVj7KDSFdF_RczQlDNLwM",
    social: {
      discord: "shouboudou",
    },
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
