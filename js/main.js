$(document).ready(function() {
    // Function to fetch the latest video from a YouTube channel
    function fetchLatestVideo(channelId, apiKey) {
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        dataType: 'json',
        data: {
          part: 'snippet',
          channelId: channelId,
          maxResults: 1,
          order: 'date',
          key: apiKey
        },
        success: function(data) {
          if (data.items && data.items.length > 0) {
            var videoId = data.items[0].id.videoId;
            var videoTitle = data.items[0].snippet.title;
            var videoEmbedUrl = 'https://www.youtube.com/embed/' + videoId;
  
            // Update the video iframe with the latest video
            $('#latest-video').attr('src', videoEmbedUrl);
  
            // Update the header with the latest video title
            $('#video-title').text(videoTitle);
          }
        },
        error: function(xhr, status, error) {
          console.log('Error fetching YouTube video:', error);
        }
      });
    }
  
    // Function to fetch the most viewed video from a YouTube channel
    
    // for now i set it as second most viewed, please change later if want the first most viewed/
    function fetchMostViewedVideo(channelId, apiKey) {
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'GET',
        dataType: 'json',
        data: {
          part: 'snippet',
          channelId: channelId,
          maxResults: 2,
          order: 'viewCount',
          key: apiKey
        },
        success: function(data) {
          if (data.items && data.items.length > 1) {
            var videoId = data.items[1].id.videoId;
            var videoTitle = data.items[1].snippet.title;
            var videoEmbedUrl = 'https://www.youtube.com/embed/' + videoId;
  
            // Update the video iframe with the most viewed video
            $('#most-viewed-video').attr('src', videoEmbedUrl);
  
            // Update the header with the most viewed video title
            $('#most-viewed-video-title').text(videoTitle);
          }
        },
        error: function(xhr, status, error) {
          console.log('Error fetching YouTube video:', error);
        }
      });
    }
  
    // Call the fetchLatestVideo and fetchMostViewedVideo functions with your YouTube channel ID and API key
    var channelId = 'UCInemueXqh0N622jrIGtmVQ';
    var apiKey = 'AIzaSyCUohaw5viJIPJV9tmGrDgmsEHvKj9OClI';
    fetchLatestVideo(channelId, apiKey);
    fetchMostViewedVideo(channelId, apiKey);
  });
  