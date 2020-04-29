export function getMatchingOptions(options, searchPattern) {
  if (!options || !Array.isArray(options) || !options.length) {
    return []
  }

  const normalizedSearchPattern = searchPattern.toLowerCase()

  return options.filter(option => option.toLowerCase().indexOf(normalizedSearchPattern) !== -1)
}
