import styled from "styled-components";
import { Text } from "@gpichot/spectacle-deck";
import { IEvent } from "./types";

const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

const EventTitle = styled(Text)`
  font-weight: bold;
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 0.5rem;
  padding: 0.6rem 1.8rem;
`;

const DateText = styled(Text)`
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
`;

const EventGroup = styled(Text)`
  font-style: italic;
  color: var(--color-secondary);
  font-family: Bitter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.85rem;
`;

export function EventList({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export function EventCard({ event }: { event: IEvent }) {
  return (
    <EventItem>
      <EventTitle>{event.title}</EventTitle>
      <DateText>{event.date}</DateText>
      {event.groupName && <EventGroup>{event.groupName}</EventGroup>}
    </EventItem>
  );
}
