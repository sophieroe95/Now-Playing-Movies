import React from "react";
import { render } from "@testing-library/react";
import FeedbackPanel from "./FeedbackPanel";

describe("FeedbackPanel tests", () => {
  it("should render", () => {
    expect(render(<FeedbackPanel />)).toBeTruthy();
  });
});
