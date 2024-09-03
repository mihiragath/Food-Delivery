-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2023 at 10:40 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msdelivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `Address_id` bigint(20) NOT NULL,
  `Phone_no` varchar(15) DEFAULT NULL,
  `User_name` varchar(150) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `address_detail` text DEFAULT NULL,
  `Is_deleted` tinyint(4) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE `admin_user` (
  `admin_id` int(11) NOT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `DOB` int(11) DEFAULT NULL,
  `Phone_number` int(11) DEFAULT NULL,
  `Auth_key` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password_hash` varchar(255) DEFAULT NULL,
  `Password_reset_token` varchar(255) DEFAULT NULL,
  `image` blob DEFAULT NULL,
  `Status_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Description` varchar(250) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Total_click` bigint(20) DEFAULT NULL,
  `Start_date` date DEFAULT NULL,
  `Visit_url` varchar(200) DEFAULT NULL,
  `End_date` date DEFAULT NULL,
  `Priority_index` int(11) DEFAULT NULL,
  `Status_id` bigint(20) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cancel_reason`
--

CREATE TABLE `cancel_reason` (
  `Id` bigint(20) NOT NULL,
  `Name` varchar(250) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Used_on` enum('User','Admin') DEFAULT NULL,
  `Status_id` bigint(20) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Id` bigint(20) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Disply_order` int(11) DEFAULT NULL,
  `Status_id` int(11) DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `username` varchar(150) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `general_setting`
--

CREATE TABLE `general_setting` (
  `Id` int(11) NOT NULL,
  `Name` varchar(150) DEFAULT NULL,
  `Value` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `manage_module`
--

CREATE TABLE `manage_module` (
  `Id` bigint(20) NOT NULL,
  `Title` varchar(150) DEFAULT NULL,
  `Setting` enum('yes','no') DEFAULT NULL,
  `Status_id` bigint(20) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Id` bigint(20) NOT NULL,
  `Category_id` bigint(20) DEFAULT NULL,
  `Sub_category_id` bigint(20) DEFAULT NULL,
  `Start_time` bigint(20) DEFAULT NULL,
  `End_date` bigint(20) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Image_url` varchar(150) DEFAULT NULL,
  `Website_url` varchar(100) DEFAULT NULL,
  `Price` float(10,2) DEFAULT NULL,
  `Total_price` float(10,2) DEFAULT NULL,
  `Available_stock` varchar(200) DEFAULT NULL,
  `Remark` text DEFAULT NULL,
  `Slug` varchar(255) DEFAULT NULL,
  `Status_id` bigint(20) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `static_page`
--

CREATE TABLE `static_page` (
  `Id` bigint(20) NOT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `Section` varchar(200) DEFAULT NULL,
  `Status_id` bigint(20) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `Id` bigint(20) NOT NULL,
  `Name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `Id` bigint(20) NOT NULL,
  `Category_id` bigint(20) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Display_order` int(11) DEFAULT NULL,
  `Slug` varchar(500) DEFAULT NULL,
  `Status_id` int(11) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User_id` bigint(20) NOT NULL,
  `First_Name` varchar(100) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Gender` varchar(100) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `is_email_verified` tinyint(4) DEFAULT NULL,
  `Password` varchar(1000) DEFAULT NULL,
  `Auth_key` varchar(32) DEFAULT NULL,
  `Password_reset_token` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `Total_order` int(11) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `Slug` varchar(200) DEFAULT NULL,
  `Is_delete` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`User_id`, `First_Name`, `Last_Name`, `Gender`, `DOB`, `Email`, `is_email_verified`, `Password`, `Auth_key`, `Password_reset_token`, `address`, `Total_order`, `pincode`, `image`, `Slug`, `Is_delete`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `updated_by`, `deleted_by`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL, 'mihir4@gmail.com', NULL, '$2b$10$QDHWtfBAPxDjlg8M.Cc10.uf9W6zxIicAUrqu4Iul5Tf8a/Wukz6a', 'c8ceb0743143adc0cf2e233c4fabd2dc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, 'mihiragath13@gmail.com', NULL, '$2b$10$oiP0TGYFtm7ZaPlWKZRoLecIptmwWJvCz5i1u7CH1.Az.jfRpumd.', '520709ddbf54ce45bab7d45500757fad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_order`
--

CREATE TABLE `user_order` (
  `id` bigint(20) NOT NULL,
  `User_id` bigint(20) DEFAULT NULL,
  `User_address_id` bigint(20) DEFAULT NULL,
  `User_address` varchar(55) DEFAULT NULL,
  `Oreder_time_type` enum('now','later') DEFAULT NULL,
  `Status` enum('order placed','order confirmed') DEFAULT NULL,
  `User_order_number` varchar(200) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Instruction` text DEFAULT NULL,
  `Is_delivered` tinyint(4) DEFAULT NULL,
  `Is_completed` tinyint(4) DEFAULT NULL,
  `Total_time` varchar(50) DEFAULT NULL,
  `Sub_total` float(10,2) DEFAULT NULL,
  `Delivery_charge` float(10,2) DEFAULT NULL,
  `Paking_charge` float(10,2) DEFAULT NULL,
  `Other_charges` float(10,2) DEFAULT NULL,
  `Total` float(10,2) DEFAULT NULL,
  `User_rating` tinyint(4) DEFAULT NULL,
  `User_comment` varchar(500) DEFAULT NULL,
  `Product_rating` tinyint(4) DEFAULT NULL,
  `Product_comment` varchar(500) DEFAULT NULL,
  `Payment_date` date DEFAULT NULL,
  `Cancel_reason_id` bigint(20) DEFAULT NULL,
  `Cancel_reason_name` varchar(200) DEFAULT NULL,
  `Cancel_text` text DEFAULT NULL,
  `Cancel_by` enum('user','admin') DEFAULT NULL,
  `Cancel_date` date DEFAULT NULL,
  `Cancel_refund_amount` float(10,2) DEFAULT NULL,
  `Cancel_refund_by` enum('user','admin') DEFAULT NULL,
  `Cancel_refund_date` date DEFAULT NULL,
  `Cancel_refund_paid` enum('yes','no') DEFAULT NULL,
  `Site_refund_amount` float(10,2) DEFAULT NULL,
  `Issue_reason` varchar(100) DEFAULT NULL,
  `Issue_status` varchar(100) DEFAULT NULL,
  `User_credited` enum('yes','no') DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_order_other_charges`
--

CREATE TABLE `user_order_other_charges` (
  `Id` bigint(20) NOT NULL,
  `User_order_id` bigint(20) DEFAULT NULL,
  `Store_id` bigint(20) DEFAULT NULL,
  `Name` varchar(200) DEFAULT NULL,
  `Type` enum('flat','percentage') DEFAULT NULL,
  `Value` varchar(150) DEFAULT NULL,
  `Order_amount` float(10,2) DEFAULT NULL,
  `value_amount` float(10,2) DEFAULT NULL,
  `Is_deleted` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `deleted_by` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`Address_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Status_id` (`Status_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `cancel_reason`
--
ALTER TABLE `cancel_reason`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Status_id` (`Status_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `general_setting`
--
ALTER TABLE `general_setting`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `manage_module`
--
ALTER TABLE `manage_module`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Status_id` (`Status_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Category_id` (`Category_id`),
  ADD KEY `Sub_category_id` (`Sub_category_id`),
  ADD KEY `Status_id` (`Status_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `static_page`
--
ALTER TABLE `static_page`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Status_id` (`Status_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Category_id` (`Category_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `User_id` (`User_id`),
  ADD KEY `User_address_id` (`User_address_id`),
  ADD KEY `Cancel_reason_id` (`Cancel_reason_id`);

--
-- Indexes for table `user_order_other_charges`
--
ALTER TABLE `user_order_other_charges`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_order_id` (`User_order_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `deleted_by` (`deleted_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `Address_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cancel_reason`
--
ALTER TABLE `cancel_reason`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_setting`
--
ALTER TABLE `general_setting`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `manage_module`
--
ALTER TABLE `manage_module`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `static_page`
--
ALTER TABLE `static_page`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `User_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_order`
--
ALTER TABLE `user_order`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_order_other_charges`
--
ALTER TABLE `user_order_other_charges`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `banner`
--
ALTER TABLE `banner`
  ADD CONSTRAINT `banner_ibfk_1` FOREIGN KEY (`Status_id`) REFERENCES `status` (`Id`),
  ADD CONSTRAINT `banner_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `banner_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `banner_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `cancel_reason`
--
ALTER TABLE `cancel_reason`
  ADD CONSTRAINT `cancel_reason_ibfk_1` FOREIGN KEY (`Status_id`) REFERENCES `status` (`Id`),
  ADD CONSTRAINT `cancel_reason_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `cancel_reason_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `cancel_reason_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `category` (`Id`),
  ADD CONSTRAINT `category_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `category` (`Id`),
  ADD CONSTRAINT `category_ibfk_3` FOREIGN KEY (`deleted_by`) REFERENCES `category` (`Id`);

--
-- Constraints for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD CONSTRAINT `contact_us_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `contact_us_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `contact_us_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `contact_us_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `manage_module`
--
ALTER TABLE `manage_module`
  ADD CONSTRAINT `manage_module_ibfk_1` FOREIGN KEY (`Status_id`) REFERENCES `status` (`Id`),
  ADD CONSTRAINT `manage_module_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `manage_module_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `manage_module_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`Category_id`) REFERENCES `category` (`Id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`Sub_category_id`) REFERENCES `sub_category` (`Id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`Status_id`) REFERENCES `status` (`Id`),
  ADD CONSTRAINT `product_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `product_ibfk_5` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `product_ibfk_6` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `static_page`
--
ALTER TABLE `static_page`
  ADD CONSTRAINT `static_page_ibfk_1` FOREIGN KEY (`Status_id`) REFERENCES `status` (`Id`),
  ADD CONSTRAINT `static_page_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `static_page_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `static_page_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`Category_id`) REFERENCES `category` (`Id`),
  ADD CONSTRAINT `sub_category_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `sub_category` (`Id`),
  ADD CONSTRAINT `sub_category_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `sub_category` (`Id`),
  ADD CONSTRAINT `sub_category_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `sub_category` (`Id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `user_order`
--
ALTER TABLE `user_order`
  ADD CONSTRAINT `user_order_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `user_order_ibfk_2` FOREIGN KEY (`User_address_id`) REFERENCES `address` (`Address_id`),
  ADD CONSTRAINT `user_order_ibfk_3` FOREIGN KEY (`Cancel_reason_id`) REFERENCES `cancel_reason` (`Id`);

--
-- Constraints for table `user_order_other_charges`
--
ALTER TABLE `user_order_other_charges`
  ADD CONSTRAINT `user_order_other_charges_ibfk_1` FOREIGN KEY (`User_order_id`) REFERENCES `user_order` (`id`),
  ADD CONSTRAINT `user_order_other_charges_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `user_order_other_charges_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `user_order_other_charges_ibfk_4` FOREIGN KEY (`deleted_by`) REFERENCES `user` (`User_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
