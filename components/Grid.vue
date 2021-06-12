<template>
  <table class="grid-sudoku">
    <tr v-for="(row, rowIndex) in sudokuMatrix" :key="rowIndex" class="grid-row">
      <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="grid-cell">
        <!-- <transition-group tag="div" name="list-animation"> -->
        <input :key="cell.digit" v-model="cell.digit" type="text" class="grid-cell-editor">
        <!-- </transition-group> -->
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    sudokuMatrix () {
      return this.$store.state.grid
    }
  }
}
</script>

<style lang="scss" scoped>
table.grid-sudoku {
    background: $bg-colour;
    border: 3px solid black;

    td {
      padding: 10px;
      text-align: center;
      vertical-align: middle;
      border: 1px solid gray;

      input {
        color: #000000;
        padding: 0;
        border: 0;
        text-align: center;
        width: 48px;
        height: 48px;
        font-size: 24px;
        background-color: $bg-colour;
        outline: none;
      }

      input:disabled {
        background-color: $bg-colour-light;
      }
  }
}

table.grid-sudoku > td:nth-child(3), .grid-sudoku > td:nth-child(6) {
    border-bottom: 3px solid black;
}

.grid-row > td:nth-child(3), .grid-row > td:nth-child(6) {
    border-right: 3px solid black;
}
</style>
