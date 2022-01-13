const changeDate = require('./git').changeDate;
const getCommits = require('./git').getCommits;
const moment = require('moment')
const path = require('path')

async function main() {
    const commitHashes = await getCommits(
        path.dirname(__filename)
    )

    // console.log(commitHashes);

    const timestamp = 1357037621
    const difference = moment(commitHashes[0].date).diff(moment(timestamp), 'seconds')

    commitHashes.forEach(async (item) => {
        let originalDate= moment(item.date).unix()
        let newDate = moment(originalDate).add(difference, 'seconds').unix()

        console.log(newDate)
        // const newDate = moment(item.date).unix() - difference
        // console.log(newDate)
        // let date = moment(moment(item.date).unix + difference).format()
        

        await changeDate(
            path.dirname(__filename),
            moment(1642073974).unix(),
            moment(1642073974).unix()
        );
    })
}

main()