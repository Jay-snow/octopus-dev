---
title: "My first Wordpress headache"
date: "2019-05-24"
---

Wordpress is the internet's most popular content management system. And like with anything popular, there are a fair amount of Wordpress haters in the web development
community. The WP engine seems to cause as much strife as it does happiness.

I've never really had a vendetta for Wordpress, but I've never done anything *major* with it before. In an effort to fix this, I have started making my first ever Wordpress theme. Everything has been pretty smooth sailing. . .

Until last night. Suddenly, Wordpress had issues connecting to it's mySQL database. Half an hour later I discovered that MAMP was simply not turning on it's mySQL servers anymore. After some time I was able to restore my mySQL servers, but now I was hit with "No connection could be made because the target machine actively refused it."

Okay. I've never seen that error before, but I'll take any new error as progress at this point. 

 Two hours of fiddling later, with half-a-dozen StackedOverflow solutions attempted, I ended un uninstallling MAMP and moving back to another service I was more used to: XAMPP.

I migrated everything from my MAMP /htdocs file to my XAMP /htdocs to continue working on my Wordpress theme.

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
