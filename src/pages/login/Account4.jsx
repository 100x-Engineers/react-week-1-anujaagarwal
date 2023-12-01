import React from "react";
import StepHeader from "../../components/StepHeader";
import Heading from "../../components/Heading";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Account4() {
  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto">
      <div>
        <StepHeader step={4} />
        <main>
          <Heading title="You'll need a password" />
          <p className="text-neutral-500 ml-4">
            Make sure it’s 8 characters or more
          </p>
          <Fieldset type="password" text="Password" />
        </main>
        <footer className="mt-95 ml-6">
          <Link to="/HomeFeed">
            <Button variant="default" type="black" children="Next" size="lg" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
