import { ISpeaker, ITalk } from "../common/types";

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

export const talks: ITalk[] = [
  {
    title: "Introduction to Remix: Core Principles and Concepts",
    description:
      "In this talk, we'll explore the Remix framework and uncover its core principles. We'll discuss what Remix enables developers to achieve, how it embraces modern web standards, and what to expect from its future evolution in the web development landscape.",
    speaker: {
      name: "Rémi Peron",
      title: "CTO Freelance",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D4E03AQHwBqNgAfLLVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720095902128?e=1739404800&v=beta&t=iYLCKE4MS9LG2DQ0mMVDtmrVDw-4FK2G2xCpaVIMltU",
    },
  },
  {
    title: "Next.js et le cache",
    description:
      "Un retour d'expérience sur l'amélioration d'une plateforme e-commerce (PickSale) avec l'objectif d'avoir le maximum de pages statiques et de cache, tout en conservant du dynamisme. Nous aborderons la fonction cache de React, le `unstable_cache` de Next.js, la génération statique au build et au runtime, le contrôle du cache et les CDN.",
    speaker: {
      name: "Lenclos Thibault",
      title: "Co-fondateur et développeur chez Premier Octet",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D5603AQHhiN7gUNM6Ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729260627752?e=1739404800&v=beta&t=QKbZU-zDchcXHGMV5IhtgPazq-gZfenuWefcVWxHMgU",
    },
  },
  {
    title: "Créer une extension VS Code pour booster son DSL",
    description:
      "Qui n'a jamais rêvé de créer son propre langage? Découvrez comment aller au-delà d'un simple parser pour créer une expérience développeur complète: de la coloration syntaxique aux erreurs et suggestions contextuelles, des aperçus rapides au renommage et à la navigation par symboles.",
    speaker: {
      name: "Loïc Knuchel",
      title: "Fondateur at Azimutt",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/C5603AQHjUc-HSLLGVw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1584442121134?e=1739404800&v=beta&t=QSB9bpZ3Ue7YceDnxSbhhAjlhv26FIHfzzEgrVK9elc",
    },
  },
];

export const communityMeetups = [
  {
    title: "React Paris Meetup #6",
    date: "December 12, 2024",
    location: "43-47 Avenue de la Grande Armée, 75016 Paris",
    groupName: "Accelerator by Sanofi",
  },
  {
    title: "Paris TypeScript #41",
    date: "January 14, 2025",
    location: "TBA",
    groupName: "Paris TypeScript",
  },
  {
    title: "TypeScript La Conf'",
    date: "February 28, 2025",
    location: "TBA",
    groupName: "TypeScript La Conf'",
  },
  {
    title: "React Paris Conf",
    date: "March 20-21, 2025",
    location: "TBA",
    groupName: "React Paris",
  },
];
