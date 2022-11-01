export default {
  name: "assets",
  title: "Assets",
  type: "document",
  fields: [
    {
      name: "assetProvider",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "assetName",
      title: "Name",
      type: "string",
    },
    {
      name: "assetDesc",
      title: "Description",
      type: "string",
    },
  ],
};
