import { useParams } from 'react-router-dom'; // useParams hook to get the product id from the URL params

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;