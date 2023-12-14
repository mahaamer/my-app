import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | undefined;
  chart: ApexChart | undefined;
  xaxis: ApexXAxis | undefined;
  yaxis: ApexYAxis | undefined;
  stroke: ApexStroke | undefined;
  tooltip: ApexTooltip | undefined;
  dataLabels: ApexDataLabels | undefined;
  colors: string[] | undefined;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public chartOptions: Partial<ChartOptions> = {};

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [130, 180, 70, 150, 250, 170, 230, 190, 200, 145, 100, 220],
        },
      ],
      chart: {
        height: 150,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      colors: ['#8A74F9'],
      xaxis: {
        type: 'category',
        categories: [
          'ديسمبر',
          'نوفمبر',
          'اكتوبر',
          'سبتمبر',
          'اغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
        labels: {
          style: {
            colors: '#9291A5',
            fontFamily: 'Noto Sans Arabic, sans-serif',
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        min: 50,
        max: 250,
        tickAmount: 3,
        forceNiceScale: false,
        labels: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: (value: number) => `${value} إستخدام  \n 1.3%`,
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Noto Sans Arabic, sans-serif',
        },
        cssClass: 'tooltip',
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };
  }
}
