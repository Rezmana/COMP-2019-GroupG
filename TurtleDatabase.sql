-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2024 at 05:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `segp`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `Username` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`Username`, `Password`, `Email`) VALUES
('admin', 'admin', 'test@gmail.com\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `ArticleID` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `URL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`ArticleID`, `Title`, `Description`, `URL`) VALUES
(1, 'Fluffy the alligator snapping turtle \'doing really well\'', 'Fluffy, the alligator snapping turtle saved from a Cumbrian tarn, is faring well in his new home. He gained worldwide popularity after being fished out of Urswick Tarn, near Ulverston, by a shopping basket-wielding councillor in February.', 'https://www.bbc.com/news/articles/c4n1ljld115o'),
(2, 'Rescued loggerhead turtle making \'great progress\'', 'A rescued loggerhead turtle, found covered in algae and cuts and showing very little sign of life, has completed its first stage of rehabilitation.\r\nNazaré, named after a Portuguese surfing destination, was rescued on Walney Island in Cumbria two weeks ago.', 'https://www.bbc.com/news/articles/c4ndd138n0eo'),
(3, 'Loggerhead turtles washed up on beaches by storms', 'Three juvenile loggerhead turtles have washed up on beaches in southern England over the course of a week.\r\nRecent storms and rough seas probably pushed them off course, the British Divers Marine Life Rescue charity said.\r\nTurtles found at Kimmeridge, Dorset, and Milendreath, Cornwall, on Tuesday were rescued by wildlife experts but have since died, the organisation said.', 'https://www.bbc.com/news/uk-england-dorset-68791995');

-- --------------------------------------------------------

--
-- Table structure for table `coordinates`
--

CREATE TABLE `coordinates` (
  `Longitude` double NOT NULL,
  `Latitude` double NOT NULL,
  `TurtleID` int(12) NOT NULL,
  `Time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coordinates`
--

INSERT INTO `coordinates` (`Longitude`, `Latitude`, `TurtleID`, `Time`) VALUES
(2.84, 101.2256, 4, '2023-05-03 10:02:05'),
(2.8823, 101.24, 2, '2023-05-22 09:22:05'),
(2.96, 101.223, 3, '2024-12-23 14:45:05'),
(2.97, 100.23, 3, '2023-12-20 09:33:05'),
(2.9732, 100.2745, 1, '2024-12-23 12:35:24'),
(2.97374, 101.27893, 1, '2022-12-23 09:22:05'),
(2.976, 101.1, 2, '2023-12-21 09:22:05');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `UserID` int(12) NOT NULL,
  `Time` datetime NOT NULL,
  `DonationAmount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`UserID`, `Time`, `DonationAmount`) VALUES
(1, '2023-11-30 05:07:49', 2000),
(2, '2024-04-18 13:22:26', 20),
(2, '2024-04-18 13:45:15', 20),
(2, '2024-04-18 14:04:41', 20);

-- --------------------------------------------------------

--
-- Table structure for table `temphumidity`
--

CREATE TABLE `temphumidity` (
  `Temperature` int(12) NOT NULL,
  `Humidity` int(12) NOT NULL,
  `Time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `temphumidity`
--

INSERT INTO `temphumidity` (`Temperature`, `Humidity`, `Time`) VALUES
(19, 70, '2023-10-15 22:13:15'),
(17, 82, '2023-11-30 05:08:04'),
(19, 75, '2024-02-17 01:22:48'),
(16, 84, '2024-01-27 12:04:32'),
(21, 79, '2023-10-02 18:10:59');

-- --------------------------------------------------------

--
-- Table structure for table `turtledata`
--

CREATE TABLE `turtledata` (
  `TurtleID` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Species` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `turtledata`
--

INSERT INTO `turtledata` (`TurtleID`, `Name`, `Species`) VALUES
(1, 'Asif', 'Leatherback');

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`UserID`, `Username`, `Password`, `Email`) VALUES
(1, 'test', 'test', 'test@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `phone`, `location`, `about`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@material.com', '2024-03-05 23:11:12', NULL, NULL, NULL, '$2y$12$SKGr38jcwW0GLEyUQGaNw.Tgp4aC6hqiwrNIrthAppR2iF3WLYztO', 'Uq9nYfIgtZ7GtDYFhQCVftM7xgM18tYEwl7xWVgOSjTh3AkQipApEpAtvCBN', '2024-03-05 23:11:13', '2024-03-05 23:11:13'),
(2, 'Test', 'test@gmail.com', NULL, NULL, NULL, NULL, '$2y$12$QyAIIDO4bYo03uUXxmAabe/6qb6zHGA4Ge1ZM6s/YPetOEVLSMBX6', NULL, '2024-04-15 22:45:39', '2024-04-15 22:45:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`Username`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`ArticleID`);

--
-- Indexes for table `coordinates`
--
ALTER TABLE `coordinates`
  ADD PRIMARY KEY (`Longitude`,`Latitude`,`TurtleID`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`UserID`,`Time`);

--
-- Indexes for table `turtledata`
--
ALTER TABLE `turtledata`
  ADD PRIMARY KEY (`TurtleID`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `ArticleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `turtledata`
--
ALTER TABLE `turtledata`
  MODIFY `TurtleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
