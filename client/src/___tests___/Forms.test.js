import { render, screen } from "@testing-library/react";
import CheckBalance from "../views/CheckBalance";
import GetToken from "../views/GetToken";

const buyPageSetup = () => {
  const utils = render(<GetToken />);
  const meterInput = utils.getByPlaceholderText("Meter number");
  const amountInput = utils.getByPlaceholderText(/Amount/i);
  return {
    meterInput,
    amountInput,
    ...utils,
  };
};

const balancePageSetup = () => {
  const utils = render(<CheckBalance />);
  const meterInput = utils.getByPlaceholderText("Meter number");
  const amountInput = utils.getByPlaceholderText(/Amount/i);
  return {
    meterInput,
    amountInput,
    ...utils,
  };
};

test("It should show an error below amount input", () => {
  const { meterInput } = buyPageSetup();
  fireEvent.change(input, { target: { value: "234" } });
  expect(
    screen.getByText("Amount must be a multiple of 100 and less than 182,500")
  ).toBeInTheDocument();
});

test("It should show an error below meter number input", () => {
  const { meterInput } = buyPageSetup();
  fireEvent.change(input, { target: { value: "123" } });
  expect(
    screen.getByText("Invalid meter, only 6 digits accepted")
  ).toBeInTheDocument();
});

test("It should show an error below meter number input", () => {
  const { meterInput } = balancePageSetup();
  fireEvent.change(input, { target: { value: "123" } });
  expect(screen.getByText("Your meter is invalid")).toBeInTheDocument();
});
