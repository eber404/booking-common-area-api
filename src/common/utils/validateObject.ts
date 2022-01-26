export function validateObject(
  object: any,
  minLength: number,
  maxLength: number
): boolean {
  const length = Object.entries(object).length
  const values = Object.values(object)

  const hasValidLength = length >= minLength && length <= maxLength
  const hasValidValues = values.every((value) => !!value)

  const isValid = hasValidLength && hasValidValues

  return isValid
}
