# 常用函数
## 树结构相关
- 遍历树结构
```js
// 利用栈stack的概念实现（后进先出）
// tree是一个树形结构
const traverseTree = (tree) => {
    let root = tree;
    let stack = [root];
    while(stack.length > 0) {
        let cNode = stack.pop()
        if(cNode.children && cNode.children.length > 0) {
            for(item of cNode.children) { // 这种遍历结合stack模式，会先遍历后边的内容
                stack.push(item);
            }
        }
    }
}
const traverseTree = (tree) => {
    let root = tree;
    let stack = [root];
    while(stack.length > 0) {
        let cNode = stack.pop()
        console.log(cNode.name)
        if(cNode.children && cNode.children.length > 0) {
            for(var i = cNode.children.length - 1; i >=0; i--) { // 这种遍历结合stack模式，会先遍历前边的内容
                stack.push(cNode.children[i]);
            }
        }
    }
}
```
- 获取树的深度信息
```js
const getTreeDepth = (tree) => {
    let depth = 0;
    let currentLevel = [];
    currentLevel.push(tree);
    while(currentLevel.length > 0) {
        depth++;
        let nextLevel = [];
        for(item of currentLevel) {
            if(item.children && item.children.length > 0) {
                nextLevel = nextLevel.concat(item.children)
            }
        }
        currentLevel = nextLevel;
    }
    return depth;
}
```