-- CreateTable
CREATE TABLE `inventories` (
    `id` INTEGER NOT NULL,
    `version` INTEGER NOT NULL,
    `set_num` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `inventories_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_minifigs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inventory_id` INTEGER NOT NULL,
    `fig_num` VARCHAR(20) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_parts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inventory_id` INTEGER NOT NULL,
    `part_num` VARCHAR(20) NOT NULL,
    `color_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `is_spare` BOOLEAN NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_sets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inventory_id` INTEGER NOT NULL,
    `set_num` VARCHAR(20) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `themes` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `parent_id` INTEGER NOT NULL,

    UNIQUE INDEX `themes_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `minifigs` (
    `fig_num` VARCHAR(20) NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    `num_parts` INTEGER NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `minifigs_fig_num_key`(`fig_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sets` (
    `set_num` VARCHAR(20) NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    `year` INTEGER NOT NULL,
    `theme_id` INTEGER NOT NULL,
    `num_parts` INTEGER NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sets_set_num_key`(`set_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parts` (
    `part_num` VARCHAR(20) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `part_cat_id` INTEGER NOT NULL,
    `part_material` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `parts_part_num_key`(`part_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `part_categories` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `part_categories_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `part_relationships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rel_type` VARCHAR(1) NOT NULL,
    `child_part_num` VARCHAR(20) NOT NULL,
    `parent_part_num` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colors` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `rgb` VARCHAR(6) NOT NULL,
    `is_trans` BOOLEAN NOT NULL,

    UNIQUE INDEX `colors_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elements` (
    `element_id` VARCHAR(10) NOT NULL,
    `part_num` VARCHAR(20) NOT NULL,
    `color_id` INTEGER NOT NULL,
    `design_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `elements_element_id_key`(`element_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
