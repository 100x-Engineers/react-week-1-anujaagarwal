import Fieldset from "../../components/Fieldset";
import DatePicker from "../../components/DatePicker";
import StepHeader from "../../components/StepHeader";
import Button from "../../components/Button";
import { useState } from "react";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";

export default function Account1() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    day: 1,
    month: 0,
    year: 1980,
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Basic validation
    if (!inputValues.name.trim()) {
      alert("Please enter a name.");
      return;
    }

    if (!inputValues.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    console.log("Form submitted with:", inputValues);
  };
  const handleInputChange = (name, value) => {
    setInputValues((inputValues) => {
      return { ...inputValues, [name]: value };
    });
  };

  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto">
      <div>
        <StepHeader step={1} />
        <form onSubmit={handleSubmit}>
          <main className="mt-3">
            <Heading title="Create your account" />
            <Fieldset
              type="text"
              text="Name"
              inputValue={inputValues.name}
              onInputChange={(value) => handleInputChange("name", value)}
            />
            <Fieldset
              type="email"
              text="Email"
              inputValue={inputValues.email}
              onInputChange={(value) => handleInputChange("email", value)}
            />
            <p className="text-neutral-50 text-base font-bold mt-8 ml-4">
              Date of birth
            </p>
            <p className="text-twitter-white-100 text-sm font-normal self-stretch ml-4">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <DatePicker handleInputChange={handleInputChange} />
          </main>
          <footer className="mt-72 ml-6">
            <Link to="./Account2">
              <Button
                variant="default"
                children="Create Account"
                type="black"
                size="lg"
                isDisabled={false}
              />
            </Link>
          </footer>
        </form>
      </div>
    </div>
  );
}
