import { ISpeaker, ITalk } from "../common/types";

export const talks: ITalk[] = [
	{
		title: "Réinventer l'entretien technique à l'ère de l'IA",
		description:
			"Ce talk propose de donner notre vision d'un bon entretien technique, comment Alan a construit son exercice Frontend, comment on voit les candidats utiliser des formes d'IA judicieusement (ou non...), et pour finir quelques conseils pour réussir son test technique.",
		speaker: {
			name: "Emma Goldblum",
			title: "Senior Software Engineer",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQGSSnbJTbjhUw/profile-displayphoto-shrink_200_200/B4EZdaURQzHsAc-/0/1749566952947?e=1763596800&v=beta&t=sU1M3FG-snsZVlMsBbWWpUFEzvXjjs7JSlLnZU2vJso",
		},
	},
	{
		title: "Writing better React code with functional programming",
		description:
			"Ce talk a pour but de décortiquer les dilemmes d'implémentation en React en utilisant les principes du langage fonctionnel pur afin de fournir un cadre structurel pour des choix de conception plus rigoureux et performants.",
		speaker: {
			name: "Guillaume Desforges",
			title: "Software Engineer",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQE6V5TH0CocUw/profile-displayphoto-shrink_200_200/B4EZbxLowHHkAY-/0/1747803082842?e=1763596800&v=beta&t=eWJb05tFlDTPWQBthY_7smVXRgPH6NvBBzQGbEThveM",
		},
	}
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
			"https://cdn.discordapp.com/avatars/639093623555620864/077f2f661b3123563026fc605f44323a.webp?size=240",
		social: {
			discord: "spontoreau",
			twitter: "spontoreau",
		},
	},
	{
		title: "",
		name: "Jérémie Zarca",
		profilePicture:
			"https://media.licdn.com/dms/image/v2/D4E03AQG7MuxLmtWyNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675944197511?e=1745452800&v=beta&t=-MdfriEhwMUUrnt876O2-66SAzfk3TDNMTBWcDhnSms",
		social: {
			discord: "shouboudou",
		},
	},
];

export const communityMeetups = [
	{
		title: "Svelte Paris #4",
		date: "19 Novembre 2025",
		location: "Paris, FR",
		groupName: "Svelte Paris",
	},
	{
		title: "Node.js Paris Saison 13, Episode 3",
		date: "27 Novembre 2025",
		location: "Paris, FR",
		groupName: "Node.js Paris",
	},
];

export const eventDetails = {
	title: "React Paris Meetup #10",
	date: "12 Novembre 2025 19h",
	host: "Alan",
	address: "117 Quai de Valmy, 75010 Paris",
};

const talkParameters = talks.map((talk, index) => {
	return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
	`URL: https://tally.so/r/wbkWze?MeetupID=3&${talkParameters.join("&")}`,
);
