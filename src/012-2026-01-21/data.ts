import { IEvent, IOrg, ITalk } from "../common/types";

export const talks: ITalk[] = [
  {
    title:
      "Créer un Domain-Specific Language (DSL) avec des Compound Components",
    description:
      "Nous avons tous connu un composant utilisé partout de la même façon, mais un peu différemment à chaque fois. Dans ce talk, Guillaume présentera les Compound Component et leur lien avec la notion de Domain Specific Language.",
    speaker: {
      name: "Guillaume Desforges",
      title: "Software Engineer",
      profilePicture:
        "https://avatars.githubusercontent.com/u/1882000?v=4",
    },
  },
  {
    title: "Migration d'un site fait avec NextJS vers Tanstack Router",
    description:
      "Ce talk a pour but de présenter le framework full-stack Tanstack-Start, et les raisons qui ont motivé cette migration, les obstacles rencontrés, les optimisations découvertes en cours de route, et surtout, un retour d'expérience honnête sur ce que cette transition apporte réellement en termes de performance, de coûts et d'expérience développeur.",
    speaker: {
      name: "Théo Senoussaoui",
      title: "Full Stack Developer",
      profilePicture: "https://avatars.githubusercontent.com/u/14891070?v=4",
    },
  },
];

export const orgs: IOrg[] = [
  {
    title: "",
    name: "Gabriel Pichot",
    profilePicture:
      "https://avatars.githubusercontent.com/u/1295737?s=400&u=d3bf0222d7fb990f0fe63b8424497fa308ce379f&v=4",
    social: {
      discord: "gabriel.pi",
      linkedin: "gabrielpichot",
    },
  },
  {
    title: "",
    name: "Sylvain Pontoreau",
    profilePicture:
      "https://cdn.discordapp.com/avatars/639093623555620864/077f2f661b3123563026fc605f44323a.webp?size=240",
    social: {
      discord: "spontoreau",
      linkedin: "spontoreau",
    },
  },
  {
    title: "",
    name: "Jérémie Zarca",
    profilePicture:
      "https://avatars.githubusercontent.com/u/9349451??s=400&u=d3bf0222d7fb990f0fe63b8424497fa308ce379f&v=4",
    social: {
      discord: "shouboudou",
      linkedin: "jeremiezarca",
    },
  },
];

export const communityMeetups: IEvent[] = [
  {
    title: "React Paris Conf",
    date: "26-27 Mars 2026",
    location: "Paris, FR",
    groupName: "React Paris",
  },
];

export const eventDetails: IEvent = {
  title: "React Paris Meetup #12",
  date: "21 Janvier 2026 19h",
  host: "Linxea",
  address: "58 Avenue Hoche, 75008 Paris, France",
};

const talkParameters = talks.map((talk, index) => {
  return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
  `URL: https://tally.so/r/wbkWze?MeetupID=3&${talkParameters.join("&")}`
);
