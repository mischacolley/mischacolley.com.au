import React from "react"
import tw, { css } from "twin.macro"
import Footer from "../components/footer"

const wrapper = css`
  ${tw`container mx-auto`}
  min-height: calc(100vh - 70px);
`

export default function Layout({ children }) {
  return (
    <main>
      <div css={[wrapper]}>
        {children}
      </div>
      <Footer />
    </main>
  )
}