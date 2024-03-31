interface TitleTypes {
  text?: string;
}

const Title = ({ text = "Stack Overflow Tags" }: TitleTypes) => {
  return (
    <h1
      style={{
        fontSize: "clamp(1.8125rem, 1.6875rem + 0.625vw, 2rem)",
        marginTop: 0,
        marginBottom: 20,
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
