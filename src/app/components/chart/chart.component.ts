import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() reportForDate : string = '';
  @Input() pieChartData = this.chartService.createChart(0,0);

  constructor(private chartService: ChartService) {}

  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartType: ChartType = 'pie';
}
