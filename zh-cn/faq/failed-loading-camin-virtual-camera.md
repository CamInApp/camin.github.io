---
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

# 🤿 无法找到 Camin 开映虚拟摄像头

安装 Camin 开映软件之后，如果你发现在腾讯会议、直播伴侣等视频软件中无法找到 “Camin virtual camera” 这个选项。你可以尝试按照以下方法修复。

{% hint style="info" %}
注意：此方法仅针对 Windows 系统用户有效。
{% endhint %}

1.  找到系统的命令提示符工具，并以管理员身份打开。

    <figure><img src="../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>
2. 打开命令提示符工具后，分别复制以下命令到命令提示符工具并执行。

```
regsvr32 /i "C:\Program Files\CamIn\virtualcam\camin-virtualcam-module32.dll"
```

```
regsvr32 /i "C:\Program Files\CamIn\virtualcam\camin-virtualcam-module64.dll"
```

<mark style="color:red;">请注意：如果你的软件并不是按照默认路径安装的，那么将你的安装路径替换再执行即可，举例：如果你的 Camin 安装在 D 盘根目录下，那么将 “D:\camin”替换“C:\Program Files\Camin”即可。</mark>

<figure><img src="../.gitbook/assets/image (108).png" alt=""><figcaption></figcaption></figure>
