// tina/config.js
import { defineConfig } from "tinacms";

// tina/templates.js
function homepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "number",
      name: "cyclists",
      label: "cyclists"
    },
    {
      type: "string",
      name: "raised",
      label: "raised"
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
      label: "sponsors"
    }
  ];
}
function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "layout",
      label: "layout"
    }
  ];
}
function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "description",
      label: "description"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "image",
      name: "header_image",
      label: "header image"
    },
    {
      type: "string",
      name: "layout",
      label: "layout"
    }
  ];
}
function rideFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "description",
      label: "description"
    },
    {
      type: "string",
      name: "date",
      label: "start date",
      required: true
    },
    {
      type: "number",
      name: "duration",
      label: "duration"
    },
    {
      type: "image",
      name: "header_image",
      label: "header image"
    },
    {
      type: "string",
      name: "layout",
      label: "layout"
    }
  ];
}

// tina/config.js
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "uploads"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Homepage",
        name: "homepage",
        path: "/",
        match: {
          include: "index"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            isBody: true
          },
          ...homepageFields()
        ]
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "/",
        match: {
          include: "*",
          exclude: "index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...pageFields()
        ]
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "_posts",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...postFields()
        ]
      },
      {
        format: "md",
        label: "Rides",
        name: "rides",
        path: "_rides",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...rideFields()
        ]
      }
    ]
  }
});
export {
  config_default as default
};
