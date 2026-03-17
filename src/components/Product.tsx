import React, { type ReactElement } from "react";
import { type ProductType } from "../context/ProductsProvider";
import {
  type ReducerActionType,
  type ReducerAction,
} from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};
export const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.id}.jpg`, import.meta.url)
    .href;
  console.log(img);
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? ">Item in Cart" : "Add to Cart";

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};
