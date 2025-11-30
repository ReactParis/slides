export interface ISpeaker {
  name: string;
  title: string;
  profilePicture: string;
}

export interface ITalk {
  title: string;
  description: string;
  speaker: ISpeaker;
}

export interface IOrg {
  title: string;
  name: string;
  profilePicture: string;
  social: {
    discord?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface IEvent {
  title: string,
  date: string,
  location?: string,
  groupName?: string,
  host?: string,
  address?: string
}
