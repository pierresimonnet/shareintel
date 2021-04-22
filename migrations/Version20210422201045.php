<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210422201045 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE website DROP title');
        $this->addSql('ALTER TABLE website DROP description');
        $this->addSql('ALTER TABLE website DROP image');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE website ADD title VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE website ADD description VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE website ADD image VARCHAR(255) DEFAULT NULL');
    }
}
