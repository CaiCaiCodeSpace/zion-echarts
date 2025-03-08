# 📦 ZION 自定义图表组件库

<div align="center">

![Version](https://img.shields.io/badge/React-16.8+-blue.svg)
![Version](https://img.shields.io/badge/Ant%20Design-4.x-blue.svg)
![Version](https://img.shields.io/badge/TypeScript-4.x-blue.svg)

</div>

## 📋 组件列表

- [RingGraphChart - 环形图表组件](#-ringgraphchart-环形图表组件)

# 📊 RingGraphChart 环形图表组件

基于 ECharts 的环形图表组件,支持最多8组数据展示,可自定义图例位置、内外半径、中心文字样式等配置。

## ✨ 功能特点

- 🎨 支持最多8组数据展示
- 📏 可调节内外半径
- 🏷️ 支持四个方向的图例位置
- 📊 中心文字样式可配置
- 🖱️ 支持点击交互事件

## 🚀 快速开始
## 🚀 快速开始

```bash
# 安装依赖（二选一）
npm i
# 或者
pnpm i

# 运行调试（二选一）
npm run dev
# 或者
pnpm dev

# 发布流程
npm install -g functorz                    # 安装 functorz
npx functorz signin <email> <password>     # 登录 ZION
npx functorz reinit                        # 初始化组件
npx functorz publish                       # 发布
```

```tsx
import { RingGraphChart } from './components/RingGraphChart';

function App() {
  return (
    <div style={{ height: '400px', width: '500px' }}>
      <RingGraphChart 
        propData={{
          name1: "直接访问",
          value1: 335,
          name2: "邮件营销",
          value2: 310,
          chartName: "访问来源",
          legendPosition: 'top'
        }}
        propState={{}}
      />
    </div>
  );
}
```

## ⚙️ 组件配置

### Props

| 属性 | 类型 | 说明 | 默认值 |
|:------:|:------:|:------|:------:|
| `name1~name8` | string | 数据项名称 | - |
| `value1~value8` | number | 数据项值 | - |
| `chartName` | string | 图表名称 | '数据统计' |
| `legendPosition` | string | 图例位置(top/right/bottom/left) | 'top' |
| `innerRadius` | number | 内半径(%) | 30 |
| `outsideRadius` | number | 外半径(%) | 80 |
| `centerFontSize` | number | 中心文字大小 | 18 |
| `centerFontWeight` | boolean | 中心文字是否加粗 | true |
| `centerFontColor` | string | 中心文字颜色 | '#000' |

### Events

| 事件名 | 说明 | 参数 |
|:------:|:------|:------|
| `onClick` | 点击图表时触发 | 点击的数据项 |

## ⚠️ 注意事项

1. 组件容器需要有明确的宽高
2. name 和 value 需要成对出现才会显示数据
3. 最多支持8组数据展示
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
