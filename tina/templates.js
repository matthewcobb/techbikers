export function homepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "number",
      name: "cyclists",
      label: "cyclists",
    },
    {
      type: "string",
      name: "raised",
      label: "raised",
    },
    {
      type: "number",
      name: "ridden",
      label: "ridden",
      description: "Number of km ridden in total."
    },
    {
      type: "rich-text",
      name: "sponsors",
      label: "sponsors",
    },
  ];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "header_image",
      label: "header image",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ];
}
export function rideFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "date",
      label: "start date",
      required: true,
    },
    {
      type: "number",
      name: "duration",
      label: "duration",
    },
    {
      type: "image",
      name: "header_image",
      label: "header image",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ];
}
