let option = {

    tooltip: {},
    legend: {
        data: ['2020年', '2021年'],
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '敏捷', max: 4.3},
            { name: '协调', max: 4.3},
            { name: '柔韧', max: 4.3},
            { name: '耐⼒', max: 4.3},
            { name: '⼒量', max: 4.3}
        ]
    },
    series: [{
        name: '2020 vs 2021',
        type: 'radar',
        data: [
            {
                value: [4.3, 3.4, 3.6, 3.5, 2.5],
                name: '2020年'
            },
            {
                value: [4.0, 4.3, 3.8, 3.6, 4.2],
                name: '2021年'
            }
        ]
    }]
};

module.exports = {
  option: option
}