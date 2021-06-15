<template>
  <div class="grid">
    <!-- Overlay for event handling and outline box for each cell -->
    <div class="cells" @mousedown="startDragging" @mouseup="stopDragging">
      <div v-for="row in 9" :key="row" class="row">
        <div
          v-for="col in 9"
          :key="col"
          class="cell"
          :data-row="row-1"
          :data-col="col-1"
          @mouseenter="highlightCell"
        />
      </div>
    </div>

    <!-- Our main board/grid image -->
    <svg
      id="svg-renderer"
      class="board-svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      draggable="false"
      viewBox="0 0 576 576"
    >
      <!-- <g id="background" />
      <g id="underlay" />
      <g id="cell-colours" /> -->
      <g id="cell-highlights">
        <rect
          v-for="h in highlights"
          :key="h.id"
          className="cell-highlight"
          class="cell-highlight"
          vector-effect="non-scaling-size"
          opacity="1"
          :x="gridMetaData.highlightCoords[h.col]"
          :y="gridMetaData.highlightCoords[h.row]"
          :width="gridMetaData.cellDimensions"
          :height="gridMetaData.cellDimensions"
        />
      </g>
      <!-- <g id="arrows" /> -->
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
      <!-- <g id="cell-errors" />
      <g id="overlay" /> -->
      <g id="cell-givens">
        <text
          x="288.96"
          y="547.2"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-givens"
          center="8.5,4.5"
          width="1"
          height="1"
        >
          6
        </text>
        <text
          x="544.96"
          y="547.2"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-givens"
          center="8.5,8.5"
          width="1"
          height="1"
        >
          4
        </text>
      </g>
      <!-- <g id="cell-pen" /> -->
      <g id="cell-pencilmarks">
        <text
          x="480.96"
          y="35.2"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-pencilmarks"
          className="cell-pencilmark pm-0"
          center="0.5,7.5"
          width="1"
          height="1"
          class="cell-pencilmark pm-0"
        >
          1
        </text>
      </g>
      <g id="cell-candidates">
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
      </g>
      <g id="cell-values">
        <text
          x="544.96"
          y="419.2"
          text-anchor="middle"
          dominant-baseline="middle"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          paint-order="stroke fill"
          target="cell-values"
          className="cell-value"
          center="6.5,8.5"
          width="1"
          height="1"
          class="cell-value"
        >
          1
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    // Layout constants
    return {
      gridMetaData: {
        cellDimensions: 64,
        highlightCoords: [0, 64, 128, 192, 256, 320, 384, 448, 512]
      },
      dragging: false
    }
  },
  computed: {
    highlights () {
      return this.$store.state.highlights
    }
  },
  methods: {
    clearHighlightsExcept (row, col) {
      this.$store.commit('clearHighlightsExcept', {
        row,
        col
      })
    },
    // Extract the cell's row index from the event target
    getEventRow (event) {
      return parseInt(event.target.attributes['data-row'].value)
    },
    // Extract the cell's column index from the event target
    getEventCol (event) {
      return parseInt(event.target.attributes['data-col'].value)
    },
    startDragging (event) {
      this.dragging = true

      const row = this.getEventRow(event)
      const col = this.getEventCol(event)

      // Clear all highlights first
      this.clearHighlightsExcept(row, col)

      // Add a highlight for the specific row/col cell clicked on
      this.$store.commit('addHighlight', {
        row,
        col
      })
    },
    stopDragging (event) {
      this.dragging = false
    },
    highlightCell (event) {
      if (this.dragging) {
        // Add a highlight for the specific row/col cell hovered over
        const row = this.getEventRow(event)
        const col = this.getEventCol(event)

        this.$store.commit('addHighlight', {
          row,
          col
        })
      }
    }
  }
}
</script>

<style lang="scss">
.grid {
  position: absolute;
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
        outline-offset: -0.5px;
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

    #cell-givens {
      text {
        font-size: 3em;
        fill: $digit-colour-given;
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

    #cell-values {
      text {
        font-size: 3em;
        fill: $digit-colour-user;
      }
    }

    #cell-highlights {
      .cell-highlight {
        fill: $highlight-colour;
      }
    }
  }
}
</style>
