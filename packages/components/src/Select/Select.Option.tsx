import * as React from "react"
import styled from "react-emotion"
import { OperationalStyleConstants } from "@operational/theme"
import { darken } from "@operational/utils"
import { Icon } from "../"

export interface Props {
  id?: number | string
  className?: string
  selected?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const Container = styled("div")(({ theme, selected }: { theme?: OperationalStyleConstants; selected: boolean }) => {
  const backgroundColor = selected ? theme.color.background.lighter : theme.color.white
  return {
    backgroundColor,
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: `${theme.space.small}px ${theme.space.content}px`,
    wordWrap: "break-word",
    outline: "none",
    borderTop: "1px solid",
    borderColor: darken(backgroundColor, 10),
    color: theme.color.text.default,
    ":hover": {
      backgroundColor: darken(backgroundColor, 5),
    },
  }
})

const IconContainer = styled("div")(({ theme }: { theme?: OperationalStyleConstants }) => {
  const size = 14
  return {
    display: "flex",
    alignItems: "center",
    flex: "1 0",
    flexBasis: size,
    justifyContent: "center",
    maxWidth: size,
    height: size,
    backgroundColor: theme.color.primary,
    borderRadius: "50%",
    marginLeft: "auto",
    "& svg": {
      color: theme.color.white,
      width: 12,
      height: 12,
    },
  }
})

const SelectOption = (props: Props) => (
  <Container
    key={props.id}
    className={props.className}
    selected={Boolean(props.selected)}
    tabIndex={-2}
    role="option"
    aria-selected={props.selected}
    onClick={(ev: React.SyntheticEvent<Node>) => {
      ev.stopPropagation()
      props.onClick && props.onClick()
    }}
  >
    {props.children}
    {props.selected ? (
      <IconContainer>
        <Icon name="Check" size={10} />
      </IconContainer>
    ) : null}
  </Container>
)

export default SelectOption