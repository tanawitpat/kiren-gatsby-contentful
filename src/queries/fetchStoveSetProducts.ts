import { useStaticQuery, graphql } from "gatsby";

export const fetchStoveSetProducts = () => {
  const products = useStaticQuery(graphql`
    query fetchStoveSetProducts {
      allContentfulProduct(
        filter: { category: { eq: "ชุดเตาย่าง" } }
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            id
            code
            name
            price
            slug
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
