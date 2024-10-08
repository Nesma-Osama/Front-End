import { notFound } from "next/navigation";
type Props = {
  params: {
    reviewid: string;
    productid: string;
  };
};

export default function Review({ params }: Props) {
  if (parseInt(params.reviewid) > 1000) notFound(); // call not found function if some thing you want to make it un avilable

  return (
    <h1>
      Review {params.reviewid} for product {params.productid}
    </h1>
  );
}
