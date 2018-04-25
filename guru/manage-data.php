<?php
   header('Access-Control-Allow-Origin: *');

   // Define database connection parameters
   $hn      = 'localhost';
   $un      = 'root';
   $pwd     = '';
   $db      = 'siakad';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn  = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
   $opt  = array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // Create a PDO instance (connect to the database)
   $pdo  = new PDO($dsn, $un, $pwd, $opt);

   // Retrieve specific parameter from supplied URL
   $key  = strip_tags($_REQUEST['key']);
   $data    = array();


   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the technologies table
      case "create":

         // Sanitise URL supplied values
         $nip   	= filter_var($_REQUEST['nip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama      = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $alamat    = filter_var($_REQUEST['alamat'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password  = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "INSERT INTO guru(nip, nama, alamat, password) 
            		VALUES(:nip, :nama, :alamat, :password)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nip', $nip, PDO::PARAM_STR);
            $stmt->bindParam(':nama', $nama, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'Congratulations the record ' . $nip . ' was added to the database'));
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Update an existing record in the technologies table
      case "update":

         // Sanitise URL supplied values
         //$name          = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nip   = filter_var($_REQUEST['nip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama  = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "UPDATE guru SET nip = :nip WHERE nip = :nip";
            $stmt =  $pdo->prepare($sql);
           // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':nip', $nip, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $nip . ' was updated');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Remove an existing record in the technologies table
      case "delete":

         // Sanitise supplied record ID for matching to table record
         $nip   =  filter_var($_REQUEST['nip'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM guru WHERE nip = :nip";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nip', $nip, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $nip . ' was removed');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;
   }

?>