import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <>
      <h1> {id} Product Details</h1>
    </>
  );
}
