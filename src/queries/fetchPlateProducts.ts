import { useStaticQuery, graphql } from "gatsby";

export const fetchPlateProducts = () => {
  const products = useStaticQuery(graphql`
    query fetchPlateProducts {
      allContentfulProduct(
        filter: { category: { eq: "แผ่นย่าง" } }
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
