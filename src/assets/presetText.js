let presetText =
  "@[toc](目录)\n" +
  "\n" +
  "> 一个基于markdown-it 高度可扩展的vue编辑器组件\n" +
  "\n" +
  "> 允许提供插槽自定义工具栏\n" +
  "\n" +
  "> 允许通过动态注册组件，允许插入工具栏指定位置\n" +
  "\n" +
  "> 优势： 可完全自定义工具栏功能，markdown-it插件调用等\n" +
  "\n" +
  "> [演示站](http://markdown-editor.bload.cn/html/)\n" +
  "\n" +
  "###  安装\n" +
  "```\n" +
  "$ npm install vue-bl-markdown-editor --save\n" +
  "```\n" +
  "### Use (如何引入)\n" +
  "\n" +
  "`main.js`:\n" +
  "```javascript\n" +
  "    // 全局注册\n" +
  "    // import with ES6\n" +
  "    import Vue from 'vue'\n" +
  "    import MarkDownEditor from 'vue-bl-markdown-editor'\n" +
  "    // use\n" +
  "    Vue.use(MarkDownEditor);\n" +
  "    new Vue({\n" +
  "        'el': '#main',\n" +
  "        data() {\n" +
  "            return { value: '' }\n" +
  "        }\n" +
  "    })\n" +
  "```\n" +
  "### 配置要求\n" +
  "```html\n" +
  "<!--本组件使用font-awesome字体图标库，请于index.html提前引入-->\n" +
  '<link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\n' +
  "<!--代码块样式，更多查看 https://highlightjs.org -->\n" +
  '<link href="//cdn.bootcss.com/highlight.js/9.14.1/styles/atom-one-dark.min.css" rel="stylesheet">\n' +
  "<!--编辑器主题颜色-->\n" +
  '<link href="//cdn.bootcss.com/github-markdown-css/3.0.1/github-markdown.min.css" rel="stylesheet">\n' +
  "\n" +
  "```\n" +
  "\n" +
  "\n" +
  "### 配置\n" +
  "|名称|类型|默认值|描述|\n" +
  "|---|---|---|---|\n" +
  "|placeholder|String|请输入内容|提示文本|\n" +
  "|height|Number|500|编辑器高度|\n" +
  "|isShowToolBar|Boolean|true|是否显示工具栏|\n" +
  "|isShowToolBarRight|Boolean|true|是否显示右侧工具栏|\n" +
  "|showMode|String|edit|显示模式，edit,see 编辑/预览模式,isSplit true下无效|\n" +
  "|isShowSplit|Boolean|true|是否分屏，手机只可显示一个，此状态无效|\n" +
  "|toolBars|Array|见下面|工具栏,排序和显示|\n" +
  "|config|Object|见下面|工具栏的配置|\n" +
  "|isSyncScroll|Boolean|true|是否同步滚动|\n" +
  "\n" +
  "\n" +
  "\n" +
  "#### 工具栏\n" +
  "> 开发工具栏例子查看 src/dev/toolBar\n" +
  "\n" +
  "|名称|描述|\n" +
  "|---|---|\n" +
  "|bold|粗体|\n" +
  "|italic|斜体|\n" +
  "|headerline|标题|\n" +
  "|underline|下划线|\n" +
  "|strikethrough|中划线|\n" +
  "|thumb-tack|标记|\n" +
  "|superscript|上角标|\n" +
  "|subscript|下角标|\n" +
  "|align-left|居左|\n" +
  "|align-center|居中|\n" +
  "|align-right|居右|\n" +
  "|quote-left|段落引用|\n" +
  "|list-ol|有序列表|\n" +
  "|list-ul|无须列表|\n" +
  "|link|链接|\n" +
  "|picture|图片|\n" +
  "|code|代码块|\n" +
  "|table|表格|\n" +
  "|emoji|表情|\n" +
  "|undo|上一步|\n" +
  "|repeat|下一步|\n" +
  "|trash|清空|\n" +
  "|about|关于，希望保留|\n" +
  "\n" +
  "#### 工具栏配置\n" +
  "```javascript\n" +
  "config: {\n" +
  "  // 配置多个表情\n" +
  "  emojis:[{name:'test',datas:['1','2']}],\n" +
  "  // 配置图片上传\n" +
  "  picture:{\n" +
  "    // 需要传回去上传后的路径\n" +
  "    // from paste/drag/upload 粘贴/拖拽/上传\n" +
  "    // 回调 异步请使用promise 案例看 src/dev/App.vue \n" +
  "    callback: (file,from)=>{\n" +
  "      return new Promise(resolve => {\n" +
  "        resolve({name:'',url: ''});\n" +
  "      });\n" +
  "    }\n" +
  "  }\n" +
  "}\n" +
  "toolBars:[\n" +
  "  'bold','italic',...更多\n" +
  "]\n" +
  "```\n" +
  "\n" +
  "#### 自定义工具栏\n" +
  "```javascript\n" +
  "let editor = this.$refs.editor;\n" +
  "let toolBar1 = editor.registerToolBarComponent('demo1',require(Example1.vue));\n" +
  "editor.addToolBar(toolBar1/*,0 插入位置*/);\n" +
  "```\n" +
  "\n" +
  "### 方法\n" +
  "|名称|参数|描述|\n" +
  "|---|---|---|\n" +
  "|registerToolBarComponent|组件名,组件|动态注册组件作为工具栏，使用方法看上|\n" +
  "|addToolBar|registerToolBarComponent返回的实例化组件,添加位置（默认最后）|添加工具栏组件|\n" +
  "|insertContent|前缀,内容,后缀,是否强制替换内容,是否插入的时候选择|插入内容|\n" +
  "\n" +
  "### 事件\n" +
  "|名称|参数|描述|\n" +
  "|---|---|---|\n" +
  "|input|内容|输入内容|\n" +
  "|ready|markdownit|加载完毕|\n" +
  "\n" +
  "### 插槽\n" +
  "|名称|描述|\n" +
  "|---|---|\n" +
  "|tool-bar-left-head|工具栏左侧头部插槽|\n" +
  "|tool-bar-left-foot|工具栏左侧尾部插槽|\n" +
  "|tool-bar-right-head|工具栏右侧头部插槽|\n" +
  "|tool-bar-right-foot|工具栏右侧尾部插槽|\n" +
  "\n" +
  "### 高级扩展\n" +
  "- 允许自行调用markdownit 注册插件 （从ready事件中获取/直接从ref中获取）\n" +
  "\n" +
  "\n" +
  "## TODO\n" +
  "- [X] 基础工具栏\n" +
  "- [X] 实现撤销恢复功能 \n" +
  "- [X] 兼容手机\n" +
  "- [X] 样式美化\n" +
  "- [X] 本项目中打包dev演示页面\n" +
  "- [X] highlight 样式引用（*）\n" +
  "- [X] 图片上传回调配置\n" +
  "- [X] 图片粘贴上传\n" +
  "- [x] 图片拖拽上传\n" +
  "- [x] 同步滚动(暂时按滚动条高度计算**)\n";

export default presetText;
