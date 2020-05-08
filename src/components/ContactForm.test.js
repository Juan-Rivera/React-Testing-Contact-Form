import React from "react";
import { render } from "@testing-library/react";
import ContactForm from './ContactForm';

test("Renders ContactForm without crashing", () => {
    render(<ContactForm />); 
  });

  