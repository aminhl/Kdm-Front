import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { ApiService } from '../../../../core/services/admin/api.service';
import { IArchivePercentType } from '../../../../core/models/ArchivePercentType';

@Component({
  selector: 'app-archive-stats',
  templateUrl: './archive-stats.component.html',
  styleUrls: ['./archive-stats.component.css'],
})
export class ArchiveStatsComponent implements OnInit {
  chartData: any;
  labelData: string[] = [];
  realData: number[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getStats().subscribe((result) => {
      this.chartData = result;
      if (this.chartData !== null) {
        for (let i = 0; i < this.chartData.length; i++) {
          this.labelData.push(
            this.chartData[i].archive === true ? 'Done' : 'Not Done'
          );
          this.realData.push(this.chartData[i].count);
        }
        this.renderChart(this.labelData, this.realData);
      }
    });
  }

  renderChart(labelData: string[], mainData: number[]) {
    const chart = new Chart('piechart', {
      type: 'pie',
      data: {
        labels: labelData,
        datasets: [
          {
            label: '# status',
            data: mainData,
            backgroundColor: ['#FA7070', '#B1B2FF'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
