import React from "react";

const Offer = ({ price, condition, delivery, url }) => {
  return (
    <>
      <div>
        <h5 className="_title">{condition}</h5>
      </div>
      <div>
        <h5 className="offer_price">{price}</h5>
      </div>
      <div>
        <h5 className="offer_price">{delivery}</h5>
      </div>
      <div>
        <h5 className="offer_price">{url}</h5>
      </div>
    </>
  );
};
export default Offer;
