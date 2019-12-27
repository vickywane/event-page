import React, { useState } from "react"
import media from "styled-media-query"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import Flex from "styled-flex-component"

import Header from "./header"
import Drawing from "../../assets/svg/banner.svg"

const Banner = props => {
  const Contain = styled.div`
    background: #f9db93;
  `

  const Motto = styled.h2`
    ${media.lessThan("medium")`
    font-size: 1.6em
  `};
    font-weight: bold;
  `

  const Body = styled.div`
    height: 30vh;
    padding-top: 7em;
    ${media.lessThan("medium")`
      height: 23vh;
      padding-top: 4em;
  `};
  `

  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const { auth } = props
  return (
    <Contain>
      <Header auth={auth} />

      <Flex>
        <img
          src={Drawing}
          alt="illustration"
          style={{ maxHeight: "70%", maxWidth: "75%", paddingTop: "4%" }}
        />

        <Motto> Organize your conferences </Motto>
      </Flex>
    </Contain>
  )
}

export default Banner
