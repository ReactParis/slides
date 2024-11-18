import styled from "styled-components";
import { Image, Text } from "@gpichot/spectacle-deck";
import { IOrg } from "./types";

const OrgItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const SpeakerImageContainer = styled.div`
  flex-shrink: 0;
`;

const StyledImage = styled(Image)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 3px solid var(--color-secondary);
`;

const OrgDetails = styled.div`
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.4rem;
`;

const OrgTitle = styled(Text)`
  font-weight: bold;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const SpeakerInfo = styled.div`
  color: var(--color-secondary);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SpeakerName = styled(Text)`
  font-weight: bold;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export function OrgList({ orgs }: { orgs: IOrg[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
      {orgs.map((org) => (
        <OrgCard org={org} />
      ))}
    </div>
  );
}

const SocialLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

export function OrgCard({ org }: { org: IOrg }) {
  return (
    <OrgItem key={org.title}>
      <SpeakerImageContainer>
        <StyledImage src={org.profilePicture} alt={org.name} />
      </SpeakerImageContainer>
      <OrgDetails>
        <OrgTitle>{org.title}</OrgTitle>
        <SpeakerInfo>
          <SpeakerName>{org.name}</SpeakerName>
          <div>
            <SocialLine>
              {DiscordSvg}
              <Text>{org.social.discord}</Text>
            </SocialLine>
            {org.social.twitter && (
              <SocialLine>
                {TwitterSvg}
                <Text>{org.social.twitter}</Text>
              </SocialLine>
            )}
          </div>
        </SpeakerInfo>
      </OrgDetails>
    </OrgItem>
  );
}

function getSocialIcon(social: string) {
  if (social === "discord") {
    return DiscordSvg;
  } else if (social === "twitter") {
    return TwitterSvg;
  } else {
    return null;
  }
}

const IconBox = styled.div`
  display: flex;
  flew-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export function SocialIcon({ social }: { social: string }) {
  return <IconBox>{getSocialIcon(social)}</IconBox>;
}

const TwitterSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 271"
    height="32"
    width="32"
  >
    <path
      d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
      fill="white"
    />
  </svg>
);
const DiscordSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    height="32"
    width="32"
  >
    <path
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
      fill="white"
    />
  </svg>
);
