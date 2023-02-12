<?php

namespace App\Entity;

use App\Repository\PageDataRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PageDataRepository::class)]
class PageData
{
    public function __construct(
        #[ORM\Id]
        #[ORM\Column(nullable: false, unique: true)]
        private string $name,

        #[ORM\Column(nullable: false)]
        private int $value
    ) {}

    public function getValue(): int
    {
        return $this->value;
    }

    public function setValue(int $value): void
    {
        $this->value = $value;
    }
}