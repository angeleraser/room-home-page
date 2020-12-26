export const getNewItemsPositions = (currentPositions, direction) => {
  return currentPositions.map(({ val }) => {
    let item = {
      val: null,
      transition: 1,
    };
    switch (direction) {
      case "to right":
        if (val !== currentPositions.length - 2) {
          item.val = val + 1;
        } else {
          item.val = -1;
          item.transition = 0;
        }
        break;
      case "to left":
        if (val === 0) {
          item.val = -1;
        } else if (val === -1) {
          item.val = currentPositions.length - 2;
          item.transition = 0;
        } else {
          item.val = val - 1;
        }
        break;
      default:
        break;
    }
    return item;
  });
};
