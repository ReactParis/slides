const communityMeetups = [
  {
    groupName: "Paris.JS",
    title: "Paris.JS #117 chez Nexton",
    date: "Mercredi 30 Octobre 2024",
    location: "Paris, FR",
  },
  {
    groupName: "Accelerator Engineering",
    title: "Accelerator #8",
    date: "Mercredi 30 Octobre 2024",
    location: "Paris, FR",
  },
  {
    groupName: "Effect Paris",
    title: "Effect Paris #3",
    date: "Mardi 5 Novembre 2024",
    location: "Paris, FR",
  },
  {
    groupName: "Paris TypeScript",
    title: "Paris TypeScript #40",
    date: "Mardi 12 Novembre 2024",
    location: "Paris, FR",
  },
  {
    groupName: "Xperhub",
    title: "GenUI As A Complement To GenAI",
    date: "Mardi 26 Novembre 2024",
    location: "Paris, FR",
  },
];
export const orgs = [];

const talks = [
  {
    title: "Wecasa’s journey to E2E testing",
    description: `At Wecasa we decided to improve our end-to-end testing strategy.
In this talk we will present the challenges and successes that we encountered during the dockerization of multiple React SPAs embedded in a Rails environment.`,
    speaker: {
      name: "Amadeus Schell",
      title: "Senior Frontend Developer @Wecasa",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D4E03AQG2eMPa-CWrnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685394432776?e=1735171200&v=beta&t=48PfF12g7Qr_Kj5QqbG00M8gBqvuvzSUNXLqS-11hBc",
    },
    duration: "20min",
  },
  {
    title: "3 scénarios Gatling pour load tester votre app React",
    description: `Découvrez comment utiliser Gatling pour tester les performances de vos applications React via trois scénarios spécifiques.`,
    speaker: {
      name: "Samir Akarioh",
      title: "Developer Advocate @Gatling",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D4D03AQEhrUtMdAQ6Yg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720693111673?e=1735171200&v=beta&t=PaDtKbmE0uadvi5T0qJqt-4L8DO1FvHTzE6SDdBiUXM",
    },
    duration: "15-20min",
  },
];

export { communityMeetups, talks };

const talkParameters = talks.map((talk, index) => {
  return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
  `URL: https://tally.so/r/wbkWze?MeetupID=2&${talkParameters.join("&")}`,
);
