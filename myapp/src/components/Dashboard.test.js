import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App";
import { fireEvent } from "@testing-library/react/dist";


  it('renders without errors', () => {
    const queries = render(<App />)
  })

  it('renders balls', () => {
    const { getByText } = render(<App />);

    getByText(/Balls:/i)
  })

  describe('Balls Button', () => {
    it('increments balls from 0-3 and resets strike/balls upon the 4th ball', () => {
      const { getByText, queryByText } = render(<App />);
      // find the button
      const button = getByText(/balls:/i)

      fireEvent.click(button)

      expect(queryByText(/))

    })
  })