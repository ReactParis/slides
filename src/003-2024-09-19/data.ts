const communityMeetups = [
  {
    groupName: "Vue.js Paris",
    title: "Vue.js #27",
    date: "Mercredi 2 Octobre 2024",
    location: "",
  },
  {
    groupName: "Remix Paris",
    title: "Toujours Remix",
    date: "Jeudi 10 Octobre 2024",
    location: "",
  },
];

const talks = [
  {
    title: "Hugging Face, le github de l'IA",
    description: `Apprenez comment évaluer les modèles disponibles et intégrer des IA dans vos applications frontend.

Découvrez les possibilités d'intégrer des modèles dans vos applications frontend avec des astuces simples et pragmatiques. Démo de Transformer.js avec une application frontend.`,
    speaker: {
      name: "Adrien Gibrat",
      title: "Lead Dev Frontend @FrontGuys",
      profilePicture:
        "data:image/jpeg;base64,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",
    },
  },
  {
    title:
      "Transformation d’un Monolithe Legacy en Monorepo Nx avec Module Federation",
    description: `Découvrez le parcours de plus de deux ans pour migrer une application Front en Perl/Mustache vers un projet entièrement nouveau en React Typescript modulaire avec Nx et Module Federation.

Nous aborderons les défis et obstacles rencontrés et comment ces outils ont simplifié la migration.`,
    speaker: {
      name: "Nicolas Belliard",
      title: "Full Stack Developer @Splio",
      profilePicture: "https://avatars.githubusercontent.com/u/22777121?v=4",
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
