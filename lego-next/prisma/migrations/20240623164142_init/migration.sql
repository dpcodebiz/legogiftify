-- CreateTable
CREATE TABLE `sets` (
    `set_num` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `theme_id` INTEGER NOT NULL,
    `num_parts` INTEGER NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sets_set_num_key`(`set_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
