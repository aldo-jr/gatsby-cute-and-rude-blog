import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from 'components/layout'
import React from 'react'
import SEO from 'components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            name
            publishDate(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
            slug
            mainImage {
              title
              file {
                url
              }
              description
            }
            category {
              name
              slug
              parentCategory {
                name
                slug
              }
            }
            description {
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(edge => {
        const post = edge.node
        const { category, mainImage } = post
        const { parentCategory } = category

        return (
          <article key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.name}</h2>
            </Link>
            <p>{post.publishDate}</p>
            {parentCategory && parentCategory.name && (
              <p>{parentCategory.name}</p>
            )}
            <p>{category.name}</p>
            <img src={mainImage.file.url} alt={mainImage.title} />

            <p>{post.description.description}</p>
          </article>
        )
      })}
    </Layout>
  )
}

export default IndexPage
