import * as React from "react"
import { render } from "enzyme"
import { wrapTheme } from "@operational/utils"
import { contiamoTheme } from "@operational/theme"

import ThemelessPlayground from "../Playground"

const Playground = wrapTheme(contiamoTheme)(ThemelessPlayground)

describe("Playground Component", () => {
  it("Should initialize properly", () => {
    expect(render(<Playground snippet="">hi</Playground>)).toMatchSnapshot()
  })
})
