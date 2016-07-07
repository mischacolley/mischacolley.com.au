---
title: Respond 16
date: 15/06/2016
category: Conference
published: false
---

I haven't had the pleasure of attending a conference in a really long time and I am very very glad that I forked out and took the time to attend this one. It was fantastic, as I hoped it would be. 

I flew to Melbourne a few days early in order to catch up with some old friends who I hadn't seen for a while so that got things of to a good start. 

There have been a lot of good posts written about Respon16 like [this](http://weblog.200ok.com.au/2016/04/respond-2016-big-stonking-post.html ) and [this](http://webdirections.org/downloads/respond16Wrap.pdf) (pdf).



My key takeaways from the conference:

- From the presentations and my conversations with a lot of the speakers and attendees it’s clear that designers, developers and organisations are still figuring out how to do RWD well. 
- There was a lot of talk about achieving feature parity with the “desktop” experience and also ensuring the same content is available to small screens. More important for organisations that haven’t yet gone responsive yet I guess. 
- It's also clear that there are a lot of different ways to approach a responsive redesign and that depends a lot on budget and team size. 


- There are a lot of new CSS techniques that we should start making use of today so our builds are future proofed. 
- Use @supports and the BBC’s “Cutting the mustard” technique to start using the following today:
- Flexbox
- Responsive Type via viewport units.

- SVG is the way of the future. We should be moving away from icon fonts to SVG for a bunch of reasons. Use Grumpicon.

- We should be making use of the Picture element for responsive images. Basically designed so that you can server appropriately sized images for different devices. Use Picturefill polyfill to provide support for older browsers. 

- Rachel Simpson from the Chrome team presented on Designing secure experiences in which she talked a lot about security in a variety of contexts. 

- HTTPS / TLS was a recurring topic with a lot of people emphasising its importance, even for websites that you wouldn’t necessarily consider to have a transactional focus. 

- Speed is super important. Stuff that can help here includes:
Setting a performance budget. We need to decide how fast our site needs to be and than 
We should be leveraging responsive images. 
We need to keep a serious eye on HTTP/2 and switch to it when we can.

Responsive navigation. There are more options than the hamburger icon. See http://www.theguardian.com/au, http://beta.smh.com.au/
Modern web design is boreing and so many sites are the same.


Key Takeaways from the Workshop

* I’ll hopefully get a copy of the slides soon so I can refer to them.

We need to get the content organised so that we can design better systems and build more modular sites. To do this we should:
Conduct a content audit
Focus on a logical content hierarchy and layer styles on top to achieve desired layout. 
Start with a true baseline and progressively enhance the site for more capable browsers and devices. 


All this has reaffirmed a lot of what I new

Creating a modular design system



