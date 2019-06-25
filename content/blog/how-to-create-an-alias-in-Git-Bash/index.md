---
title: "How To Create An Alias in Git Bash"
date: "2019-05-26"
---

Alias's in Git Bash are very easy to setup, and can dramatically improve your quality of life. 

Alias's are essentially keyboard shortcuts. For the purpose of this article, I'm going to talk about how to set up an alias to 

To create an alias, you'll need to open your .bashrc file. I found this in my root directory - if you don't see the file you may need to create it.

You can look for the file using "ls -all" to see all the files in your directory. You can open the file with the command `notepad .bashrc` or `vi .bashrc`.

You setup your on a line of text. For example

`alias wpProj = 'cd /d/xampp/htdocs/wordpress/'`

Would take me to my wordpress project directory by typing wpProj.

Once you have your shortcut written, save and exit notepad / escape vim and you can now use your new shortcut.
