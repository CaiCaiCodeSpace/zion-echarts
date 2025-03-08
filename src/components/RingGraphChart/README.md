# 📊 RingGraphChart 环形图表组件

<div align="center">

![Version](https://img.shields.io/badge/ECharts-5.x-blue.svg)
![Version](https://img.shields.io/badge/React-16.8+-blue.svg)
![Version](https://img.shields.io/badge/TypeScript-4.x-blue.svg)

</div>

## 📋 目录

- [简介](#简介)
- [功能特点](#功能特点)
- [快速开始](#快速开始)
- [组件配置](#组件配置)
- [使用示例](#使用示例)
- [注意事项](#注意事项)

## 📝 简介

RingGraphChart 是基于 ECharts 的环形图表组件,支持最多 8 组数据展示,可自定义图例位置、内外半径、中心文字样式等配置。

## ✨ 功能特点

- 🎨 支持最多 8 组数据展示
- 📏 可调节内外半径
- 🏷️ 支持四个方向的图例位置
- 📊 中心文字样式可配置
- 🖱️ 支持点击交互事件

## 🚀 快速开始

```tsx
import { RingGraphChart } from "./components/RingGraphChart";

function App() {
  return (
    <div style={{ height: "400px", width: "500px" }}>
      <RingGraphChart
        propData={{
          name1: "直接访问",
          value1: 335,
          name2: "邮件营销",
          value2: 310,
          chartName: "访问来源",
          legendPosition: "top",
        }}
        propState={{}}
      />
    </div>
  );
}
```

## ⚙️ 组件配置

### Props

|        属性        |  类型   | 说明                            |   默认值   |
| :----------------: | :-----: | :------------------------------ | :--------: |
|   `name1~name8`    | string  | 数据项名称                      |     -      |
|  `value1~value8`   | number  | 数据项值                        |     -      |
|    `chartName`     | string  | 图表名称                        | '数据统计' |
|  `legendPosition`  | string  | 图例位置(top/right/bottom/left) |   'top'    |
|   `innerRadius`    | number  | 内半径(%)                       |     30     |
|  `outsideRadius`   | number  | 外半径(%)                       |     80     |
|  `centerFontSize`  | number  | 中心文字大小                    |     18     |
| `centerFontWeight` | boolean | 中心文字是否加粗                |    true    |
| `centerFontColor`  | string  | 中心文字颜色                    |   '#000'   |

### Events

|  事件名   | 说明           | 参数         |
| :-------: | :------------- | :----------- |
| `onClick` | 点击图表时触发 | 点击的数据项 |

## 📝 使用示例

### 基础用法

```tsx
<RingGraphChart
  propData={{
    name1: "分类A",
    value1: 100,
    name2: "分类B",
    value2: 200,
    chartName: "数据分布",
  }}
  propState={{}}
/>
```

### 自定义样式

```tsx
<RingGraphChart
  propData={{
    name1: "分类A",
    value1: 100,
    legendPosition: "right",
    innerRadius: 40,
    outsideRadius: 70,
    centerFontSize: 16,
    centerFontWeight: false,
    centerFontColor: "#666",
  }}
  propState={{}}
/>
```

### 事件处理

```tsx
<RingGraphChart
  propData={{
    name1: "分类A",
    value1: 100,
  }}
  propState={{}}
  event={{
    onClick: (params) => {
      console.log("点击了:", params);
    },
  }}
/>
```

## ⚠️ 注意事项

1. 组件容器需要有明确的宽高
2. name 和 value 需要成对出现才会显示数据
3. 最多支持 8 组数据展示
4. 图例位置会影响图表布局

---

<div align="center">

## 👤 作者信息

<table>
  <tr>
    <td align="center" width="200">
      <b>作者</b>
    </td>
    <td align="center" width="400">
      菜菜
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>📧 邮箱</b>
    </td>
    <td align="center">
      <a href="mailto:3104591385@qq.com">3104591385@qq.com</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>💬 微信</b>
    </td>
    <td align="center">
      IMAALE
    </td>
  </tr>
</table>

</div>
