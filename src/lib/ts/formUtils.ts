export function parseFormDataString(
  formData: FormData,
  key: string,
  maxLength: number,
  validate?: (value: string) => boolean
): string {
  let value = formData.get(key);
  if (typeof value !== 'string') {
    throw new Error('Validation failed');
  }

  value = value.trim().slice(0, maxLength);
  if (validate && !validate(value)) {
    throw new Error('Validation failed');
  }

  return value;
}
