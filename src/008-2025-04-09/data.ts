import { ISpeaker, ITalk } from "../common/types";

export const talks: ITalk[] = [
	{
		title: "CI/CD NPM avec Vite – Gérer une librairie moderne et facilement",
		description:
			"Découvrez comment simplifier le déploiement et la gestion des librairies modernes avec Vite. Cette présentation se concentrera sur la configuration et l'intégration des workflows CI/CD dans un environnement NPM.",
		speaker: {
			name: "Néphélim Cohen",
			title: "Web3 Advisor & Builder",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQGfsZumlHzY4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709712086364?e=1749686400&v=beta&t=VczBd8_UbyU2ruOSUNRbtBSVVGVzpmySU6dObm8Lywk",
		},
	},
	{
		title: "Et si on tokenisait vos factures ?",
		description:
			"Venez découvrir les dessous d'une DApp avec React. Pourquoi utiliser la blockchain ? Comment communiquer avec elle ? Enfin, un serverless sans serveur, tout ça avec React.",
		speaker: {
			name: "Aurélien Audelin",
			title: "Freelance - Fullstack CTO | SaaS & Blockchain",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D4E03AQE7ZkSFwEFzxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729939134319?e=1749686400&v=beta&t=xLDDcHErvAovV5g2TYbqkbr6bNlZ2ZmSXP1UH59jQpE",
		},
	},
	{
		title: "Comment j'ai fait twerker mes collègues sur un dancefloor avec React",
		description:
			"Pour l'occasion des 5 ans de Premier Octet, agence experte dans le développement d'application React et React Native, j'ai voulu créer une scène virtuelle 3D de notre équipe. L'occasion d'apprendre quelques bases de 3D, d'animations, de temps réel, le tout avec React bien entendu.",
		speaker: {
			name: "Thibault Lenclos",
			title: "Co-founder @ Premier Octet",
			profilePicture:
				"https://media.licdn.com/dms/image/v2/D5603AQHhiN7gUNM6Ww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729260627752?e=1749686400&v=beta&t=4QURNILN2EaArLF1TLmbcIHN-8KxGD1sDw28fZ6uKro",
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
		title: "Paris Angular #2",
		date: "10 Avril 2025",
		location: "Paris, FR",
		groupName: "Paris Angular",
	},
	{
		title: "Node.js Paris #6, Chapitre 12 - l'Atelier",
		date: "16 Avril 2025",
		location: "Paris, FR",
		groupName: "Node.js Paris",
	},
];

export const eventDetails = {
	title: "React Paris Meetup #8",
	date: "09 Avril 2025 19h",
	host: "Eleven Labs",
	address: "102 Rue du Faubourg Saint-Honoré 5ème étage, 75008 Paris",
};

const talkParameters = talks.map((talk, index) => {
	return `Talk${index + 1}=${talk.title} by ${talk.speaker.name}`;
});
console.log(
	`URL: https://tally.so/r/wbkWze?MeetupID=3&${talkParameters.join("&")}`,
);
