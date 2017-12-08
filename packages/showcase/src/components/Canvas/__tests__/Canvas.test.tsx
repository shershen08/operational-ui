import * as React from "react"
import { render } from "enzyme"
import { wrapTheme } from "@operational/utils"
import { contiamoTheme } from "@operational/theme"

import ThemelessCanvas from "../Canvas"

const Canvas = wrapTheme(contiamoTheme)(ThemelessCanvas)

describe("App Showcase: Canvas", () => {
  it("Should render correctly", () => {
    expect(render(<Canvas>hi</Canvas>)).toMatchSnapshot()
  })
})
