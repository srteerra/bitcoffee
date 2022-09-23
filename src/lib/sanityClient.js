/* eslint-disable no-undef */
const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: "v8g9fbqu",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token:
    process.env.SANITY_TOKEN ||
    "sk3VlDMVvEDI5AaWTeHKDktpyYqsvXaMAZQoFdVYQnMCXQ0tOv4kfJtss9X7b5iihjqmQORXXVvoi706UYj2NYg4XjjyDfZm96oCOFRsPZu65boNMVtvzuBKDU9PaTb6SrpxzJYec2YfWJqXeBSOcSbq2jmb9viv5RSsZbwK3yxG8fziEcmX", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
