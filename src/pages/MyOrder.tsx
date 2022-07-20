import React, { useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/MyOrder.css";
import pic from "../images/order1.png";
//SiZiiPCaH49OEpIUSc7y

function MyOrder() {
  const [id, setId] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [orderInfo, setOrderInfo] = useState<infoI>();
  interface infoI {
    name: string;
    addOn: string;
    price: number;
    product: string;
    tracking: string;
    createDate: { toDate: any };

    sender: string;
    email: string;
    receiver: string;
    country: string;
    street: string;
    aptNum: number;
    postalCode: number;
    city: string;
    county: string;
  }
  const checkId = async () => {
    const docRef = doc(db, "order", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data: any = docSnap.data();
      setOrderInfo(data);
      setVerified(true);
    } else {
      alert("Order does not exist");
    }
  };
  // y2eGNf8tGthsI57RlZyZ
  return (
    <div className="myorderP page">
      {verified ? (
        <div className="myorder">
          {orderInfo?.tracking ? (
            <div className="myorder-tracking">
              <span>
                Your box is on its way! <br />
                Tracking:{" "}
                <a
                  target="_blank"
                  href={`https://www.dhl.com/de-en/home/tracking/tracking-parcel.html?submit=1&tracking-id=${orderInfo?.tracking}`}
                >
                  {orderInfo?.tracking}
                </a>
              </span>
            </div>
          ) : (
            <div className="myorder-tracking">
              <img src={pic} alt="tracking" />
              <span>Your box is being prepared!</span>
            </div>
          )}

          <div className="myorder-info">
            <div className="myorder-info-detail">
              <h5>My Order</h5>
              <p>
                Name : {orderInfo?.sender}
                <br />
                Product: {orderInfo?.product}
                <br />
                Order ID: {id}
                <br />
                Date: {orderInfo?.createDate.toDate().toDateString()}
              </p>
            </div>
            <div className="myorder-info-address">
              <h5>Shipping Address</h5>
              <p>
                {orderInfo?.receiver}
                <br />
                {orderInfo?.street}

                {orderInfo?.aptNum}
                <br />
                {orderInfo?.city}
                <br />
                {orderInfo?.county}
                <br />
                {orderInfo?.postalCode}
                <br />
                {orderInfo?.country}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="myorder myorder-input">
          <h3>My Order</h3>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Order #"
          />
          <button onClick={checkId}>Track My Order</button>
        </div>
      )}
    </div>
  );
}

export default MyOrder;
