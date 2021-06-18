export const state = () => ({
  list: []
})

export const mutations = {
  // Expects { col: x, row: y, digit: z } payload
  add (state, payload) {
    // Check if this row/col exists already
    const otherPencilMarks = state.list.filter(data => data.row === payload.row && data.col === payload.col)
    const index = otherPencilMarks.length

    const pencilMark = { row: payload.row, col: payload.col, digit: parseInt(payload.digit), index }

    // Check if this pencil mark exists already
    if (otherPencilMarks.some(element => element.col === pencilMark.col && element.row === pencilMark.row && element.digit === pencilMark.digit)) {
      // Locate the digit
      const digitIndex = state.list.indexOf(pencilMark)

      // Delete this digit
      state.list.splice(digitIndex, 1)
    } else {
      // Add a new pencil mark
      state.list.push(pencilMark)
    }
  },

  delete (state, payload) {
    state.list = state.list.filter(data => data.row !== payload.row || data.col !== payload.col)
  }
}
