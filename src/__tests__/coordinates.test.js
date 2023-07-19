import { coordinates } from "../coordinates";
import { targetPositions } from "../targetPositions";

describe("coordinates", () => {
  describe("validate", () => {
    it("Returns false when passed invalid coordinates.", () => {
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

    it("Returns true when passed valid coordinates.", () => {
      const coords1 = {
        x: 1430,
        y: 1800,
      };

      const coords2 = {
        x: 1410,
        y: 1820,
      };

      expect(
        coordinates.validate(targetPositions.chameleon, coords1)
      ).toBeTruthy();
      expect(
        coordinates.validate(targetPositions.chameleon, coords2)
      ).toBeTruthy();
    });
  });

  describe("convert.", () => {
    const coords = {
      x: 514,
      y: 396,
    };

    const currentImgSize = {
      width: 1068,
      height: 688,
    };

    it("Correctly converts a given set of coordinates.", () => {
      const convertedSet = {
        x: coordinates.convert(coords, currentImgSize).x,
        y: coordinates.convert(coords, currentImgSize).y,
      };

      expect(convertedSet.x).toEqual(1458);
      expect(convertedSet.y).toEqual(868);
    });
  });
});
