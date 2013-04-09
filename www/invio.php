<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
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

        <!-- User-generated js -->

    </head>
	<body onload="init()">
        <section id="segnalazione" data-role="page" data-theme="b">
            <header data-role="header">
				<a href="modulo.html" data-role="button" data-icon="arrow-l">Back</a>
                <h1>
                    Etronic WebAPP
                </h1>
				<a href="index.html" data-role="button" data-icon="home">Home</a>
            </header>
            <div data-role="content" class="content">	
				<?php
				// indirizzo di chi riceve la mail è sottolineato ma nel codice non sottilineatelo

				if ((trim($_POST['mail']) != "") && (trim($_POST['body']) != "")) {    //questo fa si che se i campi -mail- e "messaggio" sono vuoti la form non invia nessuna mail
				$to = "info@etronic.org";
				$headers = "From: " . $_POST['mail'] . "\n";
				// soggetto della mail
				$subject = "Segnalazione da WebApp Etronic";

				// corpo messaggio
				$body = "Inviata da: " . trim(stripslashes($_POST["nome"])) . " - " . trim(stripslashes($_POST["mail"])) . "\n\n"; //nome ed indirizzo e-mail che manda la mail, come si vede riprende l'id del campo destinato all'inserimento della mail del mittente

				$body .= "Oggetto: " . trim(stripslashes($_POST["object"])) . "\n\n"; //oggetto del messaggio
				$body .= "Messaggio: " . trim(stripslashes($_POST["body"])) . "\n"; //messaggio


				// invio mail
				mail($to, $subject, $body, $headers); // SE L'INOLTRO E' ANDATO A BUON FINE...

				echo "<center><h1>Segnalazione inviata con successo. Grazie per averci contattato</h1><br/><h3>Premere il pulsante <b>Home</b> per continuare.</h3><br/><h3>Lo Staff Etronic.</h3></center>";

				} else {// altrimenti
				echo "<center><h1>Inserire almeno la propria mail e la Segnalazione. Grazie.</h1><br/><br/><h3>Premere il pulsante <b>Back</b> per continuare.</h3></center>";

				}

				?>
			</div>
            <footer data-role="footer">
				<h2>
                    Etronic.org &copy 2013
                </h2>
			</footer>
        </section>
	</body>
</html>
