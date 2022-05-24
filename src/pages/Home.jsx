import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { unsetUser } from '../reducers/user/userSlice';

import { ProductsList } from '../components/ProductsList';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const user = useSelector(state => state.user);

  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then(response => {
        setProducts(response.data);
      })
  }, [])

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <>
      <h2>Home</h2>
      <p>Welcome {user.fullName} / {user.email}</p>
      <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
      <hr />
      <ProductsList products={products} />
    </>
  )
}