import './FloatingDiv.css'

interface FloatinDivProps {
  img: string;
  text1: string;
  text2: string;
}

const FloatinDiv = ({img, text1, text2} : FloatinDivProps) => {
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

export default FloatinDiv;
