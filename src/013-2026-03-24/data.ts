import { ICommunityEvent, IEvent, IOrg, ITalk } from "../types";
export const talks: ITalk[] = [
	{
		title: "Zustand, simple and performant state management",
		description:
			"Zustand est une librairie de state management pour React qui permet de contourner des limitations et des problèmes de performance que peuvent avoir useState ou les contexts. Je vous en présente l'utilisation que j'en fait depuis plus de 4 ans.",
		speaker: {
			name: "Arnaud Barré",
			title: "Software Engineer",
			profilePicture: "https://avatars.githubusercontent.com/u/14235743?v=4",
		},
	},
	{
		title: "Liqvid: Vidéos intéractives avec React",
		description:
			"Liqvid est un framework pour créer des vidéos intéractives avec React. Il est particulièrement visé aux tutoriels et aux cours. Je présenterai ses fonctionnalités, ses intégrations avec d'autres librairies (e.g. CodeMirror, THREE.js), et quelques-uns des défis particuliers de son développement.",
		speaker: {
			name: "Yuri Sulyma",
			title: "Fondateur de Liqvid",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D5603AQFVj0hU9NHs-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706923800133?e=1775692800&v=beta&t=P42Ku-GK9hAN0PTeK0_L-dmcWRA3nXcgiUBf6aWLuvw",
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

export const communityMeetups: ICommunityEvent[] = [
	{
		title: "React Paris Conf",
		date: "26-27 Mars 2026",
		location: "Paris, FR",
		groupName: "React Paris",
	},
	{
		title: "Vue.js Paris #33",
		date: "1er avril 2026",
		location: "Paris, FR",
		groupName: "Vue.js Paris",
	},
	{
		title: "Node.js Paris #5 S13",
		date: "1er avril 2026",
		location: "Paris, FR",
		groupName: "Node.js Paris",
	},
];

export const eventDetails: IEvent = {
	id: 13,
	title: "React Paris Meetup #13",
	date: "24 Mars 2026 19h",
	host: "Neosoft",
	address: "3 Rue de Tolbiac, 75013 Paris, France",
};

const talkParameters = talks.map((talk, index) => {
	return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
	`URL: https://tally.so/r/wbkWze?MeetupID=3&${talkParameters.join("&")}`,
);
