import React from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { catalogProjects, ProjectCard } from "@/components/data/data";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. Статическая генерация всех доступных путей на этапе npm run build
export async function generateStaticParams() {
  return catalogProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

// 2. Серверный компонент страницы
export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Поиск объекта в типизированном массиве
  const project = catalogProjects.find(
    (p: ProjectCard) => p.id.toString() === id,
  );

  if (!project) {
    return (
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold text-muted">404</h1>
        <p className="fs-5 text-secondary">
          Извините, запрашиваемый объект строения не найден
        </p>
        <Link href="/" passHref legacyBehavior>
          <Button
            style={{ backgroundColor: "#DA8402" }}
            className="border-0 text-white rounded-pill px-4 py-2"
          >
            Вернуться в каталог
          </Button>
        </Link>
      </Container>
    );
  }

  // Передаем отфильтрованные данные в интерактивный клиентский шаблон
  return <ProjectDetailClient project={project} />;
}
