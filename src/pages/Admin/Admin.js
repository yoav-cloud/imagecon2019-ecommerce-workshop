import React from "react";
import { observer, inject } from "mobx-react";
import { omit, pick } from "lodash";
import request from "../../services/api";
import { init as initMediaLibraryWidget } from "../../services/mlwidget";
import { init as initUploadWidget } from "../../services/uploadwidget";
import cloudinaryService from "../../services/cloudinary";
import styles from "./Admin.module.scss";

///////////////////////////////////
//             TYPES             //
///////////////////////////////////
type Props = Object;
type State = { name: string, price: number, brand: string, discount: number, items: [], status: string };

///////////////////////////////////
//           CONSTANTS           //
///////////////////////////////////
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const MAX_UPLOADS = 5;
const initialState = { name: "", price: 0, brand: "", discount: 0, items: [], status: "" };
const BRANDS = ["Nike", "Adidas", "Under Armor", "Adika"];
const PRODUCT_ATTRIBUTES = ["name", "price", "brand", "discount"];
const PRODUCT_IMAGE_PREVIEW_TRANSFORMATION = {
  width: 100,
  height: 100,
  crop: "limit",
  fetch_format: "auto",
  quality: "auto"
};
const STATUS_MESSAGE = {
  success: "Product has been saved!",
  error: "Product failed to update..."
};

const Button = ({ title, onClick }) => (
  <div className={styles.thumbWrapper} onClick={onClick}>
    {title}
  </div>
);

class Admin extends React.Component<Props, State> {
  state = initialState;

  mlWidget = {};
  uploadWidget = {};

  getMaxUploadsAllowed() {
    return MAX_UPLOADS - this.state.items.length;
  }

  async componentDidMount() {
    this.mlWidget = await initMediaLibraryWidget();
    this.uploadWidget = await initUploadWidget(
      {
        maxFiles: this.getMaxUploadsAllowed(),
        text: {
          en: {
            local: {
              browse: "Select Files"
            },
            menu: {
              files: "Local Files",
              web: "URL",
              camera: "Computer Camera",
              gsearch: "Google",
              instagram: "Instush"
            }
          }
        },
        styles: {
          palette: {
            window: "#ffffff",
            sourceBg: "#E8E8E8",
            windowBorder: "#060C12",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#191E23",
            link: "#FF0404",
            action: "#9C2F0D",
            inProgress: "#F56767",
            complete: "#205820",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd"
          }
        },
        folder: `Products/${this.randomFolder()}`
      },
      this.uwCallback
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.items.length !== this.state.items.length) {
      this.uploadWidget.update({ maxFiles: this.getMaxUploadsAllowed() });
    }
  }

  uwCallback = (error, result) => {
    if (result && result.event === "success") {
      this.setState((prevState: Object) => ({ items: [...prevState.items, result.info] }));
    } else if (result && result.event === "queues-end") {
      this.uploadWidget.close();
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  randomFolder = () =>
    new Array(10)
      .fill(null)
      .map(() => CHARS.charAt(Math.floor(Math.random() * CHARS.length)))
      .join("");

  onSubmit = async () => {
    const res = await request("/products", {
      method: "POST",
      bodyParams: {
        ...pick(this.state, PRODUCT_ATTRIBUTES),
        items: this.state.items.map(item => ({ id: item.public_id, type: item.resource_type }))
      }
    });
    this.setState({ status: "success" });
  };

  renderSelectBrand = () => (
    <select name="brand" onChange={this.onChange}>
      {BRANDS.map(brand => (
        <option value={brand} key={brand}>
          {brand}
        </option>
      ))}
    </select>
  );

  renderProductImagesWidget = () => (
    <div className={styles.thumbsList}>
      <Button title="Add An Image" onClick={() => this.uploadWidget && this.uploadWidget.open && this.uploadWidget.open()} />

      {this.state.items.map(item => (
        <div className={styles.thumbWrapper}>
          <img
            src={cloudinaryService.url(item.public_id, {
              resource_type: item.resource_type,
              type: item.type,
              ...PRODUCT_IMAGE_PREVIEW_TRANSFORMATION
            })}
            key={item.resource_id}
          />
        </div>
      ))}
    </div>
  );

  render() {
    const status = this.state.status;
    return (
      <div className={styles.admin}>
        <div className={styles.newProductForm}>
          <fieldset className={styles.details}>
            <legend align="center">Product Details</legend>
            <div className={styles[`${status}`]}>{STATUS_MESSAGE[status]}</div>
            <div className={styles.inputWrapper}>
              Name:
              <input name="name" type="text" value={this.state.name} onChange={this.onChange} />
              Price:
              <input name="price" type="number" min="0" value={this.state.price} onChange={this.onChange} />
              Brand:
              {this.renderSelectBrand()}
              Discount:
              <input name="discount" type="number" min="0" max="100" value={this.state.discount} onChange={this.onChange} />
            </div>
          </fieldset>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <fieldset className={styles.images}>
              <legend align="center">Product Images</legend>
              <div className={styles.imagesContainer}>{this.renderProductImagesWidget()}</div>
            </fieldset>
            <div className={styles.controls}>
              <button className={styles.saveBtn} onClick={this.onSubmit}>
                Save!
              </button>
              {/* <button
                className={styles.mlWidget}
                onClick={() => {
                  this.mlWidget && this.mlWidget.show && this.mlWidget.show();
                }}
              >
                Media Library
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject("appData")(Admin);
