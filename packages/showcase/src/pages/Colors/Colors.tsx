import * as React from "react"
import glamorous from "glamorous"

import Playground from "../../components/Playground/Playground"
import Table from "../../components/PropsTable/PropsTable"
import { contiamoTheme, CardHeader } from "contiamo-ui-components"

import * as snippet from "./snippets/Colors.snippet"

const ColorBox = glamorous.div(
  {
    display: "inline-block",
    "& > div": {
      width: 40,
      height: 40
    }
  },
  ({ theme }: { theme: Theme }) => ({
    margin: `0 ${theme.spacing}px ${theme.spacing}px 0`,
    "& > p": {
      ...theme.typography.small,
      margin: 0
    }
  })
)

export default () => (
  <div>
    <CardHeader>Colors</CardHeader>

    <p>The library provides a set of basic colors, as well as a range of grays.</p>

    {Object.keys(contiamoTheme.colors).map((color, index) => (
      <ColorBox key={index}>
        <div style={{ backgroundColor: contiamoTheme.colors[color] }} />
        <p>{color}</p>
      </ColorBox>
    ))}

    <Playground snippet={String(snippet)} components={{}} scope={{ theme: contiamoTheme }} />
  </div>
)