import React from "react";
import { Link } from "react-router-dom";

const Delivery = () => (
  <div className="delivery_container">
    <div className="delivery_wrapper">
      <div className="link_nav_delivery">
        <Link to="/final_project/" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/final_project/delivery" className="delivery_link">
          Доставка
        </Link>
      </div>
      <h4>Доставка:</h4>
      <p className="delivery_time">
        Доставка здійснюється з понеділка по суботу включно.
      </p>
      <p>
        Будемо раді частувати Вас кавою в будь-якому куточку світу, доставимо
        все швидко, щоб у Вас залишилися лише позитивні враження від співпраці з
        нами, лише не співпрацюємо з Росією.
      </p>
      <div className="delivery_block_text">
        <p className="text_tittle_delivery">Піклуємось про майбутнє</p>
        <p className="delivery_text">
          {" "}
          Наша мета — бачити красу в усіх унікальних проявах, підкреслювати та
          створювати її у світі, що нас оточує… Ми піклуємося про майбутнє
          планети й постійно працюємо над проектами з переробки та свідомого
          споживання. Ми відмовилися від використання поліетилену для пакування
          посилок, замінивши його на папір, який, як і наші брендові коробки,
          підлягає переробці. У 2022 році ми впровадили спеціальне обладнання,
          що дало нам змогу використовувати в процесі пакування екологічний
          скотч. Ми підтримуємо бренди, які піклуються про довкілля, а також
          надаємо клієнтам інформацію про поточні sustainable-інновації в
          пакуванні та інгредієнтах. Vegan, Bio – товари, що мають відповідні
          сертифікати.
        </p>
      </div>
    </div>
  </div>
);
export default Delivery;
