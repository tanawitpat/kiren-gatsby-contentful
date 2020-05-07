import { useStaticQuery, graphql } from "gatsby";

export const fetchHoodProducts = () => {
  const products = useStaticQuery(graphql`
    query fetchHoodProducts {
      allContentfulProduct(
        filter: { category: { eq: "เครื่องดูดควัน" } }
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
