const faker = require('faker');
const fs = require('fs');

// Generate some random data
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    id: i + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress()
  });
}

// Save to a JSON file
fs.writeFileSync('generated_data.json', JSON.stringify(data, null, 2));

console.log("Data generation complete. File saved as generated_data.json.");
