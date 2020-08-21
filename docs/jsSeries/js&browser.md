# js & browser
[reference url](https://blog.csdn.net/juliaandjulia/article/details/108084996?utm_medium=distribute.pc_category.none-task-blog-hot-16.nonecase&depth_1-utm_source=distribute.pc_category.none-task-blog-hot-16.nonecase&request_id=)
js引擎的执行阶段分为三个部分：语法分析—>预编译—>执行阶段。

1. js是单线程的；
2. js利用宏任务来解决多个任务的问题；宏任务又分同步任务和异步任务；
3. js引擎线程：也称为JS内核，负责解析执行JS脚本程序的main thread（example: v8）
4. event emit thread: 归属于浏览器的内核进程，不受JS引擎线程控制。主要用于控制事件，当
事件触发的时候，就会将事件的处理函数push进队列中，等待JS引擎线程执行。
5. 定时器触发线程：主要控制setInterval和setTimeout延时器，满足定时器的触发条件，则将定时器的处理函数推进事件队列中，等待JS引擎线程执行。
6. 异步请求线程：通过XMLHttpRequest连通后，通过浏览器开启一个新的线程，监控readyState状态变更时，如果设置了该状态的回调函数，则将该状态的处理函数推进事件队列中，等待JS引擎线程执行。
7. 微任务（micro-task）是在es6和node环境中出现的一个任务类型，不考虑这两个环境的话，我们只需要理解宏任务即可。微任务的API：Promise，process.nextTick。