export async function wait(milliseconds) {
  return new Promise((res) => setTimeout(res, milliseconds))
}
