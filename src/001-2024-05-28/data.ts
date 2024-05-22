const communityMeetups = [
  {
    groupName: "Remix Paris",
    title: "Bonjour Remix!",
    date: "Jeudi 30 Mai 2024",
  },
  {
    groupName: "ParisJS",
    title: "Hors Série: dotJS ⨉ Paris.JS",
    date: "Mercredi 5 Juin 2024",
  },
  {
    groupName: "Paris TypeScript",
    title: "Paris TypeScript #38",
    date: "Mardi 11  Juin 2024",
  },
];

const talks = [
  {
    title:
      "How we render big graphs of execution at Yandex using canvas and preact signals",
    description: `The presentation will delve into using React and Canvas for graph rendering in the context of visualizing lengthy processes, like machine learning pipelines. The platform's frontend relies on a graph of execution, utilizing Canvas, React, Signals, and optimizations to render these visuals effectively.`,
    speaker: {
      name: "Eugène Sudakov",
      title: "Frontend Engineer at Yandex Cloud",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQGAOU_M2w8plQ/profile-displayphoto-shrink_800_800/0/1712038528382?e=1721260800&v=beta&t=o7M04Vua4-Z8S-hrfh9Ai0FvMtVtbOZSHOgS6wNW6x0",
    },
  },
  {
    title: "React Server Components 101",
    description: `Dans cette session, nous découvrirons les React Server Components (RSC), une nouvelle fonctionnalité passionnante qui aura d'énormes implications sur les performances de chargement des pages, la taille des bundles et la façon dont nous écrirons les applications React dans un avenir proche.

Nous explorerons l'architecture de RSC et ses concepts de base, ainsi que des cas d'utilisation pratiques illustrant la mise en œuvre et les avantages de RSC.

Vous apprendrez comment écrire les applications React de demain avec les composants serveur et comprendrez en profondeur ce sur quoi l'équipe React a travaillé.`,
    speaker: {
      name: "Kawtar Choubari",
      title: "Software Engineer @Alobees, Part-time content creator",
      profilePicture:
        "https://media.licdn.com/dms/image/D4E03AQFJYDjBZtHBcw/profile-displayphoto-shrink_800_800/0/1697743890930?e=1721260800&v=beta&t=9Qi144XGAAfWNCKZ34GxSOTgtBHwpQdZwjPKw-EIvq8",
    },
  },
  {
    title: "How fast refresh works in React ",
    description: `
Le Hot Module Replacement (HMR) facilite le développement en permettant des mises à jour dynamiques des modules sans perdre l'état de l'application. Fast Refresh améliore cette technologie pour React, garantissant une mise à jour fluide des composants. Vite, avec son système de plugins, tire pleinement parti de cette fonctionnalité avancée.

Ce talk présente Fast Refresh, ses limitations et son intégration au sein de Vite via le système de plugins.`,
    speaker: {
      name: "Arnaud Barré",
      title: "Software engineer @ Carbometrix (& Vite team member)",
      profilePicture: "https://avatars.githubusercontent.com/u/14235743?v=4",
    },
  },
];

export { communityMeetups, talks };
