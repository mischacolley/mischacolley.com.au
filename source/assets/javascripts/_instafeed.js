var feed = new Instafeed({
    get: 'user',
    userId: 27813987,
    limit: 10,
    resolution: 'standard_resolution',
    accessToken: '27813987.467ede5.e2311480686c4e0fbdae3a748a8b837a',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
