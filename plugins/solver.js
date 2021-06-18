export default ({ app }, inject) => {
  // Inject $solver in Vue, context and store.
  inject('solver', msg => console.log(`Hello ${msg}!`))
}