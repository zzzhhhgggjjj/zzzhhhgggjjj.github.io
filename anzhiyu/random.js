var posts=["wenzhang/Maxwell/","wenzhang/Datax/","wenzhang/hello-world/","wenzhang/在线教育离线数仓之数据采集/","wenzhang/Maxwell启动失败处理方法/","wenzhang/建模/","wenzhang/梳理/","wenzhang/大数据开发项目/","wenzhang/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };