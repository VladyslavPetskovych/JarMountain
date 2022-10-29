import React from "react";
import "./Header.css";


function Header() {
    return (
        <div className="header">
        <div className="header_strip">
                <h1  className="site_title"> JarMountain </h1>
                <button className="header_buttons">Оплата і доставка</button>
                <button className="header_buttons">Категорії</button>
                <button className="header_buttons">Про Нас</button>
                <button className="contact">Контакт</button>
        </div>
        </div>

    );
}
export default Header;
