import { Metadata } from "next";
type Props = {
  params: { productid: string };
};
// dynamic meta data sutiable for dynamic routing
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Produnct ${params.productid}`,
  };
};
export default function Product({ params }: Props) {
  return <h1>Product {params.productid} details</h1>;
}
