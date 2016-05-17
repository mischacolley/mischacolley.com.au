jQuery(document).ready(function($){

  // Twitter Feed config

  $('body.index').each(function(){
    
    var twitter_config = {
      "id": '491177790104813569',
      "domId": 'twitter-feed',
      "maxTweets": 1,
      "enableLinks": true
    };
    twitterFetcher.fetch(twitter_config);
  
  });

});