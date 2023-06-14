const filter = require("../utils/filter");

it("filter returns the same table when predicate is true", () => {
  const tab = [1, 2, 3];
  const result = filter(tab, () => {
    return true;
  });
  expect(result).toEqual(tab);
});

it("filter returns an empty table when predicate is false", () => {
  const tab = [1, 2, 3];
  const result = filter(tab, () => {
    return false;
  });
  expect(result).toEqual([]);
});

it("filter is called correctly", () => {
  const tab = ["a", "b", "c"];
  const mockFn = jest.fn();
  const result = filter(tab, mockFn);
  expect(mockFn).toHaveBeenNthCalledWith(1, "a");
  expect(mockFn).toHaveBeenNthCalledWith(2, "b");
  expect(mockFn).toHaveBeenNthCalledWith(3, "c");
});

describe("filter works correctly", () => {
  it("filter true once", () => {
    const tab = ["a", "b", "c"];
    const filterMock = jest.fn();
    filterMock.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = filter(tab, filterMock);
    expect(result).toEqual(["a"]);
  });

  it("filter false once", () => {
    const tab = ["a", "b", "c"];
    const filterMock = jest.fn();
    filterMock.mockReturnValueOnce(false).mockReturnValueOnce(true);
    const result = filter(tab, filterMock);
    console.log(result); // only b
    expect(result).toEqual(["b", "c"]); // nope...
  });
});
