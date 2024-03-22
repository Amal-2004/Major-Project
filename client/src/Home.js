import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const products = [
  { id: 1, title: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
  { id: 2, title: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
  // Add more products as needed
];

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
