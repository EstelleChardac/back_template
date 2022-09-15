
DROP DATABASE IF EXISTS `time`;
CREATE DATABASE IF NOT EXISTS `time` DEFAULT CHARACTER SET utf8;
USE `time`;
DROP TABLE IF EXISTS `hellotime`;
CREATE TABLE IF NOT EXISTS `hellotime` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`timeline` VARCHAR(128) NULL) ENGINE = InnoDB;

INSERT INTO
hellotime (
timeline
 )
VALUES
(current_time());