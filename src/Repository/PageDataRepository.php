<?php

namespace App\Repository;

use App\Entity\PageData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class PageDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PageData::class);
    }

    public function save(PageData $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByName(string $name): ?PageData
    {
        $queryBuilder = $this->getEntityManager()
            ->createQueryBuilder()
            ->select('pd')
            ->from($this->getEntityName(), 'pd')
            ->where('pd.name = :name')
            ->setParameter('name', $name)
            ->setMaxResults(1)
        ;

        return $queryBuilder->getQuery()->getOneOrNullResult();
    }
}