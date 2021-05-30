// DISABLED@ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

// TODO Add to README: Requires peer dependency of @asu-design-system/bootstrap4-theme
// We import the styles in .storybook/preview.js for Storybook rendering, but
// otherwise, we only worry about using the correct markup and tweaking a few
// styles.

import { RfiMainForm } from "../stepper/RfiMainForm";
import "./AsuRfi.css";

const AsuRfi = ({
  Campus,
  College,
  Department,
  StudentType,
  AreaOfInterest,
  ProgramOfInterest,
  ProgramOfInterestOptional,
  IsCertMinor,
  Country,
  StateProvince,
  SuccessMsg,
  Test,
}) => {
  return (
    <div>
      <RfiMainForm
        Campus={Campus}
        College={College}
        Department={Department}
        StudentType={StudentType}
        AreaOfInterest={AreaOfInterest}
        ProgramOfInterest={ProgramOfInterest}
        ProgramOfInterestOptional={ProgramOfInterestOptional}
        IsCertMinor={IsCertMinor}
        Country={Country}
        StateProvince={StateProvince}
        SuccessMsg={SuccessMsg}
        Test={Test}
      />
    </div>
  );
};

export default AsuRfi;

// Props
AsuRfi.defaultProps = {
  Campus: undefined,
  College: undefined,
  Department: undefined,
  StudentType: undefined,
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined,
  SuccessMsg: "Success.",
  Test: false,
};

AsuRfi.propTypes = {
  Campus: PropTypes.string,
  College: PropTypes.string,
  Department: PropTypes.string,
  StudentType: PropTypes.string,
  AreaOfInterest: PropTypes.string,
  ProgramOfInterest: PropTypes.string,
  ProgramOfInterestOptional: PropTypes.bool,
  IsCertMinor: PropTypes.bool,
  Country: PropTypes.string,
  StateProvince: PropTypes.string,
  SuccessMsg: PropTypes.string,
  Test: PropTypes.bool,
};
