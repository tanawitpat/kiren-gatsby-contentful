import { useStaticQuery, graphql } from "gatsby";

export const fetchBestSellerProducts = () => {
  return useStaticQuery(graphql`
    query {
      allContentfulProduct(
        filter: { bestSeller: { eq: true } }
        sort: { fields: publishedDate, order: DESC }
      ) {
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
};
