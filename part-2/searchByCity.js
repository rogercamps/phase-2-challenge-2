const fs = require('fs')

fs.readFile('./clients.json', 'utf-8', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data)


  let cityData = []
  let query = process.argv[2]

  data.forEach( (person) => {
    let city = person.city

    if( city.includes(query) ){
      const contact = {}
      contact.id = person.id
      contact.rep_name = person.rep_name
      contact.company = person.company
      contact.city = person.city
      contact.state = person.state

      cityData.push(contact)
    }

  })
  console.log(cityData);
})
