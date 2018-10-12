import { Component, OnInit, Renderer2, ElementRef, ViewChild , AfterViewInit, AfterViewChecked} from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { Chart } from './chart.js'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent  {

  public google;
  public ctx:CanvasRenderingContext2D;
  public canvas;
  public data;

  @ViewChild("myChart") myChart;
  @ViewChild("scrollMe") scrollMe;

public top_schools_data = [
  {"school":"IIIT Bengaluru" , "applicant":52},
  {"school":"IIT Hyderabad","applicant":50},
  {"school":"IIIT Hyderabad","applicant":47},
  {"school":"IIT Chennai","applicant":46},
  {"school":"Harvard University","applicant":16},
  {"school":"MIT","applicant":12},
  {"school":"Carnegie Mellon","applicant":12},
  {"school":"LSE","applicant":11},
  {"school":"Columbia University","applicant":10}
];
public cgpa_data = [
  {"count": 1, "cgpa": 1},
  {"count": 2, "cgpa": 2},
  {"count": 10, "cgpa": 3},
  {"count": 10, "cgpa": 4},
  {"count": 16, "cgpa": 5},
  {"count": 40, "cgpa": 6},
  {"count": 60, "cgpa": 7},
  {"count": 65, "cgpa": 8},
  {"count": 40, "cgpa": 9},
  {"count": 5, "cgpa": 10}
];
public progress ='indeterminate';
constructor( private el:ElementRef) { 
setTimeout(function(){ this.progress = 'determinate'}, 30000);
 // this.ngAfterViewInit();
  this.data =  {
  chartType: 'Bar',
  labels: ["1", "2", "3", "4", "5", "6","7", "8","9","10"],
  dataTable: [
      ['cgpa', 'count'],
      [1, 1],
      [2, 2],
      [3, 10],
      [4, 10],
      [5,16],
      [6,40],
      [7,60],
      [ 8,65],
      [ 9,40],
      [10,5]
  ],
  options: {'title': 'CGPA Histogram'},
};
}
    ngAfterViewChecked() {        
       this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight; 
    }
  
 public ngAfterViewInit() {
    this.canvas = this.el.nativeElement.querySelector('#myChart');
   // this.canvas = this.myChart.nativeElement;
   this.ctx = this.canvas.getContext("2d");

   var myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5", "6","7", "8","9","10"],
        datasets: [{
            label: 'cgpa count',
            data: [1,2,10,10,10,16,40,60,65,40,5],
            backgroundColor: [
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)'
            ],
            borderColor: [
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)',
                'rgba(0,0,255,0.6)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

 }
}