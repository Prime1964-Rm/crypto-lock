import React from "react";
import Button from "../../components/Button.component/Button";
import Typography from "../../components/Typography";
import "./home.scss";

import { CryptoMain } from "../../assets/lotties";
import LottieRenderer from "../../components/LottieRenderer";
import { COLORS } from "../../styles";
import CryptoCard from "./components/CryptoCard.Component/CryptoCard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { LinkAc } from "../../assets/svg";
import StepperBtn from "./components/stepperbtn/StepperBtn";

const HomeView = () => {
  const iconStyle = {
    padding: "1rem",
    borderRadius: "40%",
    display: "flex",
    justifyContent: "center",
    width: "60px"
  };

  return (
    <div className="home-container">
      <div className="section-1">
        <div className="caption-container">
          <div className="caption">
            <h1>
              Buy & Sell
              <br /> Crypto In Minutes
            </h1>
            <h6>
              Trade Bitcoin,Etherium,USDT and top altcoins on our crypto lock
              <br /> asset exchange
            </h6>
            <Button
              size="md"
              backgroundColor={COLORS.blue}
              color={COLORS.light}
              fontWeight={500}
            >
              Get started <i class="fas fa-arrow-right"></i>
            </Button>
            <h4 className="scroll-arrow-down">
              <i class="fas fa-arrow-down" style={{ color: COLORS.minor }}></i>
            </h4>
          </div>
        </div>
        <div>
          <LottieRenderer height={550} width={550} animationData={CryptoMain} />
        </div>
      </div>

      <div className="section-2">
        <div className="crypto-highlights">
          <h1>Today's Highlights</h1>
          <p>
            Cryptolock supports a variety of most popular digital currencies
          </p>
          <div className="custom-underline"></div>
          <div className="highlights-grp">
            <CryptoCard />
            <CryptoCard />
            <CryptoCard />
            <CryptoCard />
          </div>
        </div>
        <div className="get-started">
          <h1>Get Started in few Minutes</h1>
          <p>
            Cryptolock supports a variety of most popular digital currencies
          </p>
          <div className="custom-underline"></div>
          <div className="get-started-tab-grp">
            <StepperBtn
              iconClassName="fas fa-user fa-2x"
              iconStyle={{
                ...iconStyle,
                background: "linear-gradient(#3d5afe, #8c9eff)"
              }}
              step={"create an account"}
            />
            <hr />

            <StepperBtn
              iconClassName="fas fa-link fa-2x"
              iconStyle={{
                ...iconStyle,
                background: "linear-gradient(#f44336, #ef9a9a)"
              }}
              step={"Link your bank account"}
            />
            <hr />
            <StepperBtn
              iconClassName="fas fa-briefcase fa-2x"
              iconStyle={{
                ...iconStyle,
                background: "linear-gradient(#00c853,#69f0ae )"
              }}
              step={"Start buying & selling"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
