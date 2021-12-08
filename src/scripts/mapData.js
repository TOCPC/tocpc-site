const fs = require('fs')
const path = require('path')

function csvJSON(csv) {
  const lines = csv.split('\n')
  const result = []
  const headers = lines[0].split(',')

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue
    const obj = {}
    const currentline = lines[i].split(',')

    for (let j = 0; j < headers.length; j++) {
      // @ts-ignore
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }
  return result
}

const firstCSV = fs.readFileSync(
  path.resolve(__dirname, '../data/contest-day-1.csv'),
  'utf8'
)
const secondCSV = fs.readFileSync(
  path.resolve(__dirname, '../data/contest-day-2.csv'),
  'utf8'
)

const firstDayJSON = csvJSON(firstCSV)
const secondDayJSON = csvJSON(secondCSV)

const outputJSON = firstDayJSON.map((firstDayUser) => {
  const secondDayUser = secondDayJSON.find(
    (sUser) => sUser.User === firstDayUser.User
  )

  return {
    username: firstDayUser.Username,
    name: firstDayUser.User,
    woody: +firstDayUser.woody,
    longjump: +firstDayUser.longjump,
    parentheses: +firstDayUser.parentheses,
    moles: +secondDayUser.moles,
    arranging: +secondDayUser.arranging,
    guitar: +secondDayUser.guitar,
    total: +firstDayUser.Global + +secondDayUser.Global,
  }
})

const outputString = JSON.stringify(outputJSON, null, 2)

fs.writeFile('../data/contest-data.json', outputString, (err) => {
  if (err) console.error(err)
})
