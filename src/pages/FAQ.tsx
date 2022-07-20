import React from "react";
import Collapsible from "react-collapsible";
import "../styles/FAQ.css";
function FAQ() {
  return (
    <div className="faq page">
      <div className="header">
        <h3>FAQ</h3>
        <span></span>
      </div>
      <div className="content">
        <Collapsible trigger="What is in the box?">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>
        <Collapsible trigger="Which countries do you ship to?">
          <p>
            This homepage is only for orders to EU countries. Please visit our
            <a
              target="_blank"
              href="https://www.etsy.com/listing/1029250115/korean-snack-gift-box?click_key=16eb7b9fcc8a406d1262f4ab6c3eaceb8a3338f5%3A1029250115&click_sum=e5588ff4&ref=shop_home_feat_3&frs=1"
            >
              Etsy Shop
            </a>
            to ship to other regions.
          </p>
        </Collapsible>
        <Collapsible trigger="How can I track my box?">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>
        <Collapsible trigger="How long will it take to arrive?">
          <p>
            After the order is placed, your box is immediately prepared and
            packed (within 1-3 business days) to be handed over to the delivery
            courier.
            <br />
            <br />
            DHL shipping : 2-7 business days
            <br />
            <br />
            If you haven't received your box by the expected arrival time,
            please contact your local post office by providing the tracking
            number or contact our support team via
            https://tokyotreat.com/contact/support.
          </p>
        </Collapsible>
        <Collapsible trigger="Is there a vegetarian or Halal option?">
          <p>
            Of course! As a company promoting diversity and rich cultures, we do
            our best to cater to different backgrounds and styles. Our Seoulbox
            V is both vegetarian and Halal. Please note that while not all
            products are officially Halal-certified, we have taken extra care
            and precaution to make sure the snacks are meat, alcohol and
            gelatine-free
          </p>
        </Collapsible>
        <Collapsible trigger="Can I get my product personalized?">
          <p>
            Of course! If you tell us what you want in the memo when you order,
            we'll reflect it as much as possible.
          </p>
        </Collapsible>
        <Collapsible trigger="">
          <p></p>
        </Collapsible>
        <Collapsible trigger="">
          <p></p>
        </Collapsible>
      </div>
    </div>
  );
}

export default FAQ;
