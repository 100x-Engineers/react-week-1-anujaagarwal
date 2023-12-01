import React from "react";
import StepHeader from "../../components/StepHeader";
import { Link } from "react-router-dom";

import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { UserContext } from "../../contexts/user/UserProvider";
import { useContext } from "react";

export default function Account3() {
  const data = useContext(UserContext);
  const values = data.formData;

  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto">
      <div>
        <StepHeader step={3} />
        <main>
          <Heading title="We sent you a code" />
          <p className="text-neutral-500 ml-4">
            Enter it below to verify {values.email}
          </p>
          <Fieldset text="Verification code" type="text" />
          <p className="text-right text-sm font-normal text-twitter-blue mt-3 mr-4">
            Didn't receive a code?
          </p>
        </main>
        <footer className="mt-95 ml-6">
          <Link to="./Account3">
            <Button variant="default" type="black" size="lg" children="Next" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
