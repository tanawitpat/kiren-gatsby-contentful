import React from "react";

import CategoryLayout from "../../components/CategoryLayout";
import { fetchStoveSetProducts } from "../../queries";

interface Props {}

const BbqStoveSetCategoryPage: React.FC<Props> = () => {
  const contentfulProducts = fetchStoveSetProducts();
  const products = contentfulProducts.allContentfulProduct.edges;

  return (
    <CategoryLayout
      name="ชุดเตาย่าง"
      products={products}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
  lacus sed viverra tellus. Mattis aliquam faucibus purus in massa.
  Tellus molestie nunc non blandit massa enim nec. Vitae semper quis
  lectus nulla at volutpat diam ut. Suspendisse ultrices gravida
  dictum fusce ut placerat. Leo a diam sollicitudin tempor id eu
  nisl nunc mi."
    />
  );
};

export default BbqStoveSetCategoryPage;
