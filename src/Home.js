import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        ></img>

        <div className="home_row">
          <Product
            id="1"
            title="Xbox Wireless Controller - Grey And Blue"
            price={47.49}
            image="https://m.media-amazon.com/images/I/619+iRxAVqL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            price={21.99}
            image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
            price={9.99}
            image="https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="4"
            title="Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim Card 5MP Camera, WiFi, Bluetooth, GPS, Quad Core, HD Touchscreen, Support 3G Phone Call (Black)"
            price={103.99}
            image="https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="BLU Studio View 2019-6.0” GSM Unlocked Smartphone, 32GB+1GB RAM -Black"
            price={64.99}
            image="https://m.media-amazon.com/images/I/91guyEWiYeL._AC_UY327_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="BLU Studio View 2019-6.0” GSM Unlocked Smartphone, 32GB+1GB RAM -Black"
            price={209.99}
            image="https://m.media-amazon.com/images/I/71ZRTMwE3NL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
