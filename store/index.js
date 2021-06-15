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
  addHighlight (state, payload) {
    // Check if this row/col exists already
    if (state.highlights.filter(data => data.row === payload.row && data.col === payload.col).length > 0) {
      // It does exist, do nothing
    } else {
      // This is a new row/col so add it
      state.highlights.push({ row: payload.row, col: payload.col })
    }
  },

  // Highlight a cell if it isn't already, or stop highlighting if it is
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

  // Removes all highlights
  clearHighlights (state) {
    state.highlights = []
  },

  // Removes all highlights except the given row/col
  clearHighlightsExcept (state, payload) {
    state.highlights = state.highlights.filter(data => data.row === payload.row && data.col === payload.col)
  }
}
