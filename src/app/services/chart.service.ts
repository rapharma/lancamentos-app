import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createChart(v1: number, v2: number) {
    return {
      type: 'pie',
      labels: ['Debit', 'Credit'],
      datasets: [{
        data: [v1, v2],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    };
  }
}
