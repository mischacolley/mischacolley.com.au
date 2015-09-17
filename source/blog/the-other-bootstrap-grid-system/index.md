---
title: The Other Bootstrap Grid System
date: 10/07/2015
tags: Bootstrap, Web Development
---

![My Photo](/blog/the-other-bootstrap-grid-system/featured_image.jpg)

**TLDR:** Bootstap Sass grid Mixin examples

Bootstrap. Some love it. Some hate it. Who cares. 

There have been far too many posts written about the pros and cons of Bootstrap. This isn't one of them. This is a Sass reference to an alternate way of working with the Boostrap grid, along with a brief explanation of why you and your team might be the problem and not Bootstrap. 

Don't get me wrong, Bootstrap has a time and a place but if you are a professional developer you will find yourself deep within it at some point. Unless it's a personal project, how you feel about it probably won't matter. Don't be a hater, just get the job done and do it well. 

I've worked with Bootstrap on both large and small scale projects and it hasn't been a problem. The problems I have encountered have been related to:

- Team members having insufficient understanding of the complete Framework 
- Differing stakeholder priorities
- Time constraints 
- Misuse of Responsive Utilities
- Insufficient separation of Markup and Styles. This is normally the biggie and why I'll be talking about the grid.

An important thing to remember is just because you are using Bootstrap doesn't mean you have to use all off it and only it.

I think Zurb have a better responsive tables solution so I use it.
Given the time and budget heed your better judgment and refrain from hiding vast swathes of your site on mobiles with .hidden-xs and so on. The Bootstrap docs even warn about this.

Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each devices presentation.

A good developer should know how to customise Bootstrap to your needs and that of the project. With an experienced and well balanced design and development team it should just become another tool. So lets learn how to make the grid work for us and not against us. 

## Decouple your Markup & Styles  

There are a few tutorials out there but no good reference point for constructing  

Insufficient separation of Markup and Styles. The commonly used prebuilt grid classes might serve you well on smaller projects but on larger ones it can cause issues.

Again this is not a problem with Bootstrap, it's a problem with your implementation. Let me show you how you can fix that.

Grid systems like Bourbon Neat and Susy have long used Mixins to define layout in css rather then with presentational classes. You can easily work with Bootstrap this way too.

Here is how:

http://codepen.io/mischacolley/pen/bdeoop