<?php


// $targetPath = "../../Recursos/ImagenesServicios" . basename($_FILES["inpFile"]["name"]);
$targetPath = "../../Recursos/ImagenesServicios/" . basename($_FILES["fotografia"]["name"]);

// move_uploaded_file($_FILES["inpFile"]["tmp_name"], $targetPath);
move_uploaded_file($_FILES["fotografia"]["tmp_name"], $targetPath);

