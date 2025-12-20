import { calcPrice } from "../../utils/money";
import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ deliveryOptions, cart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          // what .find does is loop through the object and return the first function that is true
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>

                  <div className="product-price">
                    {calcPrice(cartItem.product.priceCents)}
                  </div>

                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.product.quantity}
                      </span>
                    </span>

                    <span className="update-quantity-link link-primary">
                      Update
                    </span>

                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                    <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem}/>
              </div>
            </div>
          );
        })}
    </div>
  );
}
