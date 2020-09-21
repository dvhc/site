var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.KEY }).base(process.env.BASE);

export default async (req, res) => {
    let people = await base('People').select({
        view: "Grid view"
    }).all()

    res.send({ count: people.length })
}