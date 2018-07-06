<?php
   header('Access-Control-Allow-Origin: *'); 
   
    $koneksi = mysqli_connect('localhost','root','','siakad');

   $username  = $_REQUEST['username'];
   $username  = str_replace('"', '', $username);
   $password  = $_POST['password']; 
   
   $sql = "SELECT mata_pelajaran.nama_mp, nilai.rata, nilai.rata2 
                              FROM mata_pelajaran, nilai 
                              WHERE nilai.kode_mp=mata_pelajaran.kode_mp
                              AND nilai.nis = '$username'");
      $query = mysqli_query($koneksi, $sql);

?>