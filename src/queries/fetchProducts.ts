import { useStaticQuery, graphql } from "gatsby";

export const fetchProducts = () => {
  const products = useStaticQuery(graphql`
    query {
      allContentfulProduct(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            code
            name
            price
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            bestSeller
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return products;
};
