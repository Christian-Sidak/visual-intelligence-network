import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {data, years, tasks, conditions} from '../constants';
import Chart from "react-apexcharts";

function groupByCount(array, property) {
    var a = {}; 
    for(var index in array){ 
      var value = array[index][property]
      if (!a.hasOwnProperty(value)) {
        a[value] = 1;
      } else {
        a[value] = a[value]+1;
      } 
    }
    if (a.hasOwnProperty(null)) {
      a["NA"] = a[null]
      delete a.null
    }
    return a
}

const getEntriesByYear=(data)=> {
    const seriesData = groupByCount(data, 'year')
    const series = [{
        name:"Articles",
        data: years.map(y => seriesData[y])
    }]

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                dataLabels: {
                    position: 'top'
                }
            }
        },
        chart: {
            id: "entriesByYear"
        },
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            categories:years,
            tickPlacement: 'on'
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#333']
            },
            offsetY:-20
          },
        title: {
            text: "All Entries by Year"
        }
        
            
    }
    return {series:series,options:options};
}

const getCodeAvailability=(data)=> {
    const seriesData = groupByCount(data, 'code_available')
    const series = [true, false].map(y => seriesData[y])

    const options = {
        labels: ["Yes", "No"],
        chart: {
            type: 'donut'
        },
        title: {
            text: "Code Availability",
        }
    }
    return {series:series,options:options};
}

const getConditionsByYear=(data)=> {
    const series = conditions.map(c => {
        const filteredData = data.filter(o=>o.domain===c)
        const groupedData = groupByCount(filteredData, 'year')
        return {
            name:c,
            data: years.map(y => groupedData[y] ? groupedData[y]:0)
        }
    })

    const options = {
        chart: {
            type:"area"
        },
        tooltip: {
            style: {
                zIndex: 4
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
        categories: years
        },
        title: {
        text:"Conditions by Year"
        }
    }
    return {series:series,options:options}
}

const getTasksByYear=(data)=> {
    const series = tasks.map(c => {
        const filteredData = data.filter(o=>o.model_task===c)
        const groupedData = groupByCount(filteredData, 'year')
        return {
            name:c,
            data: years.map(y => groupedData[y] ? groupedData[y]:0)
        }
    })

    const options = {
        chart: {
            type:"area"
        },
        tooltip: {
            style: {zIndex:4}
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
        categories: years
        },
        title: {
        text:"Tasks by Year"
        }
    }
    return {series:series,options:options}
}
export default function Dashboard() {
    
    const entriesByYear = getEntriesByYear(data);
    const codeAvailability = getCodeAvailability(data);
    const conditionsByYear = getConditionsByYear(data);
    const tasksByYear = getTasksByYear(data);

    return(
        <Container>
        <Row>
        <Col>
        <Chart
            options={entriesByYear.options}
            series={entriesByYear.series}
            type="bar"
        />
        </Col>
        <Col>
        <Chart
            options={codeAvailability.options}
            series={codeAvailability.series}
            type="donut"
        />
        </Col>
        </Row>

        <Row>
        <Col>
        <Chart
            options={conditionsByYear.options}
            series={conditionsByYear.series}
            type="area"
        />
        </Col>
        <Col>
        <Chart
            options={tasksByYear.options}
            series={tasksByYear.series}
            type="area"
        />
        </Col>
        </Row>

        </Container>
    )
}