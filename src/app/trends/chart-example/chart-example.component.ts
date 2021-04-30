import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as HighCharts from 'angular-highcharts';
import { attributeListForChart } from '../attributeForChart';
import { ChartData } from '../chartData';
import { TrendService } from '../trend.service';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  chartData: ChartData
  // attributeName : FormControl;
  attributeList : typeof attributeListForChart;
  year : number;
  attributeValue : string;
  public chart: HighCharts.Chart = new HighCharts.Chart();
  showChart :boolean
   constructor(
    private service :TrendService
  ) { 
    this.attributeValue = "";
    this.attributeList = attributeListForChart;
    this.showChart = false;
   this.year = 0;
    this.chartData = {
      attributeName :[],
      count :[]
    }
      this.createChartDataWithAttribute({
        value : "skills"
      }
      ).then(()=>{
        console.log(this.chartData);
        console.log(this.chart); 
    });
  }


async ngOnInit() {
}
  
    async createChartDataWithAttribute(evt : any){
      // console.log(evt);
      this.showChart = false;
      this.attributeValue = evt.value;
       let attribute = evt.value ;
      this.chartData =  await this.service.generateDataForChart(attribute,this.year);
      setTimeout(()=>{
        if(evt.value == "skills")
      {
        console.log(JSON.stringify(this.chartData));
        this.chartData = this.service.changeStructure(this.chartData);
        console.log(JSON.stringify(this.chartData));
        
      }
    },50);
    setTimeout(()=>{
    this.chart = new HighCharts.Chart({
      chart: {
        type: "column"
      },
      title: {
        text: 'Hiring based on '+attribute
      },
      yAxis: {
        title: {
          text: 'Number of Employees '
        },
      },
    
      xAxis: {
  
          categories : this.chartData.attributeName
        
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        
    },

      credits: {
        enabled: false
      },
      series: [
        {
      name: "Overall count",
      type : "column",
      data:this.chartData.count,
      },
      {
        name: "Overall Count",
        type : "line",
        data:this.chartData.count,
      },
    ]
   });
    console.log(this.chart);
    this.showChart = true;
  },200);
         
  }
  async createChartDataWithYear(evt : any){
    // this.attributeValue = newValue;
    this.showChart = false;
     this.year = evt.value ;
    this.chartData =  await this.service.generateDataForChart(this.attributeValue,this.year);
    setTimeout(()=>
    {
      if(this.attributeValue == "skills")
      { 
        console.log(JSON.stringify(this.chartData));
        this.chartData = this.service.changeStructure(this.chartData);
        console.log(JSON.stringify(this.chartData));
      }
    },50);
    setTimeout(()=>{
      this.chart = new HighCharts.Chart({
        chart: {
          type: "column"
        },
        title: {
          text: 'Hiring based on '+this.attributeValue
        },
        yAxis: {
          title: {
            text: 'Number of Employees '
          },
        },
      
        xAxis: {

            categories : this.chartData.attributeName
          
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          
      },

        credits: {
          enabled: false
        },
        series: [
          {
        name: this.year.toString(),
        type : "column",
        data:this.chartData.count,
        },
        {
          name: this.year.toString(),
          type : "line",
          data:this.chartData.count,
        },
      ]
    });
      console.log(this.chart);
      this.showChart = true;
    },200);
  }
        
}
  
