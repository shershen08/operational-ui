import { ProcessFlow, ProcessFlowLoopHandler } from "@operational/visualizations"
import { uniq, flow, map, flatten } from "lodash/fp"
import { MarathonEnvironment } from "../../components/Marathon"

const journeys = [
  { path: ["135", "22", "186", "20", "1"], size: 42 },
  { path: ["135", "22", "186", "3", "77", "53"], size: 34 },
  { path: ["119", "137", "48", "52", "67", "70", "58", "3"], size: 32 },
  { path: ["135", "22", "109", "4"], size: 18 },
  { path: ["119", "137", "36", "52", "67", "70", "58", "3"], size: 17 },
  { path: ["102", "111", "36", "52", "87", "85", "3"], size: 12 },
  { path: ["135", "22", "109", "2", "77", "53"], size: 10 },
  { path: ["135", "22", "18", "109", "4"], size: 10 },
  { path: ["135", "22", "186", "1"], size: 9 },
  { path: ["135", "22", "186", "77", "53", "181", "20", "1"], size: 9 },
  { path: ["119", "137", "48", "52", "87", "85", "3"], size: 8 },
  { path: ["135", "22", "109", "262", "77", "53", "4"], size: 8 },
  { path: ["135", "22", "186", "4"], size: 7 },
  { path: ["135", "22", "155", "1"], size: 6 },
  { path: ["119", "137", "48", "52", "87", "85", "58", "3"], size: 5 },
  { path: ["135", "22", "186", "77", "53", "1"], size: 5 },
  { path: ["101", "95", "199", "217", "238", "36", "62", "99", "3"], size: 4 },
  { path: ["135", "22", "109", "1"], size: 4 },
  { path: ["135", "22", "109", "2", "77"], size: 4 },
  { path: ["135", "22", "155", "234", "4"], size: 4 },
  { path: ["135", "22", "186", "3", "77", "53", "181"], size: 4 },
  { path: ["135", "22", "18", "109", "192", "4"], size: 4 },
  { path: ["111", "36", "52", "87", "85", "102", "3"], size: 3 },
  { path: ["135", "22", "109", "262", "77", "53", "192", "4"], size: 3 },
  { path: ["135", "22", "109", "3", "77", "53", "181"], size: 3 },
  { path: ["135", "22", "155", "4"], size: 3 },
  { path: ["135", "22", "163", "20", "1"], size: 3 },
  { path: ["101", "95", "199", "36", "62", "99", "2"], size: 2 },
  { path: ["102", "111", "36", "52", "87", "85", "58", "3"], size: 2 },
  { path: ["119", "137", "48", "52", "87", "85", "58", "102", "3"], size: 2 },
  { path: ["135", "22", "109", "192", "4"], size: 2 },
  { path: ["135", "22", "109", "262", "4"], size: 2 },
  { path: ["135", "22", "109", "2"], size: 2 },
  { path: ["135", "22", "109", "2", "77", "53", "192"], size: 2 },
  { path: ["135", "22", "109", "3", "77", "53"], size: 2 },
  { path: ["135", "22", "155", "234", "1"], size: 2 },
  { path: ["135", "22", "163", "77", "53", "315", "20", "1"], size: 2 },
  { path: ["135", "22", "186", "3", "77", "53", "181", "109"], size: 2 },
  { path: ["135", "22", "186", "467", "4"], size: 2 },
  { path: ["135", "22", "186", "77", "53", "4"], size: 2 },
  { path: ["135", "22", "18", "109", "1"], size: 2 },
  { path: ["135", "22", "18", "109", "262", "192", "4"], size: 2 },
  { path: ["101", "95", "250", "211", "174", "352", "239", "48", "62", "99", "3"], size: 1 },
  { path: ["102", "111", "36", "119", "137", "48", "52", "87", "85", "3"], size: 1 },
  { path: ["102", "111", "36", "119", "174", "148", "137", "48", "52", "87", "85", "58", "3"], size: 1 },
  { path: ["102", "111", "36", "52", "87", "85", "119", "137", "48", "62", "67", "70", "3"], size: 1 },
  { path: ["102", "111", "36", "52", "87", "85", "119", "3"], size: 1 },
  { path: ["102", "111", "36", "87", "85", "52", "67", "70", "58", "119", "137", "48", "3"], size: 1 },
  { path: ["109", "3", "77", "53", "181"], size: 1 },
  { path: ["10", "6", "12", "116", "4"], size: 1 },
  { path: ["10", "6", "19", "13", "8", "17", "1"], size: 1 },
  { path: ["10", "71", "4"], size: 1 },
  { path: ["111", "36", "52", "87", "85", "58", "102", "3"], size: 1 },
  { path: ["119", "137", "48", "52", "87", "85", "102", "111", "36", "62", "67", "70", "58", "302", "3"], size: 1 },
  { path: ["119", "137", "48", "52", "87", "85", "58", "102", "111", "3"], size: 1 },
  { path: ["119", "137", "48", "58", "111", "36", "52", "87", "85", "102", "3"], size: 1 },
  { path: ["119", "137", "48", "87", "85", "102", "111", "36", "52", "67", "70", "58", "3"], size: 1 },
  { path: ["119", "137", "48", "87", "85", "111", "36", "52", "67", "70", "58", "102", "3"], size: 1 },
  { path: ["119", "137", "48", "87", "85", "52", "67", "70", "58", "3"], size: 1 },
  { path: ["119", "137", "62", "67", "70", "58", "193", "211", "239", "48", "52", "3"], size: 1 },
  { path: ["119", "137", "62", "70", "58", "193", "211", "239", "48", "52", "67", "3"], size: 1 },
  { path: ["119", "137", "87", "85", "102", "111", "36", "52", "67", "70", "58", "3"], size: 1 },
  { path: ["119", "174", "148", "137", "48", "111", "36", "52", "87", "85", "58", "102", "3", "422"], size: 1 },
  { path: ["119", "174", "148", "137", "48", "52", "67", "70", "58", "3"], size: 1 },
  { path: ["119", "174", "148", "137", "48", "52", "87", "85", "3"], size: 1 },
  { path: ["127", "48", "52", "87", "85", "93", "94", "3"], size: 1 },
  { path: ["127", "48", "62", "99", "101", "93", "94", "3"], size: 1 },
  { path: ["135", "22", "109", "262", "2", "77", "53"], size: 1 },
  { path: ["135", "22", "109", "262", "3", "77", "53", "315", "266"], size: 1 },
  { path: ["135", "22", "109", "262", "77", "192", "3", "315", "53", "266", "308", "2", "379", "2", "388"], size: 1 },
  { path: ["135", "22", "109", "262", "77", "4"], size: 1 },
  { path: ["135", "22", "109", "262", "77", "53", "266", "4"], size: 1 },
  { path: ["135", "22", "109", "262", "77", "53", "308", "266", "4"], size: 1 },
  { path: ["135", "22", "109", "296", "4"], size: 1 },
  { path: ["135", "22", "109", "2", "77", "117", "190"], size: 1 },
  { path: ["135", "22", "109", "77", "53", "1"], size: 1 },
  { path: ["135", "22", "109", "77", "53", "4"], size: 1 },
  { path: ["135", "22", "163", "20", "4"], size: 1 },
  { path: ["135", "22", "163", "20", "77", "53", "1"], size: 1 },
  { path: ["135", "22", "163", "53", "266", "20", "3", "77", "181"], size: 1 },
  { path: ["135", "22", "163", "77", "53", "315", "266", "308", "379", "566", "20", "1"], size: 1 },
  { path: ["135", "22", "186", "20", "163", "77", "117", "190", "53", "266", "1"], size: 1 },
  { path: ["135", "22", "186", "20", "163", "77", "53", "266", "1"], size: 1 },
  { path: ["135", "22", "186", "20", "2", "77", "53"], size: 1 },
  { path: ["135", "22", "186", "20", "4"], size: 1 },
  { path: ["135", "22", "186", "20", "77", "53", "1"], size: 1 },
  { path: ["135", "22", "186", "2"], size: 1 },
  { path: ["135", "22", "186", "3", "53", "181", "20", "3", "77"], size: 1 },
  { path: ["135", "22", "186", "3", "77", "53", "181", "20"], size: 1 },
  { path: ["135", "22", "186", "467", "542", "20", "1"], size: 1 },
  { path: ["135", "22", "186", "467", "610", "4"], size: 1 },
  { path: ["135", "22", "186", "53", "181", "77", "323", "20", "1"], size: 1 },
  { path: ["135", "22", "186", "77", "117", "190", "4"], size: 1 },
  { path: ["135", "22", "186", "77", "1"], size: 1 },
  { path: ["135", "22", "186", "77", "53", "181", "109", "1"], size: 1 },
  { path: ["135", "22", "186", "77", "53", "181", "296", "109", "4"], size: 1 },
  { path: ["135", "22", "18", "109", "262", "117", "4"], size: 1 },
  { path: ["135", "22", "18", "109", "2", "117"], size: 1 },
  { path: ["135", "22", "18", "109", "2", "117", "190"], size: 1 },
  { path: ["135", "22", "18", "109", "2", "77", "53", "192"], size: 1 }
]

const unloopedJourneys = ProcessFlowLoopHandler(journeys)

const nodeList: string[] = flow(map((journey): string[] => journey.path), flatten, uniq)(unloopedJourneys)

const data = {
  unloopedJourneys,
  nodeList: map(nodeId => {
    return {
      id: nodeId,
      size: 0
    }
  })(nodeList)
}

const config = {
  maxNodeSize: 800,
  nodeBorderWidth: 6,
  horizontalNodeSpacing: 60,
  verticalNodeSpacing: 60
}

const accessors = {
  node: {
    color: (d: any) => {
      if (d.id.indexOf("++") > -1) {
        return "lightgreen"
      }
      if (d.id.indexOf("+") > -1) {
        return "lightcoral"
      }
      return "#fff"
    },
    content: (d: any) => [
      { key: "Description", value: "This is a node." },
      { key: "Comment", value: "This comment is boring." }
    ],
    label: (d: any) => "N:" + d.id,
    labelPosition: (d: any) => "top"
  },
  link: {
    stroke: (d: any) => {
      if (d.target.attributes.id.indexOf("++") > -1) {
        return "lightgreen"
      }
      if (d.target.attributes.id.indexOf("+") > -1) {
        return "lightcoral"
      }
      return "#bbb"
    }
  },
  data: {
    journeys: (d: any) => d.unloopedJourneys,
    nodes: (d: any) => d.nodeList
  }
}

export const marathon = ({ test, afterAll, container }: MarathonEnvironment): void => {
  const viz = new ProcessFlow(container)

  test("Renders viz with looped data", () => {
    viz.data(data)
    viz.config(config)
    viz.accessors("data", accessors.data)
    viz.accessors("node", accessors.node)
    viz.accessors("link", accessors.link)
    viz.draw()
  })

  afterAll(() => {
    viz.close()
  })
}

export const title = "Looped data"

// Must match the file name so we can link to the code on GitHub
export const slug = "case04"
