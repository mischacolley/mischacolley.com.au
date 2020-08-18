import React from "react"
import tw, { css } from "twin.macro"
import emailIcon from '../assets/svg/email.svg'
import twitterIcon from '../assets/svg/twitter.svg'
import linkedinIcon from '../assets/svg/linkedin.svg'
import githubIcon from '../assets/svg/github.svg'

const Email = () => (
  <svg css={[icon]}>
    <use css={[use]} xlinkHref={`#${emailIcon.id}`} />
  </svg>
);

const Twitter = () => (
  <svg css={[icon]}>
    <use css={[use]} xlinkHref={`#${twitterIcon.id}`} />
  </svg>
);

const Linkedin = () => (
  <svg css={[icon]}>
    <use css={[use]} xlinkHref={`#${linkedinIcon.id}`} />
  </svg>
);

const Github = () => (
  <svg css={[icon]}>
    <use css={[use]} xlinkHref={`#${githubIcon.id}`} />
  </svg>
);

const footer = css`
  ${tw`text-xl mb-5 text-center`}
  height: 50px;
`
const button = css`
  ${tw`text-gray-500 hover:text-brand py-2 px-4 mx-2`}
`
const icon = css`
  height: 25px;
  width: 25px;
  display: inline-block;
`
const use = css`
  ${tw`fill-current`}
`

export default function Footer() {
  return (
    <nav css={[footer]}>
      <a css={[button]} href="mailto:me@mischacolley.com.au">
        <Email />
      </a>
      <a css={[button]} href="https://www.linkedin.com/in/mischacolley/" target="_blank">
        <Linkedin />
      </a>
      <a css={[button]} href="https://twitter.com/mischacolley" target="_blank">
        <Twitter />
      </a>
      <a css={[button]} href="https://github.com/mischacolley" target="_blank">
        <Github />
      </a>
      
    </nav>
  )
}