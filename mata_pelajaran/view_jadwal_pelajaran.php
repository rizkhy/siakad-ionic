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
   $data = array();


   // Attempt to query database table and retrieve data  
   try {    
      $stmt    = $pdo->query('SELECT hari, jam,
                            (SELECT nama_mp FROM mata_pelajaran 
                             WHERE kode_mp=jadwal_pelajaran.kode_mp) AS nama_mp,
                            (SELECT nama_kelas FROM kelas 
                             WHERE kode_kelas=jadwal_pelajaran.kode_kelas) AS nama_kelas,
                            (SELECT nama FROM guru 
                             WHERE nip=jadwal_pelajaran.nip) AS nama FROM jadwal_pelajaran');
      //---------------------------------------------Sub-Query----------------------------------------------

      // SELECT jadwal_pelajaran.hari, jadwal_pelajaran.jam, mata_pelajaran.nama_mp, guru.nama, kelas.nama_kelas FROM mata_pelajaran, guru, kelas, jadwal_pelajaran WHERE jadwal_pelajaran.kode_mp=mata_pelajaran.kode_mp AND jadwal_pelajaran.nip=guru.nip AND jadwal_pelajaran.kode_kelas=kelas.kode_kelas AND semester=1
      while($row  = $stmt->fetch(PDO::FETCH_OBJ))
      {
         // Assign each row of data to associative array
         $data[] = $row;
      }

      // Return data as JSON
      echo json_encode($data);
   }
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }


?>