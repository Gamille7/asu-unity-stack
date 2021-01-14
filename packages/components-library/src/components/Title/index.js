/** @jsx h */
/** @jsxFrag Fragment */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import { forwardRef, useEffect, useState } from "preact/compat";
import { checkFirstLoad } from "../../helpers";
import PropTypes from "prop-types";

/**
 * Title component
 */
const Title = forwardRef(({ children, baseUrl, animate, ...props }, ref) => {
  // state to control animating the title upon first site page load
  const [active, setActive] = useState(false);

  /**
   * Upon mounting, check if this is the first page loaded by the user for this site. If it is
   * the first page load, then we set the 'active' state to animate the header with gold highlight.
   */
  useEffect(() => {
    if (animate === true || animate === false) {
      setActive(animate);
      return;
    }

    if (animate !== false) {
      // If a custom baseUrl is passed in, it will be used to check for first page load
      let root = baseUrl == "/" ? window.location.hostname : baseUrl;

      // If relative baseURL given, append to the hostname for checking first page load
      if (!root.includes(window.location.hostname) && root.indexOf("/") === 0) {
        root = window.location.hostname + root;
      }

      if (checkFirstLoad(root)) {
        setActive(true);
      }
    }
  }, [active, animate, baseUrl]);

  return (
    <S.Title
      ref={ref}
      {...props}
      class={active ? "active" : ""}
      baseUrl={baseUrl}
    >
      {children}
    </S.Title>
  );
});

Title.propTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
  animate: PropTypes.bool, // If set false, will never animate (highlight title). If set true, will animate in any case
};

Title.defaultProps = {
  baseUrl: "/",
  parentOrgUrl: "/",
};

export { Title };
