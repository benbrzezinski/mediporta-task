interface TitleTypes {
  text?: string;
  fontSize?: number;
}

const Title = ({ text = "Stack Overflow Tags", fontSize = 30 }: TitleTypes) => {
  return (
    <h1
      style={{
        fontSize,
        marginTop: 0,
        marginBottom: 20,
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
