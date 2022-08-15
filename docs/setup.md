# Env

```shell
$ neofetch --off
noe@ubuntu
--------------- 
OS: Ubuntu 22.04.1 LTS x86_64 
Host: ROG Flow X13 GV301QE_GV301QE 1.0 
Kernel: 5.15.0-46-generic 
Uptime: 9 mins 
Packages: 2185 (dpkg), 17 (flatpak), 20 (snap) 
Shell: bash 5.1.16 
Resolution: 1920x1080, 1920x1080 
DE: GNOME 42.2 
WM: Mutter 
WM Theme: Adwaita 
Theme: Yaru-blue-dark [GTK2/3] 
Icons: WhiteSur-dark [GTK2/3] 
Terminal: gnome-terminal 
CPU: AMD Ryzen 9 5900HS with Radeon Graphics (16) @ 4.680GHz 
GPU: NVIDIA GeForce RTX 3050 Ti Mobile 
GPU: AMD ATI 08:00.0 Cezanne 
Memory: 4716MiB / 31501MiB 
```

# setup

インストールする方法
yarnでCRAを使う方法

```shell
$ yarn create react-app study-react-2 --template typescript
```


# How to control node version?

Ubuntuをよく使うので`n`をよく使っている

https://www.npmjs.com/package/n

※事前にUbuntuにはNode.jsとnpmをインストールする必要があるのですが , aptで提供されているNodejsのバージョンは古いんですよね…

```
$ sudo apt policy nodejs
nodejs:
  インストールされているバージョン: (なし)
  候補:               12.22.9~dfsg-1ubuntu3
  バージョンテーブル:
     12.22.9~dfsg-1ubuntu3 500
        500 http://jp.archive.ubuntu.com/ubuntu jammy/universe amd64 Packages
```

以下のコマンドでインストールができます

```shell
npm i -g n
```

## nの使い方

```shell
$ sudo n --help
(以下略)
```

流れとしては

* nでnpmとnodejsをインストール
* ubuntuにaptでインストールされたnodejsとnpmを削除

という形

### 様々なバージョンをインストール

```shell
$ sudo n latest
$ sudo n lts
$ sudo n install 16.0.0 # Install node v16.0.0
```

### いまインストールされているバージョン

```shell
$ n ls
```

### バージョンの切り替え

```shell
$ n
```

色々バージョンが出てくるので切り替えて選択する(今回はltsしか入れていない)

```

  ο node/16.14.2

Use up/down arrow keys to select a version, return key to install, d to delete, q to quit
```

