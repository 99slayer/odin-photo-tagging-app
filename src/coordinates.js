export const coordinates = {
  validate(targetRange, coordinates) {
    let isValid = {
      x: null,
      y: null,
    };

    if (
      coordinates.x >= targetRange.x.low &&
      coordinates.x <= targetRange.x.high
    ) {
      isValid.x = true;
    }

    if (
      coordinates.y >= targetRange.y.low &&
      coordinates.y <= targetRange.y.high
    ) {
      isValid.y = true;
    }

    if (isValid.x && isValid.y) {
      return true;
    } else {
      return false;
    }
  },
  convert(coordinates, currentImageSize) {
    const defaultWidth = 3030;
    const defaultHeight = 1952;
    const headerHeight = 80 + 10;
    const convertedCoordinates = {
      x: Math.round(defaultWidth * (coordinates.x / currentImageSize.width)),
      y: Math.round(
        defaultHeight *
          ((coordinates.y - headerHeight) / currentImageSize.height)
      ),
    };

    return convertedCoordinates;
  },
};
