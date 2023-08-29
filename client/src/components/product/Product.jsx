import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/_productCard.scss";
import { useSelector } from "react-redux";
import vector from "../../assets/images/card/vector.png";
import twitter from "../../assets/images/card/twitter.svg";
import facebook from "../../assets/images/card/facebook.svg";
import instagram from "../../assets/images/card/instagram.svg";

const Product = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.merchandise);

  const product = products.find((prod) => prod.itemNo === productId);

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
                <h2 className="price__now">{product.currentPrice} грн</h2>
                <p className="price__old">{product.previousPrice} грн</p>
              </div>
            </div>
            <div className="button_wrapper">
              <div className="button_count">
                <button type="submit" className="button_count-item">
                  +
                </button>
                <p className="button_count-amount">1</p>
                <button type="submit">-</button>
              </div>
              <button type="submit" className="button_buy">
                Придбати
              </button>
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
