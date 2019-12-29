---
title: "How To Create CSS Variables"
description: "Did you now you could create variables in CSS? This article explains how!"
date: "2019-10-03"
---

Creating variables in CSS is pretty easy.

All you need to do is this:

In your CSS file, create a root selector.

::root {
    //example
}

Now, inside your root selector, you can set variables. For example

::root {
    --variable-name: setting 
}

So for example, let's say I wanted to have a special color that I want to use among many classes. I could do something like this:

::root {
    --main-color: #414819
}

.logo {
    background-color:var(--main-color);
}

.dog-icons {
    background-color:var(--main-color);
}

And voila! There you have CSS variables! 