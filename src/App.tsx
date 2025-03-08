import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Components from "./components/index";

const {
  RingGraphChart
} = Components;

const HomePage = () => {
 

  return (
    <div className="app-container">
      {/* <h1>导入组件</h1> */}
      {/* <ZionDataImport
        propData={{
          project_id: "k5PBKyG5Zmd",
          tableName:"ud_xueshengbiao_228526",
          dynamicFixedValues: `{
            "ud_xueyuansuoshujigou_jigou_20366e": 10,
            "ud_zongkeyongkeshishu_ab6fb8": 0
          }`
        }}
        propState={{}}
        event={{}}
      /> */}

      {/* 添加环形图表 */}
      <div style={{ 
        height: '400px',
        width: '500px', 
        marginTop: '20px',
        border: '1px solid #eee'
      }}>
        <RingGraphChart 
          propData={{
            name1: "直接访问",
            value1: 335,

            name2: "邮件营销",
            value2: 310,


            name3: "联盟广告",
            value3: 234,


            name4: "视频广告",
            value4: 135,


            name5: "搜索引擎",
            value5: 400,

            name6: "测试value为空",

            name7: "",
            value7: 1,

            name8: "测试有数据",
            value8: 10,


            chartName: "环形图",
            legendPosition: 'top',
            innerRadius: 30,
            outsideRadius: 80,
            centerFontSize: 18,
            centerFontWeight: true,
            centerFontColor: '#000',
          }}
          propState={{}}
          event={{
            onClick: (params:any) => {
              console.log('点击了:', params);
            }
          }}
        />
      </div>

      {/* <h1>ezcloudbase-template
      </h1>
      <ZionDataImport
            propData={{
              project_id: "rmLyJ0Z720K",
              tableName:"user",
              dynamicFixedValues: `{
                "area_area": 2
              }`
          


            }}
            propState={{}}
            event={{}}
          /> */}

    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
