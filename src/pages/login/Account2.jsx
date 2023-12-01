import { Link } from "react-router-dom";
import React from "react";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import StepHeader from "../../components/StepHeader";
import Heading from "../../components/Heading";
import { useContext } from "react";
import { UserContext } from "../../contexts/user/UserProvider";
import { Months } from "../../components/DatePicker";

function Account2() {
  const data = useContext(UserContext);
  const values = data.formData;
  const DOB = `${values.day} ${Months[values.month]} ${values.year}`;
  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto">
      <div>
        <StepHeader step={2} />
        <main className="mt-3">
          <Heading title="Create your account" />
          <Fieldset text="Name" type="text" value={values.name} />
          <Fieldset text="Email" type="email" value={values.email} />
          <Fieldset text="Date of Birth" type="text" value={DOB} />
        </main>
        <footer className="mt-72 ml-6">
          <Link to="./Account3">
            <Button
              variant="primary"
              type="secondary"
              size="lg"
              children="Sign up"
            />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Account2;
