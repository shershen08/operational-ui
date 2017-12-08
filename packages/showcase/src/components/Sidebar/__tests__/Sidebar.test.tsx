import * as React from "react"
import { shallow } from "enzyme"
import { wrapTheme } from "@operational/utils"
import { contiamoTheme } from "@operational/theme"

import ThemelessSidebar from "../Sidebar"

const Sidebar = wrapTheme(contiamoTheme)(ThemelessSidebar)

describe("App Showcase: Sidebar", () => {
  it("Should render correctly", () => {
    expect(shallow(<Sidebar />)).toMatchSnapshot()
  })
})
