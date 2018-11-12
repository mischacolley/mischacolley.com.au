var feed = new Instafeed({
    get: 'user',
    userId: 27813987,
    limit: 10,
    resolution: 'standard_resolution',
    accessToken: '27813987.1677ed0.59a4c1e47eb54435ac47ff737a3c114b',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
