<?php
   header('Access-Control-Allow-Origin: *'); 

    $koneksi = mysqli_connect('localhost','root','','siakad');
    $data = file_get_contents('php://input');
    $data =  json_decode($data, true);
    $nis = str_replace('"','',$data);
 
     $query = "SELECT nilai.nilai_akhir, nilai.kode_mp, mata_pelajaran.nama_mp
               FROM nilai, transkip, mata_pelajaran
               WHERE nilai.nis = '$nis' 
               AND transkip.nis = '$nis'
               AND nilai.kode_mp = mata_pelajaran.kode_mp";
     
     $data = array();
     $res = mysqli_query($koneksi, $query);
    $jsonArray = Array();
    $i = 0;

    foreach ($res as $row ) {
        $data = array('nilai_akhir' => $row['nilai_akhir'] ,
                     'nama_mp'     => $row['nama_mp'],
              );
              $jsonArray[$i]=$data;
              $i++;
   }
   echo json_encode($jsonArray);

   ?>