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

Again a new error. This time the root user had invalid permissions. 