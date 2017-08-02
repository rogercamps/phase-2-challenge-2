// ========== SHOW A MONTH ==========

function month(date) {

  let someDate = new Date(date)

  const months = {
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  }

  let index = someDate.getMonth()
  return months[index]

}

// ========== REVERSE A SENTENCE ==========

function reverseSentence(str) {
  let newStr = str.split(' ').reverse().join(' ')
  return newStr
}

// ========== NAMES OF PROPERTIES ==========

function nameProps(obj) {
  let keys = Object.keys(obj)
  return keys.sort()
}


// ========== FILTER BETWEEN ==========

function filterBetween( arr, min, max ) {
  let filteredArray = arr.filter(arrayElement => {
    if (min <= arrayElement && arrayElement <= max) {
      return arrayElement
    }
  })

  if (filteredArray.length === 0) {
    return []
  }

  return filteredArray
}


module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}
