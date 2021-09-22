module.exports = {
  "title": " blog",
  "description": "这是一个博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "java",
        "icon": "reco-message",
        "items": [
          {
            "text": "springBoot",
            "link": "/java/springboot/"
          },
          {
            "text": "springCloud",
            "link": "/java/springcloud/"
          }
        ]
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
     
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/java/springboot/": [
        "",
        "aaa",
        "api"
      ],
      "/java/springcloud/": [
        "",
        "bbb",
        "ccc"
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "前端"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "杨瑞峰",
        "desc": "这个作者",
        "email": "yangruifenger@gmail.com",
        "link": ""
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "杨瑞峰",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
  },
  "markdown": {
    "lineNumbers": true
  }
}