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

I was now at the very least seeing a new error. New errors can be as exciting as they are terrifying - am I moving closer toward or away from my goal?

But of course it threw an error during installation, so that option was out the window too. Two hours down and I hadn't even started programming for the day yet, so I mad a drastic decision. I would move away from MAMP entirely. I still had XAMPP from a previous project, so I I migrated everything from my MAMP /htdocs file to my XAMP /htdocs.

Again a new error. This time the root user had invalid permissions. I had a few other projects on the 

I learned that XAMPP has a tool called "resetbat" that resets the username and password to root (Or something.) No dice solving my issue though.

I checked, double checked, and triple checked any kind of config file I could find. wp-config seemed fine. 

I started to go crazy until I stepped away and thought about it more.

Ok, I know i'm getting a permission error. Why? Why am I getting this? I slowly and carefully checked the privledges in my phpMyAdmin. Everything looked good.

I went back to my wp-config file. Everything still looked good - but I had a second thought. What if I haven't been looking at the *right* wp-config file.

Lo' and behold, that was my issue. I had been updating the password on the *wrong* config file. 

So in recap, here is my problem tree:

1. MAMP is not loading it's mySQL server.
    1A: ATTEMPT: Delete log files in MAMP/DB/MYSQL. No effect
    1B: SOLUTION: Delete mysql-bin.index files, restart servers. This worked, but brought my to my next issue.
2. "No connection could be made because the target machine actively refused it."
    2A: ATTEMPT: Disable all firewalls
    2B: ATTEMPT: Restore priveledges to root user
    2C: SOLUTION: Delete MAMP and move to XAMPP. I ended up reading lots of MAMP users who had the same mySQL server issues, and I've never experienced any with XAMPP.
3. "Access Denied for User 'root'@'localhost' (using password: YES) - No Privileges?
    3A: ATTEMPT: Tried to restore priveledges again
    3B: ATTEMPT: Recreate the database in XAMPP
    3C: ATTEMPT: 
