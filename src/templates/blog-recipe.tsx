import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogRecipeTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h2>
            {post.frontmatter.title}
          </h2>
          <p>
            {post.frontmatter.date}
          </p>
          <h3>Ingredients</h3>
          <table className="border-collapse border-2 border-gray-500">
              {post.frontmatter.ingredients.map(ingredient => <tr>
                  <td className="border border-gray-400 px-4 py-2">{ingredient.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{ingredient.quantity}</td>
              </tr>)}
          </table>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogRecipeTemplate

export const pageQuery = graphql`
  query BlogRecipeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        ingredients {
            name
            quantity
        }
      }
    }
  }
`
