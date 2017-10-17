import Events from "./event_catalog"
import { IState, TStateWriter, TEvents } from "./typings"

abstract class AbstractFocus {
  el: any
  focus: any
  state: IState
  stateWriter: TStateWriter
  events: TEvents

  constructor(state: IState, stateWriter: TStateWriter, events: TEvents, el: any) {
    this.state = state
    this.stateWriter = stateWriter
    this.events = events
    this.el = el
  }

  remove(): void {
    this.el.node().innerHTML = ""
    this.el.style("visibility", "hidden")
    this.events.emit(Events.FOCUS.CLEAR)
  }

  // Remove date focus and redraw (necessary when data changed or chart is resized)
  refresh(): void {
    this.remove()
  }
}

export default AbstractFocus
