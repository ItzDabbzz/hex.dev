'use client';

import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface CanvasChartProps {
  className?: string;
}

export default function CanvasChart({ className = "bg-black/20 border border-white/10 rounded-xl p-4 mt-6 backdrop-blur-[10px]" }: CanvasChartProps) {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      height: 250
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'DSTAT',
      style: {
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '0.8em'
        }
      },
      lineColor: '#333',
      tickColor: '#333',
      gridLineColor: '#e6e6e6',
      gridLineWidth: 0
    },
    yAxis: {
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '0.8em'
        }
      },
      gridLineColor: '#333',
      lineColor: '#333',
      tickColor: '#333',
      title: {
        text: 'Requests',
        style: {
          color: '#ffffff',
          fontSize: '0.8em'
        }
      },
      min: 0,
      max: 2.5
    },
    series: [{
      name: 'Total Requests',
      type: 'line',
      color: '#bb9af7',
      lineWidth: 2,
      marker: {
        fillColor: '#bb9af7',
        lineWidth: 1,
        lineColor: '#ffffff',
        radius: 4
      },
      data: []
    }],
    legend: {
      enabled: false
    },
    plotOptions: {
      line: {
        animation: false
      }
    }
  });

  // Data simulation and chart updates
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateChart = () => {
      const now = Date.now();
      
        // Realistic simulation - more stable pattern like actual request data
        // Base value around 1.0-1.5 with occasional spikes
        const baseValue = 1.0 + Math.random() * 0.5;
        const spike = Math.random() < 0.1 ? Math.random() * 1.0 : 0; // 10% chance of spike
        const newValue = Math.floor((baseValue + spike) * 10) / 10;
        
        addDataPoint(now, Math.min(newValue, 2.5)); // Cap at 2.5 like original
    };

    const addDataPoint = (timestamp: number, value: number) => {
      setChartOptions(prevOptions => {
        const currentSeries = prevOptions.series?.[0] as Highcharts.SeriesLineOptions;
        const currentData = (currentSeries?.data as [number, number][]) || [];
        
        const newData = [...currentData, [timestamp, value]];
        
        // Keep only last 30 points
        const trimmedData = newData.slice(-30);
        
        return {
          ...prevOptions,
          series: [{
            ...currentSeries,
            data: trimmedData
          }]
        };
      });
    };

    // Add initial data point
    updateChart();
    
    // Start data simulation
    const interval = setInterval(updateChart, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={className}>
      <div className="relative w-full h-[250px]">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    </div>
  );
}
