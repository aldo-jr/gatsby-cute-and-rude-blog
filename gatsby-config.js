module.exports = {
  siteMetadata: {
    title: `Cute and Rude`,
    description: `Escrevo para me sentir mais leve, meus pensamentos, sentimentos e devaneios. Sou paulista, tenho 25 anos e jornalista.`,
    author: {
      name: `Aldo Fernandes`,
      github: {
        user: 'aldo-jr',
        url: 'https://github.com/aldo-jr'
      }
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          styles: `src/styles`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cnr-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GA_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lora', 'Open Sans']
        }
      }
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: process.env.FB_APP_ID,
        version: `v3.3`,
        xfbml: true,
        cookie: false,
        includeInDevelopment: false,
        debug: false,
        language: `en_US`,
      },
    },
  ],
}
