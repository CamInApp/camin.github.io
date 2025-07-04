# 😑 Mac 版启动时提示输入密码后直接退出

1. 通过【访达】-【前往】-【前往文件夹】输入以下指令，进入文件夹；

```
/Library/CoreMediaIO/Plug-Ins/DAL
```

<figure><img src="../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>

2. 删除文件夹下的classincam-mac-module.plugin文件链接（需要管理员权限输入密码）；

<figure><img src="../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

3. 再次重启 CamIn，重启时会提示输入管理员密码，直接输入后即可正常使用。
