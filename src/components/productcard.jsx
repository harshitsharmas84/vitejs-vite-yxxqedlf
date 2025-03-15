// write product card here
import Button from "./button";

const Productcard = () => {
  // Static product data
  const product = {
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80",
    price: "$129.99",
  };

  // Card styling
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
  };

  const nameStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0 5px",
    color: "#333",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#4CAF50",
    margin: "5px 0 15px",
  };

  const handleViewProduct = () => {
    alert(`Viewing details for ${product.name}`);
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3 style={nameStyle}>{product.name}</h3>
      <p style={priceStyle}>{product.price}</p>
      <div style={{ marginTop: "auto" }}>
        <Button text="View Product" onClick={handleViewProduct} />
      </div>
    </div>
  );
};

export default Productcard;
