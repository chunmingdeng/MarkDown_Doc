# operating system (操作系统)
> 阅读到p35

## 现代操作系统（第四版）
- 内核态，用户态
    - 操作系统运行在内核态（并不完全正确）

### 操作系统历史
1. 第一代1945-1955：真空管和穿孔卡片
2. 第二代1955-1965：晶体管和批处理系统
3. 第三代1965-1980：集成电路和多道程序设计
    - MIT开发了CTSS，兼容分时系统；
    - MIT、贝尔实验室、通用电气公司决定开发MUTLTICS，但是难度太大，贝尔实验室和通用电气退出了，最终由MIT开发完成；[multics官网](https://www.multicians.org/)
    - Ken Thompson开发一个简化的MULTICS，后来诞生了unix；
    - 1987年本书作者发布了UNIX的一个小的克隆版本，成为MINIX用于教学目的；[MINIX官网](https://www.minix3.org/)
4. 第四代1980-至今：个人计算机
    - 1974年 intel 8080第一代通用8为cpu出现；
    - Bill Gates购买DOS（Disk Operate System）转卖给intel；
    - Doug Engelbart发明了图形用户界面，Xerox PARC研究人员采用；
    - Steve Jobs看到PARC的GUI，设计了苹果的GUI；
    - 1995年windows 95发布，把底层的MS-DOS作为启动和运行老的MS—DOS程序；（16位）
    - 1998年windows 98发布；（16位）
    - 1999年windows NT 5.0更名windows 2000；
    - 2001年发布windows 2000的一个稍微升级版本window XP；
    - 2007年一月，发布windows XP的后继版本Vista；随后windows 7；
    - 2012年发布windows 8；
> freeBSD, X window, X11
5. 第五代1990-至今：移动计算机

#### CPU处理器
由于访问内存以得到指令的时间比执行指令花费的时间长的多，所以cpu内有一些用来保存关键变量和零时数据的寄存器
- 寄存器
    - 程序计数器
    - 堆栈指针
    - 程序状态字
