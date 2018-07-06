<?php
   header('Access-Control-Allow-Origin: *'); 

    $koneksi = mysqli_connect('localhost','root','','siakad');
    $data = file_get_contents('php://input');
    $data =  json_decode($data, true);
    $nis = str_replace('"','',$data);
 
    $query = "SELECT *, akun.password 
              FROM siswa, akun 
              WHERE nis = '$nis' 
              AND akun.username = '$nis'";
              
     $data = array();
     $res = mysqli_query($koneksi, $query);
    $jsonArray = Array();
    $i = 0;

    foreach ($res as $row ) {
        $data = array('nis' => $row['nis'] ,
                      'nama'     => $row['nama'],
                      'alamat'     => $row['alamat'],
                      'password'     => $row['password'],
                      'nama_ortu'     => $row['nama_ortu'],
                      'pkjr_ortu'     => $row['pkjr_ortu'],
                      'kode_kelas'     => $row['kode_kelas'],
                      'semester'     => $row['semester'],
                      'thn_ajaran'     => $row['thn_ajaran'],
              );
              $jsonArray[$i]=$data;
              $i++;
   }
   echo json_encode($jsonArray);

   ?>