-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: wlog
-- ------------------------------------------------------
-- Server version	5.5.58

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text,
  `created_date` datetime DEFAULT NULL,
  `updated_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (45,'Hello World','<h1>\n	Hello World\n</h1>\n<p>\n	Hello World,<span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World,</span><span>Hello World..</span> \n</p>','2017-12-09 10:49:11','2017-12-09 05:48:22');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-09 14:30:42
