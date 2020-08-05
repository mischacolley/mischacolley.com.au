import React from "react"
import tw, { css } from "twin.macro"

const wrapper = css`
  ${tw`container mx-auto`}
`

export default function Layout({ children }) {
  return (
    <main>
      <div css={[wrapper]}>
        {children}
      </div>
    </main>
  )
}