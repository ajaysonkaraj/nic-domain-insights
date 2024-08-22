-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Domain_Manager` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `domain` VARCHAR(191) NOT NULL,
    `ipaddress` VARCHAR(191) NOT NULL,
    `registrationdate` VARCHAR(191) NULL,
    `updateddate` VARCHAR(191) NULL,
    `expirydate` VARCHAR(191) NULL,
    `registrar` VARCHAR(191) NOT NULL,
    `takentime` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `manager_department` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Domain_Manager_domain_key`(`domain`),
    UNIQUE INDEX `Domain_Manager_ipaddress_key`(`ipaddress`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Developer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,
    `technology` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(191) NOT NULL,
    `ipaddress` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Developer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
