import Header from "../src/components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../src/utils/appStore";
import "@testing-library/jest-dom";

it("Login should be rendered in the Header", () => {
  render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
  );
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
});

it("Cart should be rendered in the Header", () => {
  render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
  );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
});

it(" should change Login button to Logout", () => {
  render(
    <Provider store={appStore}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
  );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();    
});