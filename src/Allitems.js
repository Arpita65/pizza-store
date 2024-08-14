import { useState, useEffect } from "react";
import axios from "axios";
import './Allitems.css'; // Make sure to import your CSS file

function AllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/home")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items data", error);
      });
  }, []);

  const handleOrderClick = (id) => {
    // Handle order click logic here
    alert(`Order placed for item ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Pizza Items</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={item.image}
                height={300}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                <p className="card-text">{item.description}</p>
                <button
                  className="order-button"
                  onClick={() => handleOrderClick(item.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllItems;
