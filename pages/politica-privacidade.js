import styles from '../styles/politicastermos.module.css';

const PoliticasTermos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Políticas de Privacidade</h1>
      <p className={styles.paragraph}>
        <strong>Última atualização:</strong> [16/12/2024]
      </p>
      <section>
        <h2 className={styles.sectionTitle}>1. Coleta de Informações</h2>
        <p className={styles.paragraph}>Podemos coletar as seguintes informações:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Informações fornecidas diretamente por você, como nome, e-mail e telefone ao preencher formulários ou realizar cadastros.</li>
          <li className={styles.listItem}>Dados de navegação, como endereço IP, localização aproximada, tipo de navegador e páginas acessadas.</li>
          <li className={styles.listItem}>Cookies para rastrear preferências e melhorar sua experiência no site.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>2. Uso das Informações</h2>
        <p className={styles.paragraph}>As informações coletadas são utilizadas para:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Fornecer e personalizar nossos serviços;</li>
          <li className={styles.listItem}>Responder a suas perguntas e solicitações;</li>
          <li className={styles.listItem}>Enviar comunicações de marketing, quando autorizado;</li>
          <li className={styles.listItem}>Melhorar a funcionalidade e segurança do site.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>3. Compartilhamento de Dados</h2>
        <p className={styles.paragraph}>Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Quando exigido por lei;</li>
          <li className={styles.listItem}>Para provedores de serviços terceirizados que ajudam a operar nosso site (como hospedagem ou análise de dados);</li>
          <li className={styles.listItem}>Em casos de integração com plataformas de terceiros, como o Facebook.</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>4. Integração com Plataformas de Terceiros</h2>
        <p className={styles.paragraph}>Nosso site pode conter links ou funcionalidades que permitem interação com plataformas de terceiros, como o Facebook e outros serviços pertencentes à Meta Platforms, Inc. Não temos qualquer afiliação oficial com o Facebook ou a Meta Platforms, Inc., e não controlamos como essas plataformas coletam ou utilizam os dados dos usuários. Recomendamos que você leia as políticas de privacidade dessas plataformas para compreender como seus dados são tratados.</p>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>5. Segurança das Informações</h2>
        <p className={styles.paragraph}>Adotamos medidas de segurança para proteger suas informações pessoais contra acessos não autorizados, uso indevido ou alterações. No entanto, nenhuma transmissão de dados é 100% segura. É importante que você também proteja suas informações.</p>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>6. Seus Direitos</h2>
        <p className={styles.paragraph}>De acordo com a LGPD, você tem os seguintes direitos:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Acessar suas informações pessoais armazenadas por nós;</li>
          <li className={styles.listItem}>Solicitar a correção ou exclusão de seus dados;</li>
          <li className={styles.listItem}>Revogar o consentimento para o uso de seus dados.</li>
        </ul>
      </section>
      <p>Para exercer seus direitos, entre em contato pelo e-mail: teste@teste.com.br</p>
      <section>
        <h2 className={styles.termsTitle}>Termos de Uso</h2>
        <p className={styles.paragraph}>
          <strong>Última atualização:</strong> [insira a data]
        </p>
        <h3 className={styles.subTitle}>1. Uso Permitido</h3>
        <p className={styles.paragraph}>Você concorda em...</p>
      </section>
    </div>
  );
};

export default PoliticasTermos;
