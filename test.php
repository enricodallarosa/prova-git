<?PHP

$user_name = "bachecadellab";
$password = "";
$database = "my_bachecadellab";
$server = "localhost";

$myconn =  mysql_connect($server, $user_name, $password) or die("Errore apertura connessione");

print "Connection to the Server opened<br/>";

mysql_select_db($database, $myconn) or die('Errore select database');

$query = "SELECT * FROM materia";
$result = mysql_query($query, $myconn) or die('Errore query');

$numrows = mysql_num_rows($result);

if ($numrows == 0){
  echo "Database vuoto!";
}
else
{
  // avvio un ciclo for che si ripete per il numero di occorrenze trovate
  for ($x = 0; $x < $numrows; $x++){
    
    // recupero il contenuto di ogni record rovato
    $resrow = mysql_fetch_row($result);
    $nome = $resrow[1];

    // stampo a video il risultato
    echo "materia: <b>" . $nome . "</b><br/>";
  }
}


mysql_close($myconn);
?>