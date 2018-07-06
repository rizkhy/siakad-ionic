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
         $nis   	  = filter_var($_REQUEST['nis'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama      = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama_ortu     = filter_var($_REQUEST['nama_ortu'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $pkjr_ortu     = filter_var($_REQUEST['pkjr_ortu'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $alamat    = filter_var($_REQUEST['alamat'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password  = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $kode_kelas  = filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $semester  = filter_var($_REQUEST['semester'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $thn_ajaran  = filter_var($_REQUEST['thn_ajaran'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

          $sql  = "INSERT INTO siswa(nis, nama, nama_ortu, pkjr_ortu, alamat, password, kode_kelas, semester, thn_ajaran) 
                   VALUES($nis, '$nama', '$nama_ortu', '$pkjr_ortu', '$alamat', '$password', $kode_kelas, '$semester', '$thn_ajaran')";

          $sql_2  = "INSERT INTO akun(no_id, level, password) 
                   VALUES($nis, '2', '$password')";

                  echo $sql;
                  echo $sql_2;

         
         mysqli_query($link, $sql);
         mysqli_query($link, $sql_2);
         // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "INSERT INTO siswa(nis, nama, nama_ortu, alamat, password) 
         //    		VALUES(:nis, :nama, :nama_ortu, :alamat, :password)";
         //          echo $sql;
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':nis', $nis, PDO::PARAM_INT);
            // $stmt->execute();
            ;

            echo json_encode(array('message' => 'Congratulations the record ' . $nis . ' was added to the database'));
         // }
         // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;



      // Update an existing record in the technologies table
      case "update":
         $nis       = filter_var($_REQUEST['nis'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama      = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $nama_ortu     = filter_var($_REQUEST['nama_ortu'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $pkjr_ortu     = filter_var($_REQUEST['pkjr_ortu'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $alamat    = filter_var($_REQUEST['alamat'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password  = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $kode_kelas  = filter_var($_REQUEST['kode_kelas'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $semester  = filter_var($_REQUEST['semester'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $thn_ajaran  = filter_var($_REQUEST['thn_ajaran'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         echo $nama;
          // $sql  = "UPDATE siswa SET nama = $nama, alamat = $alamat, password = $password, nama_ortu = $nama_ortu WHERE nis = $nis";
          $sql = "UPDATE `siswa` SET `nis`=$nis, `nama`='$nama',`alamat`='$alamat',`password`='$password',`nama_ortu`='$nama_ortu', `pkjr_ortu`='$pkjr_ortu', `kode_kelas`=$kode_kelas, `semester`='$semester', `thn_ajaran`='$thn_ajaran' WHERE nis = $nis";


                  echo $sql;
         
         mysqli_query($link, $sql );
         // Sanitise URL supplied values
         //$name          = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $nis   = filter_var($_REQUEST['nis'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // $nama  = filter_var($_REQUEST['nama'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // // Attempt to run PDO prepared statement
         // try {
         //    $sql  = "UPDATE siswa SET nis = :nis WHERE nis = :nis";
         //    $stmt =  $pdo->prepare($sql);
         //   // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
         //    $stmt->bindParam(':nis', $nis, PDO::PARAM_INT);
         //    $stmt->execute();

            echo json_encode('Congratulations the record ' . $nis . ' was updated');
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
          $nis   =  filter_var($_REQUEST['nis'], FILTER_SANITIZE_NUMBER_INT);

         // // Attempt to run PDO prepared statement
         // try {
         //    $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM siswa WHERE nis = $nis";
            mysqli_query($link, $sql );
            // $stmt = $pdo->prepare($sql);
            // $stmt->bindParam(':nis', $nis, PDO::PARAM_INT);
            // $stmt->execute();

            echo json_encode('Congratulations the record ' . $nis . ' was removed');
         // }
         // // Catch any errors in running the prepared statement
         // catch(PDOException $e)
         // {
         //    echo $e->getMessage();
         // }

      break;
   }

?>