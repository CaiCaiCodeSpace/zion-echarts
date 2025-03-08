import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EventHandler } from "zvm-code-context";
import type { EChartsOption, LegendComponentOption } from 'echarts/types/dist/shared';

export interface RingGraphChartPropData {


  name1?: string; // 图例名称1
  value1?: number; // 图例值1

  name2?: string; // 图例名称2
  value2?: number; // 图例值2

  name3?: string; // 图例名称3
  value3?: number; // 图例值3

  name4?: string; // 图例名称4
  value4?: number; // 图例值4

  name5?: string; // 图例名称5
  value5?: number; // 图例值5

  name6?: string; // 图例名称6
  value6?: number; // 图例值6

  name7?: string; // 图例名称7
  value7?: number; // 图例值7

  name8?: string; // 图例名称8
  value8?: number; // 图例值8


  chartName?: string; //图表名称
  legendPosition?: string; // 图例位置,top，left,bottom,right

  innerRadius?: number; // 内半径
  outsideRadius?: number; // 外半径

  centerFontSize?: number; // 中心文字大小
  centerFontWeight?: boolean; // 中心文字粗细
  centerFontColor?: string; // 中心文字颜色
  
}

export interface RingGraphChartStateData {
  // 状态数据,如果没有可以保持空对象
}

export interface RingGraphChartEvent {
  onClick?: EventHandler;
}

export interface RingGraphChartProps {
  propData: RingGraphChartPropData;
  propState: RingGraphChartStateData;
  event?: RingGraphChartEvent;
}

export function RingGraphChart({ propData, event }: RingGraphChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts>();

  useEffect(() => {
    // 初始化图表
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    return () => {
      // 组件卸载时销毁图表
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!chartInstance.current) return;

    const {

      name1,
      value1,

      name2,
      value2,

      name3,
      value3,

      name4,
      value4,

      name5,
      value5,

      name6,
      value6,

      name7,
      value7,

      name8,
      value8,

      chartName,
      legendPosition = 'top',
      innerRadius = 30,
      outsideRadius = 80,
      centerFontSize = 18,
      centerFontWeight = true,
      centerFontColor = '#000'
    } = propData;

    const radius = [innerRadius+'%', outsideRadius+'%']


    const data: { name: string; value: number }[] = [];

    // 检查每对 name 和 value,如果都存在则添加到数据数组
    if (name1 && value1) data.push({ name: name1, value: value1 });
    if (name2 && value2) data.push({ name: name2, value: value2 });
    if (name3 && value3) data.push({ name: name3, value: value3 });
    if (name4 && value4) data.push({ name: name4, value: value4 });
    if (name5 && value5) data.push({ name: name5, value: value5 });
    if (name6 && value6) data.push({ name: name6, value: value6 });
    if (name7 && value7) data.push({ name: name7, value: value7 });
    if (name8 && value8) data.push({ name: name8, value: value8 });

    // 根据 legendPosition 设置图例位置
    const getLegendPosition = (position: string): {
      legend: LegendComponentOption,
      center: [string, string],
      grid: any
    } => {
      switch(position) {
        case 'left': return { 
          legend: { 
            left: '2%', 
            top: 'middle',
            orient: 'vertical' as const
          },
          center: ['60%', '50%'],
          grid: { left: '20%' }
        };
        case 'right': return { 
          legend: { 
            right: '2%', 
            top: 'middle',
            orient: 'vertical' as const
          },
          center: ['40%', '50%'],
          grid: { right: '20%' }
        };
        case 'bottom': return { 
          legend: { 
            bottom: '2%', 
            left: 'center',
            orient: 'horizontal' as const
          },
          center: ['50%', '40%'],
          grid: { bottom: '20%' }
        };
        default: return { 
          legend: { 
            top: '2%', 
            left: 'center',
            orient: 'horizontal' as const
          },
          center: ['50%', '55%'],
          grid: { top: '20%' }
        };
      }
    };

    const layout = getLegendPosition(legendPosition);

    // 配置项
    const option: EChartsOption = {
      title: undefined,
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const total = data.reduce((sum, item) => sum + item.value, 0);
          const percentage = ((params.value / total) * 100).toFixed(2);
          // 使用 HTML 样式美化 tooltip
          return `
            <div style="padding: 3px 6px;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${params.color}; margin-right: 8px;"></span>
              <span style="font-weight: 600;">${params.name}</span>
              <div style="margin-top: 4px; margin-left: 18px;">
                <span style="color: #666;">数值：</span>${params.value}
                <br/>
                <span style="color: #666;">占比：</span>${percentage}%
              </div>
            </div>
          `;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#eee',
        borderWidth: 1,
        padding: 0,
        textStyle: {
          color: '#333',
          fontSize: 14
        },
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); border-radius: 4px;'
      },
      legend: layout.legend,
      grid: layout.grid,
      series: [
        {
          name: chartName ? chartName : '数据统计',
          type: 'pie',
          radius: radius,
          center: layout.center,
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: centerFontSize,
              fontWeight: centerFontWeight?'bold':'normal',
              color: centerFontColor,

            }
          },
          labelLine: {
            show: false
          },
          data: data
        }
      ]
    };

    // 设置配置项
    chartInstance.current.setOption(option);

    // 绑定点击事件
    if (event?.onClick) {
      chartInstance.current.on('click', (params: echarts.ECElementEvent) => {
        event.onClick?.(params);
      });
    }

    // 自适应容器大小
    const handleResize = () => {
      chartInstance.current?.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [propData, event]);

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: '100%', 
        height: '100%'
      }}
    />
  );
} 