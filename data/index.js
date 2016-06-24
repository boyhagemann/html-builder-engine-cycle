
const events = [
  {
    selector: "#node-2",
    event: "click",
    action: "FETCH",
    payload: {
      url: "http://localhost:3000"
    }
  },
  {
    selector: "#node-2",
    event: "click",
    action: "INCREMENT",
    key: 1,
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-3",
    event: "mouseover",
    action: "INCREMENT",
    key: 1,
    payload: {
      amount: -2
    },
  },
  {
    selector: "#node-5",
    event: "click",
    action: "INCREMENT",
    key: 2,
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-6",
    event: "mouseover",
    action: "INCREMENT",
    key: 2,
    payload: {
      amount: -2
    },
  }
]

const nodes = {
  id: "1",
  type: "div",
  properties: {},
  children: [
    {
      id: "2",
      type: "button",
      text: "Increment"
    },
    {
      id: "3",
      type: "button",
      text: "Decrement"
    },
    {
      id: "4",
      type: "p",
      text: "Counter {{counter.1.count}}"
    },
    {
      id: "5",
      type: "button",
      text: "Increment"
    },
    {
      id: "6",
      type: "button",
      text: "Decrement"
    },
    {
      id: "7",
      type: "p",
      text: "Counter2 {{counter.2.count}}"
    },
    {
      id: "8",
      type: "p",
      text: "rest {{rest.data.hash}}"
    }
  ]
}

export { events, nodes }