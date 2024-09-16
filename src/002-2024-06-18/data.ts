const communityMeetups = [
  {
    groupName: "Vue.js Paris",
    title: "Vue.js Paris #26",
    date: "Mardi 25 Juin",
    location: "Valtech",
  },
  {
    groupName: "Effect Paris",
    title: "Effect Paris #2",
    date: "Mardi 25 Juin",
    location: "",
  },
  {
    groupName: "Accelerator Engineering",
    title: "Accelerator #6",
    date: "Mardi 25 Juin",
    location: "Sanofi",
  },
  {
    groupName: "DotJS",
    title: "DotJS Paris 2024",
    date: "Jeudi 27 Juin",
    location: "",
  },
];

const talks = [
  {
    title: "Let's re-implement useState in VanillaJS !",
    description: `Wanna know how hooks work under the hood?

Wanna know why the Rules of Hooks bother you?

This talk is for you!

We will re-implement useState hook in vanilla JavaScript`,
    speaker: {
      name: "Pierre Nicoletti",
      title: "Full Stack Engineer & Team Leader @In The Memory",
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQHKDwqyW_HI-w/profile-displayphoto-shrink_800_800/0/1574187753331?e=1722470400&v=beta&t=MupxR50xq_PjCM3uYk8z9HNq25OqTYLX3vBloYDFPW0",
    },
  },
  {
    title: "Les nouveautés de React 19 et comment les utiliser ?",
    description: `React est sur le point de ça version 19 en version officielle.

Ce talk présente les nouvelles fonctionnalités de la toute dernière version de React, comment les utiliser et les intégrer dans une code base.

Avec entre autre les nouveautés compilateur React pour essayer de comprendre où va React avec ces nouveautés. 
`,
    speaker: {
      name: "Clément Chalopin",
      title: "Développeur Full Stack @3DS OUTSCALE",
      profilePicture:
        "https://media.licdn.com/dms/image/D5603AQE9aaYsck4Cbw/profile-displayphoto-shrink_800_800/0/1701955831644?e=1722470400&v=beta&t=nDmE-TT09LDxkJP1dkVEtFfoXpC78AECtRXMeK65tYc",
    },
  },
  {
    title: "React + ThreeJS = React Three Fiber",
    description: `Le but de ce talk serait de présenter rapidement à travers une petite démo comment utiliser ThreeJS (pour faire de la 3d) en React avec la lib react-three-fiber.
`,

    speaker: {
      name: "Jeremie Taboada",
      title: "Développeur Freelance & Co-fondateur Code Passport",
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQHU1vdjlAR7ig/profile-displayphoto-shrink_800_800/0/1545126965804?e=1724284800&v=beta&t=t_XRygz8hOkhFo5UOUkYfbaujOQMBY75Ma8ZWlzFE7s",
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
