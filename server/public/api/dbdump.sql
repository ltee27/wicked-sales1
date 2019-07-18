-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 18, 2019 at 12:45 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `519wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`) VALUES
(1, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(2, 'ShamWow', 2595, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!'),
(3, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!'),
(4, 'Wax Vac', 999, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.'),
(5, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.'),
(6, 'Tater Mitts', 830, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
