import { render } from "@testing-library/react";
import Hero from "components/Hero";

test("hero exist", () => {
  render(<Hero src="" name="Hulk" description="" id={1} />);
  const element = document.getElementById("1");

  expect([element].length).toBe(1);
});
