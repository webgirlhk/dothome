<!DOCTYPE html>
<?php
   
   $host = "localhost";
   $user = "qweryop93";
   $pw = "a8g5uzfmq";
   $dbName = "qweryop93";
   $dbConnect = new mysqli($host, $user, $pw, $dbName);
   $dbConnect->set_charset("utf8");

   if(mysqli_connect_errno()){
      echo "데이터베이스 접속 실패";
      echo mysqli_connect_errno();
   } else {
      echo "데이터베이스 접속 성공";
   }

?>