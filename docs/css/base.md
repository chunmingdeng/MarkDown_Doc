# css

## 属性

#### 1、 文本属性
- `text-transform: uppercase;`  # 文本转换成大写

#### 2、 background [reference url](https://blog.csdn.net/qq449245884/article/details/108068794?utm_medium=distribute.pc_category.none-task-blog-hot-2.nonecase&depth_1-utm_source=distribute.pc_category.none-task-blog-hot-2.nonecase&request_id=)
  > 以下参数的简写：background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size 和 background-attachment.

  - common format：`background: <img_url> <position>/<size> `;
    ```js
    // the image position is top-left corner
    background: url(a.jpg) top left/20px 20px no-repeat;
    // the distance for top-left corner is 20px 20px
    background: url(a.jpg) top 20px left 20px/20px 20px no-repeat;
    // multi image
    background: url(a.jpg) top 20px left 20px/20px 20px no-repeat,
        url(b.jpg) center/20px 20px no-repeat;
    /**
    * tips: when define multi images, the 'z-index' of the image defined first will be lager than the iamge defined later.
    */
    ```
