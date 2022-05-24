import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice';

export const ProductsList = ({ products }) => {
  const dispatch = useDispatch();

  const { productsList } = useSelector(state => state.cart);
  
  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId);
    if (productsList.find(pdt => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product));
    }
  }

  return (
    <>
      <h2>Listado de productos</h2>
      <div className="row">
        {
          products.map(product => {
            return (
              <div key={product.id} className="col-3 mt-3">
                <h4>{product.name}</h4>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Category:</b> {product.category}</p>
                <button
                  className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                >
                  {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                </button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}