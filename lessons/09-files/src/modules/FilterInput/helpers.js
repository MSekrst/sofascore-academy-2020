export function getMatchingOptions(options, target) {
  if (!options || !Array.isArray(options) || !options.length) {
    return []
  }

  const searchRegex = new RegExp(`${target}`, 'i')

  return options.filter(o => searchRegex.test(o.label))
}
