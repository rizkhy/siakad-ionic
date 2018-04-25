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
         $nis   	= filter_var($_REQUEST['nis'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama      = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $tahun     = filter_var($_REQUEST['tahun'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $alamat    = filter_var($_REQUEST['alamat'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password  = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "INSERT INTO siswa(nis, nama, tahun, alamat, password) 
            		VALUES(:nis, :nama, :tahun, :alamat, :password)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nis', $nis, PDO::PARAM_STR);
            $stmt->bindParam(':nama', $nama, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'Congratulations the record ' . $nis . ' was added to the database'));
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
         $nis   = filter_var($_REQUEST['nis'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama  = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "UPDATE siswa SET nis = :nis WHERE nis = :nis";
            $stmt =  $pdo->prepare($sql);
           // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':nis', $nis, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $nis . ' was updated');
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
         $nis   =  filter_var($_REQUEST['nis'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM siswa WHERE nis = :nis";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nis', $nis, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $nis . ' was removed');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;
   }

?>