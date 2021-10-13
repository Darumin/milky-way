module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jan Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `cows`,
        path: `${__dirname}/cows`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
  ],
};
