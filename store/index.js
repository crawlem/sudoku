export const state = () => ({
  grid: [
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }],
    [{ digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }, { digit: null, cornerPencilMarks: [], centrePencilMarks: [] }]
  ]
})

export const mutations = {
  placeDigit (state, x, y, number) {
    const gridSlot = state.grid[x][y]
    gridSlot.digit = number
  },

  toggleCornerPencilMark (state, x, y, number) {
    const gridSlot = state.grid[x][y]
    const pencilMarks = gridSlot.cornerPencilMarks
    if (pencilMarks.indexOf(number)) {
      pencilMarks.splice(pencilMarks.indexOf(number), 2)
    } else {
      pencilMarks.push(number)
    }
  }
}
