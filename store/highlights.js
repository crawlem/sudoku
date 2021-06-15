export const state = () => ({
  // Expects { col: x, row: y } objects
  list: []
})

export const mutations = {
  add (state, payload) {
    // Check if this row/col exists already
    if (state.list.filter(data => data.row === payload.row && data.col === payload.col).length > 0) {
      // It does exist, do nothing
    } else {
      // This is a new row/col so add it
      state.list.push({ row: payload.row, col: payload.col })
    }
  },

  // Highlight a cell if it isn't already, or stop highlighting if it is
  toggle (state, payload) {
    // Check if this row/col exists already
    if (state.list.filter(data => data.row === payload.row && data.col === payload.col).length > 0) {
      // It does exist, so remove it
      state.list = state.list.filter(data => data.row !== payload.row || data.col !== payload.col)
    } else {
      // This is a new row/col so add it
      state.list.push({ row: payload.row, col: payload.col })
    }
  },

  // Remove all highlights
  clear (state) {
    state.list = []
  },

  // Remove all highlights except the given row/col
  clearAllExcept (state, payload) {
    state.list = state.list.filter(data => data.row === payload.row && data.col === payload.col)
  }
}
