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

# 🥸 视频播放卡顿

CamIn 开映支持上传 .mp4和 .webm 两种格式的视频文件。如果播放视频时发现卡顿。请首先排除是否为网络问题所致。如果网络没有问题，建议通过如下方法将视频压缩之后再重新上传。一般卡顿问题都会解决。

### 通过软件压缩视频

1. 下载 压缩软件：[点击去下载 handbrake](https://handbrake.fr/downloads.php)
2. 打开 handbrake，根据源视频的清晰度，选择预设参数，同时勾选【web优化】，开始压缩。👇

{% hint style="info" %}
1. 源视频是1080P的，请选择fast 1080P30
2. 源视频是720P的，请选择fast720P30，以此类推
{% endhint %}

<figure><img src="../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (44).png" alt=""><figcaption></figcaption></figure>

3. 压缩完成后再上传即可。

### 剪辑软件导出设置

如果你的视频是通过剪辑软件编辑的，可以在导出视频之前按照如下参数（以剪映为例）设置后再导出。

<figure><img src="../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
如果按照以上设置导出视频后仍然出现播放卡顿的问题，请按照[【软件压缩视频】](shi-pin-bo-fang-ka-dun.md#tong-guo-ruan-jian-ya-suo-shi-pin)的方法处理再上传。
{% endhint %}