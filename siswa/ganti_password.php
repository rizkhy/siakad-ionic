<?php
   header('Access-Control-Allow-Origin: *'); 
   
  
   $koneksi = mysqli_connect('localhost','root','','siakad');

   $username  = $_REQUEST['username'];
   $username  = str_replace('"', '', $username);
   $password  = $_POST['password'];

   $sql = "UPDATE akun SET password = '$password' WHERE username = '$username' ";
  
   $query = mysqli_query($koneksi, $sql);


   if (isset($query)) {
      echo json_encode('Berhasil Disimpan');
   }