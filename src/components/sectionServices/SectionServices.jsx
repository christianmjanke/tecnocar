import React, { useState } from "react";
import styles from ".././sectionServices/SectionServices.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalButton = ({ text }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>
        {" "}
        <strong> Leia sobre</strong>
      </button>
      <div className={styles.container}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName={styles.modalOverlay}
          className={styles.modalContent}
        >
          <h2></h2>
          <br />
          <p>{text}</p>
          <br />
          <button onClick={closeModal} className={styles.buttonModal}>
            Voltar
          </button>
        </Modal>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <div id="services" className={styles.main}>
      <div className={styles.serviceText}>
        <h2>Serviços prestados</h2>
      </div>

      <div className={styles.mainFlex}>
        <div className={styles.cardOneTwo}>
          <div className={styles.content}>
            <img className={styles.contentImage} />
            <div className={styles.text}>
              <p>Diagnóstico de Injeção</p>
              <ModalButton text="Contamos com profissionais treinados e com vasta experiência na área de diagnóstico eletrônico, oferecendo rapidez e precisão trabalhando com o osciloscópio, equipamento que possibilita ao técnico realizar diagnósticos por imagem, sendo assim muito mais preciso sem a necessidade de fazer desmontagens. Com o osciloscópio é possível se verificar peças internas do motor como válvulas e anéis sem desmontar nada, também é possível verificar saúde de um componente eletrônicos
ex: bomba de combustível, bobina de ignição entre outros e assim prevenindo uma possível falha no veículo em viagem." />
            </div>
          </div>

          <div className={styles.content}>
            <img className={styles.contentImage1} />
            <div className={styles.text}>
              <p>Suspensão em geral</p>
              <ModalButton text="É importante realizar a manutenção preventiva da suspensão do veículo regularmente, pois o desgaste natural das peças pode comprometer a segurança e o conforto durante a condução. A verificação dos amortecedores, molas, buchas e demais componentes deve ser feita periodicamente por um profissional qualificado, que poderá identificar e substituir as peças desgastadas ou danificadas antes que elas comprometam a estabilidade e segurança do veículo." />
            </div>
          </div>
        </div>

        <div className={styles.cardThreeFor}>
          <div className={styles.content}>
            <img className={styles.contentImage2} />
            <div className={styles.text}>
              <p>Trocas de óleos e fluidos</p>
              <ModalButton text="Os óleos do veículo são essenciais para o seu bom funcionamento e desempenho. Eles são responsáveis por lubrificar as peças do motor, reduzir o desgaste e a fricção, dissipar o calor gerado pela combustão e manter o motor limpo." />
            </div>
          </div>

          <div className={styles.content}>
            <img className={styles.contentImage3} />
            <div className={styles.text}>
              <p>Revisão de motores</p>
              <ModalButton
                text="A manutenção adequada do motor de um veículo é crucial para sua durabilidade e desempenho. Um motor bem cuidado pode durar muitos anos, enquanto um motor mal mantido pode apresentar problemas prematuramente.
              A manutenção do motor inclui várias tarefas, como a troca regular de óleo, a troca do filtro de óleo, a verificação dos níveis de fluidos, a substituição de velas de ignição e a limpeza do filtro de ar. É importante seguir o cronograma de manutenção recomendado pelo fabricante do veículo para garantir que todas as tarefas sejam realizadas em tempo hábil."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
