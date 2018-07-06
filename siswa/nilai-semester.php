<?php
   header('Access-Control-Allow-Origin: *'); 

    $koneksi = mysqli_connect('localhost','root','','siakad');
    $data = file_get_contents('php://input');

    // $data =  json_decode($data, true);

   
   $nis = str_replace('"','',$data);
   $nis = substr($nis, 1,5);
   $semester = str_replace('"','',$data);
   $semester = substr($semester, 7);


    $query = "SELECT mata_pelajaran.nama_mp, nilai.nilai_akhir 
              FROM mata_pelajaran, nilai 
              WHERE nilai.kode_mp=mata_pelajaran.kode_mp
              AND nilai.semester='$semester'";
     
     $data = array();
     $res = mysqli_query($koneksi, $query);
    $jsonArray = Array();
    $i = 0;

    foreach ($res as $row ) {
        $data = array('nama_mp'   => $row['nama_mp'],
                      'nilai_akhir'      => $row['nilai_akhir'],
              );
              $jsonArray[$i]=$data;
              $i++;
   }
   echo json_encode($jsonArray);
   ?>