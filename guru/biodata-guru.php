<?php
   header('Access-Control-Allow-Origin: *'); 

    $koneksi = mysqli_connect('localhost','root','','siakad');
    $data = file_get_contents('php://input');
    $data =  json_decode($data, true);
    $nip = str_replace('"','',$data);
 
     $query = "SELECT * FROM guru WHERE nip = '$nip'";
     
     $data = array();
     $res = mysqli_query($koneksi, $query);
    $jsonArray = Array();
    $i = 0;

    foreach ($res as $row ) {
        $data = array('nip' => $row['nip'] ,
                      'nama'     => $row['nama'],
                      'alamat'     => $row['alamat'],
                      'password'     => $row['password'],
              );
              $jsonArray[$i]=$data;
              $i++;
   }
   echo json_encode($jsonArray);

   ?>