
const events = [
  {
    selector: "#node-1_3",
    event: "click",
    action: "FETCH",
    payload: {
      url: "http://localhost:3000"
    }
  },
  {
    selector: "#node-1_3",
    event: "click",
    action: "INCREMENT",
    key: 'a',
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-1_4",
    event: "mouseover",
    action: "INCREMENT",
    key: 'a',
    payload: {
      amount: -2
    },
  },
  {
    selector: "#node-1_6",
    event: "click",
    action: "INCREMENT",
    key: 'b',
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-1_7",
    event: "mouseover",
    action: "INCREMENT",
    key: 'b',
    payload: {
      amount: -2
    },
  }
]

const nodes = [
  {
    id: "1",
    type: "div",
    attributes: {},
    children: ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "1_8", "1_9", "1_10", "1_11", "1_12"]
  },
  {
    id: "1_1",
    type: "Condition",
    label: "Page 1",
    children: ["1_1_1"]
  },
  {
    id: "1_1_1",
    type: "a",
    text: "Test",
    properties: {
      href: "#/test"
    },
    children: ["1_1_1_1"]
  },
  {
    id: "1_1_1_1",
    type: "text",
    properties: {
      text: "Test"
    }
  },
  {
    id: "1_2",
    type: "a",
    properties: {
      href: "#/test2"
    },
    children: ["1_2_1"]
  },
  {
    id: "1_2_1",
    type: "text",
    properties: {
      text: "Test2"
    }
  },
  {
    id: "1_3",
    type: "button",
    children: ["1_3_1", "1_3_2"]
  },
  {
    id: "1_3_1",
    type: "text",
    properties: {
      text: "Increment"
    }
  },
  {
    id: "1_3_2",
    type: "event",
    properties: {
      selector: "#node-1_3",
      event: "click",
      action: "INCREMENT",
      key: 'a',
      payload: {
        amount: 1
      },
    }
  },
  {
    id: "1_4",
    type: "button",
    children: ["1_4_1"]
  },
  {
    id: "1_4_1",
    type: "text",
    properties: {
      text: "Decrement"
    }
  },
  {
    id: "1_5",
    type: "item",
    properties: {
      source: 'counter.a',
      alias: "test"
    },
    children: ["1_5_1"]
  },
  {
    id: "1_5_1",
    type: "p",
    children: ["1_5_1_1"]
  },
  {
    id: "1_5_1_1",
    type: "text",
    properties: {
      text: "Counter {{test.count}}"
    }
  },
  {
    id: "1_6",
    type: "button",
    children: ["1_6_1"]
  },
  {
    id: "1_6_1",
    type: "text",
    properties: {
      text: "Increment"
    }
  },
  {
    id: "1_7",
    type: "button",
    children: ["1_7_1"]
  },
  {
    id: "1_7_1",
    type: "text",
    properties: {
      text: "Decrement"
    }
  },
  {
    id: "1_8",
    type: "item",
    properties: {
      source: 'counter.b',
    },
    children: ["1_8_1"]
  },
  {
    id: "1_8_1",
    type: "p",
    children: ["1_8_1_1"]
  },
  {
    id: "1_8_1_1",
    type: "text",
    properties: {
      text: "Counter2 {{counter.b.count}}"
    }
  },
  {
    id: "1_9",
    type: "item",
    properties: {
      source: 'rest.data',
    },
    children: ["1_9_1"]
  },
  {
    id: "1_9_1",
    type: "p",
    children: ["1_9_1_1"]
  },
  {
    id: "1_9_1_1",
    type: "text",
    properties: {
      text: "rest {{rest.data.hash}}"
    }
  },
  {
    id: "1_10",
    type: "condition",
    properties: {
      source: "counter.a.count",
      operator: "=", // can be omitted, defaults to "=". Can be one of [equals,=,gt,>,gte,>=,lt,<,lte,<=,regex,starts_with,^=,ends_with,$=,contains]
      value: 24,
    },
    children: ["1_10_1"]
  },
  {
    id: "1_10_1",
    type: "collection",
    properties: {
      source: 'collection.products',
      alias: 'my-row',
    },
    children: ["1_10_1_1"]
  },
  {
    id: "1_10_1_1",
    type: "li",
    children: ["1_10_1_1_1"]
  },
  {
    id: "1_10_1_1_1",
    type: "text",
    properties: {
      text: "rest {{my-row.title}} and count[b] = {{counter.b.count}}"
    }
  },
  {
    id: "1_11",
    type: "condition",
    properties: {
      source: "router.pathname",
      operator: "=",
      value: "/test2"
    },
    children: ["1_11_1"]
  },
  {
    id: "1_11_1",
    type: "h1",
    children: ["1_11_1_1"]
  },
  {
    id: "1_11_1_1",
    type: "text",
    properties: {
      text: "Hellooo",
    }
  },
  {
    id: "1_12",
    type: "partial",
    properties: {
      node: "2",
      assign: {
        title: "Haaaaaa"
      }
    }
  },
  {
    id: "2",
    type: "text",
    properties: {
      text: "{{title}}",
    },
    fields: [
      {
        name: "title",
        type: "input",
        required: true,
      }
    ]
  }
]


export { events, nodes }