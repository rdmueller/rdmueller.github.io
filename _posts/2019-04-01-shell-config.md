---
layout: post
redirect: http://fiveandahalfstars.ninja/blog/2019/2019-04-01-shell-config.html
title: "My Shell-Config on Windows 10"
tags: []
---

Windows 10 together with the Windows Subsystem for Linux (WSL) is now a great OS for development.
You can easily switch between the powershell and bash and thus test your code on both systems.

What I love in powershell is the ability to start the windows explorer in the current directory with `ii .`.
You standard bash does not have this feature out of the box (it doesn't know about windows) but you can configure an alias for that:

    alias ii='powershell.exe ii'
    
This works because out of the box, you can use windows commands within your linux running in WSL!

I also love to be able to view each file in its corresponding standard app by just typing `start <filename>`.
So `start index.html` will open the `index.html` from the current folder in chrome.
Again, an alias will add this feature to your bash:

    alias start='cmd.exe /c start'
    
Cool, isn't it?

How about beeing able to run graphical tool on WSL?
Just add 

    export DISPLAY=127.0.0.1:0

to your `~/.bashrc` and start an XServer on your windows machine (I use VcXsrv) and many linux apps will run on Windows within WSL.

Note: This feature is still unsupported and you will et some error messages on the terminal
You might want to use WLinux from the Microsoft Store to minimize these problems. 
WLinux is a Linunx optimized for WSL.
It is even pre-configured to easily connect to your windows docker host wihtout having to deactivate security.

Often it is annoying when the prompt shows you the whole path like `mnt/c/Users/yourname/projects/yourproject/etc`. 
Fix this by replacing the prompt setting in your `~/.bashrc` with this line:

```bash
if [ "$color_prompt" = yes ]; then
    PS1='\[\e[32m\]\u\[\e[m\]:\[\e[33m\]${PWD#"${PWD%/*/*}/"}\[\e[m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
```

It will only display your user name and the last two folders of your current directory.

You can do the same for powershell by adding the following to your profile:

```
function prompt {
    $dateTime = get-date -Format "dd.MM.yyyy HH:mm:ss"
    $currentDirectory = $(Get-Location)
    $UncRoot = $currentDirectory.Drive.DisplayRoot

    write-host "PS $(Split-Path -Leaf $pwd)>" -NoNewline -ForegroundColor Yellow
    return " "
}
```

To check where you profile is located, just type `$profile` at the prompt. 
It is very likely that it is currently an empty file.

And while you edit your profile, you might also want to add these lines:

```
$console = $host.ui.rawui
$console.backgroundcolor = "black"
$console.foregroundcolor = "white"
$colors = $host.privatedata
$colors.verbosebackgroundcolor = "Magenta"
$colors.verboseforegroundcolor = "Green"
$colors.warningbackgroundcolor = "Red"
$colors.warningforegroundcolor = "white"
$colors.ErrorBackgroundColor = "DarkCyan"
$colors.ErrorForegroundColor = "Yellow"
```

These will fix the standard-colors which make some shell output unreadable.

What are your tricks?

