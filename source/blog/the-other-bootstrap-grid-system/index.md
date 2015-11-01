---
title: The Other Bootstrap Grid System
date: 27/09/2015
category: Development
tags: frontend
published: false
---

Bootstrap. Some love it. Some hate it. Who cares.

There have been far too many posts written about the pros and cons of Bootstrap. This isn't one of them. This post started its life because I couldn't find a good reference point for the mixins needed to build layouts without adding grid classes to your markup.

There are a few tutorials out there but no easy Sass reference and so I made a [Bootstrap Sass Grid Mixin Examples pen](http://codepen.io/mischacolley/pen/bdeoop) for my reference. 

**Note:** This will become obsolete for new projects when [Bootstrap moves to Sass in version 4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/). 

![My Photo](/blog/the-other-bootstrap-grid-system/featured_image.jpg)

Writing this reference got me thinking about all the Bootstrap love and hate and basically how pointless it is. Don't get me wrong, Bootstrap has a time and a place. But if you are a professional developer you will find yourself deep within it at some point. Unless it's a personal project, how you feel about it probably won't matter. Don't be a hater, just get the job done and do it well. To do that you need to know everything about it. Make it yours.

## Where Problems Start

I've worked with Bootstrap on both large and small scale projects and *it* hasn't been the problem. The problems I have encountered have been related to:

- Team members (myself included) having insufficient understanding of the complete Framework
- Differing stakeholder priorities
- Time constraints
- Misuse of [Responsive Utilities](http://getbootstrap.com/css/#responsive-utilities)
- Insufficient separation of Markup and Styles. This is normally the biggie and the origins of this post.

An important thing to remember is just because you are using Bootstrap doesn't mean you have to use all off it and only it.

- I think Zurb have a better [responsive tables solution](http://zurb.com/playground/responsive-tables) so I often use that.

- Given the time and budget heed your better judgment and refrain from hiding vast swathes of your site on mobiles with [.hidden-xs](http://getbootstrap.com/css/#responsive-utilities) and so on. The Bootstrap docs even warn about this. Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each devices presentation.

## Make Bootstrap Yours

A good developer should know how to customize Bootstrap to your needs and that of the project. With an experienced and well balanced design and development team it should just become another tool.

- Get to know [the code](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap)
- Specifically the [variables partial](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss)
- Setup your Sass directory structure something like below (Rails)

      /* Load custom overrides for Bootstrap variables and mixins */
      @import "./public/bootstrap/variables";
      @import "./public/bootstrap/mixins/**/*";

      /* Load Bootstrap Defaults. */
      @import "bootstrap/mixins";
      @import "bootstrap/variables";

      @import "./public/bootstrap/**/*";

      @import "./public/base/**/*";
      @import './public/components/**/*';
      @import './public/views/**/*';

## Decouple your Markup & Styles  

There are a few tutorials out there but the Bootstrap docs themselves don't do a great job at advocating a separation of markup and styles. 

The commonly used prebuilt grid classes might serve you well on smaller projects but on larger ones insufficient separation of markup and styles can cause real issues. Trust me. I've been there.

This is not inherently a problem with Bootstrap, it's a problem with your implementation. 

Grid systems like Bourbon Neat and Susy have long used Mixins to define layout in css rather then with presentational classes. You can easily work with Bootstrap this way too.

## Tiny Bootstraps, for Every Client

If you customize Bootstrap enough eventually you might find that you start to develop a reusable codebase.  
