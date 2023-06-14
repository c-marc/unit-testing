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
  const tab = [1, 2, 3];
  // const mockFn = jest.fn();
  const mockFn = jest.fn((x) => x);
  const result = filter(tab, mockFn);
  expect(mockFn).toHaveBeenNthCalledWith(3, 1, 2, 3);
});
