---
icon: camera-slash
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Mac 版本卸载摄像头

首先，确定自己的 macOS 版本。在左上角点击 apple 图标-关于本机即可找到。

### macOS 14 以下

1. 打开终端
2. 在终端中输入以下命令，敲回车执行即可。

```
sudo rm -rf  /Library/CoreMediaIO/Plug-Ins/DAL/classincam-mac-module.plugin
```

### macOS 14 及以上

1. 进入系统恢复模式，设置 System Integrity Protection 为 disable
   1. 重新启动电脑，按住 CMD+R 直到屏幕上出现苹果图标和进度条，进入 Recovery 模式
   2. 在界面上方的工具栏中找到实用工具-终端，打开终端并输入 csrutil disable
   3. 关闭终端工具，重新启动
2. 重新启动后，打开终端工具并输入 systemextensionsctl developer on
3. 查看虚拟摄像头的详细信息 systemextensionsctl list ，
4. 继续输入 systemextensionsctl uninstall&#x20;
   1. 请注意：teamid 和 bundleid 在第三步的输出中可以看到
