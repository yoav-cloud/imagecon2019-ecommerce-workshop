import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import cloudinary from "../../services/cloudinary";
import { calculateDiscountPrice } from "../../helpers";

import styles from "./gridItem.module.scss";

const renderProductImage = ({ name, items }) => {
  const image = items.find(i => i.resource_type === "image");

  const url = image
    ? cloudinary.url(image.public_id, {
        crop: "fit",
        width: 260,
        dpr: 2
      })
    : null;

  return url && <img src={url} alt={name} />;
};

const GridItem = ({ product }) => (
  <div className={styles.product}>
    <Link
      to={{
        pathname: "/product",
        state: {
          product: toJS(product)
        }
      }}
    >
      <div className={styles.image}>
        {renderProductImage(product)}
        <div className={styles.label}>
          {product.discount ? <span className={styles.sale}>-{product.discount}%</span> : null}
          <span className={styles.new}>NEW</span>
        </div>
      </div>
    </Link>

    <div className={styles.body}>
      <p className={styles.category}>Category</p>
      <h3 className={styles.name}>
        <a href="#">{product.name}</a>
      </h3>
      <h4 className={styles.price}>
        ${product.discount ? calculateDiscountPrice(product) : product.price}
        {product.discount ? <del className={styles["old-price"]}>${product.price}</del> : null}
      </h4>

      <div className={styles.buttons}>
        <button className="add-to-wishlist">
          <i className="fa fa-heart-o" />
          <span className={styles.tooltipp}>add to wishlist</span>
        </button>
        <button className="add-to-compare">
          <i className="fa fa-exchange" />
          <span className={styles.tooltipp}>add to compare</span>
        </button>
        <button className="quick-view">
          <i className="fa fa-eye" />
          <span className={styles.tooltipp}>quick view</span>
        </button>
      </div>
    </div>
    <div className={styles["add-to-cart"]}>
      <button className={styles["add-to-cart-btn"]}>
        <i className="fa fa-shopping-cart" /> add to cart
      </button>
    </div>
  </div>
);

export default observer(GridItem);
