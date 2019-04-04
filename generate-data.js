var faker = require('faker');

function generateData () {
  var messages = [];
  for (var id = 0; id < 10; id++) {
    let priority = faker.random.number({min: 1, max: 2});
    let date = faker.date.between("2019-01-01", "2019-07-31").toISOString().split("T")[0];
    let cpId = faker.random.number({min: 276090000000001, max: 276090000000048});
    let bsType = faker.random.number({min: 1, max: 5})
    let type = faker.hacker.phrase();
    let eartags = faker.random.number(1);
    messages.push({
      "id": id,
      "companyId": cpId,
      "businessType": bsType,
      "created_at": date,
      "earTags": eartags,
      "type": type
    });
  }

  return {messages};
}

module.exports = generateData;
