import { motion } from "framer-motion";

const cards = [
  {
    icon: "■",
    color: "bg-primary",
    title: "Faça uma Declaração",
    description:
      "Sua marca é tudo - é o que as pessoas lembram muito depois de saírem do seu site. Criamos sites que fortalecem sua marca, estabelecendo firmemente sua presença na mente dos seus clientes.",
  },
  {
    icon: "▲",
    color: "bg-yellow-400",
    title: "Seja rápido, seja convincente",
    description:
      "Sites rápidos ganham tração - se seu site leva mais de 6 segundos para carregar, você perdeu 80% dos seus clientes. Criamos sites envolventes e fáceis de navegar que mantêm seus clientes interessados.",
  },
  {
    icon: "◆",
    color: "bg-pink-500",
    title: "Seja visto no topo",
    description:
      "Se SEO não faz parte do seu site, você não será visto. Criamos sites otimizados para SEO, focados em palavras-chave e termos de pesquisa do Google, garantindo o tráfego online que você merece.",
  },
  {
    icon: "●",
    color: "bg-purple-400",
    title: "Supere seus concorrentes",
    description:
      "Não importa quão específico seja seu produto ou serviço, ele não permanecerá assim para sempre. Supere sua concorrência com um site profissional e otimizado para SEO que se destaca na primeira página do Google.",
  },
];

const AboutSection = () => {
  return (
    <section className="lg:py-32 bg-background" id="about">
      <div className="container mx-auto max-w-7xl px-6 md:px-4">
        <div className="mb-20">
          <motion.h2
            className="text-3xl md:text-6xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Bons sites impulsionam ações,
            <br />
            vendas e conversões.
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-default-600 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Seu site é mais do que apenas uma vitrine bonita. É sua principal
            ferramenta de vendas, convertendo potenciais clientes em
            compradores. E se seu site não for convincente ou fácil de usar, os
            clientes abandonarão dramaticamente.
          </motion.p>
        </div>

        <div className="flex flex-row max-lg:flex-wrap gap-8 overflow-hidden justify-center lg:py-24 py-5 max-lg:px-4">
          {cards.map((card, index) => (
            <div key={card.title} className="flex flex-col group">
              <div
                className={`w-12 h-12 text-foreground ${card.color} rounded-xl mb-6 flex items-center justify-center text-xl shadow-lg transform transition-all group-hover:scale-110 group-hover:rotate-[180deg] duration-700`}
              >
                {card.icon}
              </div>
              <motion.div
                className="group flex-1 bg-default rounded-3xl p-8 relative overflow-hidden w-full max-w-[300px] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 cursor-pointer "
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
              >
                <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg lg:text-xl text-default-600">
            Como especialistas em design de sites, sabemos como criar sites que
            são altamente visíveis online e executam as funções que você
            precisa; seja convencendo seu público-alvo, promovendo vendas ou
            atraindo grandes negócios.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
