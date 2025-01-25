var posts=["wenzhang/Datax/","wenzhang/Maxwell/","wenzhang/在线教育离线数仓之数据采集/","wenzhang/hello-world/","wenzhang/大数据开发项目/","wenzhang/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };