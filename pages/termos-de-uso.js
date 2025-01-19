import React from 'react';
import styles from '../styles/politicastermos.module.css';

const TermosDeUso = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.termsTitle}>Termos de Uso</h2>
        <div className={styles.paragraph}>
          <strong>Última atualização:</strong> [16/12/2024]
        </div>
        <div className={styles.paragraph}>Estes Termos de Uso regulam o acesso e a utilização do nosso site. Ao acessá-lo, você concorda com os seguintes termos:</div>
        <section>
          <h3 className={styles.subTitle}>1. Uso Permitido</h3>
          <div className={styles.paragraph}>Você concorda em:</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Utilizar o site apenas para fins legais e em conformidade com os termos aqui descritos;</li>
            <li className={styles.listItem}>Não comprometer a segurança, integridade ou funcionamento do site.</li>
          </ul>
        </section>
        <section>
          <h3 className={styles.subTitle}>2. Propriedade Intelectual</h3>
          <div className={styles.paragraph}>Todo o conteúdo do site, incluindo textos, imagens e logotipos, é protegido por direitos autorais. Você não pode reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia.</div>
        </section>
        <section>
          <h3 className={styles.subTitle}>3. Isenção de Responsabilidade sobre Plataformas de Terceiros</h3>
          <div className={styles.paragraph}>Este site não é afiliado, patrocinado ou aprovado pelo Facebook ou qualquer serviço da Meta Platforms, Inc. Todas as marcas, logotipos e direitos autorais relacionados ao Facebook, Instagram ou outros serviços da Meta Platforms pertencem exclusivamente a seus respectivos proprietários. Qualquer uso das funcionalidades de compartilhamento, login ou outras integrações com o Facebook ou plataformas relacionadas é regido pelos Termos de Serviço e Políticas de Privacidade dessas plataformas. Não nos responsabilizamos por qualquer experiência do usuário ou dano resultante do uso dessas integrações.</div>
        </section>
        <section>
          <h3 className={styles.subTitle}>4. Modificações nos Termos</h3>
          <div className={styles.paragraph}>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. Quaisquer alterações serão comunicadas e entrarão em vigor imediatamente após a publicação.</div>
        </section>
        <section>
          <h3 className={styles.subTitle}>5. Legislação Aplicável</h3>
          <div className={styles.paragraph}>Estes Termos de Uso são regidos pela legislação brasileira, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</div>
        </section>
        <section>
          <h3 className={styles.subTitle}>6. Contato</h3>
          <div className={styles.paragraph}>Se você tiver dúvidas sobre os Termos de Uso ou Políticas de Privacidade, entre em contato pelo e-mail: biblikids.suporte@gmail.com.</div>
        </section>
    </div>
  );
};

export default TermosDeUso;