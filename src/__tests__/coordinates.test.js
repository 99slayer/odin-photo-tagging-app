import { coordinates } from "../coordinates";
import { targetPositions } from "../targetPositions";

describe("coordinates", () => {
  describe("validate", () => {
    it("returns false when passed invalid coordinates", () => {
      const coords1 = {
        x: 1213,
        y: 1500,
      };

      const coords2 = {
        x: 1413,
        y: 1907,
      };

      expect(
        coordinates.validate(targetPositions.chameleon, coords1)
      ).toBeFalsy();
      expect(
        coordinates.validate(targetPositions.chameleon, coords2)
      ).toBeFalsy();
    });

    it("returns true when passed valid coordinates", () => {
      const coords1 = {
        x: 1430,
        y: 1930,
      };

      const coords2 = {
        x: 1455,
        y: 1967,
      };

      expect(
        coordinates.validate(targetPositions.chameleon, coords1)
      ).toBeTruthy();
      expect(
        coordinates.validate(targetPositions.chameleon, coords2)
      ).toBeTruthy();
    });
  });
});
