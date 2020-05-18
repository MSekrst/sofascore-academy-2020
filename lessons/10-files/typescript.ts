// function arguments should always be specified as they cannot be implicitly set
function square(n: number) {
  // return type can be implicitly set, so no need to set it manually
  // TODO: set manually return type
  return n ** 2 // ** is exponentiation operator
}

console.log('square(5) =', square(5))

// ------------------------------------------------------------------------------------------------

// create type which can be number or string
type NumberOrString = number | string

// note how return type will be NumberOrString type not `number | string`
function addOrConcatenate(a: NumberOrString) {
  if (typeof a === 'string') {
    return a + a
  }

  return a + a
}

console.log('addOrConcatenate(5) =', addOrConcatenate(5))
console.log('addOrConcatenate("a") =', addOrConcatenate('a'))

// ------------------------------------------------------------------------------------------------

// note how values for each value are added automatically
enum SortDirection {
  Default,
  DESC,
  ASC,
}

interface SortArrayArguments {
  strings: string[] // Array<string> is also valid syntax
  // note how sortDirection has ? -> it means that it is optional
  sortDirection?: SortDirection
}

function sortArray({ strings, sortDirection = SortDirection.Default }: SortArrayArguments) {
  if (sortDirection === SortDirection.Default) {
    return strings
  }

  // sort would mutate string argument, so spread to prevent argument mutation.
  // note how `a` and `b` are types as string because they come from string array
  // also note how `sortDirection` has only remaining enum types available because previous if ensured it is not Default
  return [...strings].sort((a, b) => (sortDirection === SortDirection.ASC ? a.localeCompare(b) : b.localeCompare(a)))
}

console.log(
  'sortArray({ strings: ["frontend", "academy", "sofa", "score"] })',
  sortArray({ strings: ['frontend', 'academy', 'sofa', 'score'] })
)
console.log(
  'sortArray({ strings: ["frontend", "academy", "sofa", "score"], sortDirection: SortDirection.DESC })',
  sortArray({ strings: ['frontend', 'academy', 'sofa', 'score'], sortDirection: SortDirection.DESC })
)

// ------------------------------------------------------------------------------------------------
