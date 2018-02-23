import * as React from "react"
import { render } from "react-dom"
import { injectStylesheet, baseStylesheet } from "@operational/utils"
import { operational } from "@operational/theme"
import { OperationalUI, Progress, Spinner } from "@operational/components"

injectStylesheet(baseStylesheet(operational))

const containerNode = document.getElementById("app")

import Sunburst from "../../src/Sunburst/facade"
import { VisualizationWrapper } from "../../src/index"

const accessors: any = {
  children: (d: any): any[] => d.children,
  name: (d: any): string => d.name,
  value: (d: any): number => d.value,
  color: (d: any): string => d.color
}

const data = {
  name: "All",
  value: 140000,
  children: [
    {
      name: "Europe",
      color: "0f0",
      value: 52000,
      children: [
        {
          name: "UK",
          value: 11500,
          children: [
            {
              name: "London",
              value: 1500,
              children: [
                {
                  name: "Southwark",
                  value: 123
                },
                {
                  name: "Lambeth",
                  value: 523
                },
                {
                  name: "Marylebone",
                  value: 623
                }
              ]
            },
            {
              name: "Sheffield",
              value: 1642
            },
            {
              name: "Exeter",
              value: 935
            },
            {
              name: "Manchester",
              value: 2076
            },
            {
              name: "Leeds",
              value: 2970
            }
          ]
        },
        {
          name: "Germany",
          value: 9240,
          children: [
            {
              name: "Berlin",
              value: 1650,
              children: [
                {
                  name: "Kreuzberg",
                  value: 593
                },
                {
                  name: "Prenzlauer Berg",
                  value: 402
                },
                {
                  name: "Mitte",
                  value: 573
                }
              ]
            },
            {
              name: "Dortmund",
              value: 1756
            },
            {
              name: "Köln",
              value: 1902
            },
            {
              name: "München",
              value: 2340
            }
          ]
        },
        {
          name: "Spain",
          value: 2345,
          children: [
            {
              name: "Madrid",
              value: 1025
            },
            {
              name: "Barcelona",
              value: 522
            }
          ]
        },
        {
          name: "Italy",
          value: 830,
          children: [
            {
              name: "Rome",
              value: 307
            },
            {
              name: "Venice",
              value: 132
            },
            {
              name: "Naples",
              value: 196
            }
          ]
        }
      ]
    },
    {
      name: "Asia",
      color: "0ff",
      value: 38400,
      children: [
        {
          name: "Japan",
          value: 8230,
          children: [
            {
              name: "Tokyo",
              value: 2353
            },
            {
              name: "Osaka",
              value: 1864
            }
          ]
        },
        {
          name: "China",
          value: 13000,
          children: [
            {
              name: "Beijing",
              value: 3852
            },
            {
              name: "Shanghai",
              value: 3623
            },
            {
              name: "Chengdu",
              value: 2546
            }
          ]
        },
        {
          name: "Thailand",
          value: 2548
        },
        {
          name: "India",
          value: 1800,
          children: [
            {
              name: "Mumbai",
              value: 987
            },
            {
              name: "Delhi",
              value: 632
            }
          ]
        },
        {
          name: "Malaysia",
          value: 1423
        }
      ]
    },
    {
      name: "North America",
      color: "f00",
      value: 43000,
      children: [
        {
          name: "USA",
          value: 33218,
          children: [
            {
              name: "Washington DC",
              value: 5742
            },
            {
              name: "California",
              value: 19200,
              children: [
                {
                  name: "San Fransisco",
                  value: 4298
                },
                {
                  name: "Los Angeles",
                  value: 6528
                },
                {
                  name: "Sacramento",
                  value: 3908
                }
              ]
            },
            {
              name: "New York City",
              value: 8276
            }
          ]
        },
        {
          name: "Canada",
          value: 6714,
          children: [
            {
              name: "Toronto",
              value: 2456
            },
            {
              name: "Vancouver",
              value: 4258
            }
          ]
        }
      ]
    },
    {
      name: "Africa",
      value: 4130,
      color: "#ff0",
      children: [
        {
          name: "South Africa",
          value: 1300,
          children: [
            {
              name: "Capetown",
              value: 1254
            }
          ]
        },
        {
          name: "Zimbabwe",
          value: 636
        },
        {
          name: "Tanzania",
          value: 132
        }
      ]
    }
  ]
}

const viz: Sunburst = new Sunburst(containerNode)
viz.data(data)
// viz.config({
//   zoomNode: {
//     name: "North America"
//   }
// })
viz.accessors("series", accessors)
viz.accessors("data", { data: (d: any) => d.data })
// viz.draw()

const App = () => <OperationalUI><VisualizationWrapper facade={Sunburst} data={data} accessors={accessors} /></OperationalUI>

render(<App />, containerNode)