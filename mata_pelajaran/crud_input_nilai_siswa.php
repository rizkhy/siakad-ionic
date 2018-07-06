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
         $kode_kelas       = filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama_kelas      = filter_var($_REQUEST['nama_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $jumlah_siswa     = filter_var($_REQUEST['jumlah_siswa'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
          $sql  = "INSERT INTO kelas(kode_kelas, nama_kelas, jumlah_siswa) 
                   VALUES($kode_kelas, '$nama_kelas', $jumlah_siswa)";

                  echo $sql;
         
         mysqli_query($link, $sql);
         // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "INSERT INTO mata_pelajaran(kode_kelas, nama_kelas, jumlah_siswa, alamat, password) 
         //          VALUES(:kode_kelas, :nama_kelas, :jumlah_siswa, :alamat, :password)";
         //          echo $sql;
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':kode_kelas', $kode_kelas, PDO::PARAM_INT);
            // $stmt->execute();
            ;

            echo json_encode(array('message' => 'Congratulations the record ' . $kode_kelas . ' was added to the database'));
         // }
         // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;



      // Update an existing record in the technologies table
      case "update":
         $kode_kelas       = filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama_kelas      = filter_var($_REQUEST['nama_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $jumlah_siswa     = filter_var($_REQUEST['jumlah_siswa'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         echo $nama_kelas;
          // $sql  = "UPDATE mata_pelajaran SET nama_kelas = $nama_kelas, alamat = $alamat, password = $password, jumlah_siswa = $jumlah_siswa WHERE kode_kelas = $kode_kelas";
          $sql = "UPDATE `kelas` SET `kode_kelas`=$kode_kelas, `nama_kelas`='$nama_kelas',`jumlah_siswa`='$jumlah_siswa' WHERE kode_kelas = $kode_kelas";

                  echo $sql;
         
         mysqli_query($link, $sql );
         // Sanitise URL supplied values
         //$name          = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $kode_kelas   = filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $nama_kelas  = filter_var($_REQUEST['nama_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "UPDATE mata_pelajaran SET kode_kelas = :kode_kelas WHERE kode_kelas = :kode_kelas";
         //    $stmt =  $pdo->prepare($sql);
         //   // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
         //    $stmt->bindParam(':kode_kelas', $kode_kelas, PDO::PARAM_INT);
         //    $stmt->execute();

            echo json_encode('Congratulations the record ' . $kode_kelas . ' was updated');
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
          $kode_kelas   =  filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_NUMBER_INT);

         // // Attempt to run PDO prepared statement
         // try {
         //    $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM kelas WHERE kode_kelas = $kode_kelas";
            mysqli_query($link, $sql );
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':kode_kelas', $kode_kelas, PDO::PARAM_INT);
            // $stmt->execute();

            echo json_encode('Congratulations the record ' . $kode_kelas . ' was removed');
         // }
         // // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;
   }

?>