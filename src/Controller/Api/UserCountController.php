<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\PageData;
use App\Repository\PageDataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserCountController extends AbstractController
{
    public function __construct(
        private readonly PageDataRepository $pageDataRepository
    )
    {
    }

    #[Route('/api/user-count', name: 'api.home.get_user_count', methods: [Request::METHOD_GET])]
    public function getUserCount(): Response
    {
        /** @var PageData $userCountData */
        $userCountData = $this->pageDataRepository->findByName('user_count');
        return new JsonResponse([
            'count' => $userCountData->getValue()
        ]);
    }

    #[Route('/api/user-count', name: 'api.home.increment_user_count', methods: [Request::METHOD_PUT])]
    public function incrementUserCount(): Response
    {
        /** @var PageData $userCountData */
        $userCountData = $this->pageDataRepository->findByName('user_count');
        $count = $userCountData->getValue();
        $userCountData->setValue($count + 1);
        $this->pageDataRepository->save($userCountData, true);
        return new Response('User Count updated!');
    }
}