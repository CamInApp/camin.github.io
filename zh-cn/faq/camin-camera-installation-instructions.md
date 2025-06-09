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

# 苹果电脑无法找到 Camin 摄像头

安装 Camin 开映软件之后，如果你发现在腾讯会议、直播伴侣等视频软件中无法找到 “Camin virtual camera” 这个选项。你可以尝试按照以下方法处理。

### 安装方法

系统版本在 macOS 14 以下的正常安装软件即可使用。 macOS 14 和 macOS 15 系统版本上安装时需要特别获取系统的授权。请根据自己电脑的系统版本找到对应的方法按步骤操作即可。

#### macOS 14.0

1. 安装并打开软件，此时会有系统提示 “系统拓展已被阻止” 弹窗。在此弹窗上点击“打开系统设置”

{% hint style="info" %}
你也可以通过点击 apple 图标-系统设置-隐私与安全性-安全性找到
{% endhint %}

<figure><img src="../.gitbook/assets/企业微信截图_c1afb90b-0b74-49c2-9b0d-81c69be20d9c (1).png" alt=""><figcaption></figcaption></figure>

2. 在打开的窗口上，点击允许即可。

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

#### macOS 15.0&#x20;

1. 安装并打开软件，此时会有系统提示 “CamIn 想使用新相机扩展” 弹窗。在此弹窗上点击“打开系统设置”

{% hint style="info" %}
如果首次提示时点击了“好”，你也可以通过点击 apple 图标-系统设置-通用-登录项与扩展-相机扩展找到
{% endhint %}

<figure><img src="../.gitbook/assets/Xnip2024-09-19_16-35-50.jpg" alt=""><figcaption></figcaption></figure>

2. 在打开的窗口上，将 CamIn 的开关打开即可。

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

### 卸载方法

首先，确定自己的 macOS 版本。在左上角点击 apple 图标-关于本机即可找到。然后通过下面的方法按步骤操作即可卸载。

#### &#x20;系统版本 14.0 以下

1. 打开终端
2. 在终端中输入以下命令，敲回车执行即可。

```
sudo rm -rf  /Library/CoreMediaIO/Plug-Ins/DAL/classincam-mac-module.plugin
```

#### 系统版本在 14.0 或以上

1. 进入 Recovery 模式（系统恢复模式），将 System Integrity Protection 设置为 disable，具体操作步骤见以下 abc 3步：
   1. 重新启动电脑，配备苹果芯片的电脑长按开机键（Intel 芯片的按住 CMD+R ）直到屏幕上出现苹果图标和进度条，进入 Recovery 模式
   2. 在界面上方的工具栏中找到实用工具-终端，打开终端并输入 csrutil disable
   3. 关闭终端工具，重新启动
2. 重新启动后，打开终端工具输入 systemextensionsctl developer on 并执行
3. 然后继续输入 systemextensionsctl list 并执行，查看虚拟摄像头的详细信息
4. 继续输入 systemextensionsctl uninstall \<teamid> \<bundleid> 并执行
   1. 请注意：teamid 和 bundleid 在第三步的输出中可以看到
   2. 输入时不需要带<>
5.  卸载成功后会有 success 的提示，此时关闭终端工具然后重启电脑即可。

    <figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>
