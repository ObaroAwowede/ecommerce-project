import dayjs from "dayjs";

export function DeliveryDate({ deliveryOptions, cartItem }) {
    // what .find does is loop through the object and return the first function that is true
    const selectedDeliveryOption = deliveryOptions.find(
        (deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
        }
    );
    return (
        <div className="delivery-date">
            Delivery date:
            {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                " dddd, MMMM D"
            )}
        </div>
    );
}