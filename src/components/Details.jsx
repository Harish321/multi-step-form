import { useEffect } from "react";

function PersonalDetails({
  details,
  dirtyDetails,
  updateDetails,
  updateDirtyDetails,
  updateStepDirty,
}) {
  useEffect(() => {
    let isStepDirty = Object.values(dirtyDetails).some(Boolean);
    updateStepDirty(isStepDirty);
  }, [dirtyDetails]);
  return (
    <div className="details-form">
      <div className="detail">
        <input
          name="firstname"
          required={true}
          className={
            (dirtyDetails.firstName ? "error-form" : "") + " form-control"
          }
          value={details.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            updateDetails({ ...details, firstName });
          }}
          onBlur={(event) => {
            const firstName = event.target.value;
            if (firstName)
              updateDirtyDetails({ ...dirtyDetails, firstName: false });
            else updateDirtyDetails({ ...dirtyDetails, firstName: true });
          }}
          placeholder="First Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className={
            (dirtyDetails.lastName ? "error-form" : "") + " form-control"
          }
          value={details.lastName ?? ""}
          onChange={(event) => {
            const lastName = event.target.value;
            updateDetails({ ...details, lastName });
          }}
          onBlur={(event) => {
            const lastName = event.target.value;
            if (lastName)
              updateDirtyDetails({ ...dirtyDetails, lastName: false });
            else updateDirtyDetails({ ...dirtyDetails, lastName: true });
          }}
          placeholder="Last Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className={(dirtyDetails.age ? "error-form" : "") + " form-control"}
          value={details.age ?? ""}
          onChange={(event) => {
            const age = event.target.value;
            updateDetails({ ...details, age });
          }}
          onBlur={(event) => {
            const age = event.target.value;
            if (age) updateDirtyDetails({ ...dirtyDetails, age: false });
            else updateDirtyDetails({ ...dirtyDetails, age: true });
          }}
          placeholder="Age"
        ></input>
      </div>

      <div className="detail">
        <input
          className={
            (dirtyDetails.gender ? "error-form" : "") + " form-control"
          }
          value={details.gender ?? ""}
          onChange={(event) => {
            const gender = event.target.value;
            updateDetails({ ...details, gender });
          }}
          onBlur={(event) => {
            const gender = event.target.value;
            if (gender) updateDirtyDetails({ ...dirtyDetails, gender: false });
            else updateDirtyDetails({ ...dirtyDetails, gender: true });
          }}
          placeholder="Gender"
        ></input>
      </div>

      <div className="detail">
        <input
          name="city"
          required={true}
          className={(dirtyDetails.city ? "error-form" : "") + " form-control"}
          value={details.city}
          onChange={(event) => {
            const city = event.target.value;
            updateDetails({ ...details, city });
          }}
          onBlur={(event) => {
            const city = event.target.value;
            if (city) updateDirtyDetails({ ...dirtyDetails, city: false });
            else updateDirtyDetails({ ...dirtyDetails, city: true });
          }}
          placeholder="City"
        ></input>
      </div>

      <div className="detail">
        <input
          name="pincode"
          required={true}
          className={
            (dirtyDetails.pincode ? "error-form" : "") + " form-control"
          }
          value={details.pincode}
          onChange={(event) => {
            const pincode = event.target.value;
            updateDetails({ ...details, pincode });
          }}
          onBlur={(event) => {
            const pincode = event.target.value;
            if (pincode)
              updateDirtyDetails({ ...dirtyDetails, pincode: false });
            else updateDirtyDetails({ ...dirtyDetails, pincode: true });
          }}
          placeholder="Pincode"
        ></input>
      </div>
    </div>
  );
}

function EducationDetails({
  details,
  updateDetails,
  dirtyDetails,
  updateDirtyDetails,
  updateStepDirty,
}) {
  useEffect(() => {
    let isStepDirty = Object.values(dirtyDetails).some(Boolean);
    updateStepDirty(isStepDirty);
  }, [dirtyDetails]);

  return (
    <div className="details-form">
      <div className="detail">
        <input
          name="firstname"
          required={true}
          className={
            (dirtyDetails.firstName ? "error-form" : "") + " form-control"
          }
          value={details.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            updateDetails({ ...details, firstName });
          }}
          onBlur={(event) => {
            const firstName = event.target.value;
            if (firstName)
              updateDirtyDetails({ ...dirtyDetails, firstName: false });
            else updateDirtyDetails({ ...dirtyDetails, firstName: true });
          }}
          placeholder="First Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.lastName ?? ""}
          onChange={(event) => {
            const lastName = event.target.value;
            updateDetails({ ...details, lastName });
          }}
          onBlur={(event) => {
            const lastName = event.target.value;
            if (lastName)
              updateDirtyDetails({ ...dirtyDetails, lastName: false });
            else updateDirtyDetails({ ...dirtyDetails, lastName: true });
          }}
          placeholder="Last Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.age ?? ""}
          onChange={(event) => {
            const age = event.target.value;
            updateDetails({ ...details, age });
          }}
          onBlur={(event) => {
            const age = event.target.value;
            if (age) updateDirtyDetails({ ...dirtyDetails, age: false });
            else updateDirtyDetails({ ...dirtyDetails, age: true });
          }}
          placeholder="Age"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.gender ?? ""}
          onChange={(event) => {
            const gender = event.target.value;
            updateDetails({ ...details, gender });
          }}
          onBlur={(event) => {
            const gender = event.target.value;
            if (gender) updateDirtyDetails({ ...dirtyDetails, gender: false });
            else updateDirtyDetails({ ...dirtyDetails, gender: true });
          }}
          placeholder="Gender"
        ></input>
      </div>
    </div>
  );
}

function ProfessionalDetails({
  details,
  updateDetails,
  dirtyDetails,
  updateDirtyDetails,
  updateStepDirty,
}) {
  useEffect(() => {
    let isStepDirty = Object.values(dirtyDetails).some(Boolean);
    updateStepDirty(isStepDirty);
  }, [dirtyDetails]);

  return (
    <div className="details-form">
      <div className="detail">
        <input
          name="firstname"
          required={true}
          className={
            (dirtyDetails.firstName ? "error-form" : "") + " form-control"
          }
          value={details.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            updateDetails({ ...details, firstName });
          }}
          onBlur={(event) => {
            const firstName = event.target.value;
            if (firstName)
              updateDirtyDetails({ ...dirtyDetails, firstName: false });
            else updateDirtyDetails({ ...dirtyDetails, firstName: true });
          }}
          placeholder="First Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.lastName ?? ""}
          onChange={(event) => {
            const lastName = event.target.value;
            updateDetails({ ...details, lastName });
          }}
          onBlur={(event) => {
            const lastName = event.target.value;
            if (lastName)
              updateDirtyDetails({ ...dirtyDetails, lastName: false });
            else updateDirtyDetails({ ...dirtyDetails, lastName: true });
          }}
          placeholder="Last Name"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.age ?? ""}
          onChange={(event) => {
            const age = event.target.value;
            updateDetails({ ...details, age });
          }}
          onBlur={(event) => {
            const age = event.target.value;
            if (age) updateDirtyDetails({ ...dirtyDetails, age: false });
            else updateDirtyDetails({ ...dirtyDetails, age: true });
          }}
          placeholder="Age"
        ></input>
      </div>

      <div className="detail">
        <input
          className="form-control"
          value={details.gender ?? ""}
          onChange={(event) => {
            const gender = event.target.value;
            updateDetails({ ...details, gender });
          }}
          onBlur={(event) => {
            const gender = event.target.value;
            if (gender) updateDirtyDetails({ ...dirtyDetails, gender: false });
            else updateDirtyDetails({ ...dirtyDetails, gender: true });
          }}
          placeholder="Gender"
        ></input>
      </div>
    </div>
  );
}

export { PersonalDetails, EducationDetails, ProfessionalDetails };
