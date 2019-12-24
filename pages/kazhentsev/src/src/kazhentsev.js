import './kazhentsev.css';
import translitModule from './translitModule';
import countProcessor from './countProcessor';
import '../node_modules/chart.js/dist/Chart'

document.getElementById("button").onclick = buttonClick;

function buttonClick()
{
    //document.getElementById("loader-identity").style.display = "block";
    let word = document.getElementById("input").value;
    let phrase = translitModule.translitWithStats(word);
    let symbols = countProcessor.getSymbolsCount(word);
    let params = countProcessor.getParamsCount(word);
    //document.getElementById("loader-identity").style.display = "none";
    document.getElementById("output").value = phrase.answer;
    document.getElementById("symbols").value = symbols;
    document.getElementById("words").value = params.w;
    document.getElementById("sentence").value = params.s;

    console.log(phrase.retMap.keys());
    console.log(phrase.retMap.values());
    console.log(Array.from(phrase.retMap.keys()));
    console.log(Array.from(phrase.retMap.values()));

    //generate chart
    var ctx = document.getElementById("chart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Array.from(phrase.retMap.keys()),
            datasets: [{
                label: "Итоговое число букв",
                data: Array.from(phrase.retMap.values()),
                borderWidth: 1,
                backgroundColor: '#333333',
                borderColor: '#333333'
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
            legend: {
                labels: {
                    fontColor: '#333333'
                }
            }
        }
    });
}