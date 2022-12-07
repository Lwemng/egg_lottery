## tencent-work 项目运行说明

### 安装依赖包
```
yarn install
```

### 本地开发模式
```
yarn serve
```

### 生产环境打包
```
yarn build
```

## 大致流程
点击抽奖按钮 -> 扭蛋机动画 -> 计算中奖物品 -> 缓存抽奖结果

## 实现的功能
- 扭蛋机动画
- 中奖概率
- 抽奖结果缓存
- 列表数据渲染
- 移动端适配

## 未实现的功能
- 有个 js 文件超过 100k
- 扭蛋机抽奖落蛋固定是绿色，未随机选扭蛋颜色


## 项目目录介绍
| 目录 | 说明 | 
| --- | --- |
 api | 初始化数据 |
 assets | 静态资源文件 |
 components | 组件 |
 storage | 本地缓存api |
 util | 工具函数 |