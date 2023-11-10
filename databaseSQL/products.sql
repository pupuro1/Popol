-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.3.11-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- foodingdb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `foodingdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `foodingdb`;

-- 테이블 foodingdb.products 구조 내보내기
CREATE TABLE IF NOT EXISTS `products` (
  `prodNum` int(11) NOT NULL AUTO_INCREMENT COMMENT '상품 번호 (기본키)',
  `name` varchar(200) NOT NULL COMMENT '상품 이름',
  `kind` varchar(10) NOT NULL COMMENT '상품 종류(1: 과일(1,1-1,1-2,1-3,1-4),2: 채소(2,2-1,2-2,2-3,2-4), 3: 쌀/잡곡(3,3-1,3-2,3-3,3-4), 4: 육류/계란류(4,4-1,4-2,4-3,4-4), 5: 수산물(5,5-1,5-2,5-3,5-4))',
  `price` int(10) NOT NULL COMMENT '상품 가격',
  `content` varchar(1000) NOT NULL COMMENT '상품 설명',
  `imageUrl` varchar(255) NOT NULL,
  `useyn` tinyint(1) NOT NULL DEFAULT 1 COMMENT '상품 판매 여부(판매: 1, 판매중단: 0)',
  `regdate` datetime NOT NULL COMMENT '상품 등록일',
  PRIMARY KEY (`prodNum`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- 테이블 데이터 foodingdb.products:~25 rows (대략적) 내보내기
INSERT INTO `products` (`prodNum`, `name`, `kind`, `price`, `content`, `imageUrl`, `useyn`, `regdate`) VALUES
	(1, '껍질째 먹는 세척꼬마사과(4kg,23과 내외)', '1-1', 39800, '껍질째 먹는 세척꼬마사과(4kg,23과 내외)/ 경북의성 특산물. 맛짱! 품질짱! 가격짱! 아침사과 1개는 !', 'http://localhost:8080/upload/apple-1702316_1280.jpg', 1, '2023-11-09 07:30:38'),
	(2, '자연미가 배세트7.5kg', '1-1', 69800, '(특대 9과내외(8-10과))자연미가 배세트7.5kg(특대 9과내외(8-10과))/과일선물용. 물많고 시원한 배맛의 진수!', 'http://localhost:8080/upload/pear-3560106_1280.jpg', 1, '2023-11-09 07:32:02'),
	(3, '새콤달콤 블랙라벨 오렌지 ', '1-2', 28900, '15과 30과 40과', 'http://localhost:8080/upload/oranges-1995079_1280.jpg', 1, '2023-11-09 07:33:06'),
	(4, ' 한라봉세트 (3kg/7~10수)   ', '1-2', 70000, '[제주김농부]실속 제주 한라봉세트 1호(3kg/7~10수)   ', 'http://localhost:8080/upload/hallabong-255968_1280.jpg', 1, '2023-11-09 07:34:08'),
	(5, '수박 3~4kg', '1-3', 28900, '황금열매 제철과일 꿀수박 3~4kg 5kg 6kg', 'http://localhost:8080/upload/watermelon-1969949_1280.jpg', 1, '2023-11-09 07:34:56'),
	(6, '미국산 냉동 블루베리 1kg (팩)', '1-4', 9900, '미국산 냉동 블루베리 1kg (팩)', 'http://localhost:8080/upload/blueberries-7470036_1280.jpg', 1, '2023-11-09 07:35:31'),
	(7, '브로콜리 1개', '2-1', 2900, '가락시장직송 브로콜리 1개 (약250g)', 'http://localhost:8080/upload/broccoli-1238250_1280.jpg', 1, '2023-11-09 07:36:54'),
	(8, '양파 1kg 소', '2-1', 5600, '식탐대첩 국내산 경북 고령 햇 양파 1kg 소', 'http://localhost:8080/upload/onions-1397037_1280.jpg', 1, '2023-11-09 07:37:41'),
	(9, '감자 3kg', '2-1', 13900, '국내산 수미감자 3kg 5kg', 'http://localhost:8080/upload/potatoes-1585060_1280.jpg', 1, '2023-11-09 07:38:16'),
	(10, '야채믹스 2.49kg', '2-2', 29900, '코스트코 커클랜드 노르망디 스타일 베지터블 블랜드 야채믹스 2.49kg 아이스박스+얼음팩 냉동발송', 'http://localhost:8080/upload/frozen-2853290_1280.jpg', 1, '2023-11-09 07:39:13'),
	(11, '채소믹스 600g(냉동)', '2-2', 4400, '[ardo]유기농 채소믹스 600g(냉동)', 'http://localhost:8080/upload/vegetables-1239864_1280.jpg', 1, '2023-11-09 07:39:45'),
	(12, '건고추 600g', '2-3', 32900, '식탐대첩 국내산 정품 건고추 600g', 'http://localhost:8080/upload/chili-1995689_1280.jpg', 1, '2023-11-09 07:40:30'),
	(13, '아몬드 1.2kg', '3-3', 19900, '캘리포니아 구운아몬드 1.2kg(400gx3개)', 'http://localhost:8080/upload/almonds-1768792_1280.jpg', 1, '2023-11-09 07:41:19'),
	(14, '고소한 호두 (200g/봉)', '3-3', 6980, '고소한 호두 (200g/봉)', 'http://localhost:8080/upload/walnuts-2312506_1280.jpg', 1, '2023-11-09 07:41:56'),
	(15, '오징어 300gx3팩', '5-4', 14900, '[맛꾼푸드] 프레머스 간편한 완전손질 급냉 오징어 300gx3팩 (팩당,2미내외)', 'http://localhost:8080/upload/squid.jfif', 1, '2023-11-09 07:43:02'),
	(16, ' 흰다리새우 2kg(60미내외)', '5-3', 56900, '23년 신안 왕새우 흰다리새우 2kg(60미내외) 급냉 구이용 큰사이즈', 'http://localhost:8080/upload/shrimp.jfif', 1, '2023-11-09 07:43:43'),
	(17, '김포금쌀 혼합 4kg', '3-1', 19700, '[홍천철원] 23년산 햅쌀 김포금쌀 혼합 4kg', 'http://localhost:8080/upload/rice.jpg', 1, '2023-11-09 07:44:51'),
	(18, '냉장앞다리찌개용500g', '4-1', 9450, '[무항생제해발500]냉장앞다리찌개용500g', 'http://localhost:8080/upload/pork.jfif', 1, '2023-11-09 07:45:37'),
	(19, '낙지 (3~4미 내외, 500g)', '5-4', 8960, '[냉동][중국] 살아있을 때 급냉한 낙지 (3~4미 내외, 500g)', 'http://localhost:8080/upload/octopus.jpg', 1, '2023-11-09 07:46:32'),
	(20, '혼합7곡 6kg(2kgx3봉)', '3-2', 21600, '통곡물 슈퍼푸드 혼합7곡 6kg(2kgx3봉)/nf 우리몸에좋은잡곡 엄선', 'http://localhost:8080/upload/mixedGrains.jfif', 1, '2023-11-09 07:47:15'),
	(21, '홍가리비 5kg', '5-2', 24500, '2023년 제철 통영 싱싱한 홍가리비 5kg (kg당 30미내외)', 'http://localhost:8080/upload/foot.jpg', 1, '2023-11-09 07:48:13'),
	(22, '간고등어 (500g/팩)', '5-1', 14800, '[냉장][국산] 이동삼 안동 간고등어 (500g/팩)', 'http://localhost:8080/upload/fish.jfif', 1, '2023-11-09 07:48:47'),
	(23, '계란 30개입', '4-3', 8480, '신선한 계란 30개입 (특란, 1800g)', 'http://localhost:8080/upload/egg.jfif', 1, '2023-11-09 07:49:28'),
	(24, '한우 BEST 단품', '4-1', 9720, '자연을 닮은 한우, 안성마춤 한우 BEST 단품', 'http://localhost:8080/upload/beef.jfif', 1, '2023-11-09 07:50:05'),
	(25, '소불고기 2팩세트', '4-2', 19900, '소불고기 2팩세트(마늘340g+야채400g)', 'http://localhost:8080/upload/bulgogi.jfif', 1, '2023-11-09 07:53:29');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
