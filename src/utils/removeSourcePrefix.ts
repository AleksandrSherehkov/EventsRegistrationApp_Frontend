export const removeSourcePrefix = (text: string) => {
  const fullPrefix = 'Sourced from predicthq.com - ';
  const shortPrefix = 'Sourced from predicthq.com';

  if (text.startsWith(fullPrefix)) {
    return text.substring(fullPrefix.length);
  }

  if (text === shortPrefix) {
    return 'Sorry, description will come later.';
  }

  return text;
};
