import { ITalk } from "../common/types";

const communityMeetups = [
  {
    groupName: "React Native Paris",
    title: "React Native Paris #6",
    date: "Jeudi 28 Novembre 2024",
    location: "chez PMU",
  },
  {
    groupName: "Vue.js Paris",
    title: "Vue.js Paris #28",
    date: "Mercredi 4 Décembre 2024",
    location: "TBD",
  },
  {
    groupName: "Node.js Paris",
    title: "Node.js Paris #3, Chapitre 12",
    date: "Mercredi 11 Décembre 2024",
    location: "chez Takima",
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
      twitter: "Jeremie__",
    },
  },
];

const talks: ITalk[] = [
  {
    title: "Débugger un composant React legacy : cas pratique",
    description: `Dans une codebase partagée, il est inévitable qu'un·e développeur·se se retrouve face à un bug sur un composant qu'il·elle n'a jamais touché, et dont les créateurs ont quitté l'entreprise depuis longtemps. 

Alors, comment s'y prendre pour résoudre le problème sans tout casser ? Cette présentation revient sur un exemple concret : le débugging d'un autocomplete capricieux. Du diagnostic initial à la résolution, les différentes étapes seront illustrées avec des astuces pratiques pour aborder le code legacy sereinement, éviter les pièges et avancer efficacement sans repartir de zéro.`,
    speaker: {
      name: "Alphonse Bouy",
      title: "Software Engineer",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D4E03AQFcow71RcaZtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668933416216?e=1737590400&v=beta&t=tfHmp-JACnDvH0Mh45gzm0ZMekKvl44fhv9uexZAA8s",
    },
  },
  {
    title: "Adopter pas-à-pas React 19 (via Next.js 15)",
    description: `Ce talk présente Next.js 15, le premier framework stable permettant d’utiliser React 19 en production, avec un focus sur l’adoption des React Server Components.

Il est structuré en deux phases : d'abord la séparation d'une page web en fichiers serveur et client, puis l’optimisation de cette séparation pour le rendu des composants.`,
    speaker: {
      name: "Luther Tchofo Safo",
      title: "Tech Lead @Freelance",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D5603AQFwVYbvRvET1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664731733133?e=1737590400&v=beta&t=ISWTBi2EmPrShC20OjXWOO7418m1YsfBFuiAETBOV-I",
    },
  },
  {
    title: "Réactivité granulaire en React mais sans React Compiler",
    description: `Atteindre une réactivité fine dans une application React sans en compromettre l'expérience développeur a toujours été un défi majeur.

Lors de la conception d'applications temps réel conçues pour afficher des centaines de millions de lignes sans latence perceptible, une réactivité fine est clé. Explorons ensemble comment nous avons réussi à ingérer, afficher et mettre à jour d'immenses ensembles de données de manière fluide, sans sacrifier l'expérience développeur ni l'expérience utilisateur.`,
    speaker: {
      name: "Nicolas Dubien",
      title: "Senior Engineer @Pigment",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/C4D03AQFcyRSWhwgcLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566851192829?e=1737590400&v=beta&t=LS5Sb6cKvxpi7Dvf5RnTm-2pjdX-2J1yZdiHatFOZL4",
    },
  },
];

export { communityMeetups, talks };

const talkParameters = talks.map((talk, index) => {
  return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
  `URL: https://tally.so/r/wbkWze?MeetupID=2&${talkParameters.join("&")}`,
);
