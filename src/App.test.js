import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders correcly", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
