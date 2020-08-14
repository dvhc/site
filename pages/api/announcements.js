var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.KEY }).base(process.env.BASE);

export default async (req, res) => {
    let announcements = await base('Announcments').select({
        view: "Grid view"
    }).all()

    announcements = announcements.map(v => {
        return {
            title: v.fields.Title,
            mrkdwn: v.fields.Markdown
        }
    })

    res.send(announcements.reverse())
}