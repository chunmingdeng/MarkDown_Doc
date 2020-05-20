# jsPlumb
[简单中文教程](https://www.cnblogs.com/xcj26/p/9870734.html)  
[官网](http://jsplumb.github.io/jsplumb/home.html)    
[gitHub](https://github.com/jsplumb/jsplumb)    
[changelog](http://jsplumb.github.io/jsplumb/changelog.html)    
> 鉴于目前的版本更新和网络上教程出的时间的早晚的问题，会有一部分网上教程的api有误，建议出现此类问题的时候查看**jsplumb**的changelog；

## concept
- jsPlumb社区版为开发人员提供了一种使用SVG可视化连接其网页上的元素的方法。
- jsPlumb没有外部依赖项。
- 1.7.x版本是最后一个支持IE8的版本。从2.0.0版开始，社区版仅在支持SVG的现代浏览器中工作。


## start
- `npm install jsplumb`
- `import jsplumb from 'jsplumb'`
    ```js
    // 有必要的话，方法尽可能写在ready的callFn中
    jsPlumb.bind("ready", function() {
    ...           
    // your jsPlumb related init code goes here
    ...  
    });
    ```
- 创建实例（create instance）
    ```js
    // jsplumb 会自动在浏览器对象下挂载一个jsPlumb对象的实例，可以直接使用这个对象
    window.jsPlumb;
    // 自己创建一个实例
    const jspInstance = jsPlumb.getInstance();
    ```
- 基础配置
    ```js
    // 可以在jsPlumb上挂载一些初始化的基础配置
    jsPlumb.importDefaults({
        ConnectionsDetachable: false, // 禁止修改已建立的链接
        AllowLoopback:false, // 防止环形链接
    })
    // 在实例上配置一些基本信息
    this.jsplumbInstance = jsPlumb.getInstance(
        {
          Connector: [ // 链接线的配置
            "Bezier", // 生成规则
            {
              gap: 5,
              cornerRadius: 8,
              alwaysRespectStubs: true
            }
          ],
          ConnectionOverlays: [ // 链接线上的overlay，比如箭头
            [
              'Arrow',
              {
                width: 10, 
                length: 10, 
                location: 1
              }
            ]
          ],
          PaintStyle: { // 链接线样式（style）
            stroke: "#1890ff",
            strokeWidth: 2
          },
          HoverPaintStyle: { // 链接线hover style
            stroke: "#409EFF",
            strokeWidth: 3
          },
          EndpointStyle: { // 端点样式（endPoint style）
            fill: "#456",
            stroke: "#2a2929",
            strokeWidth: 1,
            radius: 3
          },
          EndpointHoverStyle: { // 端点hover style
            fill: "pink"
          },
          Container: 'linker', // 整个jsplumb的容器，会在后面使用draggable的时候作为node拖拽的容器，可以用来限制是否可以拖拽出容器，.draggable(node, {containment: 'parent'})
        }
      )
    ```

## node
> 这里的节点可以自己在页面中创建，可以是任意的样式，本doc中使用<i>**nodeList**</i>表示节点集合，<i>**node**</i>表示单个节点


## endPoint
- endPoint 是用来作为链接的source或者target；
- endPoint 在不是特别声明的情况下，endPoint是单独的，如果特别声明，也可以将node作为endPoint；
    ```js
    // 将id='A'的元素作为endPoint
    jsPlumb.makeSource('A', {
        endpoint:"Dot",
        anchor: "Continuous"
    })
    ```
- endPoint 在创建的时候可以给其赋值一个uuid作为唯一标识
    ```js
    // 创建带uuid的endPoint；为什么要uuid：在链接的时候可以使用uuid直接创建链接；
    jspInstance.addEndPoint(node, {anchor: 'Right', uuid: `${uuid}`})
    ```

#### endPoint cfg&method&event
- cfg
    ```json
    let endPointerCfg = {
        isSource: true, // 是否可以作为source
        isTarget: true, // 是否可以作为target
        maxConnections: -1, // endPoint的最大链接数，-1表示不限制
        anchors: ['Right','Left'], // endPoint的创建位置
        uuid: `${uuid}`
        ...
    }
    ```
- methods
    ```js
    endPoint.getUuid(); // 获取当前endPoint的uuid
    ```
- event
    ```js
    暂无
    ```

## link 
> link在本doc中是用来描述链接关系的， endPoint(node)-link-endPoint(node)

#### link event
- events
    ```js
    // click
    // 直接在实例上绑定link的click事件
    this.jsplumbInstance.bind('click', (conn, originalEvent) => {
        if (window.prompt('确定删除所点击的链接吗？ 输入y确定') === 'y') {
            this.jsplumbInstance.deleteConnection(conn);
        }
    })
    ```
    ```js
    // onCreate
    // 链接的创建事件监听
    // info是返回的链接的信息，包含sourceEndpoint、targetEndpoint等
    // 这里可以使用endPoint的getUuid()来获取endPoint的uuid（作为以后初始化的时候创建link用）
    this.jsplumbInstance.bind('connection', (info) => {
        const link = {
            name: 'link',
            uuid: `link-${this.getUUID()}`,
            sourceId: info.sourceId,
            targetId: info.targetId,
            sourceEndpointUuid: info.sourceEndpoint.getUuid(),
            targetEndpointUuid: info.targetEndpoint.getUuid(),
        };
        this.flow.linkList.push(link)
    })
    ```
## methods list
- `jsPlumb.getInstance()` 
- `jsPlumb.importDefaults(<config>)` 设置默认配置
- `jsPlumb.batch(callback<function>, true)` 当对图形做批量操作的时候如果单独一个个绘制是很浪费性能的，可以在昨晚所有的操作之后一次性重绘
- `jsPlumb.bind(<event>, <callFunction>)`
    - events: connection, connectionDetached, connectionMoved, click, dblclick, endpointClick, endpointDblClick, contextmenu, beforeDrop, beforeDetach, zoom, Connection Events, Endpoint Events, Overlay Events, Unbinding Events
    - beforeDrop：可以做连线前的校验，return false则不建立连接
    - connection：连接建立的监听函数
- `jsPlumb.addEndPoint(<els>, <endPointConfig>)`
    - els: id/dom
    - endPointConfig: [link](#endpoint-cfg-method-event)
- `<endPoint>.getUuid()` 获取endPoint的uuid
- `jsPlumb.connect()` 创建链接
    - 方法一：根据node的Dom元素id创建（弊端是创建的链接自动生成的endPoint会在node的下方）
    ```js
        jsPlumb.connect({
            source: 'item_left',
            target: 'item_right',
            endpoint: 'Dot'
        })
    ```
    - 方法二：根据endPoint的uuid创建（优点：解决方法一的弊端；弊端：需要的一定的代码量和逻辑处理）
    ```js
        jsPlumb.connect({
            uuids: [link.sourceEndpointUuid, link.targetEndpointUuid]
        })
    ```
- `.toggleDraggable(node.id)` 切换元素的draggable状态
- `.makeTarget(node.id)` 设置为connetcion的target
- `.makeSource(node.id)` 设置为connetcion的source
- `.unmakeTarget(node.id)` 解除为connetcion的target
- `.unmakeSource(node.id)` 解除为connetcion的source
- `.getConnections({source: <sourceId>,target: <targetId>})` 返回值是一个数组
- `.deleteConnection(<.getConnections的返回值可以作为参数>)` 
- `.setZoom(<zoomNum>)` 当对整个画布进行缩放的时候
## 自行搭建一个流程设计器的思路
```js
let flowData = {
    nodeList: [],
    linkList: [],
}
```
1. 基于现有的流程处理框架jsPlumb的界面逻辑实现，自己在jsPlumb暴露的各个钩子中实现数据的维护；
2. 在create node btn或者拖拽的时候，`flowData.nodeList.push(node)`；
3. 在`bind('connection', <fn>)`的时候， `flowData.linkList.push(link)`；
4. 在`bind('click', <fn>)`的时候，如果删除link，则`flowData.linkList delete (link)`；
5. 初始化数据的实现：   
    5.1 根据flow.nodeList，遍历生成node；   
    5.2 在node完全渲染之后，生成endPoint（考虑新建的时候就将endPoint的uuid保存，便于后面创建链接）；    
    5.3 node，endPoint都渲染完成之后，创建链接；    


## 附录：

#### vue源码
> 基于ant-design-vue， 实现了新建（按钮或者拖拽），编辑（流程编辑，节点信息编辑），初始化
```vue
<template>
    <a-layout id='flow-container'>
      <!-- tool sider begin -->
      <a-layout-sider>
          <button @click='delAllLink'>delete all link</button></br>
          <button @click='createNode'>create node</button></br>
          <button @click='getNodeLink'>getNodeLink</button></br>
          <a-button @click='passInitFlow'>passInitFlow</a-button></br>
          <div draggable='true' style='height: 20px; width: 60px;border: 1px solid #fff;color: #fff;' @dragstart="ondragStart">node</div>
      </a-layout-sider>
      <!-- tool sider end -->

      <a-layout-content>
        <div id='linker' style="height: 100vh;width:100wh;" v-on:drop="ondrop" @dragover="ondragOver">
          <div class='item' :id='item.uuid' :key='item.uuid' v-for='item in flow.nodeList'
            :style='{"left": item.x+"px", "top": item.y+"px"}'>
            <div class='tools'>
              <a-icon type='setting' @click.stop='editNode(item)'></a-icon>
              <a-icon type='delete' @click.stop='deleteNode(item)'></a-icon>
            </div>
            <div class='content'>
              <div>{{item.name}}</div>
              <!-- <div>{{item.uuid}}</div> -->
            </div>
          </div>
        </div>
      </a-layout-content>

      <!-- node edit modal begin-->
      <a-modal title='info' v-model='modal.visiable' v-if='modal.visiable' :footer='null'>
        {{JSON.stringify(modal.data)}}
        <a-input v-model='modal.data.name'></a-input>
        <!-- <p slot='footer'>
          <a-button>ok</a-button>
        </p> -->
      </a-modal>
      <!-- node edit modal end-->
    </a-layout>
</template>

<script>
let endPointerCfg = {
  isSource: true,
  isTarget: true,
  maxConnections: -1,
  // anchors: ['Right','Left']
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      jsplumbInstance: null,
      flow: {
        nodeList: [],
        linkList: [],
      },
      modal: {
        visiable: false,
        data: null,
      }
    }
  },
  components: {
    vfd
  },
  mounted() {
    this.initjsPlumb();
  },
  methods: {
    
    getUUID: function() {
      let s = [];
      let hexDigits = "0123456789abcdef";
      for(let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
      s[8] = s[13] = s[18] = s[23] = "-";
    
      let uuid = s.join("");
      return uuid.replace(/-/g, '');
    },
    initjsPlumb() {
      // 默认配置
      // 阻止断开链接
      jsPlumb.importDefaults({
        ConnectionsDetachable: false, //禁止修改已建立的链接
        AllowLoopback:false, //防止环形链接
      })
      this.jsplumbInstance = jsPlumb.getInstance(
        {
          Connector: [
            "Bezier",
            {
              gap: 5,
              cornerRadius: 8,
              alwaysRespectStubs: true
            }
          ],
          ConnectionOverlays: [
            [
              'Arrow',
              {
                width: 10, 
                length: 10, 
                location: 1
              }
            ]
          ],
          // link line color
          PaintStyle: {
            stroke: "#1890ff",
            strokeWidth: 2
          },
          HoverPaintStyle: {
            stroke: "#409EFF",
            strokeWidth: 3
          },
          EndpointStyle: {
            fill: "#456",
            stroke: "#2a2929",
            strokeWidth: 1,
            radius: 3
          },
          EndpointHoverStyle: {
            fill: "pink"
          },
          Container: 'linker',
        }
      )
      console.log(this.jsplumbInstance)
      // delete link
      this.jsplumbInstance.bind('click', (conn, originalEvent) => {
        if (window.prompt('确定删除所点击的链接吗？ 输入y确定') === 'y') {
          this.jsplumbInstance.deleteConnection(conn);
        }
      })
      // create link
      this.jsplumbInstance.bind('connection', (info) => {
        // console.log(info)
        // console.log(info.sourceEndpoint)
        // console.log(info.sourceEndpoint.getUuid(), info.sourceId)
        // console.log(info.targetEndpoint.getUuid(), info.targetId)
        const link = {
          name: 'link',
          uuid: `link-${this.getUUID()}`,
          sourceId: info.sourceId,
          targetId: info.targetId,
          sourceEndpointUuid: info.sourceEndpoint.getUuid(),
          targetEndpointUuid: info.targetEndpoint.getUuid(),
        };
        this.flow.linkList.push(link)
      })

    },
    initjsPlumbData() {

    },
    delAllLink() {
      // let els = document.querySelectorAll('.item')
      // this.jsplumbInstance.deleteEveryConnection(); // 删除所有的link 
      // this.jsplumbInstance.deleteEveryEndpoint(); // 删除所有的endPoint
      // this.jsplumbInstance.remove('item01'); 
    },
    createNode(nodeObj) {
      // 当nodeObj存在。根据已有的信息创建node，否则创建新的node
      if (nodeObj)
        console.log('nodeObj', nodeObj)
      let uuid = this.getUUID();
      const node = {
        name: 'node',
        uuid: nodeObj.uuid || `node-${uuid}`,
        endPointRightUuid: nodeObj.endPointRightUuid || `endPointRightUuid-${uuid}`,
        endPointLeftUuid: nodeObj.endPointLeftUuid || `endPointLeftUuid-${uuid}`,
        x: nodeObj.x || 0,
        y: nodeObj.y || 0,
      };
      this.flow.nodeList.push(node)
      this.$nextTick(function() {
        let els = document.getElementById(`${node.uuid}`);
        let l = this.jsplumbInstance.addEndpoint(els, endPointerCfg, {anchors: 'Right', uuid: node.endPointRightUuid});
        let r = this.jsplumbInstance.addEndpoint(els, endPointerCfg, {anchors: 'Left', uuid: node.endPointLeftUuid});
        this.jsplumbInstance.draggable(els, {containment: 'parent'}); // 只能在父元素内drag
        // console.log(r.getUuid(), l.getUuid())
      })
    },
    createConnection(link) {
      // 根据endpoint的uuid创建connection
      this.jsplumbInstance.connect({
        uuids: [link.sourceEndpointUuid, link.targetEndpointUuid]
      })
    },
    getNodeLink() {
      console.log(JSON.stringify(this.flow))
    },
    editNode(item) {
      this.modal.visiable = true;
      this.modal.data = item
    },
    deleteNode(item) {
      this.jsplumbInstance.remove(item.uuid); 
      // flow数据模型中删除该条数据
      // delete node
      this.flow.nodeList.splice(this.flow.nodeList.findIndex(e => e.uuid == item.uuid), 1)
      // delete node_link
      const result_link = this.flow.linkList.filter(l => {
        return l.sourceId != item.uuid && l.targetId != item.uuid;
      })
      this.flow.linkList = result_link;
    },
    ondragStart(e) {
      e.dataTransfer.setData('text', JSON.stringify({name:'new node', uuid: null}));
    },
    ondragOver(e) {
      e.preventDefault();
    },
    ondrop(e) {
      // console.log(e)
      let createNodeObj = JSON.parse(e.dataTransfer.getData("text"));
      createNodeObj.x = e.layerX;
      createNodeObj.y = e.layerY;
      // console.log(createNodeObj)
      this.createNode(createNodeObj);
    },
    passInitFlow() {
      const origin = {"nodeList":[{"name":"node","uuid":"node-c0a4a314942d4f54812dea1d340f5d1c","endPointRightUuid":"endPointRightUuid-c0a4a314942d4f54812dea1d340f5d1c","endPointLeftUuid":"endPointLeftUuid-c0a4a314942d4f54812dea1d340f5d1c","x":196,"y":150},{"name":"node","uuid":"node-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","endPointRightUuid":"endPointRightUuid-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","endPointLeftUuid":"endPointLeftUuid-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","x":494,"y":491},{"name":"node","uuid":"node-2f6be048522545db8be4e9321c0bcc8f","endPointRightUuid":"endPointRightUuid-2f6be048522545db8be4e9321c0bcc8f","endPointLeftUuid":"endPointLeftUuid-2f6be048522545db8be4e9321c0bcc8f","x":799,"y":314}],"linkList":[{"name":"link","uuid":"link-bf59f44e55624747aadc129e8b546b1f","sourceId":"node-c0a4a314942d4f54812dea1d340f5d1c","targetId":"node-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","sourceEndpointUuid":"endPointRightUuid-c0a4a314942d4f54812dea1d340f5d1c","targetEndpointUuid":"endPointLeftUuid-ac09cdc07b8e4cb9b0d1560bc5fd5eb3"},{"name":"link","uuid":"link-e25a13ed24734ac58085b371175d770d","sourceId":"node-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","targetId":"node-2f6be048522545db8be4e9321c0bcc8f","sourceEndpointUuid":"endPointRightUuid-ac09cdc07b8e4cb9b0d1560bc5fd5eb3","targetEndpointUuid":"endPointLeftUuid-2f6be048522545db8be4e9321c0bcc8f"}]};
      this.jsplumbInstance.batch(() => {
        origin.nodeList.forEach(n => {
          this.createNode(n);
        })
        this.$nextTick(() => {
          origin.linkList.forEach(l => {
            this.createConnection(l)
          })
        })
      })
    }
  },
}
</script>

<style scoped lang='less'>
#flow-container{
  height: 100%;
  #linker{
    position: relative;
  }
}
.item{
  position: absolute;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 4px;
  width: 120px;
  cursor: move;
  .tools{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 6px 15px;
    background: #45536e;
    .anticon{
      color: #7f98ca;
    }
  }
  .content{
    padding: 10px 15px;
    background: #364156;
    color: #899cc0;
  }
}
.item p{
   word-break: break-all;
}
</style>

```