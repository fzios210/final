-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2022-06-02 15:36:53
-- 伺服器版本： 8.0.21
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `forum_db`
--
CREATE DATABASE IF NOT EXISTS `forum_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `forum_db`;

-- --------------------------------------------------------

--
-- 資料表結構 `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` varchar(50) NOT NULL,
  `std_name` varchar(50) NOT NULL,
  `comment_id` varchar(50) NOT NULL,
  `comment2_id` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `ip` varchar(50) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`id`, `stu_id`, `std_name`, `comment_id`, `comment2_id`, `content`, `ip`, `create_at`, `update_at`) VALUES
(71, 'sadf', 'sdaf', 'CT20220602213142', '', 'asdf', '127.0.0.1', '2022-06-02 13:31:42', '0000-00-00 00:00:00'),
(74, 'sadf', 'sdaf', 'CT20220602213142', 'CTS20220602231832', 'dsf', '127.0.0.1', '2022-06-02 15:18:32', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
