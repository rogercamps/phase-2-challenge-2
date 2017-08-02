const fs = require('fs')

fs.readFile('./clients.json', 'utf-8', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data)


  let companyData = []
  let query = process.argv[2]

  data.forEach( (person) => {
    let company = person.company

    if( company.startsWith(query) ){
      const contact = {}
      contact.id = person.id
      contact.company = person.company
      contact.phone = person.phone

      companyData.push(contact)
    }

  })
  console.log(companyData);
})
