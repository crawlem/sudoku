export const state = () => ({
  grid: [
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }]
  ]
})

export const mutations = {
  // Expects { col: x, row: y, digit: num } payload
  placeDigit (state, payload) {
    const cell = state.grid[payload.row][payload.col]
    // Don't allow given values to be overwritten
    if (!cell.given) {
      cell.digit = payload.digit
    }
  },

  // Initialise from a string of given numbers starting top left and going across
  // E.g. 000079065000003002005060093340050106000000000608020059950010600700600000820390000
  initFromString (state, givens) {
    for (let i = 0; i < givens.length; i++) {
      const rowIndex = Math.floor(i / 9)
      const colIndex = Math.floor(i % 9)

      const cell = state.grid[rowIndex][colIndex]
      const given = parseInt(givens[i])

      if (given === 0) {
        cell.digit = null
        cell.given = false
      } else {
        cell.digit = given
        cell.given = true
      }
    }
  }
}
