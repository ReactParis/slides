import styled from "styled-components";
import { Image, Text } from "@gpichot/spectacle-deck";
import { ITalk } from "./types";

const TalkItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const SpeakerImageContainer = styled.div`
  flex-shrink: 0;
  margin-right: 1rem;
`;

const StyledImage = styled(Image)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 3px solid var(--color-secondary);
`;

const TalkDetails = styled.div`
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: left;
  font-size: 1.4rem;
`;

const TalkTitle = styled(Text)`
  font-weight: 500;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
`;

const SpeakerInfo = styled.div`
  color: var(--color-secondary);
  display: flex;
  flex-flow: row nowrap;
`;

const SpeakerName = styled(Text)`
  font-weight: 500;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const ItalicText = styled(Text)`
  font-style: italic;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export function TalkList({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {children}
    </div>
  );
}

export function TalkCard({ talk }: { talk: ITalk }) {
  return (
    <TalkItem key={talk.title}>
      <SpeakerImageContainer>
        <StyledImage
          src={talk.speaker.profilePicture}
          alt={talk.speaker.name}
        />
      </SpeakerImageContainer>
      <TalkDetails>
        <TalkTitle>{talk.title}</TalkTitle>
        <SpeakerInfo>
          <ItalicText>by</ItalicText>&nbsp;
          <SpeakerName>{talk.speaker.name}</SpeakerName>
        </SpeakerInfo>
      </TalkDetails>
    </TalkItem>
  );
}
