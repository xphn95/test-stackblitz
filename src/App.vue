<script setup>
const msg = $ref('hello')

// echarts标准格式
const echartInit = () => {
  //获取DOM元素并初始化
  var myChart = echartsInit(document.getElementById('main'))
  // 指定图表的配置项和数据
  var option = {
    //这里的yAxis就是竖轴，xAxis就是横轴
    // yAxis and xAxis 交换可以改变横向或竖向
    yAxis: {
      data: ['jack', 'blob', 'lucy'],
    },
    xAxis: {},
    // 数据的来源
    series: [
      {
        name: 'source',
        // bar就是柱状图
        type: 'bar',
        // 数据
        data: [10, 20, 30],
      },
    ],
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

// 这里需要注意，不能在setup内执行getElementById操作，因为setup是在文档加载完毕之前执行，那么
// 取到的一定是null导致init失败，所以需要在onMounted中执行
onMounted(() => {
  echartInit()
})
</script>

<template>
  <div text="center pink-300 5">
    {{ msg }}
  </div>
  <div id="main" style="width: 100%; height: 400px"></div>
</template>
