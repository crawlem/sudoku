export const state = () => ({
  grid: [
    [{ digit: 1, given: true }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: null }],
    [{ digit: null }, { digit: null }, { digit: null }, { digit: null }, { digit: 5, given: true }, { digit: null }, { digit: null }, { digit: null }, { digit: 2, given: true }]
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
  }
}
