<!doctype html>
<html class="no-js" lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Dashboard.</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="shortcut icon" type="image/png" href="favicon.png"/>
      <!-- Place favicon.ico in the root directory -->

      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
      <link rel="stylesheet" href="css/style.css">

    </head>

    <?php 
    require_once('TwitterAPIExchange.php');
    require_once('twitter_credentials.php');

    /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
    // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
    $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $requestMethod = 'GET';

    $getfield = '?screen_name=svtnyheter&count=1';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($twitter_Credentials);
    $tweetBody = $twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest();
    $plainText = $tweetBody;
    // echo $tweetBody;
    $json_string = json_decode($tweetBody, true);
    // echo '<pre>'; var_dump($json_string[0]['user']); echo '</pre>';
    ?>
    <body>

      <!-- Add navigation template part -->
      <div w3-include-html="template-parts/navigation.html"></div>

      <div class="wrapper">
      <div class="container">
      <?php /* <pre> <?php var_dump($tweetBody); ?>  </pre> */ ?> 

        <!-- Date -->
        <div class="dateHolder">
          <div class="day"></div>
          <div class="time"></div>
          <div class="date"></div>
        </div>

        <!-- Weather -->
        <div class="morning-info-container">
          <div class="weather">
            <h2> Freshly pressed <b>Stockholms</b> weather coming up </h2>
            <div class="weather-info">
            </div>
          </div>

          <!-- Trafic -->
          <div class="traffic">
            <h2> No need to rush, here is next departure </h2>
            <div class="traffic-info">
              <img class="busLogo" src="/images/busBig.svg" />
            </div>
          </div>
          
          <!-- Twitter -->
          <div class="twitter">
            <div class="tweet">
              <h2><?php echo $json_string[0]['user']['name'] ?></h2>
              <?php echo $json_string[0]['text'] ?>
            </div>
          </div>

        </div>
      </div>

      <!-- Internal JavaScript files and third party ones
      ================================================== -->
      <script type='text/javascript' src='node_modules/jquery/dist/jquery.min.js'></script>
      <script type='text/javascript' src='node_modules/moment/min/moment-with-locales.min.js'></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      <script type='text/javascript' src="js/main.js"></script>
      <script type='text/javascript' src="js/traffic.js"></script>
      <script type='text/javascript' src="js/weather.js"></script>
      <script type='text/javascript' src="js/news.js"></script>
      <script type='text/javascript' src="js/calendar.js"></script>

    </div> <!-- Wrapper -->
    </body>
</html>
