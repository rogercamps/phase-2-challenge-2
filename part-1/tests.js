const assert = require('chai').assert
const { month, reverseSentence, nameProps, filterBetween } = require('./test')



describe('month', function() {
  it('should return the month of the date', function() {
assert.equal(month('2017, 7, 25'), 'July')
  })
  it('should return the current month', function() {
assert.notEqual(month('2010, 07, 15'), 'January')
  })
})

describe('reverseSentence', function() {
  it('should return a reversed string', function() {
assert.equal(reverseSentence('testing reversed sentence function') ,'noitcnuf ecnetnes desrever gnitset')
  })
  it('should not return the same string', function() {
assert.notEqual(reverseSentence('testing reversed sentence function') ,'testing reversed sentence function')
  })
})

describe('filterBetween', function() {
  const arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

  it('should sort between min and max', function() {
assert.equal(filterBetween(arr, 'chimp', 'lobster'), ['dog', 'lion', 'cow'])
  })
//   it('should not return the values between min and max', function() {
// assert.notEqual(filterBetween(arr), [])
//   })
})
