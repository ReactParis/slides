
import { Side, Text } from "@gpichot/spectacle-deck";
import { talks } from "./data";


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
  return <MDXLayout {...props}>   <_components.h1>{"React Paris Meetup #1"}</_components.h1></MDXLayout>;
}

 
export function Slide1(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"side"} };
  const _components = {
    div: "div",
    h2: "h2",
    strong: "strong",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}> <_components.h2><_components.strong>{"Talks"}</_components.strong></_components.h2>{"\n"}<Side>{talks.map(({title, speaker}) => <_components.div key={title}>

<Text>{title}</Text>
<Text>by {speaker.name}</Text>

</_components.div>)}</Side> </MDXLayout>;
}

 
export function Slide2(baseProps) {
  const props = {...baseProps, frontmatter: {"layout":"centered"} };
  const _components = {
    a: "a",
    directive: "directive",
    p: "p",
    ..._provideComponents(),
    ...props.components
  };
  const {wrapper: MDXLayout} = _components;
  return <MDXLayout {...props}>   <_components.p><_components.directive _name="qrcode" _kind="textDirective"><_components.a href="https://tally.co/">{"https://tally.co/"}</_components.a></_components.directive></_components.p></MDXLayout>;
}

  
export default function Deck() {
  };
Deck.metadata = {"title":"React Paris Meetup"};
Deck.slides = [
  {
      metadata: {"layout":"mainSection"},
      slideComponent: Slide0
    },{
      metadata: {"layout":"side"},
      slideComponent: Slide1
    },{
      metadata: {"layout":"centered"},
      slideComponent: Slide2
    }
]
  
  