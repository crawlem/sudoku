export const state = () => ({
  list: []
})

export const mutations = {
  // Expects { col: x, row: y, digit: z } payload
  add (state, payload) {
    // Check if this row/col exists already
    const otherPencilMarks = state.list.filter(data => data.row === payload.row && data.col === payload.col)
    const index = otherPencilMarks.length

    // TODO Check if this digit exists already

    // Add the pencil mark
    state.list.push({ row: payload.row, col: payload.col, digit: payload.digit, index })
  },

  delete (state, payload) {
    state.list = state.list.filter(data => data.row !== payload.row || data.col !== payload.col)
  }
}
