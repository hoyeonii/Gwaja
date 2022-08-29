import React, { useState, useEffect, createRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/CheckOut.css";
import order1 from "../images/order1.png";

function CheckOut() {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state as TOrderInfo;

  type TOrderInfo = {
    price: number;
    selectedProduct: string;

    sender: string;
    email: string;
    receiver: string;
    country: string;
    street: string;
    aptNum: number;
    postalCode: number;
    city: string;
    county: string;
  };

  const paypal = createRef<HTMLDivElement>();
  useEffect(() => {
    const addPaypalScript = () => {
      if (window.paypal || scriptLoaded) {
        setScriptLoaded(true);
        return;
      }
      const script = document.createElement("script");
      const sandBoxID =
        "AVZHH3-rASeJ1CS6C08MkrX11WmvSVK8wHNDx_w0wqzqzstBKZ44NcyCyIA_ZoRCK8YjWxps9Js9JN2A";
      script.src = `https://www.paypal.com/sdk/js?client-id=${sandBoxID}&currency=EUR`;
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  useEffect(() => {
    if (scriptLoaded) return;
    window.paypal
      ?.Buttons({
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: data.selectedProduct,
                amount: {
                  currency_code: "EUR",
                  value: 33.5,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);
          addOrderToFirebase();
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [scriptLoaded]);

  const addOrderToFirebase = () => {
    // 결제 성공 시
    const fileListRef = collection(db, "order");
    addDoc(fileListRef, {
      price: data.selectedProduct == "Gwaja Box" ? 29.5 : 33.5,
      product: data.selectedProduct,
      email: data.email,
      tracking: null,
      createDate: new Date(),
      sender: data.sender,
      receiver: data.receiver,
      country: data.country,
      additional: null,
      street: data.street,
      aptNum: data.aptNum,
      postalCode: data.postalCode,
      city: data.city,
      county: data.county || null,
    })
      .then((docRef) => {
        // orderID 이메일로도 보내기, my order에서 조회 가능
        const id = docRef.id;
        navigate("/orderR", {
          state: { id },
        });
      })
      .catch((err) => {
        alert("Error : " + err);
      });
  };

  return (
    <div className="page checkOut">
      <div className="order-product">
        <img src={order1} />
        <div className="order-product-right">
          <h3>{data.selectedProduct}</h3>
          <ul>
            <li>15+ Korean Snacks</li>
            <li>Free tracked shipping</li>
            <li>Size of the box: 35*25*10(cm)</li>
            {data.selectedProduct === "Gwaja Box with K-merch" && (
              <li>
                10+ K-pop & Korean Merch <br />
                (ex. PostCard, Sticker, Face Mask)
              </li>
            )}
          </ul>
          <span>€{data.price}</span>
        </div>
      </div>
      <div className="myorder-info">
        <div className="myorder-info-detail">
          <h5>My Order</h5>
          <p>
            Name : {data?.sender}
            <br />
          </p>
        </div>
        <div className="myorder-info-address">
          <h5>Shipping Address</h5>
          <p>
            {data?.receiver}
            <br />
            {data?.street}
            {data?.aptNum}
            <br />
            {data?.city}
            {data?.county && `, ${data?.county}`}
            <br />
            {data?.postalCode}
            <br />
            {data?.country}
          </p>
        </div>
      </div>

      <div ref={paypal} className="paypal"></div>
    </div>
  );
}
export default CheckOut;
