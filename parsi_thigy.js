getData();
async function getData() {
    const movie_response = await fetch('movies.csv');
    const movie_data = await movie_response.text();


    const theWholeThing = movie_data.split('\n').slice(1);
    theWholeThing.forEach(row => {
        const columns = row.split(',');
        const budget = columns[2];
        const language = columns[7];
        const title = columns[8];
        const popularity = columns[10];
        const premier = columns[14];
        const revenue = columns[15];
        const runtime = columns[16];
        const vote_avarage = columns[21];
        const vote_count = columns[22];
        console.log(columns[7]);
    });

}

