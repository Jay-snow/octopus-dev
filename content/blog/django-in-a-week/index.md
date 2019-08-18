---
title: "My first week with Django"
description: "My first week as a web developer, my thoughts, feelings, and things I've learned."
date: "2019-08-12"
---


Last week, I started my first full time job as a web developer.

It's been really exciting for a number of reasons:  I finally am working a job where I get to code all day, I feel like the work is engaging and interesting, and best yet my coworkers enjoy coding and are very patient with my current ability. Up until now coding for me has been a solitary and isolating interest - something I've done exclusively alone whether at work or at home.

The tech stack my company uses is Django, Python, Bootstrap, and PostgresSQL. I'm pretty comfortable with Bootstrap, but I'm pretty much brand new to the other three. I have some experience with Python - I took a Python class in undergrad but that was six or seven years ago. Python I remember intensely enjoying Python though, and I still consider it the first programming language that I liked. 

I spent my first week primarily getting familiar with how Django works. I also had the opportunity to learn some things like how to create a git branch, pull from dev, etc. I'm still a little fuzzy on proper git protocol, something I'll want to make sure I nail down soon.

## Django In A Week

I was given a Django 2 book to learn from, and that's how I began learning Django. I knew absolutely nothing about it before hand other than the fact that it was a popular python-based framework used in web development. After learning about it for a week, I have a much better grasp on what Django is and how it works.

Django is a backend framework built with Python. It is very close to following the MVC model - except it has no controller. It works by using models (the database plus Python code) and renders these models in views. In the most simple terms, Django is a series of components that help receive and respond to user requests. The most common example would be a user requesting a URL, and the server responding with an HTML page.

If you were to jump into the Django [starter tutorial](https://docs.djangoproject.com/en/2.2/intro/tutorial01/) you would quickly run into some of the files listed below. You'll have a *project* and inside that project you will have an *app*. I'll talk about some of the files inside each folder, before wrapping up with what makes them different.

##Inside the project folder

+project
+--app
+--__init.py
+--settings.py
+--urls.py
+--wsgi.py

I'll take some time to explain what each of these do:

**__init.py__** This is needed for the files to become intialized (i think?)

**settings.py** This, shockingly, is the settings for your django project. This is a file you'll probably spend time in - You will be installing apps, setting CORS ORIGIN whitelist values, and taking care of lots of setting like stuff.

**urls.py**: This is the first time I've ever dealt with routing! Here is where you'll configure your pathways and urls. For example, the simple url pattern to return the default admin menu looks like this:

path('admin/', admin.site.urls)

Django lets you define your own URL pathways, which is pretty neat! The above code is mapping the URL path expression to our views.

Authors Note: Something that I found confusing is that your 'app' also has it's own urls.py. Take special note that they do not do the same thing.

**wsgi.py** I have absolutely no idea what this is for at this point. Sorry.

##Inside the app folder

Inside of your "app" folder, you'll have:

--app
----migrations
----__init__.py
----admin.py
----apps.py
----models.py
----urls.py
----tests.py
----views.py

These are the default folders, but you'll probably end up making a "templates" folder and a "static" folder. 

**migrations/** Migration files keep track of the changes you make to the models.py file. This is used to keep your database and the models.py in synch.

**admin.py** Django comes with a built-in application called Django Admin. This file is where you would make configurations to the admin app.


**apps.py** This is a configuration file for the app itself.

**models.py** The models file is the structure of your database. The model fields will be mapped to your database.

*Author's Note: Having very little backend experience, the models.py file was a little confusing to me at first. Thankfully django has great documentation, if you are new to the backend I would suggest taking a look at this file [Django Models Documentation](https://docs.djangoproject.com/en/2.2/topics/db/models/)

**views.py** This is where we handle our request/response cycle. 

**urls.py** Urls.py is *not* created during the initialization process, which I find a bit odd. You need this file to map URL patterns to your views so that you can actually use them. 

## Closing thoughts

Working at the template level is new to me, and I can't believe it's taken this long. It's not as scary as I thought it would be (at least yet), and I have a much better understanding of how things like routing work. I think it says something that a complete backend noobie like myself can get up and running with Django fairly quickly. It has very easy to understand documentation, and I've been lucky to have people who know it better than I who can answer questions when need be.

I wouldn't mind learning a bit more about Python itself, but I already find myself stretched thin in terms of language learning. My current projects involve: A django backend / angular frontend weather app, a javascript object-oriented quiz game, completing the Javascript Algorithms and Data Structres Certification course on freecodecamp.org and my underwater Mad-Max themed RPG. For now, I'm going to more-or-less pin all personal projects, and focus on better learning the technologies we use at work. 


