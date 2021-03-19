export default function rounder(value: number, nDigits = 2): number {
  const multiplicator = Math.pow(10, nDigits)
  value = parseFloat((value * multiplicator).toFixed(11))

  const test = Math.round(value) / multiplicator

  return +test.toFixed(nDigits)
}
