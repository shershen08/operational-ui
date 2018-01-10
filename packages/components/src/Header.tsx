import * as React from "react"
import glamorous, { GlamorousComponent } from "glamorous"
import { Theme } from "@operational/theme"
import { hexOrColor, readableTextColor } from "@operational/utils"

export interface IProps {
  id?: string | number
  className?: string
  css?: any
  children: React.ReactNode
  color?: string
}

const Container = glamorous.header(({ theme, color }: { theme: Theme; color?: string }): {} => {
  const { white } = theme.colors
  const backgroundColor = color ? hexOrColor(color)(theme.colors[color] || white) : white

  return {
    backgroundColor,
    label: "header",
    display: "flex",
    flex: "0 0 60px",
    height: 60,
    alignItems: "center",
    padding: `${theme.spacing / 2}px ${theme.spacing}px`,
    boxShadow: theme.shadows.card,
    color: readableTextColor(backgroundColor)(["black", "white"])
  }
})

export default (props: IProps) => (
  <Container key={props.id} css={props.css} className={props.className} color={props.color}>
    {props.children}
  </Container>
)