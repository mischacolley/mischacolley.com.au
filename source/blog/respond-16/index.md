---
title: Respond 16
date: 15/06/2016
category: Development
tags: conference
published: false
featured_image: true
---

I haven't had the pleasure of attending a conference in a really long time and I am very very glad that I took the time time to make it happen this time. It was fantastic, as I hoped it would be. 

I flew to Melbourne a few days early in order to catch up with some old friends who I hadn't seen for a while so that got things of to a good start :). 

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BEE6jr6vlD3/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Enjoying a nice view and looking forward to day two. #respond16</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Mischa Colley (@mischacolley) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-04-11T22:30:28+00:00">Apr 11, 2016 at 3:30pm PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

There have been a lot of good posts written about Respon16 like [this](http://weblog.200ok.com.au/2016/04/respond-2016-big-stonking-post.html ) and [this](http://webdirections.org/downloads/respond16Wrap.pdf) (pdf) but my takeaways are highlighted below.

## My key takeaways from the conference:

From the presentations and my conversations with a lot of the speakers and attendees it’s clear that designers, developers and organisations are still figuring out how to do RWD well. The web is still young and responsive design is even younger. The fact we are able to do half of what we do on the web these days still impresses me. Though I feel like I've been building responsive sites for ages now, and been convinced that it is the right way to go for even longer, it was apparent that some organisations are only climbing on board the responsive train just now.

- There was a lot of talk about achieving feature parity with the “desktop” experience and also ensuring the same content is available to small screens. More important for organisations that haven’t yet gone responsive yet I guess. 

- It's also clear that there are a lot of different ways to approach a responsive redesign and that depends a lot on budget and team size. 
    - I particularly liked [this presentation](https://psimyn.com/talks/respond-16/#/) by [Simon Knox](https://twitter.com/psimyn) from Kogan. I could identify with a lot of the things he was talking about and he introduced me to [inverted nesting](https://psimyn.com/talks/respond-16/#/49) which I'd never thought of doing before.

- There are a lot of new CSS techniques that we should start making use of today so our builds are future proofed.
    - Use @supports
    - Use the BBC’s “Cutting the mustard” technique to start using things like Flexbox and Responsive Type via viewport units today.

- SVG is the way of the future. We should be moving away from icon fonts to SVG for a bunch of reasons. Use Grumpicon.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Wow learning so much about <a href="https://twitter.com/hashtag/svg?src=hash">#svg</a> at <a href="https://twitter.com/hashtag/respond16?src=hash">#respond16</a> ! Thanks <a href="https://twitter.com/SaraSoueidan">@SaraSoueidan</a> so much great knowledge to share.</p>&mdash; Mischa Colley (@mischacolley) <a href="https://twitter.com/mischacolley/status/719385666455478272">April 11, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

- We should be making use of the Picture element for responsive images. Basically designed so that you can server appropriately sized images for different devices. Use Picturefill polyfill to provide support for older browsers. 

- Rachel Simpson from the Chrome team presented on Designing secure experiences in which she talked a lot about security in a variety of contexts. 

- HTTPS / TLS was a recurring topic with a lot of people emphasising its importance, even for websites that you wouldn’t necessarily consider to have a transactional focus. 

- Speed is super important. Stuff that can help here includes:
    - Setting a performance budget. We need to decide how fast our site needs to be and than base all our decisions on that benchmark.
    - We should be leveraging responsive images. 

- Responsive navigation. There are more options than the hamburger icon. See http://www.theguardian.com/au, http://beta.smh.com.au/ for some real worl examples

- There was lots of talk about how modern web design is boring and so many sites are the same.

- CSS is a hack

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">What a wonderful closing presentation by <a href="https://twitter.com/karenmcgrane">@karenmcgrane</a> . Lots to think about <a href="https://twitter.com/hashtag/respond16?src=hash">#respond16</a> <a href="https://t.co/puJMsLMZ0x">pic.twitter.com/puJMsLMZ0x</a></p>&mdash; Mischa Colley (@mischacolley) <a href="https://twitter.com/mischacolley/status/719783903343431680">April 12, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## My key kakeaways from the workshop

I was lucky enough to also have the time to attend the workshop of Ethan Marcote and Karen McGrain.

* I’ll hopefully get a copy of the slides soon so I can refer to them.

- We need to get the content organised so that we can design better systems and build more modular sites. To do this we should:
- Conduct a content audit
- Focus on a logical content hierarchy and layer styles on top to achieve desired layout. 
- Start with a true baseline and progressively enhance the site for more capable browsers and devices. 


All this has reaffirmed a lot of what I new