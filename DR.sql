-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: MyReads
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1


DROP DATABASE IF EXISTS MyReads;
CREATE DATABASE MyReads;
use MyReads;


--
-- Table structure for table `experiment`
--
CREATE TABLE `book` (
  `idBook` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tittle` char(255) DEFAULT NULL,
  `authours` char(255) DEFAULT NULL,
  `cover_url` char(255) DEFAULT NULL,
  `state` char(255) DEFAULT 'TO_READ',  /*reading to_read read */
  CHECK (state IN ('TO_READ', 'READING', 'READ')),
  PRIMARY KEY (`idBook`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
