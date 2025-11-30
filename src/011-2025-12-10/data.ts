import { IEvent, IOrg, ITalk } from "../common/types";

export const talks: ITalk[] = [
	{
		title: "Évolution des librairies UI et futures problématiques",
		description:
			"Ce talk propose de faire un historique des évolutions techniques des librairies UI, comment choisir ce qu'il nous convient le plus pour implémenter certaines fonctionnalités et les futures problématiques de ces librairies.",
		speaker: {
			name: "Théo Senoussaoui",
			title: "Full Stack Developer",
			profilePicture:
				"https://avatars.githubusercontent.com/u/14891070?v=4",
		},
	},
	{
		title: "Conquering React Concurrency",
		description:
			'Ce talk a pour but de décortiquer la "concurrency", la nouveauté la plus importante de React 18, à quoi ca sert et comment ça fonctionne.',
		speaker: {
			name: "Ariel Shulman",
			title: "Full Stack Developer",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D5603AQH9L-5TdwLqEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689607059781?e=1766016000&v=beta&t=03XdusLfkOO-TABXrc3G9LyPDDJ1_xlXg75-keZQp0Q",
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
			linkedin: "spontoreau"
		},
	},
	{
		title: "",
		name: "Jérémie Zarca",
		profilePicture: "https://avatars.githubusercontent.com/u/9349451??s=400&u=d3bf0222d7fb990f0fe63b8424497fa308ce379f&v=4",
		social: {
			discord: "shouboudou",
			linkedin: "jeremiezarca"
		},
	},
];

export const communityMeetups: IEvent[] = [
	{
		title: "Paris Angular #5",
		date: "11 Décembre 2025",
		location: "Algolia",
		groupName: "Paris Angular",
	},
	{
		title: "React Paris Conf",
		date: "26-27 Mars 2026",
		location: "Paris, FR",
		groupName: "React Paris"
	},
];

export const eventDetails: IEvent = {
	title: "React Paris Meetup #11",
	date: "10 Décembre 2025 19h",
	host: "L'Atelier",
	address: "46 Rue de l'Arbre Sec, 75001 Paris",
};

const talkParameters = talks.map((talk, index) => {
	return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
	`URL: https://tally.so/r/wbkWze?MeetupID=3&${talkParameters.join("&")}`,
);
