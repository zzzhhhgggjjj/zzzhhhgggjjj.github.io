var posts=["wenzhang/hello-world/","wenzhang/大数据开发项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };