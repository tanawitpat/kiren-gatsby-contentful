const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("./src/templates/product.tsx");

  const res = await graphql(`
    query {
      allContentfulProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulProduct.edges.forEach((edge) => {
    createPage({
      component: productTemplate,
      path: `/product/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
