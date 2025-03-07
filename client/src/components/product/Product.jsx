import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/_productCard.scss";
import { useDispatch, useSelector } from "react-redux";
import vector from "../../assets/images/card/vector.png";
import twitter from "../../assets/images/card/twitter.svg";
import facebook from "../../assets/images/card/facebook.svg";
import instagram from "../../assets/images/card/instagram.svg";
import { addProductToCart } from "../../redux/basket/actions";

const Product = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.merchandise);
  const [qty, setQty] = useState(1);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const dispatch = useDispatch();
  const product = products.find((prod) => prod.itemNo === productId);
  const handleAddToCart = (selectedProduct) => {
    dispatch(addProductToCart(selectedProduct, qty));
    setShowSuccessAnimation(true);
    setTimeout(() => setShowSuccessAnimation(false), 3000);
  };

  const handleIncCaunt = (increment) => {
    if (increment > 0) {
      setQty(qty + increment);
    } else if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return (
    <div className="product">
      <div className="product__wrapper">
        <div>
          <img
            className="product__image"
            src={product.imageUrls[0]}
            alt="Product"
          />
        </div>
        <div className="product__wrapper-content">
          <div className="product__description">
            <h1>
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h1>
            <div className="product__description_available">
              <div>
                <img className="icon_vector" src={vector} alt="Available" />
                <span className="product__description-available-item">
                  {product.quantity > 0 ? "В наявності" : "закінчився"}
                </span>
              </div>
              <p className="product__description-article">
                {" "}
                Артикул:<span>{product.itemNo}</span>
              </p>
            </div>
            <h3>Опис</h3>
            <p className="product__content">
              При описі аромату в першу чергу описується його характер:
              солодкий, насичений, пряний, освіжаючий, а також називаються
              чотирма дескрипторами. Учасник може порекомендувати суддям спосіб,
              яким краще оцінювати аромат кави. Наприклад: він тримає судину в
              руках і пропонує суддям у такий спосіб ознайомитися з ароматом.
            </p>
            <div className="price">
              <h4 className="price__title">Ціна</h4>
              <div className="price__amount">
                {product.previousPrice ? (
                  <>
                    <p className="price__old">{product.previousPrice} грн</p>
                    <h2 className="price__now">{product.currentPrice} грн</h2>
                  </>
                ) : (
                  <h2 className="price__now">{product.currentPrice} грн</h2>
                )}
              </div>
            </div>
            <div className="button_wrapper">
              <div className="button_count">
                <button
                  type="button"
                  disabled={product.quantity <= 0 || qty >= product.quantity}
                  onClick={() => handleIncCaunt(1)}
                >
                  +
                </button>
                <p className="button_count-amount">{qty}</p>
                <button type="button" onClick={() => handleIncCaunt(-1)}>
                  -
                </button>
              </div>
              <button
                type="submit"
                className="button_buy"
                onClick={() => handleAddToCart(product)}
                disabled={product.quantity <= 0}
              >
                Придбати
              </button>
              {showSuccessAnimation && (
                <div className="success-animation">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="product__share">
            <span>Поділитися</span>
            <div>
              <a href="https://twitter.com/home?lang=uk">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://www.facebook.com/" className="icon_fb">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>Опис</h5>
        <p>
          При описі аромату в першу чергу описується його характер: солодкий,
          насичений, пряний, освіжаючий, а також називаються чотирма
          дескрипторами. Учасник може порекомендувати суддям спосіб, яким краще
          оцінювати аромат кави. Наприклад: він тримає судину в руках і пропонує
          суддям у такий спосіб ознайомитися з ароматом. При описі аромату та
          смаку рекомендують називати не більше чотирьох дескрипторів. Вони
          мають бути явними, читаними та зрозумілими для суддів. Якщо суддя
          справді відчує їх в ароматі — оцінка буде вищою. Якщо учасник відчуває
          жовті тропічні фрукти, але не розуміє, які конкретно, він так і каже:
          «в ароматі ви відчуєте ноти жовтих тропічних фруктів». За це йому
          поставлять трохи менше балів. Якщо ж він скаже, що смакує манго, але
          суддя його не відчує — йому поставлять низький бал.
        </p>
      </div>
      <div className="product__options">
        <h6>Вам також буде цікаво…</h6>
        {/* <Carousel/> */}
      </div>
    </div>
  );
};

export default Product;
