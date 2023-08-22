-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2023 at 04:20 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vito`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `nama` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  `image` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `nama`, `username`, `password`, `image`) VALUES
(1, 'Izzah Iedil Adha', 'izzahadha4@gmail.com', 'izzah', 'iza.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `virtualtour`
--

CREATE TABLE `virtualtour` (
  `id_virtualtour` int(11) NOT NULL,
  `nama` varchar(128) NOT NULL,
  `url` varchar(128) NOT NULL,
  `file` varchar(128) NOT NULL,
  `deskripsi` varchar(256) NOT NULL,
  `created` varchar(128) NOT NULL,
  `thumnail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `virtualtour`
--

INSERT INTO `virtualtour` (`id_virtualtour`, `nama`, `url`, `file`, `deskripsi`, `created`, `thumnail`) VALUES
(2, 'Gedung Rektorat', 'assets/vt/vitorektorat', 'vitorektorat.zip', 'Berada di lokasi kampus putra', '20/08/2023', 'rektorat.jpg'),
(3, 'Gedung Kiai Bukhari', 'assets/vt/vitoputra', 'vitoputra.zip', 'Sering disebut dengan Gedung KB. Dikhususkan untuk mahasiswa putri IST Annuqayah', '20/08/2023', 'putra.jpg'),
(4, 'Kampus Putri', 'assets/vt/vitoputri', 'vitoputri.zip', 'Berada di lokasi kampus putri', '20/08/2023', 'istaq.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `virtualtour`
--
ALTER TABLE `virtualtour`
  ADD PRIMARY KEY (`id_virtualtour`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `virtualtour`
--
ALTER TABLE `virtualtour`
  MODIFY `id_virtualtour` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
