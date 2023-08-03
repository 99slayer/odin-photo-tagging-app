export const coordinates = {
  async validate(targetRange, coordinates) {
    const range = await targetRange
      .then((value) => {
        return value;
      })
      .catch((error) => {
        console.error(error);
      });

    let isValid = {
      x: null,
      y: null,
    };

    if (coordinates.x >= range.x.low && coordinates.x <= range.x.high) {
      isValid.x = true;
    }

    if (coordinates.y >= range.y.low && coordinates.y <= range.y.high) {
      isValid.y = true;
    }

    if (isValid.x && isValid.y) {
      return true;
    } else {
      return false;
    }
  },
  convert(coordinates, currentImageSize) {
    const defaultWidth = 1940;
    const defaultHeight = 1732;
    const headerHeight = 80;
    const padding = 80;
    const convertedCoordinates = {
      x: Math.round(
        defaultWidth * ((coordinates.x - padding) / currentImageSize.width)
      ),
      y: Math.round(
        defaultHeight *
          ((coordinates.y - padding - headerHeight) / currentImageSize.height)
      ),
    };

    return convertedCoordinates;
  },
};
