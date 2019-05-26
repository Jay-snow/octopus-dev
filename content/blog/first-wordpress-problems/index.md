---
title: "My first Wordpress headache"
date: "2019-05-24"
---

Most web developers have pretty strong opinions on [Wordpress](https://wordpress.org/). I've never done major techinical work in Wordpress - I've customized a few themes and have pushed a few posts in my day, but I haven't created a plugin or created a theme from scratch.

At least I hadn't until a few weeks ago. I decided to dive in and build my very own Wordpress theme. 

> New errors can be as exciting as they are terrifying - am I moving closer toward or away from my goal?

I downloaded Wordpress, opened a "Making your first wordpress theme" tutorial, and hit the ground running. Having only used PHP and mySQL for my twitter-clone project, I was amazed at how easy it was to get everything up and running. __I didn't have a single issue. . . Until last night.__

My adorable dumb cat, Loki, jumped directly onto tower's restart button. When I finished rebooting, Wordpress was suddenly throwing a fit. Whenever I tried to access my localhost/wordpress-domain, I would get the error "No connection could be made because the target machine actively refused it.". 

After some poking around, I found out that it wasn't *actually* Wordpress's fault - My MAMP mySQL servers had stopped turning on.

![The light next to MySQL Server should be lit up. It's not.](mamp.JPG)
<div style="text-align:center;margin-bottom:15px;font-style:italic;">The light next to MySQL Server should be lit up. It's not.</div>

__Wordpress kept saying "No connection could be made because the target machine actively refused it.", but I had no idea what this error meant.__

I relied on every programmer's dig-out-of-this-hole secret technique: Googling the error and combing through stackedoverflow posts. I tried just about everything that seemed even half reasonable. Finally, one of solutions marched me further to my goal - Deleting the mysql-bin.index files. 

I was now seeing a new error. New errors can be as exciting as they are terrifying - am I moving closer toward or away from my goal?

Wordpress was now asking me to install, which was troubling because of course it was already installed.. I wasn't exactly sure what installing would do to my files, so I continued my search on google.

Four hours down and I hadn't even started programming for the day yet, so I made a drastic decision. I would move away from MAMP entirely. I still had XAMPP from a previous project, so I migrated everything from my MAMP /htdocs file to my XAMP /htdocs.

And wouldn't you know it - another new error. This time the root user had invalid permissions. I remembered I had changed the password for XAMPP's database from root to ******, so I updated my newly cloned XAMPP wp-config file to have the right password. Oddly enough though, I still was hit by a permission error.

Returning to Google, I learned that XAMPP has a tool called "resetroot" that resets the root password/privileges for MySQL/PHPMyAdmin. I returned Visual Studio Code  and changed the password back on my wp-config file. I tried to access my domain - still no luck.

I was completely at wits end now. I checked, double checked, and triple checked any kind of database or config file I could find. *Something* had to have the wrong password, and the main suspect, wp-config, seemed fine.

I was able to find a temporary workaround on Youtube: [How to make sql server ignore root password](https://www.youtube.com/watch?v=LKE1G4sinBM&t=73s). I went to my XAMPP/mySQL/bin/my.ini. If you go down to the __mysqld__ section, you can type in this command "skip-grant-tables". Now when your server loads, it will not load the [grant tables](http://www.devshed.com/c/a/mysql/the-mysql-grant-tables/), which allows you to connect to the server as root without a password. By doing this, I was able to log in and acccess my Wordpress site immediately.

This also gave the solution to my problem. In retrospect, I'm not sure how I managed to miss it for this long.

 What if I haven't been looking at the *right* wp-config file.

Lo' and behold, that was my issue. I had been updating the password on the *wrong* config file. Somehow, within Visual Studio Code, this whole time I was updating my *old* wp-config file from my MAMP. Ugh.

So in recap, here is my problem tree:

1. MAMP is not loading it's mySQL server.
2. ATTEMPT: Delete log files in MAMP/DB/MYSQL. No effect
3. SOLUTION: Delete mysql-bin.index files, restart servers. This worked, but brought my to my next issue.
4. "No connection could be made because the target machine actively refused it."
5. ATTEMPT: Disable all firewalls
6. ATTEMPT: Restore priveledges to root user
7. SOLUTION: Delete MAMP and move to XAMPP. I ended up reading lots of MAMP users who had the same mySQL server issues, and I've never experienced any with XAMPP.
8. "Access Denied for User 'root'@'localhost' (using password: YES) - No Privileges?
9.    3A: ATTEMPT: Tried to restore priveledges again
10.    3B: ATTEMPT: Recreate the database in XAMPP
11.   3C: Solution: Update the *correct* wp-config, ya siily! 


It doesn't feel *exactly* fair to blame Wordpress directly for this problem, but it's definitely my first Wordpress related headache. Like all debugging processess go, it feels so good it get it resolved.
