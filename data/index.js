
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
    key: 'a',
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-3",
    event: "mouseover",
    action: "INCREMENT",
    key: 'a',
    payload: {
      amount: -2
    },
  },
  {
    selector: "#node-5",
    event: "click",
    action: "INCREMENT",
    key: 'b',
    payload: {
      amount: 1
    },
  },
  {
    selector: "#node-6",
    event: "mouseover",
    action: "INCREMENT",
    key: 'b',
    payload: {
      amount: -2
    },
  }
]

const nodes = {
  id: "1",
  type: "div",
  attributes: {},
  children: [
    {
      id: "222",
      type: "Condition",
      label: "Page 1",
      children: [
        {
          id: "222",
          type: "a",
          text: "Test",
          properties: {
            href: "#/test"
          },
          children: [
            {
              id: "2222",
              type: "text",
              properties: {
                text: "Test"
              }
            },
          ]
        },
      ]
    },
    {
      id: "223",
      type: "a",
      properties: {
        href: "#/test2"
      },
      children: [
        {
          id: "2232",
          type: "text",
          properties: {
            text: "Test2"
          }
        },
      ]
    },
    {
      id: "2",
      type: "button",
      children: [
        {
          id: "22",
          type: "text",
          properties: {
            text: "Increment"
          }
        },
        {
          id: "23",
          type: "event",
          properties: {
            event: "click",
            action: "INCREMENT",
            key: 'a',
            payload: {
              amount: 1
            },
          }
        },
      ]
    },
    {
      id: "3",
      type: "button",
      children: [
        {
          id: "31",
          type: "text",
          properties: {
            text: "Decrement"
          }
        },
      ]
    },
    {
      id: "4",
      type: "item",
      properties: {
        source: 'counter.a',
        alias: "test"
      },
      children: [
        {
          id: "44",
          type: "p",
          children: [
            {
              id: "444",
              type: "text",
              properties: {
                text: "Counter {{test.count}}"
              }
            },
          ]
        },
      ]
    },
    {
      id: "5",
      type: "button",
      children: [
        {
          id: "55",
          type: "text",
          properties: {
            text: "Increment"
          }
        },
      ]
    },
    {
      id: "6",
      type: "button",
      children: [
        {
          id: "66",
          type: "text",
          properties: {
            text: "Decrement"
          }
        },
      ]
    },
    {
      id: "7",
      type: "item",
      properties: {
        source: 'counter.b',
      },
      children: [
        {
          id: "77",
          type: "p",
          children: [
            {
              id: "777",
              type: "text",
              properties: {
                text: "Counter2 {{counter.b.count}}"
              }
            },
          ]
        },
      ]
    },
    {
      id: "8",
      type: "item",
      properties: {
        source: 'rest.data',
      },
      children: [
        {
          id: "88",
          type: "p",
          children: [
            {
              id: "888",
              type: "text",
              properties: {
                text: "rest {{rest.data.hash}}"
              }
            },
          ]
        }
      ]
    },
    {
      id: "9",
      type: "condition",
      properties: {
        source: "counter.a.count",
        operator: "=", // can be omitted, defaults to "=". Can be one of [equals,=,gt,>,gte,>=,lt,<,lte,<=,regex,starts_with,^=,ends_with,$=,contains]
        value: 24,
      },
      children: [
        {
          id: "99",
          type: "collection",
          properties: {
            source: 'collection.products',
            alias: 'my-row',
          },
          children: [
            {
              id: "999",
              type: "li",
              children: [
                {
                  id: "9999",
                  type: "text",
                  properties: {
                    text: "rest {{my-row.title}} and count[b] = {{counter.b.count}}"
                  }
                },
              ]
            }
          ]
        },
      ]
    },
    {
      id: "page1",
      type: "condition",
      properties: {
        source: "router.pathname",
        operator: "=",
        value: "/test2"
      },
      children: [
        {
          id: "page1.0",
          type: "h1",
          children: [
            {
              id: "page1.0.0",
              type: "text",
              properties: {
                text: "Hellooo",
              }
            }
          ]
        }
      ]
    }
  ]
}


export { events, nodes }