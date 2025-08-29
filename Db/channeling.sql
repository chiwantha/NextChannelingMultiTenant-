-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 29, 2025 at 08:43 PM
-- Server version: 10.11.13-MariaDB-0ubuntu0.24.04.1
-- PHP Version: 8.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `channeling`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL DEFAULT 0,
  `session_id` int(11) NOT NULL,
  `patient` varchar(100) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `alternate_contact` varchar(10) DEFAULT '0',
  `date` date NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `is_printed` tinyint(1) NOT NULL DEFAULT 0,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `hospital_id`, `session_id`, `patient`, `contact`, `alternate_contact`, `date`, `email`, `note`, `created_at`, `updated_at`, `is_confirmed`, `is_printed`, `state`) VALUES
(68, 1, 588, 'H.G Hemalatha', '0710938556', '0', '2025-07-12', 'edirisinghalaged@gmail.com', 'Doctor Chanel', '2025-07-18 06:07:19', NULL, 1, 1, 1),
(69, 1, 809, 'J.A.S.Nipun Jayasooriya', '0743632148', '0777985486', '2025-07-12', 'jayasooriyasanketh@gmail.com', 'My son is 18 years old, and we are seeking an ADHD diagnisis', '2025-07-18 06:10:36', NULL, 1, 1, 1),
(70, 1, 803, 'J.A.S.Nipun Jayasooriya', '0743632148', '0777985486', '2025-07-18', 'jayasooriyasanketh@gmail.com', 'for adhd diagnosis', '2025-07-18 09:01:33', NULL, 1, 1, 1),
(90, 1, 721, 'Shanali Ayara', '0771097215', '0', '2025-07-21', 'sashika.rs@gmail.com', 'None', '2025-07-21 06:56:59', NULL, 1, 1, 1),
(93, 1, 601, 'G G R SUBADRA', '0718553251', '0778008027', '2025-07-24', 'pradee.asa@gmail.com', 'None', '2025-07-23 12:57:35', NULL, 1, 1, 1),
(94, 1, 803, 'K. Leelawathi', '0772983454', '0', '2025-07-25', 'None', 'None', '2025-07-24 13:26:04', NULL, 1, 1, 1),
(95, 1, 550, 'P M R Fernando ', '0718074852', '0718036682', '2025-07-28', 'manujafer2001@gmail.com', 'None', '2025-07-28 02:35:54', NULL, 1, 1, 1),
(96, 1, 662, 'H. Rupa Nandani', '0783340322', '0728474295', '2025-08-03', 'rashennirmana1540@gmail.com', 'None', '2025-07-30 13:27:12', NULL, 1, 1, 1),
(103, 1, 664, 'R.A Chaminda Nishantha', '0718239957', '0716552820', '2025-08-11', 'None', 'None', '2025-08-04 15:19:43', NULL, 1, 1, 1),
(104, 1, 804, 'K. Leelawathi', '0772983454', '0', '2025-08-09', 'None', 'None', '2025-08-08 03:30:44', NULL, 1, 1, 1),
(105, 1, 630, 'Fathima Shameema', '0756638898', '0752535063', '2025-08-08', 'abdhulhakeem061@gmail.com', 'None', '2025-08-08 05:03:28', NULL, 1, 1, 1),
(106, 1, 545, ' S.M.D.N.P. Rathnasiri ', '0717079899', '0', '2025-08-09', 'pathimathilini@gmail.com', 'None', '2025-08-08 17:33:05', NULL, 1, 1, 1),
(107, 1, 537, 'D.D.Niluka Thushari Jayawardana ', '0711333317', '0760693657', '2025-08-10', 'puspakumaragunz@gmail.com', 'None', '2025-08-09 11:25:51', NULL, 1, 1, 1),
(108, 1, 570, 'Jns jayakodi', '0778699026', '0', '2025-08-14', 'None', 'None', '2025-08-14 02:41:44', NULL, 1, 1, 1),
(109, 1, 604, 'Sampath Wanniarachchi ', '0775002231', '0', '2025-08-19', 'None', 'None', '2025-08-19 04:53:42', NULL, 0, 0, 0),
(110, 1, 532, 'Hasani Sandakumari', '0767585514', '0766718606', '2025-08-19', 'Sandakalum.cs23@gmail.com', 'None', '2025-08-19 09:02:11', NULL, 1, 1, 1),
(111, 1, 798, 'S A Sujatha', '0771257582', '0', '2025-08-19', 'irangaukw@gmail.com', 'None', '2025-08-19 10:05:08', NULL, 0, 1, 0),
(113, 1, 541, 'H.P.M.N.Lakshika', '0702892728', '0715606716', '2025-08-20', 'nawamini.97@gmail.com', 'None', '2025-08-20 07:31:09', NULL, 0, 0, 0),
(114, 1, 809, ' J P Nilmini Jayalath', '0789709801', '0', '2025-08-23', 'avishkadjayarathna@gmail.com', 'None', '2025-08-22 17:22:55', NULL, 0, 0, 0),
(115, 1, 531, 'Babynona', '0777742880', '0', '2025-08-25', 'None', 'None', '2025-08-24 15:04:20', NULL, 1, 0, 1),
(116, 1, 568, 'Kaweesha Avindu', '0789508748', '0', '2025-08-31', 'kaweeshaavindu@gmail.com', 'None', '2025-08-24 16:34:10', NULL, 1, 0, 1),
(117, 1, 587, 'H.M. Leelawathi Kumarihami', '0714013003', '0714013003', '2025-08-29', 'savinusathmira14@gmail.com', 'None', '2025-08-27 06:08:58', NULL, 1, 0, 1),
(118, 1, 728, 'Uvishka wethmi', '0741410936', '0756878412', '2025-08-31', 'banuja29@ gmail.com', 'None', '2025-08-27 08:31:42', NULL, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `color_palette`
--

CREATE TABLE `color_palette` (
  `id` int(11) NOT NULL,
  `theme` varchar(20) NOT NULL DEFAULT 'bg-[#0460D9]',
  `theme_text` varchar(20) NOT NULL DEFAULT 'text-[#0460D9]',
  `theme_hover` varchar(20) NOT NULL DEFAULT 'hover:bg-[#0460D9]',
  `theme_border` varchar(20) NOT NULL DEFAULT 'border-[0460D9]',
  `action` varchar(20) NOT NULL DEFAULT 'bg-[#FFC935]',
  `action_text` varchar(20) NOT NULL DEFAULT 'text-[#FFC935]',
  `theme_dark` varchar(20) NOT NULL DEFAULT 'bg-[#0349A4]',
  `primary_btn` varchar(20) NOT NULL DEFAULT 'bg-[#0460D9]',
  `primary_btn_hover` varchar(20) NOT NULL DEFAULT 'hover:bg-[#0B4A9C]',
  `primary_btn_text` varchar(20) NOT NULL DEFAULT 'text-[#FFFFFF]',
  `secondary_btn` varchar(20) NOT NULL DEFAULT 'bg-[#4CB847]',
  `secondary_btn_hover` varchar(20) NOT NULL DEFAULT 'bg-[#00A63E]',
  `secondary_btn_text` varchar(20) NOT NULL DEFAULT 'text-[#FFFFFF]',
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `color_palette`
--

INSERT INTO `color_palette` (`id`, `theme`, `theme_text`, `theme_hover`, `theme_border`, `action`, `action_text`, `theme_dark`, `primary_btn`, `primary_btn_hover`, `primary_btn_text`, `secondary_btn`, `secondary_btn_hover`, `secondary_btn_text`, `state`) VALUES
(1, 'bg-[#0460D9]', 'text-[#0460D9]', 'hover:bg-[#0460D9]', 'border-[#0460D9]', 'bg-[#FFC935]', 'text-[#FFC935]', 'bg-[#0349A4]', 'bg-[#0460D9]', 'hover:bg-[#0B4A9C]', 'text-[#FFFFFF]', 'bg-[#4CB847]', 'hover:bg-[#00A63E]', 'text-[#FFFFFF]', 1),
(2, 'bg-[#0073C4]', 'text-[#0073C4]', 'hover:bg-[#0073C4]', 'border-[#0073C4]', 'bg-[#CDF50F]', 'text-[#CDF50F]', 'bg-[#005A9D]', 'bg-[#0073C4]', 'hover:bg-[#0269A0]', 'text-[#ffffff]', 'bg-[#5BC443]', 'hover:bg-[#00A63E]', 'text-[#ffffff]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `day`
--

CREATE TABLE `day` (
  `id` tinyint(4) NOT NULL,
  `day` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `day`
--

INSERT INTO `day` (`id`, `day`) VALUES
(0, 'Sunday'),
(1, 'Monday'),
(2, 'Tuesday'),
(3, 'Wednesday'),
(4, 'Thursday'),
(5, 'Friday'),
(6, 'Saturday');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `slug` varchar(100) NOT NULL DEFAULT 'doctors',
  `name` varchar(150) NOT NULL,
  `specialization_id` int(11) NOT NULL,
  `description` text DEFAULT 'A trusted and experienced doctor from Arogya Hospitals, dedicated to patient care and medical excellence',
  `image` varchar(200) NOT NULL DEFAULT 'default.png',
  `contact` varchar(10) DEFAULT NULL,
  `hospital_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `slug`, `name`, `specialization_id`, `description`, `image`, `contact`, `hospital_id`, `created_at`, `updated_at`, `state`) VALUES
(1, 'dr-suneth-karunarathna', 'Dr. Suneth Karunarathna', 1, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(2, 'dr-roshan-gunarathna', 'Dr. Roshan Gunarathna', 1, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 13, '2025-06-19 14:53:49', NULL, 1),
(3, 'dr-damith-rodrigo', 'Dr. Damith Rodrigo', 2, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 21, '2025-06-19 14:53:49', NULL, 1),
(4, 'dr-nandika-harischandra', 'Dr. Nandika Harischandra', 2, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(5, 'dr-saman-kularathna', 'Dr. Saman Kularathna', 2, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 21, '2025-06-19 14:53:49', NULL, 1),
(6, 'dr-dm-amarathunga', 'Dr. D.M. Amarathunga', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(7, 'dr-fathima-hasmiya', 'Dr. Fathima Hasmiya', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 10, '2025-06-19 14:53:49', NULL, 1),
(8, 'dr-sanjeewa-hulangamuwa', 'Dr. Sanjeewa Hulangamuwa', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(9, 'dr-sasanka-jayanada', 'Dr. Sasanka Jayanada', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 14, '2025-06-19 14:53:49', NULL, 1),
(10, 'dr-deepa-himani-liyanage', 'Dr. Deepa Himani Liyanage', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 4, '2025-06-19 14:53:49', NULL, 1),
(11, 'dr-mrs-apeksha-perera', 'Dr. (Mrs) Apeksha Perera', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 20, '2025-06-19 14:53:49', NULL, 1),
(12, 'dr-thulasi-weerasinghe', 'Dr. Thulasi Weerasinghe', 3, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 8, '2025-06-19 14:53:49', NULL, 1),
(13, 'ms-thiloka-hettiarachchi', 'Ms. Thiloka Hettiarachchi', 4, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(14, 'dr-jeewanthi-dissanayaka', 'Dr. Jeewanthi Dissanayaka', 4, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(15, 'dr-mrs-pearl-mallawaarachchi', 'Dr. (Mrs) Pearl Mallawaarachchi', 4, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(16, 'dr-mrs-upeka-samarawickrama', 'Dr. (Mrs) Upeka Samarawickrama', 4, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(17, 'dr-chathuri-jayawardana', 'Dr. Chathuri Jayawardana', 5, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 15, '2025-06-19 14:53:49', NULL, 1),
(18, 'dr-shaminda-kahandawa', 'Dr. Shaminda Kahandawa', 5, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(19, 'dr-amal-fernando', 'Dr. Amal Fernando', 6, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 15, '2025-06-19 14:53:49', NULL, 1),
(20, 'dr-mrs-opnd-nishanthi', 'Dr. (Mrs) O.P.N.D. Nishanthi', 6, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(21, 'dr-jd-dias', 'Dr. J. D. Dias', 7, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 7, '2025-06-19 14:53:49', NULL, 1),
(22, 'dr-wathsala-priyadarshani', 'Dr. Wathsala Priyadarshani', 7, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(23, 'dr-tharanga-subhasekara', 'Dr. Tharanga Subhasekara', 7, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 3, '2025-06-19 14:53:49', NULL, 1),
(24, 'dr-deepanee-wewelwala', 'Dr. Deepanee Wewelwala', 7, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 7, '2025-06-19 14:53:49', NULL, 1),
(25, 'dr-pradeep-gunawardana', 'Dr. Pradeep Gunawardana', 8, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(26, 'dr-mrs-tharanga-liyanaarachchi', 'Dr. (Mrs) Tharanga Liyanaarachchi', 9, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(27, 'dr-rangana-herath', 'Dr. Rangana Herath', 9, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 19, '2025-06-19 14:53:49', NULL, 1),
(28, 'dr-ishan-jayasooriya', 'Dr. Ishan Jayasooriya', 10, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(29, 'dr-peshala-dangalla', 'Dr. Peshala Dangalla', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(30, 'dr-ruwan-pathiraja', 'Dr. Ruwan Pathiraja', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(31, 'dr-rohantha-periyapperuma', 'Dr. Rohantha Periyapperuma', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(32, 'dr-prabath-randombage', 'Dr. Prabath Randombage', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(33, 'dr-prasad-rannulu', 'Dr. Prasad Rannulu', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(34, 'dr-ajith-semaginghe', 'Dr. Ajith Semasinghe', 11, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(35, 'dr-aruna-jayawardana', 'Dr. Aruna Jayawardana', 12, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(36, 'dr-ajith-pitawala', 'Dr. Ajith Pitawala', 13, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(37, 'dr-mrs-rajima-srinani', 'Dr. (Mrs) Rajima Srinani', 14, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(38, 'dr-dinith-galabada', 'Dr. Dinith Galabada', 15, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(39, 'dr-jalitha-thinnarachchi', 'Dr. Jalitha Thinnarachchi', 15, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(40, 'dr-at-alibhoy', 'Dr. A.T. Alibhoy', 16, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(41, 'dr-nilukshi-fernando', 'Dr. Nilukshi Fernando', 16, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(42, 'dr-mrs-thilanka-perera', 'Dr. (Mrs) Thilanka Perera', 16, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(43, 'dr-darshana-wijegunasinghe', 'Dr. Darshana Wijegunasinghe', 16, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(44, 'dr-dhanushka-vithanawasam', 'Dr. Dhanushka Vithanawasam', 16, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(45, 'dr-janaka-cooray', 'Dr. Janaka Cooray', 17, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(46, 'dr-kanthi-perera', 'Dr. Kanthi Perera', 17, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 1, '2025-06-19 14:53:49', NULL, 1),
(47, 'dr-priyantha-senarathna', 'Dr. Priyantha Senarathna', 18, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(48, 'dr-pradeep-amarasinghe', 'Dr. Pradeep Amarasinghe', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 17, '2025-06-19 14:53:49', NULL, 1),
(49, 'dr-wasantha-amarasinghe', 'Dr. Wasantha Amarasinghe', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 17, '2025-06-19 14:53:49', NULL, 1),
(50, 'dr-kelum-chathuranga-vidana-gamage', 'Dr. Kelum Chathuranga Vidana Gamage', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 12, '2025-06-19 14:53:49', NULL, 1),
(51, 'dr-dilshan-munidasa', 'Dr. Dilshan Munidasa', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 15, '2025-06-19 14:53:49', NULL, 1),
(52, 'dr-rushantha-premadasa', 'Dr. Rushantha Premadasa', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(53, 'dr-dimuthu-thennakoon', 'Dr. Dimuthu Thennakoon', 19, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 8, '2025-06-19 14:53:49', NULL, 1),
(54, 'dr-sanjaya-fernando', 'Dr. Sanjaya Fernando', 20, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(55, 'dr-mrs-dhammika-dissanayaka', 'Dr. (Mrs) Dhammika Dissanayaka', 21, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(56, 'dr-mrs-nimalika-hettiarachchi', 'Dr. (Mrs) Nimalika Hettiarachchi', 21, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 11, '2025-06-19 14:53:49', NULL, 1),
(57, 'dr-himali-jayaweera', 'Dr. Himali Jayaweera', 21, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(58, 'dr-dm-mihira-manamperi', 'Dr. D.M. Mihira Manamperi', 21, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 18, '2025-06-19 14:53:49', NULL, 1),
(59, 'dr-lakpriya-rathnakumara-udabage', 'Dr. Lakpriya Rathnakumara Udabage', 21, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 16, '2025-06-19 14:53:49', NULL, 1),
(60, 'dr-paj-sherman-fernando', 'Dr. P.A.J. Sherman Fernando', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(61, 'dr-palitha-gunawardane', 'Dr. Palitha Gunawardane', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(62, 'dr-thusith-gunawardane', 'Dr. Thusith Gunawardane', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(63, 'dr-sampath-hemachandra', 'Dr. Sampath Hemachandra', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 2, '2025-06-19 14:53:49', NULL, 1),
(64, 'dr-sp-jayawardane', 'Dr. S.P. Jayawardane', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(65, 'dr-jagath-kulathilake', 'Dr. Jagath Kulathilake', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 11, '2025-06-19 14:53:49', NULL, 1),
(66, 'prof-aruna-munasinghe', 'Prof. Aruna Munasinghe', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(67, 'dr-aloka-perera', 'Dr. Aloka Perera', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(68, 'dr-gayani-premawansha', 'Dr. Gayani Premawansha', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(69, 'dr-sridaran', 'Dr. Sridaran', 22, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 11, '2025-06-19 14:53:49', NULL, 1),
(70, 'ms-charitha-kumarahewa', 'Ms. Charitha Kumarahewa', 23, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(71, 'mr-prasad-rajathewa', 'Mr. Prasad Rajathewa', 23, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(72, 'dr-nishantha-dolawaththa', 'Dr. Nishantha Dolawaththa', 24, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 4, '2025-06-19 14:53:49', NULL, 1),
(73, 'dr-hma-herath', 'Dr. H.M.A. Herath', 24, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(74, 'dr-s-panduwawala', 'Dr. S. Panduwawala', 24, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(75, 'ms-sham-abeysinghe', 'Ms. Sham Abeysinghe', 25, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(76, 'ms-praba-kumari', 'Ms. Praba Kumari', 25, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(77, 'dr-himantha-athukorala', 'Dr. Himantha Athukorala', 26, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(78, 'dr-dhanushka-karunarathna', 'Dr. Dhanushka Karunarathna', 26, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 5, '2025-06-19 14:53:49', NULL, 1),
(79, 'dr-lilani-panangala', 'Dr. Lilani Panangala', 26, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(80, 'dr-priyantha-weerasinghe', 'Dr. Priyantha Weerasinghe', 27, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 11, '2025-06-19 14:53:49', NULL, 1),
(81, 'ms-oshin-de-seram', 'Ms. Oshin De Seram', 28, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(82, 'dr-mangala-perera', 'Dr. Mangala Perera', 29, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(83, 'dr-duminda-dissanayaka', 'Dr. Duminda Dissanayaka', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 19, '2025-06-19 14:53:49', NULL, 1),
(84, 'dr-damith-leelarathna', 'Dr. Damith Leelarathna', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 4, '2025-06-19 14:53:49', NULL, 1),
(85, 'dr-eranga-perera', 'Dr. Eranga Perera', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(86, 'dr-ranjith-perera', 'Dr. Ranjith Perera', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 22, '2025-06-19 14:53:49', NULL, 1),
(87, 'dr-mg-lionel-weerawardana', 'Dr. M.G. Lionel Weerawardana', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(88, 'dr-asoka-wijemanna', 'Dr. Asoka Wijemanna', 30, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(89, 'dr-mrs-manjula-rajapaksha', 'Dr. (Mrs) Manjula Rajapaksha', 31, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', '0', 9, '2025-06-19 14:53:49', NULL, 1),
(90, 'dr-priyantha-perera', 'Dr. Priyantha Perera ', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 22, '2025-07-12 12:10:49', NULL, 1),
(91, 'dr-samitha-edirisinghe', 'Dr. Samitha Edirisinghe', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 22, '2025-07-13 02:10:49', NULL, 1),
(92, 'dr-kanchana-uyangoda', 'Dr. Kanchana Uyangoda', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 19, '2025-07-13 02:38:46', NULL, 1),
(93, 'ms-shanthi-jayaneththi', 'Ms. Shanthi Jayaneththi', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 22, '2025-07-13 04:21:15', NULL, 1),
(94, 'dr-aruna-pallewaththa', 'Dr. Aruna Pallewaththa', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 15, '2025-07-13 04:40:50', NULL, 1),
(95, 'dr-chandrasiri-lokubalasooriya', 'Dr. Chandrasiri Lokubalasooriya', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 15, '2025-07-13 04:52:52', NULL, 1),
(96, 'dr-prasanna-rupasinghe', 'Dr. Prasanna Rupasinghe', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 6, '2025-07-13 04:55:25', NULL, 1),
(97, 'dr-madavi-alagiyawanna', 'Dr. Madavi Alagiyawanna', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 9, '2025-07-13 04:58:57', NULL, 1),
(98, 'mr-wijesooriya', 'Mr. Wijesooriya', 32, 'A trusted and experienced doctor, dedicated to patient care and medical excellence', 'default.png', NULL, 22, '2025-07-13 05:02:35', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `doctor_assignments`
--

CREATE TABLE `doctor_assignments` (
  `id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor_assignments`
--

INSERT INTO `doctor_assignments` (`id`, `hospital_id`, `doctor_id`, `created_at`, `updated_at`, `state`) VALUES
(1, 1, 1, '2025-08-01 13:50:26', '2025-08-01 14:09:05', 1),
(2, 1, 2, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(3, 1, 3, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(4, 1, 4, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(5, 1, 5, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(6, 1, 6, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(7, 1, 7, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(8, 1, 8, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(9, 1, 9, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(10, 1, 10, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(11, 1, 11, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(12, 1, 12, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(13, 1, 13, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(14, 1, 14, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(15, 1, 15, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(16, 1, 16, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(17, 1, 17, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(18, 1, 18, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(19, 1, 19, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(20, 1, 20, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(21, 1, 21, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(22, 1, 22, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(23, 1, 23, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(24, 1, 24, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(25, 1, 25, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(26, 1, 26, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(27, 1, 27, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(28, 1, 28, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(29, 1, 29, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(30, 1, 30, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(31, 1, 31, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(32, 1, 32, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(33, 1, 33, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(34, 1, 34, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(35, 1, 35, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(36, 1, 36, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(37, 1, 37, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(38, 1, 38, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(39, 1, 39, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(40, 1, 40, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(41, 1, 41, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(42, 1, 42, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(43, 1, 43, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(44, 1, 44, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(45, 1, 45, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(46, 1, 46, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(47, 1, 47, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(48, 1, 48, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(49, 1, 49, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(50, 1, 50, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(51, 1, 51, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(52, 1, 52, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(53, 1, 53, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(54, 1, 54, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(55, 1, 55, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(56, 1, 56, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(57, 1, 57, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(58, 1, 58, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(59, 1, 59, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(60, 1, 60, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(61, 1, 61, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(62, 1, 62, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(63, 1, 63, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(64, 1, 64, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(65, 1, 65, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(66, 1, 66, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(67, 1, 67, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(68, 1, 68, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(69, 1, 69, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(70, 1, 70, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(71, 1, 71, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(72, 1, 72, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(73, 1, 73, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(74, 1, 74, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(75, 1, 75, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(76, 1, 76, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(77, 1, 77, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(78, 1, 78, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(79, 1, 79, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(80, 1, 80, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(81, 1, 81, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(82, 1, 82, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(83, 1, 83, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(84, 1, 84, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(85, 1, 85, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(86, 1, 86, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(87, 1, 87, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(88, 1, 88, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(89, 1, 89, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(90, 1, 90, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(91, 1, 91, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(92, 1, 92, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(93, 1, 93, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(94, 1, 94, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(95, 1, 95, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(96, 1, 96, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(97, 1, 97, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(98, 1, 98, '2025-08-01 13:52:34', '2025-08-01 14:09:05', 1),
(101, 2, 3, '2025-08-01 14:10:02', '2025-08-01 14:09:05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `hostname` varchar(100) NOT NULL DEFAULT 'localhost',
  `name` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `footer_desc` varchar(100) NOT NULL DEFAULT 'Proud to be Sri Lanka’s most trusted hospital for compassionate and quality healthcare',
  `web_link` varchar(100) NOT NULL DEFAULT '/',
  `portal_link` varchar(100) NOT NULL DEFAULT '/',
  `about_page_link` varchar(100) NOT NULL DEFAULT '/',
  `service_page_link` varchar(100) NOT NULL DEFAULT '/',
  `lan` varchar(12) NOT NULL DEFAULT '0',
  `whatsapp` varchar(12) NOT NULL DEFAULT '0',
  `whatsapp_send` varchar(9) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT 'info@yourwebmail.lk',
  `address` varchar(150) NOT NULL DEFAULT 'Unknown Address',
  `logo` varchar(50) NOT NULL DEFAULT 'default_logo.png',
  `banner` varchar(50) NOT NULL DEFAULT 'default_banner.png',
  `color_palette_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`id`, `hostname`, `name`, `description`, `footer_desc`, `web_link`, `portal_link`, `about_page_link`, `service_page_link`, `lan`, `whatsapp`, `whatsapp_send`, `email`, `address`, `logo`, `banner`, `color_palette_id`, `created_at`, `updated_at`, `state`) VALUES
(1, 'portal.arogyahospitals.lk', 'Arogya Hospitals (Pvt) Ltd', 'Arogya Hospitals is committed to providing quality healthcare with compassion and excellence. Our online channeling portal allows you to easily book appointments with trusted doctors from anywhere', 'Proud to be Sri Lanka’s most trusted hospital for compassionate and quality healthcare', 'https://arogyahospitals.lk/', 'https://portal.arogyahospitals.lk', 'https://arogyahospitals.lk/about/', 'https://arogyahospitals.lk/services/', '033 222 4592', '070 745 5505', '764604184', 'info@argyahospitals.lk', 'No.250 Colombo Rd, Gampaha', 'arogya_logo.png', 'arogya_banner.png', 1, '2025-07-29 14:44:03', '2025-07-29 14:42:00', 1),
(2, '192.168.8.100', 'Prime Hospitals (Pvt) Ltd', 'Prime Hospitals is committed to providing quality healthcare with compassion and excellence. Our online channeling portal allows you to easily book appointments with trusted doctors from anywhere', 'Proud to be Sri Lanka’s most trusted hospital for compassionate and quality healthcare', 'https://prime.kchord.com', 'https://prime.kchord.com', 'https://prime.kchord.com', 'https://prime.kchord.com', '0112 192 909', '070 140 0225', '761294262', 'primehospitalsdompe@gmail.com', '217/2 Pugoda Road, Dompe', 'prime_logo.png', 'prime_banner.png', 2, '2025-07-31 14:40:19', '2025-07-31 14:40:19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `incharge`
--

CREATE TABLE `incharge` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `state` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `incharge`
--

INSERT INTO `incharge` (`id`, `name`, `state`) VALUES
(1, 'Apeksha Hospital, Maharagama', 1),
(2, 'Base Hospital, Kiribathgoda', 1),
(3, 'Base Hospital, Nikaweratiya', 1),
(4, 'Base Hospital, Wathupitiwala', 1),
(5, 'Batticaloa Teaching Hospital', 1),
(6, 'Chilaw General Hospital', 1),
(7, 'Colombo Eye Hospital', 1),
(8, 'Colombo Lady Ridgeway Hospital for Children', 1),
(9, 'Gampaha General Hospital', 1),
(10, 'General Hospital, Kalutara', 1),
(11, 'General Hospital, Negombo', 1),
(12, 'General Hospital, Nuwara Eliya', 1),
(13, 'Karapitiya Teaching Hospital', 1),
(14, 'Karawanella Base Hospital', 1),
(15, 'National Hospital of Sri Lanka, Colombo', 1),
(16, 'Ragama Teaching Hospital', 1),
(17, 'Rathnapura Teaching Hospital', 1),
(18, 'Sri Jayawardenepura General Hospital', 1),
(19, 'Teaching Hospital, Badulla', 1),
(20, 'Teaching Hospital, Kotalawala', 1),
(21, 'Welisara Chest Hospital', 1),
(22, 'None', 1);

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `day_id` tinyint(1) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL DEFAULT '00:00:00',
  `fee` varchar(10) NOT NULL DEFAULT '2600.00',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `hospital_id`, `doctor_id`, `type_id`, `day_id`, `start_time`, `end_time`, `fee`, `created_at`, `updated_at`, `state`) VALUES
(531, 1, 1, 2, 1, '16:15:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(532, 1, 1, 2, 2, '16:15:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(533, 1, 1, 2, 3, '16:15:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(534, 1, 1, 2, 4, '16:15:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(535, 1, 1, 2, 5, '16:15:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(536, 1, 1, 1, 6, '11:30:00', '00:00:00', '2700.00', '2025-07-12 08:46:28', NULL, 1),
(537, 1, 2, 2, 0, '14:00:00', '00:00:00', '2600.00', '2025-07-12 11:33:10', NULL, 1),
(538, 1, 3, 3, 4, '18:30:00', '00:00:00', '2600.00', '2025-07-12 11:34:23', NULL, 1),
(539, 1, 3, 4, 1, '19:30:00', '00:00:00', '2600.00', '2025-07-12 11:34:23', NULL, 1),
(540, 1, 4, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:36:10', NULL, 1),
(541, 1, 4, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:36:10', NULL, 1),
(542, 1, 4, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:36:10', NULL, 1),
(543, 1, 4, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:36:10', NULL, 1),
(544, 1, 4, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-12 11:36:10', NULL, 1),
(545, 1, 5, 2, 6, '12:45:00', '00:00:00', '2600.00', '2025-07-12 11:36:50', NULL, 1),
(546, 1, 6, 2, 2, '15:45:00', '00:00:00', '2600.00', '2025-07-12 11:37:58', NULL, 1),
(547, 1, 6, 2, 4, '15:45:00', '00:00:00', '2600.00', '2025-07-12 11:37:58', NULL, 1),
(548, 1, 7, 1, 0, '09:30:00', '00:00:00', '2600.00', '2025-07-12 11:38:45', NULL, 1),
(549, 1, 7, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:38:45', NULL, 1),
(550, 1, 8, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:40:15', NULL, 1),
(551, 1, 8, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:40:15', NULL, 1),
(552, 1, 8, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:40:15', NULL, 1),
(553, 1, 8, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-12 11:40:15', NULL, 1),
(554, 1, 9, 4, 1, '19:00:00', '00:00:00', '2600.00', '2025-07-12 11:42:36', NULL, 1),
(555, 1, 9, 4, 3, '19:00:00', '00:00:00', '2600.00', '2025-07-12 11:42:36', NULL, 1),
(556, 1, 9, 4, 5, '19:00:00', '00:00:00', '2600.00', '2025-07-12 11:42:36', NULL, 1),
(557, 1, 9, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-12 11:42:36', NULL, 1),
(558, 1, 9, 2, 0, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:42:36', NULL, 1),
(559, 1, 10, 4, 5, '19:30:00', '00:00:00', '2600.00', '2025-07-12 11:43:02', NULL, 1),
(560, 1, 12, 4, 5, '19:45:00', '00:00:00', '2600.00', '2025-07-12 11:43:40', NULL, 1),
(561, 1, 13, 2, 6, '15:00:00', '00:00:00', '2600.00', '2025-07-12 11:44:33', NULL, 1),
(562, 1, 13, 2, 0, '14:00:00', '00:00:00', '2600.00', '2025-07-12 11:44:33', NULL, 1),
(563, 1, 14, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(564, 1, 14, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(565, 1, 14, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(566, 1, 14, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(567, 1, 14, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(568, 1, 14, 3, 0, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:46:56', NULL, 1),
(569, 1, 15, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:47:41', NULL, 1),
(570, 1, 17, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:48:15', NULL, 1),
(571, 1, 18, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:49:34', NULL, 1),
(572, 1, 18, 1, 0, '07:30:00', '00:00:00', '2600.00', '2025-07-12 11:49:34', NULL, 1),
(573, 1, 19, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-12 11:50:06', NULL, 1),
(574, 1, 20, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(575, 1, 20, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(576, 1, 20, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(577, 1, 20, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(578, 1, 20, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(579, 1, 20, 2, 6, '12:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(580, 1, 20, 3, 0, '16:30:00', '00:00:00', '2600.00', '2025-07-12 11:53:47', NULL, 1),
(581, 1, 21, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 11:54:20', NULL, 1),
(582, 1, 22, 3, 1, '18:00:00', '00:00:00', '2600.00', '2025-07-12 11:57:19', NULL, 1),
(583, 1, 22, 3, 3, '17:45:00', '00:00:00', '2600.00', '2025-07-12 11:57:19', NULL, 1),
(584, 1, 22, 3, 4, '16:30:00', '00:00:00', '2600.00', '2025-07-12 11:57:19', NULL, 1),
(585, 1, 22, 2, 6, '16:00:00', '00:00:00', '2600.00', '2025-07-12 11:57:19', NULL, 1),
(586, 1, 23, 3, 0, '13:45:00', '00:00:00', '2600.00', '2025-07-12 11:58:25', NULL, 1),
(587, 1, 24, 2, 5, '18:00:00', '00:00:00', '2600.00', '2025-07-12 12:00:46', NULL, 1),
(588, 1, 24, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-12 12:00:46', NULL, 1),
(589, 1, 25, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:01:26', NULL, 1),
(590, 1, 90, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(591, 1, 90, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(592, 1, 90, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(593, 1, 90, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(594, 1, 90, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(595, 1, 90, 2, 6, '12:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(596, 1, 90, 2, 0, '12:30:00', '00:00:00', '2600.00', '2025-07-12 12:14:38', NULL, 1),
(597, 1, 27, 3, 6, '17:00:00', '00:00:00', '2600.00', '2025-07-12 12:16:28', NULL, 1),
(598, 1, 27, 3, 0, '17:00:00', '00:00:00', '2600.00', '2025-07-12 12:16:28', NULL, 1),
(599, 1, 26, 3, 1, '17:30:00', '00:00:00', '2600.00', '2025-07-12 12:17:57', NULL, 1),
(600, 1, 26, 3, 3, '17:00:00', '00:00:00', '2600.00', '2025-07-12 12:17:57', NULL, 1),
(601, 1, 26, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-12 12:17:57', NULL, 1),
(602, 1, 26, 3, 5, '17:00:00', '00:00:00', '2600.00', '2025-07-12 12:17:57', NULL, 1),
(603, 1, 28, 2, 1, '15:45:00', '00:00:00', '2600.00', '2025-07-12 12:28:38', NULL, 1),
(604, 1, 28, 2, 2, '15:45:00', '00:00:00', '2600.00', '2025-07-12 12:28:38', NULL, 1),
(605, 1, 28, 2, 4, '15:45:00', '00:00:00', '2600.00', '2025-07-12 12:28:38', NULL, 1),
(606, 1, 28, 2, 5, '15:45:00', '00:00:00', '2600.00', '2025-07-12 12:28:38', NULL, 1),
(607, 1, 29, 2, 6, '15:45:00', '00:00:00', '2600.00', '2025-07-12 12:29:14', NULL, 1),
(617, 1, 30, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(618, 1, 30, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(619, 1, 30, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(620, 1, 30, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(621, 1, 30, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(622, 1, 30, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(623, 1, 30, 2, 6, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(624, 1, 30, 1, 0, '08:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(625, 1, 30, 2, 0, '15:30:00', '00:00:00', '2600.00', '2025-07-12 12:33:03', NULL, 1),
(626, 1, 33, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(627, 1, 33, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(628, 1, 33, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(629, 1, 33, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(630, 1, 33, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(631, 1, 33, 2, 6, '14:00:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(632, 1, 33, 2, 0, '14:00:00', '00:00:00', '2600.00', '2025-07-13 01:48:15', NULL, 1),
(633, 1, 31, 3, 1, '16:30:00', '00:00:00', '2600.00', '2025-07-13 01:49:58', NULL, 1),
(634, 1, 31, 3, 2, '16:30:00', '00:00:00', '2600.00', '2025-07-13 01:49:58', NULL, 1),
(635, 1, 31, 3, 3, '16:30:00', '00:00:00', '2600.00', '2025-07-13 01:49:58', NULL, 1),
(636, 1, 31, 3, 4, '16:30:00', '00:00:00', '2600.00', '2025-07-13 01:49:58', NULL, 1),
(637, 1, 31, 3, 5, '16:30:00', '00:00:00', '2600.00', '2025-07-13 01:49:58', NULL, 1),
(638, 1, 32, 4, 3, '19:30:00', '00:00:00', '2600.00', '2025-07-13 01:51:18', NULL, 1),
(639, 1, 32, 2, 6, '13:00:00', '00:00:00', '2600.00', '2025-07-13 01:51:18', NULL, 1),
(640, 1, 32, 2, 0, '13:00:00', '00:00:00', '2600.00', '2025-07-13 01:51:18', NULL, 1),
(641, 1, 35, 1, 1, '07:00:00', '00:00:00', '2600.00', '2025-07-13 01:52:37', NULL, 1),
(642, 1, 35, 1, 2, '07:00:00', '00:00:00', '2600.00', '2025-07-13 01:52:37', NULL, 1),
(643, 1, 35, 1, 4, '07:00:00', '00:00:00', '2600.00', '2025-07-13 01:52:37', NULL, 1),
(644, 1, 35, 1, 5, '07:00:00', '00:00:00', '2600.00', '2025-07-13 01:52:37', NULL, 1),
(645, 1, 91, 2, 1, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:12:16', NULL, 1),
(646, 1, 91, 2, 2, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:12:16', NULL, 1),
(647, 1, 91, 2, 3, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:12:16', NULL, 1),
(648, 1, 91, 2, 4, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:12:16', NULL, 1),
(649, 1, 91, 2, 5, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:12:16', NULL, 1),
(650, 1, 36, 2, 1, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:13:45', NULL, 1),
(651, 1, 36, 2, 2, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:13:45', NULL, 1),
(652, 1, 36, 2, 3, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:13:45', NULL, 1),
(653, 1, 36, 2, 4, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:13:45', NULL, 1),
(654, 1, 36, 2, 5, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:13:45', NULL, 1),
(655, 1, 37, 1, 1, '07:00:00', '00:00:00', '2600.00', '2025-07-13 02:16:32', NULL, 1),
(656, 1, 37, 1, 3, '07:00:00', '00:00:00', '2600.00', '2025-07-13 02:16:32', NULL, 1),
(657, 1, 37, 2, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:16:32', NULL, 1),
(658, 1, 37, 2, 6, '12:30:00', '00:00:00', '2600.00', '2025-07-13 02:16:32', NULL, 1),
(659, 1, 38, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:17:01', NULL, 1),
(660, 1, 39, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:17:28', NULL, 1),
(661, 1, 40, 1, 3, '10:45:00', '00:00:00', '2600.00', '2025-07-13 02:18:03', NULL, 1),
(662, 1, 42, 1, 0, '09:45:00', '00:00:00', '2600.00', '2025-07-13 02:19:33', NULL, 1),
(663, 1, 42, 3, 3, '16:30:00', '00:00:00', '2600.00', '2025-07-13 02:19:33', NULL, 1),
(664, 1, 43, 4, 1, '19:00:00', '00:00:00', '2600.00', '2025-07-13 02:20:30', NULL, 1),
(665, 1, 43, 3, 4, '15:00:00', '00:00:00', '2600.00', '2025-07-13 02:20:30', NULL, 1),
(666, 1, 44, 2, 2, '15:45:00', '00:00:00', '2600.00', '2025-07-13 02:20:59', NULL, 1),
(667, 1, 34, 1, 1, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(668, 1, 34, 1, 2, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(669, 1, 34, 1, 3, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(670, 1, 34, 1, 4, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(671, 1, 34, 1, 5, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(672, 1, 34, 1, 6, '07:30:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(673, 1, 34, 3, 1, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(674, 1, 34, 3, 2, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(675, 1, 34, 3, 3, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(676, 1, 34, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(677, 1, 34, 3, 5, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(678, 1, 34, 3, 6, '14:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(679, 1, 34, 3, 0, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:25:38', NULL, 1),
(680, 1, 45, 1, 1, '07:00:00', '00:00:00', '2600.00', '2025-07-13 02:27:42', NULL, 1),
(681, 1, 45, 1, 5, '07:00:00', '00:00:00', '2600.00', '2025-07-13 02:27:42', NULL, 1),
(682, 1, 46, 3, 6, '16:45:00', '00:00:00', '2600.00', '2025-07-13 02:28:25', NULL, 1),
(683, 1, 47, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:30:03', NULL, 1),
(684, 1, 47, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:30:03', NULL, 1),
(685, 1, 47, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:30:03', NULL, 1),
(686, 1, 47, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:30:03', NULL, 1),
(687, 1, 47, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 02:30:03', NULL, 1),
(688, 1, 48, 4, 1, '19:30:00', '00:00:00', '2600.00', '2025-07-13 02:32:08', NULL, 1),
(689, 1, 48, 4, 2, '19:30:00', '00:00:00', '2600.00', '2025-07-13 02:32:08', NULL, 1),
(690, 1, 48, 4, 3, '19:30:00', '00:00:00', '2600.00', '2025-07-13 02:32:08', NULL, 1),
(691, 1, 48, 3, 6, '17:00:00', '00:00:00', '2600.00', '2025-07-13 02:32:08', NULL, 1),
(692, 1, 48, 2, 0, '13:00:00', '00:00:00', '2600.00', '2025-07-13 02:32:08', NULL, 1),
(693, 1, 49, 3, 5, '16:30:00', '00:00:00', '2600.00', '2025-07-13 02:33:24', NULL, 1),
(694, 1, 49, 3, 0, '16:45:00', '00:00:00', '2600.00', '2025-07-13 02:33:24', NULL, 1),
(695, 1, 50, 3, 0, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:33:56', NULL, 1),
(696, 1, 51, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:34:18', NULL, 1),
(697, 1, 52, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(698, 1, 52, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(699, 1, 52, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(700, 1, 52, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(701, 1, 52, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(702, 1, 52, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-13 02:36:08', NULL, 1),
(703, 1, 53, 3, 1, '17:30:00', '00:00:00', '2600.00', '2025-07-13 02:36:53', NULL, 1),
(704, 1, 53, 3, 5, '17:30:00', '00:00:00', '2600.00', '2025-07-13 02:36:53', NULL, 1),
(705, 1, 54, 3, 2, '18:00:00', '00:00:00', '2600.00', '2025-07-13 02:37:25', NULL, 1),
(706, 1, 92, 3, 6, '16:00:00', '00:00:00', '2600.00', '2025-07-13 02:39:17', NULL, 1),
(707, 1, 55, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(708, 1, 55, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(709, 1, 55, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(710, 1, 55, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(711, 1, 55, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(712, 1, 55, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(713, 1, 55, 2, 0, '14:30:00', '00:00:00', '2600.00', '2025-07-13 03:05:14', NULL, 1),
(714, 1, 56, 3, 1, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(715, 1, 56, 3, 2, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(716, 1, 56, 3, 3, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(717, 1, 56, 3, 4, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(718, 1, 56, 3, 5, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(719, 1, 56, 3, 6, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(720, 1, 56, 3, 0, '18:00:00', '00:00:00', '2600.00', '2025-07-13 03:07:54', NULL, 1),
(721, 1, 57, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(722, 1, 57, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(723, 1, 57, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(724, 1, 57, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(725, 1, 57, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(726, 1, 57, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(727, 1, 57, 3, 6, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(728, 1, 57, 2, 0, '12:00:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(729, 1, 57, 3, 0, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:11:21', NULL, 1),
(730, 1, 58, 1, 0, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:12:36', NULL, 1),
(731, 1, 59, 3, 1, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(732, 1, 59, 3, 2, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(733, 1, 59, 3, 3, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(734, 1, 59, 3, 4, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(735, 1, 59, 3, 5, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(736, 1, 59, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(737, 1, 59, 1, 0, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:16:07', NULL, 1),
(738, 1, 60, 4, 1, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(739, 1, 60, 4, 2, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(740, 1, 60, 4, 3, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(741, 1, 60, 4, 4, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(742, 1, 60, 4, 5, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(743, 1, 60, 4, 6, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(744, 1, 60, 4, 0, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:21:40', NULL, 1),
(745, 1, 61, 3, 1, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(746, 1, 61, 3, 2, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(747, 1, 61, 3, 3, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(748, 1, 61, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(749, 1, 61, 3, 5, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(750, 1, 61, 3, 6, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(751, 1, 61, 3, 0, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:24:07', NULL, 1),
(752, 1, 62, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(753, 1, 62, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(754, 1, 62, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(755, 1, 62, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(756, 1, 62, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(757, 1, 62, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(758, 1, 62, 1, 0, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:26:29', NULL, 1),
(759, 1, 63, 3, 1, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:28:20', NULL, 1),
(760, 1, 63, 3, 2, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:28:20', NULL, 1),
(761, 1, 63, 3, 3, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:28:20', NULL, 1),
(762, 1, 63, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:28:20', NULL, 1),
(763, 1, 63, 3, 5, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:28:20', NULL, 1),
(764, 1, 64, 1, 3, '10:00:00', '00:00:00', '2600.00', '2025-07-13 03:29:17', NULL, 1),
(765, 1, 64, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:29:17', NULL, 1),
(766, 1, 65, 4, 2, '19:30:00', '00:00:00', '2600.00', '2025-07-13 03:30:38', NULL, 1),
(767, 1, 65, 4, 4, '19:30:00', '00:00:00', '2600.00', '2025-07-13 03:30:38', NULL, 1),
(768, 1, 65, 4, 6, '19:30:00', '00:00:00', '2600.00', '2025-07-13 03:30:38', NULL, 1),
(769, 1, 66, 3, 1, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(770, 1, 66, 3, 2, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(771, 1, 66, 3, 3, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(772, 1, 66, 3, 4, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(773, 1, 66, 3, 5, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(774, 1, 66, 3, 6, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(775, 1, 66, 3, 0, '17:30:00', '00:00:00', '2600.00', '2025-07-13 03:32:43', NULL, 1),
(776, 1, 67, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(777, 1, 67, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(778, 1, 67, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(779, 1, 67, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(780, 1, 67, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(781, 1, 67, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 03:34:48', NULL, 1),
(782, 1, 68, 1, 6, '08:00:00', '00:00:00', '2600.00', '2025-07-13 03:37:29', NULL, 1),
(783, 1, 69, 4, 6, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:37:57', NULL, 1),
(784, 1, 70, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(785, 1, 70, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(786, 1, 70, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(787, 1, 70, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(788, 1, 70, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(789, 1, 70, 3, 6, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(790, 1, 70, 3, 0, '16:00:00', '00:00:00', '2600.00', '2025-07-13 03:40:28', NULL, 1),
(791, 1, 71, 3, 1, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(792, 1, 71, 3, 2, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(793, 1, 71, 3, 3, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(794, 1, 71, 3, 4, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(795, 1, 71, 3, 5, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(796, 1, 71, 3, 6, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(797, 1, 71, 3, 0, '17:00:00', '00:00:00', '2600.00', '2025-07-13 03:43:28', NULL, 1),
(798, 1, 72, 4, 2, '19:00:00', '00:00:00', '2600.00', '2025-07-13 03:44:04', NULL, 1),
(799, 1, 73, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(800, 1, 73, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(801, 1, 73, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(802, 1, 73, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(803, 1, 73, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(804, 1, 73, 1, 6, '11:30:00', '00:00:00', '2600.00', '2025-07-13 03:47:13', NULL, 1),
(805, 1, 74, 1, 1, '08:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(806, 1, 74, 1, 3, '08:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(807, 1, 74, 1, 4, '08:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(808, 1, 74, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(809, 1, 74, 3, 6, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(810, 1, 74, 1, 0, '10:00:00', '00:00:00', '2600.00', '2025-07-13 04:17:22', NULL, 1),
(811, 1, 75, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:19:01', NULL, 1),
(812, 1, 75, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:19:01', NULL, 1),
(813, 1, 75, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:19:01', NULL, 1),
(814, 1, 75, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:19:01', NULL, 1),
(815, 1, 75, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:19:01', NULL, 1),
(816, 1, 93, 2, 1, '15:00:00', '00:00:00', '2600.00', '2025-07-13 04:23:00', NULL, 1),
(817, 1, 93, 2, 2, '15:00:00', '00:00:00', '2600.00', '2025-07-13 04:23:00', NULL, 1),
(818, 1, 93, 2, 3, '15:00:00', '00:00:00', '2600.00', '2025-07-13 04:23:00', NULL, 1),
(819, 1, 93, 2, 4, '15:00:00', '00:00:00', '2600.00', '2025-07-13 04:23:00', NULL, 1),
(820, 1, 93, 2, 5, '15:00:00', '00:00:00', '2600.00', '2025-07-13 04:23:00', NULL, 1),
(821, 1, 76, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:24:22', NULL, 1),
(822, 1, 76, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:24:22', NULL, 1),
(823, 1, 76, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:24:22', NULL, 1),
(824, 1, 76, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:24:22', NULL, 1),
(825, 1, 76, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:24:22', NULL, 1),
(826, 1, 77, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:25:47', NULL, 1),
(827, 1, 77, 4, 2, '19:30:00', '00:00:00', '2600.00', '2025-07-13 04:25:47', NULL, 1),
(828, 1, 77, 3, 4, '18:00:00', '00:00:00', '2600.00', '2025-07-13 04:25:47', NULL, 1),
(829, 1, 78, 2, 0, '14:00:00', '00:00:00', '2600.00', '2025-07-13 04:26:40', NULL, 1),
(830, 1, 79, 1, 0, '08:00:00', '00:00:00', '2600.00', '2025-07-13 04:27:11', NULL, 1),
(831, 1, 80, 2, 0, '13:00:00', '00:00:00', '2600.00', '2025-07-13 04:27:42', NULL, 1),
(832, 1, 81, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:28:30', NULL, 1),
(833, 1, 81, 1, 0, '09:00:00', '00:00:00', '2600.00', '2025-07-13 04:28:30', NULL, 1),
(834, 1, 82, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:30:08', NULL, 1),
(835, 1, 82, 2, 2, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:30:08', NULL, 1),
(836, 1, 82, 2, 3, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:30:08', NULL, 1),
(837, 1, 82, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:30:08', NULL, 1),
(838, 1, 82, 2, 5, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:30:08', NULL, 1),
(839, 1, 84, 4, 1, '19:00:00', '00:00:00', '2600.00', '2025-07-13 04:31:50', NULL, 1),
(840, 1, 84, 4, 2, '19:00:00', '00:00:00', '2600.00', '2025-07-13 04:31:50', NULL, 1),
(841, 1, 84, 4, 3, '19:00:00', '00:00:00', '2600.00', '2025-07-13 04:31:50', NULL, 1),
(842, 1, 84, 4, 4, '19:00:00', '00:00:00', '2600.00', '2025-07-13 04:31:50', NULL, 1),
(843, 1, 84, 4, 5, '19:00:00', '00:00:00', '2600.00', '2025-07-13 04:31:50', NULL, 1),
(844, 1, 85, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(845, 1, 85, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(846, 1, 85, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(847, 1, 85, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(848, 1, 85, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(849, 1, 85, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(850, 1, 85, 2, 0, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:34:41', NULL, 1),
(851, 1, 87, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(852, 1, 87, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(853, 1, 87, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(854, 1, 87, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(855, 1, 87, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(856, 1, 87, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(857, 1, 87, 2, 0, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:36:48', NULL, 1),
(858, 1, 88, 3, 1, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(859, 1, 88, 3, 2, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(860, 1, 88, 3, 3, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(861, 1, 88, 3, 4, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(862, 1, 88, 3, 5, '16:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(863, 1, 88, 2, 6, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(864, 1, 88, 2, 0, '12:00:00', '00:00:00', '2600.00', '2025-07-13 04:38:43', NULL, 1),
(865, 1, 89, 2, 1, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:39:28', NULL, 1),
(866, 1, 89, 2, 4, '15:30:00', '00:00:00', '2600.00', '2025-07-13 04:39:28', NULL, 1),
(867, 1, 94, 3, 1, '16:30:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(868, 1, 35, 3, 2, '16:30:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(869, 1, 94, 3, 3, '16:30:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(870, 1, 94, 3, 4, '16:30:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(871, 1, 94, 3, 5, '16:30:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(872, 1, 94, 2, 6, '14:00:00', '00:00:00', '2600.00', '2025-07-13 04:44:45', NULL, 1),
(873, 1, 95, 3, 6, '18:00:00', '00:00:00', '2600.00', '2025-07-13 04:54:04', NULL, 1),
(874, 1, 96, 3, 0, '17:00:00', '00:00:00', '2600.00', '2025-07-13 04:58:00', NULL, 1),
(875, 1, 97, 3, 1, '18:30:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(876, 1, 97, 3, 2, '18:30:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(877, 1, 97, 3, 3, '18:30:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(878, 1, 97, 3, 4, '18:30:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(879, 1, 97, 3, 5, '18:30:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(880, 1, 97, 2, 6, '14:00:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(881, 1, 97, 2, 0, '14:00:00', '00:00:00', '2600.00', '2025-07-13 05:00:39', NULL, 1),
(882, 1, 98, 1, 1, '08:00:00', '00:00:00', '2600.00', '2025-07-13 05:04:00', NULL, 1),
(883, 1, 98, 1, 2, '08:00:00', '00:00:00', '2600.00', '2025-07-13 05:04:00', NULL, 1),
(884, 1, 98, 1, 3, '08:00:00', '00:00:00', '2600.00', '2025-07-13 05:04:00', NULL, 1),
(885, 1, 98, 1, 4, '08:00:00', '00:00:00', '2600.00', '2025-07-13 05:04:00', NULL, 1),
(886, 1, 98, 1, 5, '08:00:00', '00:00:00', '2600.00', '2025-07-13 05:04:00', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `session_type`
--

CREATE TABLE `session_type` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `session_type`
--

INSERT INTO `session_type` (`id`, `name`, `state`) VALUES
(1, 'Morning', 1),
(2, 'AfterNoon', 1),
(3, 'Evening', 1),
(4, 'Night', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `icon` varchar(200) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialization`
--

INSERT INTO `specialization` (`id`, `specialization`, `icon`, `state`) VALUES
(1, 'Cardiologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964067.png', 1),
(2, 'Chest Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964111.png', 1),
(3, 'Dermatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964116.png', 1),
(4, 'Dietician and Nutrician', 'https://cdn-icons-png.flaticon.com/512/2964/2964125.png', 1),
(5, 'Endocrinologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964130.png', 1),
(6, 'ENT Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964135.png', 1),
(7, 'Eye Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964140.png', 1),
(8, 'Family Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964145.png', 1),
(9, 'Gastroenterologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964150.png', 1),
(10, 'Genito Urinary Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964155.png', 1),
(11, 'Gynaecologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964160.png', 1),
(12, 'Haematologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964165.png', 1),
(13, 'Microbiologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964170.png', 1),
(14, 'Neonatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964175.png', 1),
(15, 'Nephorologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964180.png', 1),
(16, 'Neuro Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964185.png', 1),
(17, 'Oncologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964190.png', 1),
(18, 'OMF Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964195.png', 1),
(19, 'Orthopaedic Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964200.png', 1),
(20, 'Paediatric Neurologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964205.png', 1),
(21, 'Paediatrician', 'https://cdn-icons-png.flaticon.com/512/2964/2964210.png', 1),
(22, 'Physician', 'https://cdn-icons-png.flaticon.com/512/2964/2964215.png', 1),
(23, 'Phsiotherapist', 'https://cdn-icons-png.flaticon.com/512/2964/2964220.png', 1),
(24, 'Psychiatrist', 'https://cdn-icons-png.flaticon.com/512/2964/2964225.png', 1),
(25, 'Psychological counselor', 'https://cdn-icons-png.flaticon.com/512/2964/2964230.png', 1),
(26, 'Rheumatologist', 'https://cdn-icons-png.flaticon.com/512/2964/2964235.png', 1),
(27, 'Sexual medicine and Sexual health', 'https://cdn-icons-png.flaticon.com/512/2964/2964240.png', 1),
(28, 'Speech and Language therapist', 'https://cdn-icons-png.flaticon.com/512/2964/2964245.png', 1),
(29, 'Sports Medicine', 'https://cdn-icons-png.flaticon.com/512/2964/2964250.png', 1),
(30, 'Surgeon', 'https://cdn-icons-png.flaticon.com/512/2964/2964255.png', 1),
(31, 'Venerelogist', 'https://cdn-icons-png.flaticon.com/512/2964/2964260.png', 1),
(32, 'Other', 'https://cdn-icons-png.flaticon.com/512/2964/2964260.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `super_users`
--

CREATE TABLE `super_users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL DEFAULT 'High Lv User',
  `role` tinyint(1) NOT NULL DEFAULT 0,
  `username` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_by` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_attempt_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_users`
--

INSERT INTO `super_users` (`id`, `name`, `role`, `username`, `password`, `created_by`, `created_at`, `last_attempt_at`, `state`) VALUES
(1, 'Kasun Chiwantha', 1, 'chiwanthakasun', '$2b$10$DAhQyJMJi2vfmmgemLSGrebis3qMW4ImOq9XaiFY3QB5DFbW8.1Rq', 'chiwanthakasun', '2025-07-18 11:02:53', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ses_id` (`session_id`),
  ADD KEY `hos_id` (`hospital_id`);

--
-- Indexes for table `color_palette`
--
ALTER TABLE `color_palette`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `day`
--
ALTER TABLE `day`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `spec_id` (`specialization_id`),
  ADD KEY `hospital_id` (`hospital_id`);

--
-- Indexes for table `doctor_assignments`
--
ALTER TABLE `doctor_assignments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE` (`hospital_id`,`doctor_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_palette_id` (`color_palette_id`);

--
-- Indexes for table `incharge`
--
ALTER TABLE `incharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doc_id` (`doctor_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `day_id` (`day_id`),
  ADD KEY `hosp_id` (`hospital_id`);

--
-- Indexes for table `session_type`
--
ALTER TABLE `session_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `super_users`
--
ALTER TABLE `super_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE` (`username`),
  ADD KEY `created_by` (`created_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `color_palette`
--
ALTER TABLE `color_palette`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `doctor_assignments`
--
ALTER TABLE `doctor_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `incharge`
--
ALTER TABLE `incharge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=887;

--
-- AUTO_INCREMENT for table `session_type`
--
ALTER TABLE `session_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `super_users`
--
ALTER TABLE `super_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `hos_id` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ses_id` FOREIGN KEY (`session_id`) REFERENCES `session` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `hospital_id` FOREIGN KEY (`hospital_id`) REFERENCES `incharge` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `spec_id` FOREIGN KEY (`specialization_id`) REFERENCES `specialization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor_assignments`
--
ALTER TABLE `doctor_assignments`
  ADD CONSTRAINT `assignment_id` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hospital`
--
ALTER TABLE `hospital`
  ADD CONSTRAINT `color_palette_id` FOREIGN KEY (`color_palette_id`) REFERENCES `color_palette` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `day_id` FOREIGN KEY (`day_id`) REFERENCES `day` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `doc_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `hosp_id` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `session_type` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `super_users`
--
ALTER TABLE `super_users`
  ADD CONSTRAINT `created_by` FOREIGN KEY (`created_by`) REFERENCES `super_users` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
