export const intToDec = (v: number): string => {
  const tmp = v.toString()
  let decValue = ''

  for (let i = 0; i < tmp.length; i++) {
    if (i === tmp.length - 2) {
      decValue += ','
    }
    decValue += tmp[i]
  }

  return decValue
}
