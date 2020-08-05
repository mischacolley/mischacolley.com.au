import React from "react"
import logo from '../assets/images/site-icon.png'
import tw, { css, styled  } from "twin.macro"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div className="logo" css={css`${tw`p-10`}`}>
      <Link to="/">
        <img
          src={logo}
          alt={`Mischa Colley`}
          css={css`${tw`w-16 mx-auto`}`}
        />
      </Link>
    </div>
  )
}