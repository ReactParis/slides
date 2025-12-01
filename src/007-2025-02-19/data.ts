import { ITalk } from "../common/types";

export const talks: ITalk[] = [
	{
		title:
			"Tester mon application React, pourquoi les mocks et spys ne sont pas vos amis",
		description:
			"Explorez pourquoi les mocks et spys peuvent compliquer les tests de votre application React. Découvrez quand ces pratiques peuvent réellement être utiles.",
		speaker: {
			name: "Mathieu Kahlaoui",
			title: "Tech Lead | Node | React | TypeScript",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQHKHF_Lr4_lIg/profile-displayphoto-shrink_400_400/B4EZTX7OqoGwAk-/0/1738789416019?e=1745452800&v=beta&t=WsDpM-J1Cb1opmFjCvsaNXWNpNmjiWQtaaMxjhr0agE",
		},
	},
	{
		title: "De Redux à Valtio : une gestion de state par logique métier",
		description:
			"Retour d'expérience sur la migration de Redux à Valtio dans une application React. Quels sont les avantages d'un gestionnaire de state plus proche des user stories ?",
		speaker: {
			name: "Thomas Dupont",
			title:
				"Développeur Node.js / React freelance (anciennement Albin Michel)",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQHlXVnfNwP2lw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708025585814?e=1745452800&v=beta&t=8osfjMvVjFNTQqKI-Obl_OTMmUG0Fv-RaIUK1KnYEHI",
		},
	},
	{
		title: "Astro pour les devs React",
		description:
			"Découvrez Astro, un framework conçu pour les sites majoritairement statiques. Une alternative intéressante à Next.js ou Gatsby pour concevoir des blogs ou des sites vitrines.",
		speaker: {
			name: "Arnaud Barré",
			title: "Software Engineer @ Carbometrix",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQGQrMQ0GHGcPA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709285091202?e=1745452800&v=beta&t=oSyDyMjTL0Dsl5nO13WNnzXsU209Zq0TGpTqZVjZuyI",
		},
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
		title: "Paris.JS #118",
		date: "26 Feb 2025",
		location: "Swan",
		groupName: "Paris.JS • Paris, FR",
	},
	{
		title: "Paris TypeScript la Conf'",
		date: "28 Feb 2025",
		location: "Paris",
		groupName: "Paris TypeScript • Paris, FR",
	},
	{
		title: "Node.js Paris #5, Chapitre 12 - UpFast",
		date: "5 Mar 2025",
		location: "Paris",
		groupName: "Node.js Paris • Paris, FR",
	},
	{
		title: "Remix Épique - Kent C. Dodds",
		date: "18 Mar 2025",
		location: "Paris",
		groupName: "Remix Paris • Paris, FR",
	},
	{
		title: "React Paris Conf",
		date: "20-21 Mar 2025",
		location: "Paris",
		groupName: "React Paris",
	},
];
const talkParameters = talks.map((talk, index) => {
	return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
	`URL: https://tally.so/r/wbkWze?MeetupID=2&${talkParameters.join("&")}`,
);
