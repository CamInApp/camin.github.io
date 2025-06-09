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

# 📺 多平台直播推流

### **功能介绍**

通过 CamIn 开映软件可以直接向第三方直播平台推流直播。比如抖音、视频号、Bilibili、小红书、淘宝、快手等直播平台。CamIn 开映支持两种方式的直播，一种为通过RTMP方式直播，另外一种通过虚拟摄像头搭配官方的直播助手工具开播。

### 使用条件

1. CamIn 开映软件版本 2.8.0 或以上
2. 多平台同时直播推流版本需在3.1.0.82 或以上
3. 电脑系统需要 Windows 10 64位或以上，苹果电脑需要 macOS 10.15或以上
4. 直播对硬件有一定要求，请使用电脑性能较好的机器开播。最低配置要求请见👉 [system-requirements.md](../../guidebook/system-requirements.md "mention")

### RTMP推流操作步骤

#### 直播前设置

在软件内通过添加通道、添加内容源设置摄像头参数等将编排直播内容。详细操作步骤可参阅 [add-edit-sources](../add-edit-sources/ "mention")

#### 配置推流地址

在软件工具栏点击【直播推流】。在打开的窗口中点击【添加直播平台】 然后选择你想要的直播平台根据要求填写推流相关信息，添加直播平台后即可开始直播。

<figure><img src="../../.gitbook/assets/image (108).png" alt=""><figcaption></figcaption></figure>

* 直播间名称：必填项，填写直播平台的昵称，系统会自动保存；
* 推流地址：必填项，仅支持RTMP协议地址，格式错误时则会提示“请填写正确的RTMP地址”；
* 推流密钥：必填项，设置推流密钥。

#### 开始直播

完成直播配置后，点击窗口上的【开始直播】即可，部分直播平台，同时也需要在平台上开始直播，请注意。

### 通过虚拟摄像头直播

部分直播平台没有开放或无法获取推流地址和密钥，比如抖音等。针对这种情况，你可以配合各平台的直播助手或直播伴侣使用 CamIn 开映的虚拟摄像头进行直播。下面以【视频号直播助手】为例介绍配置方法：

#### 添加摄像头

在微信windows客户端点击左下角更多设置，下载并安装【视频号直播工具】，安装完成后打开。点击【摄像头】，见下图：

<figure><img src="../../.gitbook/assets/添加摄像头.png" alt=""><figcaption></figcaption></figure>

#### 选择 CamIn virtual camera 作为摄像头

点击摄像头后，在打开的窗口中选择【CamIn virtual camera】作为摄像头，见下图：

<figure><img src="../../.gitbook/assets/选择摄像头 camin.png" alt=""><figcaption></figcaption></figure>

摄像头设置完成后，请打开 CamIn 开映软件进行操作即可。

{% hint style="info" %}
通过虚拟摄像头直播的方法同样适用于其他直播平台。比如搭配抖音直播伴侣、快手直播伴侣等使用。
{% endhint %}

### 注意事项

1. 推送平台名称、推流地址、推流密钥为必填项，你需要在相应直播平台上获取上述信息。
2. 必须配置一个平台开启直播推流，才能开始直播。
3. 当前仅支持向一个平台推流，暂时不支持同时向多个平台推流。
4. 所有在右侧预览区域内容的画面，均会被直播推流。软件内的设置窗口、画笔面板等不会被推流，请放心使用。
5. 直播过程中，无法切换推流平台，需要停止当前直播后，重新勾选推流平台并开启直播。
6. 暂时不支持录制直播推流，你可以在直播平台开启直播回放。
