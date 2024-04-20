---
description: CamI
---

# Mac 版 CamIn 启动时提示输入密码，后直接退出怎么办？

1. 通过【访达】-【前往】-【前往文件夹】输入/Library/CoreMediaIO/Plug-Ins/DAL，进入文件夹；

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption><p>screenshot 1</p></figcaption></figure>

2.  删除文件夹下的classincam-mac-module.plugin文件链接（需要管理员权限输入密码）；

    <figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>screenshot 2</p></figcaption></figure>
3. 再次重启 CamIn，重启时会提示输入管理员密码，直接输入后即可正常使用。
