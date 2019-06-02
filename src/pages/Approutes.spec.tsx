import React from "react";
import { render } from "testUtils";
import AppRoutes from "./AppRoutes";

describe("AppRoutes", () => {
  it("renders without crashing", async () => {
    const utils = render(<AppRoutes />);

    const el = await utils.findByText("Hi");

    expect(el).not.toBeUndefined();
  });
});
