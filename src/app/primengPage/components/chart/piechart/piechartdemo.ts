import { Component } from '@angular/core';

@Component({
    templateUrl: './piechartdemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class PieChartDemo {

    data: any;

    constructor() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };
    }
}