<?php
   header('Access-Control-Allow-Origin: *'); 

    $koneksi = mysqli_connect('localhost','root','','siakad');
    $data = file_get_contents('php://input');
    $data =  json_decode($data, true);
    $nip = str_replace('"','',$data);
 
     $query = "SELECT mengajar.nip, mp.nama_mp, k.nama_kelas,jadwal_pelajaran.hari,
jadwal_pelajaran.jam
FROM mengajar
INNER JOIN jadwal_pelajaran ON mengajar.kode_mp = jadwal_pelajaran.kode_mp
INNER JOIN mata_pelajaran mp ON mp.kode_mp = mengajar.kode_mp
INNER JOIN kelas k ON k.kode_kelas = mengajar.kode_kelas
WHERE mengajar.nip = '$nip'";
     
     $data = array();
     $res = mysqli_query($koneksi, $query);
    $jsonArray = Array();
    $i = 0;

    foreach ($res as $row ) {
        $data = array('nip' => $row['nip'] ,
                      'nama_mp'     => $row['nama_mp'],
                      'nama_kelas'     => $row['nama_kelas'],
                      'hari'     => $row['hari'],
                      'jam'     => $row['jam'],
              );
              $jsonArray[$i]=$data;
              $i++;
   }
   echo json_encode($jsonArray);

   ?>