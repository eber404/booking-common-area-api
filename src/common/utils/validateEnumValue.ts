export function validateEnumValue<T>(
  value: string | T,
  enumerator: T
): boolean {
  const availableValues = Object.values(enumerator)

  const isValueValid = availableValues.some(
    (retriviedValue) =>
      retriviedValue.toString().toUpperCase() === value.toString().toUpperCase()
  )

  return isValueValid
}
