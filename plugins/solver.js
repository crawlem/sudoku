export default ({ app }, inject) => {
  // Based on https://www.codefellows.org/blog/sudoku-solver-from-scratch-in-javascript-tdd-style-a-tutorial/
  const solver = {
    checkRow (grid, row, digit) {
      // Iterate through every value in the row
      for (let i = 0; i < grid[row].length; i++) {
        // If a match is found, return false
        if (grid[row][i] === digit) {
          return false
        }
      }

      // If no match was found, return true
      return true
    },

    checkColumn (grid, column, digit) {
      // Iterate through each value in the column
      for (let i = 0; i < grid.length; i++) {
        // If a match is found, return false
        if (grid[i][column] === digit) {
          return false
        }
      }

      // If no match was found, return true
      return true
    },

    check3x3Square (grid, column, row, digit) {
      // Save the upper left corner
      let columnCorner = 0
      let rowCorner = 0
      const squareSize = 3

      // Find the left-most column
      while (column >= columnCorner + squareSize) {
        columnCorner += squareSize
      }

      // Find the upper-most row
      while (row >= rowCorner + squareSize) {
        rowCorner += squareSize
      }

      // Iterate through each row
      for (let i = rowCorner; i < rowCorner + squareSize; i++) {
        // Iterate through each column
        for (let j = columnCorner; j < columnCorner + squareSize; j++) {
          // Return false is a match is found
          if (grid[i][j] === digit) {
            return false
          }
        }
      }

      // If no match was found, return true
      return true
    },

    checkValue (grid, column, row, digit) {
      if (this.checkRow(grid, row, digit) &&
        this.checkColumn(grid, column, digit) &&
        this.check3x3Square(grid, column, row, digit)) {
        return true
      } else {
        return false
      }
    }
  }

  // Inject solver into the Vue context
  inject('solver', solver)
}
