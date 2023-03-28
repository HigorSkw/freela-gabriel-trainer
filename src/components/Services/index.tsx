import ServiceSection from "./style";
import { CgGym } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { BiRun } from "react-icons/bi";

export const Services = (): JSX.Element => {
  return (
    <ServiceSection id="services">
      <div className="heading">
        <h6>Serviços Criativos</h6>
        <h2>Ofereço os seguintes serviços para você</h2>
        <p>
          Tenha a experiência de um profissional dedicado e aplicado para ajudar
          a alcançar os seus objetivos!
        </p>
      </div>

      <div className="services-content">
        <div className="box">
          <GoPerson />
          <h3>Treinos Personalizados</h3>
          <p>
            Os treinos personalizados são a minha especialidade. Com base nos
            objetivos e necessidades de cada cliente, crio rotinas de exercícios
            eficazes e seguras, levando em consideração as limitações físicas de
            cada um. Meu objetivo é ajudar meus clientes a alcançar seus
            objetivos de forma personalizada e assertiva.
          </p>
        </div>

        <div className="box">
          <CgGym />
          <i className="bx bx-mobile-alt"></i>
          <h3>Personal Trainer</h3>
          <p>
            Se você está procurando um acompanhamento mais próximo e
            personalizado, o meu serviço de acompanhamento na academia é a
            solução ideal. Durante as sessões, vou acompanhar de perto seus
            treinos, corrigindo posturas e ajustando a carga dos exercícios,
            garantindo que você alcance seus objetivos de forma mais rápida e
            segura.
          </p>
        </div>

        <div className="box">
          <BiRun />
          <h3>Treinos Personalizados - Corredores</h3>
          <p>
            Como corredor experiente, sei o quanto a preparação física é
            importante para alcançar melhores resultados e evitar lesões. Meu
            serviço de treinos personalizados para corredores é focado em
            melhorar o desempenho dos meus clientes, criando rotinas de treino
            que levam em consideração a individualidade biológica e o histórico
            de lesões, de forma a maximizar o desempenho e a minimizar os riscos
            de lesão.
          </p>
        </div>
      </div>
    </ServiceSection>
  );
};
