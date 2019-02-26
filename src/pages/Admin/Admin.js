import React from "react";
import { observer, inject } from "mobx-react";
import { omit, pick } from "lodash";
import request from "../../services/api";
import { init as initMediaLibraryWidget } from "../../services/mlwidget";
import styles from "./Admin.module.scss";

type Props = Object;
type State = { name: string, price: number, brand: string, discount: number };

const BRANDS = ["Nike", "Adidas", "Under Armor", "Adika"];
const PRODUCT_ATTRIBUTES = ["name", "prioce", "brand", "discount"];

class Admin extends React.Component<Props, State> {
  state = { name: "", price: 0, brand: "", discount: 0, items: [{ public_id: "sample", resource_type: "image" }] };

  componentDidMount() {
    initMediaLibraryWidget();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async () => {
    const res = await request("/products",{
      method: "POST",
      bodyParams: {
        ...pick(this.state, PRODUCT_ATTRIBUTES),
        items: this.state.items.map(item => ({ id: item.public_id, type: item.resource_type }))
      }
    });

    console.log("XXXXXXXXXXXX", res);
  };

  render() {
    // console.log("XXXXXXXXXXXXX", this.state);
    return (
      <div>
        {/* <h1>Admin</h1> */}
        <fieldset>
          <legend align="center">Add Product</legend>
          <div className={styles.inputWrapper}>
            <input name="id" type="text" hidden />
            name: <input name="name" type="text" value={this.state.name} onChange={this.onChange} />
            price: <input name="price" type="number" min="0" value={this.state.price} onChange={this.onChange} />
            brand:
            <select name="brand" onChange={this.onChange}>
              {BRANDS.map(brand => (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              ))}
            </select>
            discount:
            <input
              name="discount"
              type="number"
              min="0"
              max="100"
              value={this.state.discount}
              onChange={this.onChange}
            />
            <button text="save" onClick={this.onSubmit}>
              Save!
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default inject("appData")(Admin);
