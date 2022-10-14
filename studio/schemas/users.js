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
      type: "url",
    },
    {
      name: "userInstagram",
      title: "Instagram",
      type: "url",
    },
    {
      name: "userYoutube",
      title: "Youtube",
      type: "url",
    },
    {
      name: "userTwitter",
      title: "Twitter",
      type: "url",
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
      name: "userCategory",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "userVerify",
      title: "Verify",
      type: "boolean",
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
