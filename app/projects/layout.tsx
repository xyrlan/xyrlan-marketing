export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export const metadata = {
  title: "Projetos | Xyrlan - Desenvolvimento Web",
  description:
    "Explore nossa coleção de projetos web, demonstrando nossa expertise em desenvolvimento e design de sites modernos e aplicações web.",
};
