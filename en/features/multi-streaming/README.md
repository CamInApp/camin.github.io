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

# Multi-streaming

## Introduction

CamIn is a powerful streaming software that allows you to broadcast your live streams to multiple platforms simultaneously such as YouTube, Twitch, X, TikTok, etc.

CamIn supports two methods of live streaming: one is streaming via RTMP, and the other is using the **CamIn virtual camera** with the official Live Studio provided by the streaming platform. This tutorial will guide you through the steps to set up and use CamIn for multi-platform live streaming.

## Equipment requirements

1. **CamIn Version**
   * Live streaming on a single platform: CamIn version 2.8.0 or higher
   * Live streaming on multiple platforms simultaneously: CamIn version 3.1.0 or higher
2. **Operating System**
   * Windows: Windows 10 64-bit or higher
   * Mac: macOS 10.15 or higher
3. **System Requirements**
   * Please use a high-performance computer for streaming. For minimum system requirements, refer to 👉 [_System Requirements_](https://help.camin.net/get-started/system-requirements)

## RTMP streaming steps

### Setting Up Your Stream

Set up any overlays or other sources you want to include in CamIn. For detailed steps, refer to CamIn manual.

<figure><img src="../../.gitbook/assets/CamIn Set up.png" alt="" width="563"><figcaption></figcaption></figure>

### Configuring the Stream URL

1. Click on "Live Streaming" in the CamIn toolbar.
2. In the opened window, click "Add Platform."
3. Choose streaming platform and fill in the required streaming information.
4. Once you've added the streaming platform, you're ready to start streaming.

<figure><img src="../../.gitbook/assets/Configuring the Stream URL (1).png" alt=""><figcaption></figcaption></figure>

### Required Information:

* Stream Title: Enter your title for the streaming platform. The system will save it.
* Stream URL: Only RTMP protocol URLs are supported. If the format is incorrect, you will see a prompt saying "Please enter a valid RTMP URL."
* Stream Key: Enter the stream key.

<figure><img src="../../.gitbook/assets/Required Information.png" alt="" width="375"><figcaption></figcaption></figure>

### Starting Streaming

Once you've completed the stream configuration, click "Start Streaming" in CamIn. Please note that some streaming platforms may also require you to click _start streaming_ on their platform. Make sure to complete this step as well.

## Live Streaming via CamIn Virtual Camera

Since some live streaming platforms do not provide or allow access to streaming RTMP URL and Stream Keys, such as TikTok, in this case, you can use CamIn Virtual Camera in the Live Studio provided by these platforms for live streaming.

Here’s the method using TikTok Live Studio as an example:

### Setting Up Your Stream

Set up any overlays or other sources you want to include in CamIn. For detailed steps, refer to CamIn manual.

<figure><img src="../../.gitbook/assets/CamIn Set up (1).png" alt="" width="563"><figcaption></figcaption></figure>

### Access TikTok LIVE Studio

1. Go to [www.tiktok.com](http://www.tiktok.com/) and log in.
2. Once you are logged in, hover your cursor over the profile photo on the upper right corner of the page and select \[LIVE Studio]. It will take you to the download page.
3. Click \[Free download for windows] to get your TikTok LIVE Studio

### Add CamIn Virtual Camera

1. Click “Add source” and select “Camera”.
2. Choose “CamIn Virtual Camera”.
3. Click “Go LIVE” to start your streaming.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Once the camera setup is complete, you can open CamIn to start live streaming.

This method also applies to other platforms, such as WeChat channel-live, etc.

## **Notes:**

1. The channel's user name, RTMP URL, and stream key are required options. You need to obtain this information from the platform you want to stream to.
2. You must configure at least one platform to start your live stream.
3. All content in the preview area will be streamed to viewers. The settings area, brush panel, and other software interface elements will not be streamed, so feel free to use them.
4. During the live stream, you cannot switch streaming platforms. You need to stop the current stream, reselect the streaming platform, and then start the live stream again.
5. CamIn currently does not support recording live streams; you can enable live playback on the streaming platform instead.

\
