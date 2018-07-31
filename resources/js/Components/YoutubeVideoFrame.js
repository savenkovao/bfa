import $ from 'jquery';
const channelID = "UCIEs-WuPwIzFPcLiuDPUJgQ";
const apiKey = "AIzaSyB7tcZu1wXjmpBk7Ku5Fx8A8N4jq_X_PRI";

export class YoutubeVideoFrame {

    constructor() {
      this._initFrame();
      this._initYoutubeApi();
    }

    _initFrame() {
      $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'+channelID, function(data) {
        console.log(data);
        let link = data.items[0].link,
          id = link.substr(link.indexOf("=")+1);
        $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
      });
    }


  _initYoutubeApi() {
    function start() {
      gapi.client.init({
        'apiKey': apiKey,
        'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
        'scope': 'https://www.googleapis.com/auth/youtube.readonly',
      }).then(function() {
        return  gapi.client.youtube.channels.list({
          'part': 'snippet,contentDetails,statistics',
          'id': channelID
        }).then(function(response) {
          let channel = response.result.items[0],
            subscribersHtml = document.getElementById('subscribers');

          subscribersHtml.innerHTML = channel.statistics.subscriberCount;
        });
      });

    }
    gapi.load('client', start);
  }

}
