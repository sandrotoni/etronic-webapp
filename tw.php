<?php
   $twitterUser = empty($_GET['twitterUser']) ? 'webdesignermag' : $_GET['twitterUser'];
   $json = file_get_contents("http://twitter.com/status/user_timeline/$twitterUser.json", true); //get the twitter JSON feed
   $result = json_decode($json); //json_decode content as array
   $feedName = $result[0]->user->name;
?>
<!DOCTYPE html> 
<html>
   <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" /> 
        <meta name="apple-mobile-web-app-capable" content="yes" /> 
        <meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
        <title>
		Etronic WebAPP
        </title>
		<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
		<script src="js/main.js" type="text/javascript" charset="utf-8"></script>
 		<link rel="stylesheet" href="css/jquery.mobile-1.3.0.css" />
		<script type="text/javascript" src="js/jquery.mobile-1.3.0.min.js"></script>
		<link rel="stylesheet" href="css/mobile.css">
   </head>
   <body>
        <section id="twitter" data-role="page" data-theme="b">
            <header data-role="header">
				<a href="index.html" data-role="button" data-icon="arrow-l">Back</a>
                <h1>
                    Etronic WebAPP
                </h1>
				<a href="#" id="TwRefresh" data-role="button" data-icon="refresh">Aggiorna</a>
					<script type="text/javascript">
						$('#TwRefresh').click(function() {
								  location.reload();
						});
					</script>				
			</header>
			 <div>
				<h1><?php echo($feedName) ?></h1>
				<ul class="tweets">
				   <?php
				   foreach ($result as $item) {
					  $text = htmlentities($item->text, ENT_QUOTES, 'utf-8');
					  $time = date('g:ia', strtotime($item->created_at));
					  $date = date('jS M', strtotime($item->created_at));
					  
					  $text = preg_replace('@(https?://([-\w\.]+)+(/([\w/_\.]*(\?\S+)?(#\S+)?)?)?)@', '<a href="$1">$1</a>', $text); //turn URLs into links
					  $text = preg_replace('/@(\w+)/', '<a href="http://twitter.com/$1">@$1</a>', $text); //turn twitter usernames into links
					  $text = preg_replace('/\s#(\w+)/', ' <a href="http://search.twitter.com/search?q=%23$1">#$1</a>', $text); //turn twitter #tags into links
					  
					  echo('<li class="ui-li">');
					  echo('<h3>'.$text.'</h3>');
					  echo('<p>Posted on '.$date.' at '.$time.'</p>');
					  echo('</li>');
				   }
				   ?>
				</ul>
			 </div>
            <footer data-role="footer">
                <h2>
                    Etronic.org &copy 2013
                </h2>
            </footer>
      </section>
   </body>
</html>