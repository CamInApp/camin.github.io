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

# 🤹 向第三方直播平台推流直播

### 操作步骤

#### 直播前设置

在软件内通过添加通道、添加内容源设置摄像头参数等将编排直播内容。详细操作步骤可参阅 [tian-jia-yan-shi-wen-jian.md](../tian-jia-yan-shi-wen-jian.md "mention")

#### 配置推流地址

在软件工具栏点击【直播】。在打开的窗口中依次填写推流方案、推流地址和推流密钥。

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption><p>直播推流设置</p></figcaption></figure>

* 推流方案：必填项，创建需要推送的平台名称，系统会自动保存；
* 推流地址：必填项，仅支持RTMP协议地址，格式错误时则会提示“请填写正确的RTMP地址”；
* 推流密钥：必填项，设置推流密钥。

#### 开始直播

完成直播配置后，点击窗口上的【开始直播】即可。

### 注意事项

1. 推送平台名称、推流地址、推流密钥为必填项，你需要在相应直播平台上获取上述信息。
2. 必须配置一个平台开启直播推流，才能开始直播。
3. 当前仅支持向一个平台推流，暂时不支持同时向多个平台推流。
4. 所有在右侧预览区域内容的画面，均会被直播推流。软件内的设置窗口、画笔面板等不会被推流，请放心使用。
5. 直播过程中，无法切换推流平台，需要停止当前直播后，重新勾选推流平台并开启直播。
6. 暂时不支持录制直播推流，你可以在直播平台开启直播回放。