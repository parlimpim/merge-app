import { fireEvent, render } from "@testing-library/react";
import { DEFAULT } from "../../utils/constants";
import en from "../../utils/en";
import Home from "../../pages/Home";

const { ERROR, HOME } = en;

describe("<Home />", () => {
  it("render", () => {
    const { getByText } = render(<Home />);

    // title
    expect(getByText(HOME.TITLE)).toBeTruthy();

    // 3 array
    [...Array(3)].forEach((_, i) => {
      expect(getByText(`Array ${i + 1}`)).toBeTruthy();
    });
  });

  it("use default and merge", () => {
    const { container, getByText } = render(<Home />);

    // each input should be empty at beginning
    [...Array(3)].forEach((_, i) => {
      const input: HTMLInputElement = container.querySelector(
        `#array${i + 1}-input`
      )!;
      expect(input).toBeTruthy();
      expect(input.value).toBe("");
    });

    // click on use default btn
    const useDefaultBtn = container.querySelector("#use-default-button")!;
    expect(useDefaultBtn).toBeTruthy();
    fireEvent.click(useDefaultBtn);

    // should have value in input
    [...Array(3)].forEach((_, i) => {
      const key = `ARRAY_${i + 1}` as keyof typeof DEFAULT;
      const input: HTMLInputElement = container.querySelector(
        `#array${i + 1}-input`
      )!;
      expect(input).toBeTruthy();
      expect(input.value).toBe(DEFAULT[key]);
    });

    // click on merge btn
    const mergeBtn = container.querySelector("#merge-button")!;
    expect(mergeBtn).toBeTruthy();
    fireEvent.click(mergeBtn);

    // merged array should be sorted
    expect(getByText("Result")).toBeTruthy();
    const mergedArray = container.querySelectorAll(".item");
    mergedArray.forEach((item, i) => {
      expect(item.textContent).toBe(String(DEFAULT.MERGED_ARRAY[i]));
    });
  });

  it("have alphabet and should show error", () => {
    const { container, getByText } = render(<Home />);

    const val1 = "8, 3";
    const val2 = "2, 5, a"; // have alphabet
    const val3 = "1, 6";

    // change input array 1
    const input1: HTMLInputElement = container.querySelector("#array1-input")!;
    expect(input1).toBeTruthy();
    fireEvent.change(input1, { target: { value: val1 } });

    // change input array 2
    const input2: HTMLInputElement = container.querySelector("#array2-input")!;
    expect(input2).toBeTruthy();
    fireEvent.change(input2, { target: { value: val2 } });

    // change input array 3
    const input3: HTMLInputElement = container.querySelector("#array3-input")!;
    expect(input3).toBeTruthy();
    fireEvent.change(input3, { target: { value: val3 } });

    // click on merge btn
    const mergeBtn = container.querySelector("#merge-button")!;
    expect(mergeBtn).toBeTruthy();
    fireEvent.click(mergeBtn);

    // should show error have alphabet
    expect(getByText("Error")).toBeTruthy();
    expect(getByText(ERROR.INCORRECT)).toBeTruthy();
  });

  it("not sorted and should show error", () => {
    const { container, getByText } = render(<Home />);

    const val1 = "8, 3";
    const val2 = "2, 5";
    const val3 = "1, 6, 4"; // not sort

    // change input array 1
    const input1: HTMLInputElement = container.querySelector("#array1-input")!;
    expect(input1).toBeTruthy();
    fireEvent.change(input1, { target: { value: val1 } });

    // change input array 2
    const input2: HTMLInputElement = container.querySelector("#array2-input")!;
    expect(input2).toBeTruthy();
    fireEvent.change(input2, { target: { value: val2 } });

    // change input array 3
    const input3: HTMLInputElement = container.querySelector("#array3-input")!;
    expect(input3).toBeTruthy();
    fireEvent.change(input3, { target: { value: val3 } });

    // click on merge btn
    const mergeBtn = container.querySelector("#merge-button")!;
    expect(mergeBtn).toBeTruthy();
    fireEvent.click(mergeBtn);

    // should show error not sorted
    expect(getByText("Error")).toBeTruthy();
    expect(getByText(ERROR.NOT_SORTED)).toBeTruthy();
  });

  it("clear 3 arrays", () => {
    const { container, getByText, queryByText } = render(<Home />);

    const val1 = "8, 3";
    const val2 = "2, 5";
    const val3 = "1, 6";

    // change input array 1
    const input1: HTMLInputElement = container.querySelector("#array1-input")!;
    expect(input1).toBeTruthy();
    fireEvent.change(input1, { target: { value: val1 } });

    // change input array 2
    const input2: HTMLInputElement = container.querySelector("#array2-input")!;
    expect(input2).toBeTruthy();
    fireEvent.change(input2, { target: { value: val2 } });

    // change input array 3
    const input3: HTMLInputElement = container.querySelector("#array3-input")!;
    expect(input3).toBeTruthy();
    fireEvent.change(input3, { target: { value: val3 } });

    // click on merge btn
    const mergeBtn = container.querySelector("#merge-button")!;
    expect(mergeBtn).toBeTruthy();
    fireEvent.click(mergeBtn);

    // should show result
    expect(getByText("Result")).toBeTruthy();

    // click on clear btn
    const clearBtn = container.querySelector("#clear-button")!;
    expect(clearBtn).toBeTruthy();
    fireEvent.click(clearBtn);

    // each input should be empty
    [...Array(3)].forEach((_, i) => {
      const input: HTMLInputElement = container.querySelector(
        `#array${i + 1}-input`
      )!;
      expect(input).toBeTruthy();
      expect(input.value).toBe("");
    });

    // should not show result
    expect(queryByText("Result")).toBeFalsy();
  });
});
