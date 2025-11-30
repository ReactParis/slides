
import { Side, Text, Image } from "@gpichot/spectacle-deck";
import { ItemsColumn } from "@gpichot/spectacle-deck";
import { talks, communityMeetups, orgs, eventDetails } from "./data";
import { TalkCard, TalkList } from "../common/TalkCard";
import { OrgCard, OrgList } from "../common/OrgCard";
import weNeedYou from "../common/minion-we-need-you.jpeg";
import latelier from "./latelier.png";


import React from 'react';
import {useMDXComponents as _provideComponents} from '@mdx-js/react';

 
export function Slide0(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"mainSection"} };
  const _components = {
    h1: "h1",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}>   <_components.h1>{"React Paris Meetup #11"}</_components.h1></MDXLayout>;
}

 
export function Slide1(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    a: "a",
    directive: "directive",
    h2: "h2",
    p: "p",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong><_components.a href="https://github.com/ReactParis/.github/blob/main/CODE_OF_CONDUCT.markdown">{"Code of Conduct"}</_components.a></_components.strong></_components.h2>{"\n"}<_components.p><_components.a href="https://link.infini.fr/code-of-conduct">{"https://link.infini.fr/code-of-conduct"}</_components.a></_components.p>{"\n"}<_components.p><_components.directive _name="qrcode" _kind="textDirective"><_components.a href="https://github.com/ReactParis">{"https://github.com/ReactParis"}</_components.a></_components.directive></_components.p>{"\n"}<_components.p>{"Be respectful"}</_components.p> </MDXLayout>;
}

 
export function Slide2(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h2: "h2",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2>{"Team"}</_components.h2>{"\n"}<OrgList orgs={orgs} /> </MDXLayout>;
}

 
export function Slide3(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"sidedImage"} };
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong>{"Talks"}</_components.strong></_components.h2>{"\n"}<Image src={weNeedYou} alt="We need you" style={{
    maxHeight: "50vh",
    objectFit: "contain"
  }} />{"\n"}<_components.p>{"Want to speak at our next meetup?"}</_components.p>{"\n"}<_components.ul>{"\n"}<_components.li>{"React 19 & React Compiler (new features, deep dive)"}</_components.li>{"\n"}<_components.li>{"AI integration (best practices, ROI, future of React + AI)"}</_components.li>{"\n"}<_components.li>{"Performance (build optimization, data loading, frontend perf)"}</_components.li>{"\n"}<_components.li>{"Modern tooling (Next.js, Turborepo, Tanstack Start, CSS management)"}</_components.li>{"\n"}<_components.li>{"Architecture & patterns (scalable code, senior-level development)"}</_components.li>{"\n"}</_components.ul> </MDXLayout>;
}

 
export function Slide4(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    a: "a",
    directive: "directive",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong>{"Where to contact us"}</_components.strong></_components.h2>{"\n"}<Side><_components.ul>{"\n"}<_components.li>{"\n"}<_components.p><_components.a href="https://github.com/ReactParis">{"GitHub"}</_components.a></_components.p>{"\n"}</_components.li>{"\n"}<_components.li>{"\n"}<_components.p><_components.a href="https://discord.gg/EGeZmfJbKB">{"Discord"}</_components.a></_components.p>{"\n"}</_components.li>{"\n"}</_components.ul><div style={{
    alignSelf: 'center'
  }}><_components.p><_components.directive _name="qrcode" _kind="textDirective"><_components.a href="https://discord.gg/EGeZmfJbKB">{"https://discord.gg/EGeZmfJbKB"}</_components.a></_components.directive></_components.p></div><_components.ul>{"\n"}<_components.li>{"LinkedIn, Twitter, Meetup, etc."}</_components.li>{"\n"}</_components.ul></Side> </MDXLayout>;
}

 
export function Slide5(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong>{"Community Events"}</_components.strong></_components.h2>{"\n"}<Side><ItemsColumn>{communityMeetups.map(meetup => <p>
{meetup.date}, {meetup.title}
<br /> {meetup.location} ({meetup.groupName})
</p>)}</ItemsColumn></Side> </MDXLayout>;
}

 
export function Slide6(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    h2: "h2",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong>{"Tonight's Talks"}</_components.strong></_components.h2>{"\n"}<Side><TalkList>{talks.map(talk => <TalkCard key={talk.title} talk={talk} />)}</TalkList></Side> </MDXLayout>;
}

 
export function Slide7(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    h3: "h3",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <Image src={latelier} width="30vw" height="30vh" style={{
    objectFit: "contain",
    backgroundColor: "transparent"
  }} />{"\n"}<br />{"\n"}<br />{"\n"}<_components.h3><_components.strong>{"Tonight's host: "}{eventDetails.host}</_components.strong></_components.h3> </MDXLayout>;
}

  
export default function Deck() {
  };
Deck.metadata = {"title":"React Paris Meetup"};
Deck.slides = [
  {
      metadata: {"layout":"mainSection"},
      slideComponent: Slide0
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide1
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide2
    },{
      metadata: {"layout":"sidedImage"},
      slideComponent: Slide3
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide4
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide5
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide6
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide7
    }
]
  
  