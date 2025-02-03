"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    title: "Pesqueiro 110",
    description:
      "Aplicação Full Stack utilizando Nextjs integrada com Sanity, feita para um cliente.",
    href: "https://www.pesqueiro110.com.br/",
    tags: ["Next.js", "Sanity", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Mosaico Genética Médica",
    description:
      "Aplicação Front End utilizando Nextjs e Framer Motion, feita para um cliente.",
    href: "https://www.mosaico.med.br/",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    id: 3,
    title: "OAB para todos",
    description:
      "Um site feito para a OAB DF, a maior organização de advogados do Brasil, com animações complexas e leves ao mesmo tempo.",
    href: "https://www.oabdfparatodos.com.br/",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Nihon restaurante",
    description:
      "Aplicação Full Stack utilizando Nextjs integrada com Sanity e emailJS, feita para um cliente.",
    href: "https://www.nihonrestaurante.com.br",
    tags: ["Next.js", "Sanity", "EmailJS"],
  },
  {
    id: 5,
    title: "SRV Empreendimentos",
    description:
      "Aplicação Front End utilizando Nextjs 14, TailwindCSS e Framer Motion, feita para um cliente.",
    href: "https://www.srvempreendimentos.com.br/",
    tags: ["Next.js 14", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 6,
    title: "Hisa Distribuidora",
    description:
      "Aplicação Full Stack utilizando using Nextjs, Sanity, TailwindCSS and Framer Motion, feita para um cliente.",
    href: "https://www.comprecomhisa.com.br/",
    tags: ["Next.js", "Sanity", "TailwindCSS"],
  },
  {
    id: 7,
    title: "Página de Entretenimento com API TMDB",
    description:
      "Este aplicativo web de entretenimento multi-página utiliza requisições complexas à API, roteamento dinâmico, gerenciamento de estado e funcionalidade de busca integrada ao backend.",
    href: "https://entertainment-web-app-git-tmdb-movies-xyrlan.vercel.app",
    tags: ["Next.js", "TMDB API", "TailwindCSS"],
  },
  {
    id: 8,
    title: "Saas for digital menu and delivery - Meunu",
    description:
      "Personal project for profit. Full Stack application using Nextjs, Prisma, NextAuth, Supabase.",
    href: "https://www.meunu.com.br/",
    tags: ["Next.js", "Prisma", "NextAuth", "Supabase"],
  },
];

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-default-50 ">
      <div className=" bg-background rounded-b-[5rem] pt-32">
        <div className="relative px-4 pb-10 lg:p-20 container mx-auto ">
          <div className="text-tiny text-primary mb-8 tracking-wider uppercase">
            PORTFÓLIO
          </div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-semibold max-w-6xl leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Conheça algumas das marcas que ajudamos a crescer.
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-2xl leading-normal font-semibold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interessado no que podemos fazer por você? Confira algumas de nossas
            histórias de sucesso e como transformamos ideias iniciais em
            realidade lucrativa.
          </motion.p>
          <div className="place-content-end flex mt-4">
            <Button
              className="font-medium text-sm p-8"
              color="primary"
              radius="full"
              size="lg"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto py-16 lg:py-28 px-4"
        initial="hidden"
        variants={containerVariants}
      >
        {allProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <button
              aria-label={`Ver ${project.title}`}
              className="group w-full text-left bg-content1 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              onClick={() => window.open(project.href, "_blank")}
            >
              <div className="w-full h-[300px] lg:h-[360px] relative overflow-hidden">
                <iframe
                  className="lg:w-[1920px] w-[1260px]  h-full rounded-t-xl"
                  loading="lazy"
                  src={project.href}
                  style={{
                    height: "1080px",
                    transform: "scale(0.3)",
                    transformOrigin: "top left",
                    position: "absolute",
                    left: "0",
                    top: "0",
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
                <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-default-600">{project.description}</p>
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

      <div className="py-32">
        <div className="max-w-5xl mx-auto bg-background rounded-3xl p-12 relative overflow-hidden flex flex-col">
          <div className=" top-4 left-4 pb-7">
            <div className="text-tiny text-primary tracking-wider uppercase">
              VAMOS COMEÇAR
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
              Vamos trabalhar juntos!
            </h2>
            <p className="text-lg px-2 mb-8">
              Você pode ser nossa próxima história de sucesso! Seja um design de
              website, estratégia SEO, campanha no Google Ads ou algo mais,
              estamos aqui para impulsionar sua presença digital e colocar seu
              negócio em frente a um público maior.
            </p>
          </div>
          <Button
            as={Link}
            className="font-medium text-sm px-8 w-fit self-end"
            color="primary"
            href="/#contact"
            radius="full"
            size="lg"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
