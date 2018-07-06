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

   $link = mysqli_connect("localhost", "root", "", "siakad");
   echo $key;
   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the technologies table
      case "create":
         // Sanitise URL supplied values
         $kode_mp       = filter_var($_REQUEST['kode_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $jam      = filter_var($_REQUEST['jam'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $kelas     = filter_var($_REQUEST['kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $hari     = filter_var($_REQUEST['hari'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
          $sql  = "INSERT INTO jadwal_pelajaran(kode_mp, jam, kelas, hari) 
                   VALUES($kode_mp, '$jam', $kelas, $hari)";

                  echo $sql;
         
         mysqli_query($link, $sql);
         // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "INSERT INTO mata_pelajaran(kode_mp, jam, kelas, alamat, password) 
         //          VALUES(:kode_mp, :jam, :kelas, :alamat, :password)";
         //          echo $sql;
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':kode_mp', $kode_mp, PDO::PARAM_INT);
            // $stmt->execute();
            ;

            echo json_encode(array('message' => 'Congratulations the record ' . $kode_mp . ' was added to the database'));
         // }
         // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;



      // Update an existing record in the technologies table
      case "update":
         $kode_mp       = filter_var($_REQUEST['kode_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $jam      = filter_var($_REQUEST['jam'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $kelas     = filter_var($_REQUEST['kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $hari     = filter_var($_REQUEST['hari'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         echo $jam;
          // $sql  = "UPDATE mata_pelajaran SET jam = $jam, alamat = $alamat, password = $password, kelas = $kelas WHERE kode_mp = $kode_mp";
          $sql = "UPDATE `jadwal_pelajaran` SET `kode_mp`=$kode_mp, `jam`='$jam',`kelas`='$kelas', hari=$hari WHERE kode_mp = $kode_mp";

                  echo $sql;
         
         mysqli_query($link, $sql );
         // Sanitise URL supplied values
         //$name          = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $kode_mp   = filter_var($_REQUEST['kode_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $jam  = filter_var($_REQUEST['jam'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "UPDATE mata_pelajaran SET kode_mp = :kode_mp WHERE kode_mp = :kode_mp";
         //    $stmt =  $pdo->prepare($sql);
         //   // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
         //    $stmt->bindParam(':kode_mp', $kode_mp, PDO::PARAM_INT);
         //    $stmt->execute();

            echo json_encode('Congratulations the record ' . $kode_mp . ' was updated');
         // }
         // // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;



      // Remove an existing record in the technologies table
      case "delete":

         // Sanitise supplied record ID for matching to table record
          $id_jadwal   =  filter_var($_REQUEST['id_jadwal'], FILTER_SANITIZE_NUMBER_INT);

         // // Attempt to run PDO prepared statement
         // try {
         //    $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM jadwal_pelajaran WHERE id_jadwal = $id_jadwal";
            mysqli_query($link, $sql );
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':kode_mp', $kode_mp, PDO::PARAM_INT);
            // $stmt->execute();

            echo json_encode('Congratulations the record ' . $kode_mp . ' was removed');
         // }
         // // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;
   }

?>