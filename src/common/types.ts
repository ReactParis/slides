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
