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
         $nama_mp      = filter_var($_REQUEST['nama_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $KKM     = filter_var($_REQUEST['KKM'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nip     = filter_var($_REQUEST['nip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
          $sql  = "INSERT INTO mata_pelajaran(kode_mp, nama_mp, KKM, nip) 
                   VALUES($kode_mp, '$nama_mp', $KKM, $nip)";

                  echo $sql;
         
         mysqli_query($link, $sql);
         // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "INSERT INTO mata_pelajaran(kode_mp, nama_mp, KKM, alamat, password) 
         //          VALUES(:kode_mp, :nama_mp, :KKM, :alamat, :password)";
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
         $nama_mp      = filter_var($_REQUEST['nama_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $KKM     = filter_var($_REQUEST['KKM'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nip     = filter_var($_REQUEST['nip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         echo $nama_mp;
          // $sql  = "UPDATE mata_pelajaran SET nama_mp = $nama_mp, alamat = $alamat, password = $password, KKM = $KKM WHERE kode_mp = $kode_mp";
          $sql = "UPDATE `mata_pelajaran` SET `kode_mp`=$kode_mp, `nama_mp`='$nama_mp',`KKM`='$KKM', `nip`='$nip' WHERE kode_mp = $kode_mp";

                  echo $sql;
         
         mysqli_query($link, $sql );
         // Sanitise URL supplied values
         //$name          = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $kode_mp   = filter_var($_REQUEST['kode_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $nama_mp  = filter_var($_REQUEST['nama_mp'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
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
          $kode_mp   =  filter_var($_REQUEST['kode_mp'], FILTER_SANITIZE_NUMBER_INT);

         // // Attempt to run PDO prepared statement
         // try {
         //    $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM mata_pelajaran WHERE kode_mp = $kode_mp";
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