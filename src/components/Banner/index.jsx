import './styles.sass';

const Banner = () => {
  return (
    <section id="home" className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Bem-vindo ao meu portfólio!</h1>
          <p>Onde o código encontra a criatividade em uma atmosfera lo-fi</p>
          <div className="banner-subtitle">
            <span>Construindo belas experiências</span>
            <span className="typing-animation">uma linha de cada vez...</span>
          </div>
        </div>
        
        <div className="banner-illustration">
          <div className="study-scene">
            <div className="laptop"></div>
            <div className="coffee-cup"></div>
            <div className="plant"></div>
            <div className="books"></div>
            <div className="window">
              <div className="window-light"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="star star-1">✦</div>
        <div className="star star-2">✧</div>
        <div className="star star-3">✦</div>
        <div className="musical-note note-1">♪</div>
        <div className="musical-note note-2">♫</div>
      </div>
    </section>
  );
};

export default Banner;
