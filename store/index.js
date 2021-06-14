export const state = () => ({
  // TODO Express "given" numbers in this map?
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

  // Expects { col: x, row: y } objects
  highlights: []
})

export const mutations = {
  // Cell selection highlights
  toggleHighlight (state, payload) {
    // Check if this row/col exists already
    if (state.highlights.filter(data => data.row === payload.row && data.col === payload.col).length > 0) {
      // It does exist, so remove it
      state.highlights = state.highlights.filter(data => data.row !== payload.row || data.col !== payload.col)
    } else {
      // This is a new row/col so add it
      state.highlights.push({ row: payload.row, col: payload.col })
    }
  },

  clearHighlights (state) {
    state.highlights = []
  }
}
