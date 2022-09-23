import { useState } from "react";
import { Nextbutton, PreviousButton, SubmitButton } from "./components/Actions";
import {
  PersonalDetails,
  EducationDetails,
  ProfessionalDetails,
} from "./components/Details";
import PdfDownloader from "./components/PdfDownloader";

import Step from "./components/Step";

function App() {
  const [state, setState] = useState({
    personalDetails: {},
    educationDetails: {},
    professionalDetails: {},
  });
  const [dirtyState, setDirtyState] = useState({
    personalDetails: {},
    educationDetails: {},
    professionalDetails: {},
  });

  const [dirtyStep, setDirtyStep] = useState({
    personalDetails: false,
    educationDetails: false,
    professionalDetails: false,
  });
  const [currentPage, setCurrentPage] = useState("personal-details");
  const [downladPage, setDownloadPage] = useState(true);

  let form = (
    <>
      <div
        className={currentPage != "personal-details" ? "hide-step-details" : ""}
      >
        <PersonalDetails
          details={state.personalDetails}
          updateDetails={(personalDetails) => {
            setState({ ...state, personalDetails });
          }}
          dirtyDetails={dirtyState.personalDetails}
          updateDirtyDetails={(personalDetails) => {
            setDirtyState({ ...dirtyState, personalDetails });
          }}
          updateStepDirty={(value) => {
            setDirtyStep({ ...dirtyStep, personalDetails: value });
          }}
        />
      </div>
      <div
        className={
          currentPage != "education-details" ? "hide-step-details" : ""
        }
      >
        <EducationDetails
          details={state.educationDetails}
          updateDetails={(educationDetails) => {
            setState({ ...state, educationDetails });
          }}
          dirtyDetails={dirtyState.educationDetails}
          updateDirtyDetails={(educationDetails) => {
            setDirtyState({ ...dirtyState, educationDetails });
          }}
          updateStepDirty={(value) => {
            setDirtyStep({ ...dirtyStep, educationDetails: value });
          }}
        />
      </div>
      <div
        className={
          currentPage != "professional-details" ? "hide-step-details" : ""
        }
      >
        <ProfessionalDetails
          details={state.professionalDetails}
          updateDetails={(professionalDetails) => {
            setState({ ...state, professionalDetails });
          }}
          dirtyDetails={dirtyState.professionalDetails}
          updateDirtyDetails={(professionalDetails) => {
            setDirtyState({ ...dirtyState, professionalDetails });
          }}
          updateStepDirty={(value) => {
            setDirtyStep({ ...dirtyStep, professionalDetails: value });
          }}
        />
      </div>
    </>
  );

  let actions = null;

  switch (currentPage) {
    case "personal-details":
      actions = (
        <div
          className="action-section"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Nextbutton onClick={() => setCurrentPage("education-details")} />
        </div>
      );
      break;
    case "education-details":
      actions = (
        <div
          className="action-section"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <PreviousButton onClick={() => setCurrentPage("personal-details")} />
          <Nextbutton onClick={() => setCurrentPage("professional-details")} />
        </div>
      );
      break;
    case "professional-details":
      actions = (
        <div
          className="action-section"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <PreviousButton onClick={() => setCurrentPage("education-details")} />
          <SubmitButton onClick={() => {}} />
        </div>
      );
      break;
  }

  let downloadCompo = downladPage ? <PdfDownloader details={state} /> : <></>;

  return (
    <form className="container">
      <div className="container-header">Life Story</div>
      <div className="steps-section">
        <Step
          index={1}
          name={"Personal Details"}
          isActive={currentPage == "personal-details"}
          onClick={() => {
            setCurrentPage("personal-details");
          }}
          isDirty={dirtyStep.personalDetails}
        />
        <Step
          index={2}
          name={"Education Details"}
          isActive={currentPage == "education-details"}
          onClick={() => {
            setCurrentPage("education-details");
          }}
          isDirty={dirtyStep.educationDetails}
        />
        <Step
          index={3}
          name={"Professional Details"}
          isActive={currentPage == "professional-details"}
          onClick={() => {
            setCurrentPage("professional-details");
          }}
          isDirty={dirtyStep.professionalDetails}
        />
      </div>
      <div className="form-section">{form}</div>
      <div className="action-container">{actions}</div>
      <div className="download-container">{downloadCompo}</div>
    </form>
  );
}

export default App;
