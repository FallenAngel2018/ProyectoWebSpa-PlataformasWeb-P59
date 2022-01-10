<?php

// if(isset($_FILES['file']['name'])){
// if(isset($_FILES['fotografia']['name'])){
if(isset($_FILES['fotografia_file']['name'])){
   // file name
   // $filename = $_FILES['file']['name'];
   // $filename = $_FILES['fotografia']['name'];
   $filename = $_FILES['fotografia_file']['name'];

   // Location
   $location = '../../Tests/images/'.$filename;

   // file extension
   $file_extension = pathinfo($location, PATHINFO_EXTENSION);
   $file_extension = strtolower($file_extension);

   // Valid extensions
   $valid_ext = array("jpg","png","jpeg");
   // $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");

   $response = 0;
   if(in_array($file_extension,$valid_ext)){
      // Upload file
      // if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
      // if(move_uploaded_file($_FILES['fotografia']['tmp_name'],$location)){
      if(move_uploaded_file($_FILES['fotografia_file']['tmp_name'],$location)){
         $response = 1;
      } 
   }

   echo $response;
   exit;
}

// // file extension
// $file_extension = pathinfo($location, PATHINFO_EXTENSION);
// $file_extension = strtolower($file_extension);

// // Valid extensions
// $valid_ext = array("jpg","png","jpeg");
// // $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");

// $response = 0;
// if(in_array($file_extension,$valid_ext)){
//    // Upload file
//    // if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
//    // if(move_uploaded_file($_FILES['fotografia']['tmp_name'],$location)){
//    if(move_uploaded_file($_FILES['fotografia_file']['tmp_name'],$location)){
//       $response = 1;
//    } 
// }

// echo $response;
// exit;
// }

// <?php

// // if(isset($_FILES['file']['name'])){
// // if(isset($_FILES['fotografia']['name'])){
// if(isset($_FILES['fotografia_file']['name'])){
//    // file name
//    // $filename = $_FILES['file']['name'];
//    // $filename = $_FILES['fotografia']['name'];
//    $filename = $_FILES['fotografia_file']['name'];

//    // Location
//    $location = '../../Tests/images/'.$filename;

//    // file extension
//    $file_extension = pathinfo($location, PATHINFO_EXTENSION);
//    $file_extension = strtolower($file_extension);

//    // Valid extensions
//    $valid_ext = array("jpg","png","jpeg");
//    // $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");

//    $response = 0;
//    if(in_array($file_extension,$valid_ext)){
//       // Upload file
//       // if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
//       // if(move_uploaded_file($_FILES['fotografia']['tmp_name'],$location)){
//       if(move_uploaded_file($_FILES['fotografia_file']['tmp_name'],$location)){
//          $response = 1;
//       } 
//    }
