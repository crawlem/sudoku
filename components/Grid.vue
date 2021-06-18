<template>
  <div class="grid">
    <!-- Overlay for event handling and outline box for each cell -->
    <div class="cells">
      <div v-for="row in 9" :key="row" class="row">
        <div
          v-for="col in 9"
          :key="col"
          class="cell"
          @mouseenter="highlightCell(row-1, col-1)"
          @mousedown="startDragging(row-1, col-1)"
          @mouseup="stopDragging"
        />
      </div>
    </div>

    <!-- Our main board/grid image -->
    <svg
      class="board-svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      draggable="false"
      viewBox="0 0 576 576"
    >
      <g id="cell-highlights">
        <rect
          v-for="h in highlights"
          :key="h.id"
          className="cell-highlight"
          class="cell-highlight"
          vector-effect="non-scaling-size"
          opacity="1"
          :x="gridMetaData.cellDimensions * h.col"
          :y="gridMetaData.cellDimensions * h.row"
          :width="gridMetaData.cellDimensions"
          :height="gridMetaData.cellDimensions"
        />
      </g>
      <g id="cell-grids">
        <path
          class="cell-grid"
          d="M0 0 L576 0 M0 64 L576 64 M0 128 L576 128 M0 192 L576 192 M0 256 L576 256 M0 320 L576 320 M0 384 L576 384 M0 448 L576 448 M0 512 L576 512 M0 576 L576 576 M0 0 L0 576 M64 0 L64 576 M128 0 L128 576 M192 0 L192 576 M256 0 L256 576 M320 0 L320 576 M384 0 L384 576 M448 0 L448 576 M512 0 L512 576 M576 0 L576 576"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M0 0 L96 0 L192 0 L192 96 L192 192 L96 192 L0 192 L0 96 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M0 192 L96 192 L192 192 L192 288 L192 384 L96 384 L0 384 L0 288 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M0 384 L96 384 L192 384 L192 480 L192 576 L96 576 L0 576 L0 480 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M192 0 L288 0 L384 0 L384 96 L384 192 L288 192 L192 192 L192 96 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M192 192 L288 192 L384 192 L384 288 L384 384 L288 384 L192 384 L192 288 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M192 384 L288 384 L384 384 L384 480 L384 576 L288 576 L192 576 L192 480 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M384 0 L480 0 L576 0 L576 96 L576 192 L480 192 L384 192 L384 96 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M384 192 L480 192 L576 192 L576 288 L576 384 L480 384 L384 384 L384 288 Z"
        />
        <path
          class="cage-box"
          shape-rendering="geometricprecision"
          vector-effect="non-scaling-stroke"
          d="M384 384 L480 384 L576 384 L576 480 L576 576 L480 576 L384 576 L384 480 Z"
        />
      </g>
      <g id="cell-pencilmarks">
        <text
          v-for="(pencilMark, index) in pencilMarks"
          :key="index"
          :x="pencilMark.x"
          :y="pencilMark.y"
          :center="(pencilMark.col + 0.5) + ',' + (pencilMark.row + 0.5)"
          :class="'cell-pencilmark pm-' + pencilMark.index"
          :className="'cell-pencilmark pm-' + pencilMark.index"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-pencilmarks"
          width="1"
          height="1"
        >
          {{ pencilMark.digit }}
        </text>
      </g>
      <!-- <g id="cell-candidates">
        <text
          x="480.96"
          y="35.2"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-candidates"
          className="cell-candidate"
          center="0.5,7.5"
          width="1"
          height="1"
          class="cell-candidate"
          data-count="1"
        >
          8
        </text>
      </g> -->
      <g id="cell-values">
        <text
          v-for="(cell, index) in digits"
          :key="index"
          :x="cell.x"
          :y="cell.y"
          :center="(cell.col + 0.5) + ',' + (cell.row + 0.5)"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-values"
          :className="(cell.given) ? 'cell-given' : 'cell-value'"
          :class="(cell.given) ? 'cell-given' : 'cell-value'"
          width="1"
          height="1"
        >
          {{ cell.digit }}
        </text>
      </g>
    </svg>

    <!-- Hidden input to capture keyboard input -->
    <div class="hidden">
      <input
        id="newDigit"
        ref="newDigit"
        type="text"
        @keyup="handleInput"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridMetaData: {
        cellDimensions: 64,
        digitCoords: {
          x: [32.96, 96.96, 160.96, 224.96, 288.96, 352.96, 416.96, 480.96, 544.96],
          y: [35.2, 99.2, 163.2, 227.2, 291.2, 355.2, 419.2, 483.2, 547.2]
        }
      },
      dragging: false
    }
  },

  computed: {
    highlights () {
      return this.$store.state.highlights.list
    },

    digits () {
      const grid = []

      for (let rowIndex = 0; rowIndex < this.$store.state.grid.length; rowIndex++) {
        const row = this.$store.state.grid[rowIndex]

        for (let colIndex = 0; colIndex < row.length; colIndex++) {
          const col = row[colIndex]

          if (col.digit) {
            grid.push({
              row: rowIndex,
              col: colIndex,
              y: this.gridMetaData.digitCoords.y[rowIndex],
              x: this.gridMetaData.digitCoords.x[colIndex],
              digit: col.digit,
              given: col.given
            })
          }
        }
      }

      return grid
    },

    pencilMarks () {
      const marks = []
      const list = this.$store.state.pencilMarks.list

      for (let i = 0; i < list.length; i++) {
        const pencilMark = list[i]

        // Add display meta data to each pencil mark
        marks.push({
          row: pencilMark.row,
          col: pencilMark.col,
          digit: pencilMark.digit,
          index: pencilMark.index,
          x: this.gridMetaData.digitCoords.x[pencilMark.col],
          y: this.gridMetaData.digitCoords.y[pencilMark.row]
        })
      }

      return marks
    }
  },

  mounted () {
    // Focus on our hidden input
    this.$refs.newDigit.focus()
  },

  methods: {
    clearHighlightsExcept (row, col) {
      this.$store.commit('highlights/clearAllExcept', {
        row,
        col
      })

      // Keep focus on our hidden input
      this.$refs.newDigit.focus()
    },

    startDragging (row, col) {
      this.dragging = true

      // Keep focus on our hidden input
      this.$refs.newDigit.focus()

      // Clear all other highlights first
      this.clearHighlightsExcept(row, col)

      // Add a highlight for the row/col cell clicked on
      this.$store.commit('highlights/add', {
        row,
        col
      })
    },

    stopDragging (event) {
      this.dragging = false

      // Keep focus on our hidden input
      this.$refs.newDigit.focus()
    },

    highlightCell (row, col) {
      if (this.dragging) {
        this.$store.commit('highlights/add', {
          row,
          col
        })
      }

      // Keep focus on our hidden input
      this.$refs.newDigit.focus()
    },

    handleInput (event) {
      // Work out what key was pressed
      const key = event.key
      const digitCode = event.code

      // Digit, pencilmark or candidate?
      if (event.shiftKey) {
        // Place a pencilmark
        if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'].includes(digitCode)) {
          // Pull out the integer from the key code
          const digit = digitCode.match(/\d/)[0]
          this.placePencilmark(digit)
        }
      } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
        // Place a digit
        this.placeDigit(key)
      } else if (['Backspace', 'Delete'].includes(key)) {
        // Delete digits and pencil marks
        this.deleteHighlightedCells()
      }

      // Reset our input ready to receive the next keystroke
      const newDigitInput = this.$refs.newDigit
      newDigitInput.focus()
      newDigitInput.value = ''
    },

    placeDigit (digit) {
      // Remove pencil marks from all currently highlighted cells
      this.highlights.forEach((cell) => {
        this.$store.commit('pencilMarks/delete', {
          col: cell.col,
          row: cell.row
        })
      })

      // Put the digit in all currently highlighted cells
      this.highlights.forEach((cell) => {
        this.$store.commit('add', {
          col: cell.col,
          row: cell.row,
          digit
        })
      })
    },

    deleteHighlightedCells () {
      // Apply to all highlighted cells
      this.highlights.forEach((cell) => {
        // Delete digits
        this.$store.commit('delete', {
          col: cell.col,
          row: cell.row
        })

        // Delete pencil marks
        this.$store.commit('pencilMarks/delete', {
          col: cell.col,
          row: cell.row
        })
      })
    },

    placePencilmark (digit) {
      // Apply to all highlighted cells
      this.highlights.forEach((cell) => {
        // Delete any digit present
        this.$store.commit('delete', {
          col: cell.col,
          row: cell.row
        })

        // Add a pencilmark
        this.$store.commit('pencilMarks/add', {
          col: cell.col,
          row: cell.row,
          digit
        })
      })
    }
  }
}
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;

  .row {
    display: flex;
    align-items: stretch;

    .cell {
      position: relative;
      width: 64px;
      height: 64px;
      font-family: Tahoma,Verdana,sans-serif;
      user-select: none;

      &:after {
        display: block;
        position: absolute;
        z-index: 6;
        width: 100%;
        height: 100%;
        content: "";
        outline: 1px solid $grid-colour;
        outline-offset: -1px;
      }
    }
  }

  .board-svg {
    position: absolute;
    pointer-events: none;
    user-select: none;
    padding: 0.5px;
    width: 576px;
    height: 576px;
    margin: 0;

    #cell-grids {
      .cage-box {
        stroke: $grid-colour;
        stroke-width: 3px;
        fill: none;
      }
    }

    #cell-pencilmarks {
      text {
        font-size: 1.1rem;
        fill: $pencilmark-colour;

        &.pm-0 {
          transform: translate(-15px, -15px);
        }

        &.pm-1 {
          transform: translate(15px, -15px);
        }

        &.pm-2 {
          transform: translate(-15px, 15px);
        }

        &.pm-3 {
          transform: translate(15px, 15px);
        }

        &.pm-4 {
          transform: translate(0, -15px);
        }

        &.pm-5 {
          transform: translate(0, 15px);
        }
      }
    }

    #cell-candidates {
      text {
        font-size: 1.1rem;
        fill: $pencilmark-colour;
      }
    }

    #cell-highlights {
      .cell-highlight {
        fill: $highlight-colour;
      }
    }

    .cell-value {
      font-size: 3em;
      fill: $digit-colour-user;
    }

    .cell-given {
      font-size: 3em;
      fill: $digit-colour-given;
    }
  }
}

.hidden {
  position: fixed;
  top: 0;
  right: -250px;
  bottom: 0;

  -webkit-transition: width 0.2s ease-out;
  -moz-transition: width 0.2s ease-out;
  transition: width 0.2s ease-out;

  overflow: hidden;
  z-index: 999;
}
</style>
