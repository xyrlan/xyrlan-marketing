import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 0,
    title: "Stop By Cafe",
    description:
      "Site feito para uma cafeteria localizada no centro de Nova York",
    href: "https://stopbycafe.vercel.app/",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 1,
    title: "Pesqueiro 110",
    description: "Aplicação Full Stack utilizando Nextjs integrada com Sanity",
    href: "https://www.pesqueiro110.com.br/",
    tags: ["Next.js", "Sanity", "TailwindCSS"],
  },
  {
    id: 3,
    title: "OAB para todos",
    description:
      "Um site feito para a OAB DF, a maior organização de advogados do Brasil, com animações complexas e leves ao mesmo tempo.",
    href: "https://www.oabdfparatodos.com.br/",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 md:rounded-[100px] rounded-[50px] mt-16">
      <div className="container mx-auto max-w-7xl px-6 md:px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Nossos Projetos em Destaque
          </h2>
          <p className="text-xl text-default-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e como ajudamos
            empresas a transformar sua presença digital.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <button
                aria-label={`Ver ${project.title}`}
                className="group w-full text-left bg-content1 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                onClick={() => window.open(project.href, "_blank")}
              >
                <div className="w-full h-[360px] relative overflow-hidden">
                  <iframe
                    className="w-full h-full rounded-t-xl scale-[0.4] object-center origin-top-left absolute -left-10"
                    loading="lazy"
                    src={project.href}
                    style={{
                      width: "1224px",
                      height: "900px",
                    }}
                    title={`Preview do site ${project.title}`}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      Visitar Site
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col items-start gap-2">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <p className="text-default-600">{project.description}</p> */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Link href="/projects">
            <Button color="primary" radius="full" size="lg" variant="bordered">
              Ver Todos os Projetos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
