makeItChart1();
makeItChart2();
makeItChart3();
makeItChart4();
const x_labels = [];
const y_data = [];
const x_labels_2 = [];
const y_data_2 = [];
const x_labels_3 = [];
const y_data_3 = [];
const x_labels_4 = [];
const y_data_4 = [];

async function getData() {
    const movie_response = await fetch('states.csv');
    const movie_data = await movie_response.text();


    const theWholeThing = movie_data.split('\n').slice(1);
    theWholeThing.forEach(row => {
        const columns = row.split(',');
        const state = columns[0];
        const avg_month_pay = columns[8];
        const coverage = columns[4];
        const employer = columns[5];
        const tax = columns[8];
        x_labels.push(state);
        y_data.push(avg_month_pay);
        y_data_2.push(coverage);
        x_labels_2.push(avg_month_pay);
        x_labels_3.push(state);
        y_data_3.push(employer);
        x_labels_4.push(state);
        y_data_4.push(tax);
        /*const popularity = columns[10];
        const premier = columns[14];
        const revenue = columns[15];
        const runtime = columns[16];
        const vote_avarage = columns[21];
        
        const vote_count = columns[22];*/
        console.log(coverage);
    });

}

async function makeItChart1() {
    await getData();
    const ctx = document.getElementById('chart_1').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x_labels,
            datasets: [{
                label: 'Avarage insurance payment per state',
                data: y_data,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}

async function makeItChart2() {
    await getData();
    const ctx = document.getElementById('chart_2').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x_labels_2,
            datasets: [{
                label: 'Avarage coverage per insurance payment',
                data: y_data_2,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}

async function makeItChart3() {
    await getData();
    const ctx = document.getElementById('chart_3').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x_labels_3,
            datasets: [{
                label: 'Avarage employer inssurance',
                data: y_data_3,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}

async function makeItChart4() {
    await getData();
    const ctx = document.getElementById('chart_4').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x_labels_4,
            datasets: [{
                label: 'Avarage marketplace tax per state',
                data: y_data_4,
                backgroundColor:
                    'rgba(19, 57, 159, 0.2)'
                ,
                borderColor:
                    'rgba(19, 99, 132, 1)'
                ,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }

        }
    });
}
