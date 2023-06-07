CREATE DATABASE empresa_productos;

use empresa_productos; 


CREATE TABLE `empresa_productos`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `existencias` INT NOT NULL,
  `foto` VARCHAR(2000) NULL,
  `fecharegistro` DATE NULL,
  PRIMARY KEY (`idproducto`));