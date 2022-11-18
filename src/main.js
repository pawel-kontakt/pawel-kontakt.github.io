const apiKey = '';

/*

{
            "trackingId": "c4:bb:08:2e:31:ac",
            "timestamp": "2022-11-03T21:24:00Z",
            "batteryLevel": 50,
            "humidity": 51,
            "lightIntensity": 13,
            "rssi": -70,
            "sourceId": "qvtdKv",
            "temperature": 21.472656,
            "airQuality": 23,
            "numberOfPeopleDetected": 1,
            "secondsSincePeopleDetection": 34,
            "firmware": "2.7",
            "model": 31,
            "txPowerDbm": -4,
            "uniqueId": "11HQ0005",
            "calibratedRssi1m": -69,
            "airPressure": 99048.18
        }
 */

const data = {
    datasets: [{
        data: []
    }],
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'time'
            }
        },

        parsing: {
            xAxisKey: 'timestamp',
            yAxisKey: 'temperature'
        }
    }};

const chart = new Chart(
    document.getElementById('telemetry-history-chart'),
    config
);

let startTime = new Date('2022-11-06T00:00:00.000Z').toISOString();
let endTime = new Date('2022-11-07T00:00:00.000Z').toISOString();
const query = `https://apps.cloud.us.kontakt.io/v3/telemetry?startTime=${startTime}&endTime=${endTime}&size=2000&trackingId=c4:bb:08:2e:31:ac`;
fetch(query, {
    headers: {
        'Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
}).then((response) => response.json())
    .then((resp) => {
        console.log(resp.content);
        chart.data.datasets.forEach((dataset) => {
            resp.content.forEach(p => dataset.data.push(p));
        });
        chart.update();
    })


