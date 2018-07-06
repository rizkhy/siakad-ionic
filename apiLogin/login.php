<?php
	header('Access-Control-Allow-Origin: *');
	


	function login()
	{
			// $username = $_REQUEST['username'];
			// $password = $_REQUEST['password'];

		$data = file_get_contents('php://input');
		$data = json_decode($data, true);
		$username = $data['username'];
		$password = $data['password'];
		$koneksi = mysqli_connect('localhost', 'root', '', 'siakad');

		$sql = "select * from akun where username='$username' and password='$password'";
		$data = mysqli_query($koneksi, $sql);
		$row = mysqli_fetch_array($data);

		$data = json_encode($row);
		echo '{"userData": ' .$data . '}';
	}

	login();