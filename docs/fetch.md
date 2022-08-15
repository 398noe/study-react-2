axiosかfetchAPIを例に挙げられていたが、実務で使われていたのがAspidaなのでAspidaで実装を進めようかなと思います(゜゜)

axiosの上位互換的な存在
https://github.com/aspida/aspida
https://zenn.dev/solufa/articles/getting-started-with-aspida

具体的には、型定義をaxiosよりも安全にしたaxiosみたいなモノ

# とりあえずpostman叩いてみる
GET : https://railway-react-bulletin-board.herokuapp.com/threads?offset=1
Response : 
```
[
    {
        "id": "14",
        "title": "あなたのGitHub"
    },
    {
        "id": "24",
        "title": "railwayについて"
    },
    {
        "id": "34",
        "title": "hoge"
    },
    {
        "id": "44",
        "title": "hoge2"
    },
    {
        "id": "54",
        "title": "hoge3"
    },
    {
        "id": "64",
        "title": "hoge4"
    },
    {
        "id": "74",
        "title": "hoge5"
    },
    {
        "id": "84",
        "title": "こんにちは世界"
    },
    {
        "id": "94",
        "title": "aaaaa"
    },
    {
        "id": "104",
        "title": "aaa"
    }
]
```