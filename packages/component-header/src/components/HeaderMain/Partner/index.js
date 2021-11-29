import React from "react";

// @ts-ignore
import asuVertLogo from "../../../assets/images/arizona-state-university-logo-vertical.png";
// @ts-ignore
import asuHorizLogo from "../../../assets/images/arizona-state-university-logo.png";
import starbucksLogo from "../../../assets/images/asu-starbucks.png";
import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { PartnerLogosWrapper } from "./index.styles";

const Partner = () => {
  const { partnerLogo, logo: asuLogo, breakpoint } = useAppContext();

  return (
    <PartnerLogosWrapper breakpoint={breakpoint} data-testid="partner">
      <a
        href={partnerLogo?.brandLink ?? "https://starbucks.asu.edu/"}
        onFocus={() => trackGAEvent({ text: "starbucks logo" })}
      >
        <img
          src={partnerLogo?.src ?? starbucksLogo}
          alt={partnerLogo?.partnerLogo ?? "Asu Starbucks logo"}
        />
      </a>
      <a
        href={asuLogo?.brandLink ?? "https://asu.edu"}
        onFocus={() => trackGAEvent({ text: "asu logo" })}
      >
        <img
          className="vert"
          src={asuLogo?.src ?? asuVertLogo}
          alt={asuLogo?.alt ?? "Arizona State University"}
        />
        <img
          className="horiz"
          src={asuLogo?.mobileScr ?? asuHorizLogo}
          alt={asuLogo?.alt ?? "Arizona State University"}
        />
      </a>
    </PartnerLogosWrapper>
  );
};

export { Partner };
