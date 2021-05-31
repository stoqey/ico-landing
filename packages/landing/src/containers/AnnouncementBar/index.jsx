import React, { useState } from "react";
import { Wrapper } from "./style";

export const AnnouncementBar = () => {
  const [show, setShow] = useState(true);

  const close = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <Wrapper>
      <div id="hellobar-bar" className="regular closable">
        <div className="hb-content-wrapper">
          {/* <div className="hb-text-wrapper">
            <div className="hb-headline-text">
              <p>
                <span>How to invest 💃💃💃</span>
              </p>
            </div>
          </div> */}
          {/* <a
            href="https://app.stoqey.com/blog/how-to-invest"
            target="_blank"
            className="hb-cta hb-cta-button"
          >
            <div className="hb-text-holder">
              <p>Product Hunt 🚀</p>
            </div>
          </a> */}

          <a
            href="https://app.stoqey.com/blog/how-to-invest"
            target="_blank"
            className="hb-cta hb-cta-button"
          >
            <div className="hb-text-holder">
              <p>How to invest 💃💃💃</p>
            </div>
          </a>

          <a
            href="https://app.stoqey.com/blog/withdraw"
            target="_blank"
            className="hb-cta hb-cta-button"
            style={{ marginLeft: 10 }}
          >
            <div className="hb-text-holder">
              <p>How to Withdraw 🤑🤑🤑</p>
            </div>
          </a>
          
        </div>
        <div className="hb-close-wrapper">
          <a href="javascript:void(0);" className="icon-close" onClick={close}>
            ✖
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default AnnouncementBar;
