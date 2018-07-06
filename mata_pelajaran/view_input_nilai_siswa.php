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
      $stmt    = $pdo->query('SELECT siswa.nis, siswa.nama, mata_pelajaran.KKM 
                              FROM mata_pelajaran, siswa 
                              WHERE kode_mp=125');
      $a = 0;
      while($row  = $stmt->fetch(PDO::FETCH_ASSOC))
      {
         // Assign each row of data to associative array
         $data[$a]['nama']=$row['nama'];
         $data[$a]['kkm']=$row['KKM'];
         $data[$a]['nis']=$row['nis'];
         $data[$a]['uts']= "uts".$row['nis'];
         $data[$a]['uas']="uas".$row['nis'];
         $a++;
      }

      // Return data as JSON
      echo json_encode($data);
   }
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }


?>