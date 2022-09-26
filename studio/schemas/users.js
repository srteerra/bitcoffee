export default {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "Username",
      type: "string",
    },
    {
      name: "userSite",
      title: "Site",
      type: "string",
    },
    {
      name: "userTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "userSubtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "userDesc",
      title: "Description",
      type: "text",
    },
    {
      name: "userAddress",
      title: "Wallet Address",
      type: "string",
    },
    {
      name: "userAvatar",
      title: "Avatar",
      type: "image",
    },
    {
      name: "userBg",
      title: "Background",
      type: "image",
    },
  ],
};
