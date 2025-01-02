import styles from '../styles/politicastermos.module.css';

const PoliticasTermos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Políticas de Privacidade</h1>
      <div className={styles.paragraph}>
        <strong>Última atualização:</strong> [16/12/2024]
      </div>
      <section>
        <h2 className={styles.sectionTitle}>1. Coleta de Informações</h2>
        <div className={styles.paragraph}>Podemos coletar as seguintes informações:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Informações fornecidas diretamente por você, como nome, e-mail e telefone ao preencher formulários ou realizar cadastros.</li>
          <li className={styles.listItem}>Dados de navegação, como endereço IP, localização aproximada, tipo de navegador e páginas acessadas.</li>
          <li className={styles.listItem}>Cookies para rastrear preferências e melhorar sua experiência no site.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>2. Uso das Informações</h2>
        <div className={styles.paragraph}>As informações coletadas são utilizadas para:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Fornecer e personalizar nossos serviços;</li>
          <li className={styles.listItem}>Responder a suas perguntas e solicitações;</li>
          <li className={styles.listItem}>Enviar comunicações de marketing, quando autorizado;</li>
          <li className={styles.listItem}>Melhorar a funcionalidade e segurança do site.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>3. Compartilhamento de Dados</h2>
        <div className={styles.paragraph}>Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Quando exigido por lei;</li>
          <li className={styles.listItem}>Para provedores de serviços terceirizados que ajudam a operar nosso site (como hospedagem ou análise de dados);</li>
          <li className={styles.listItem}>Em casos de integração com plataformas de terceiros, como o Facebook.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>4. Integração com Plataformas de Terceiros</h2>
        <div className={styles.paragraph}>Nosso site pode conter links ou funcionalidades que permitem interação com plataformas de terceiros, como o Facebook e outros serviços pertencentes à Meta Platforms, Inc. Não temos qualquer afiliação oficial com o Facebook ou a Meta Platforms, Inc., e não controlamos como essas plataformas coletam ou utilizam os dados dos usuários. Recomendamos que você leia as políticas de privacidade dessas plataformas para compreender como seus dados são tratados.</div>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>5. Segurança das Informações</h2>
        <div className={styles.paragraph}>Adotamos medidas de segurança para proteger suas informações pessoais contra acessos não autorizados, uso indevido ou alterações. No entanto, nenhuma transmissão de dados é 100% segura. É importante que você também proteja suas informações.</div>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>6. Seus Direitos</h2>
        <div className={styles.paragraph}>De acordo com a LGPD, você tem os seguintes direitos:</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Acessar suas informações pessoais armazenadas por nós;</li>
          <li className={styles.listItem}>Solicitar a correção ou exclusão de seus dados;</li>
          <li className={styles.listItem}>Revogar o consentimento para o uso de seus dados.</li>
        </ul>
      </section>
      <div>Para exercer seus direitos, entre em contato pelo e-mail: teste@teste.com.br</div>
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
          <div className={styles.paragraph}>Se você tiver dúvidas sobre os Termos de Uso ou Políticas de Privacidade, entre em contato pelo e-mail: teste@teste.com.br.</div>
        </section>
    </div>
  );
};

export default PoliticasTermos;
