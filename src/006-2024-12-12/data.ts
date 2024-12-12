import { ISpeaker, ITalk } from "../common/types";

export const orgs = [
  {
    name: "Accelerator by Sanofi",
    role: "Tonight's host",
    logoUrl: "./sanofi.svg",
  },
];

export const talks: ITalk[] = [
  {
    title: "Introduction to Remix: Core Principles and Concepts",
    description:
      "In this talk, we'll explore the Remix framework and uncover its core principles. We'll discuss what Remix enables developers to achieve, how it embraces modern web standards, and what to expect from its future evolution in the web development landscape.",
    speaker: {
      name: "Rémi Peron",
      role: "CTO Freelance",
    },
    language: "🇬🇧",
  },
  {
    title: "Next.js et le cache",
    description:
      "Un retour d'expérience sur l'amélioration d'une plateforme e-commerce (PickSale) avec l'objectif d'avoir le maximum de pages statiques et de cache, tout en conservant du dynamisme. Nous aborderons la fonction cache de React, le `unstable_cache` de Next.js, la génération statique au build et au runtime, le contrôle du cache et les CDN.",
    speaker: {
      name: "Lenclos Thibault",
      role: "Co-fondateur et développeur chez Premier Octet",
    },
    language: "🇫🇷",
  },
  {
    title: "Créer une extension VS Code pour booster son DSL, les dessous",
    description:
      "Qui n'a jamais rêvé de créer son propre langage? Découvrez comment aller au-delà d'un simple parser pour créer une expérience développeur complète: de la coloration syntaxique aux erreurs et suggestions contextuelles, des aperçus rapides au renommage et à la navigation par symboles.",
    speaker: {
      name: "Loïc Knuchel",
      role: "Fondateur at Azimutt",
    },
    language: "🇫🇷",
  },
];

export const communityMeetups = [
  {
    title: "React Paris Meetup #6",
    date: "December 12, 2024",
    location: "43-47 Avenue de la Grande Armée, 75016 Paris",
    groupName: "Accelerator by Sanofi",
  },
];
