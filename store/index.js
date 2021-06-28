export const state = () => ({
  // A 2D array representing rows and columns, containing objects like { digit: 1, given: true }
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
  ],

  valid: false
})

export const actions = {
  validate () {
    // Test
    console.log(this.$solver)
  }
}

export const mutations = {
  // Expects { col: x, row: y, digit: num } payload
  add (state, payload) {
    const cell = state.grid[payload.row][payload.col]
    // Don't allow given values to be overwritten
    if (!cell.given) {
      cell.digit = parseInt(payload.digit)
    }
  },

  // Expects { col: x, row: y } payload
  delete (state, payload) {
    const cell = state.grid[payload.row][payload.col]
    // Don't allow given values to be overwritten
    if (!cell.given) {
      cell.digit = null
    }
  },

  // Initialise from a string of given numbers starting top left and going across
  // E.g. 000079065000003002005060093340050106000000000608020059950010600700600000820390000
  // E.g. 000000000000000000000000000000000000000000000309040106090405030807060504000000000
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
