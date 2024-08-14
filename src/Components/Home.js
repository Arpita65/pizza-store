import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [home, setHome] = useState([]);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = () => {
    axios
      .get("http://localhost:5001/home")
      .then((response) => {
        setHome(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the home data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/home/${id}`)
      .then(() => {
        fetchHome(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the item:", error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/update-item/${id}`); // Use navigate function for routing
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to Our Pizza Hut</h2>
      <div className="row">
        {home.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={item.image}
                height={300}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{item.name}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>Delete</button>
                <button className="btn btn-warning" onClick={() => handleUpdate(item.id)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
