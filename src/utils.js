export async function wait(milliseconds) {
  return new Promise((res) => setTimeout(res, milliseconds))
}

export function AxiosError(...args) {
  const error = Error(...args)
  error.isAxiosError = true
  return error
}
