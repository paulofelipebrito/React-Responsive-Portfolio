import './FloatingDiv.css'

interface FloatingDivProps {
  img: string;
  text1: string;
  text2: string;
}

const FloatingDiv = ({img, text1, text2} : FloatingDivProps) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt={text1 + ' ' + text2} />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
