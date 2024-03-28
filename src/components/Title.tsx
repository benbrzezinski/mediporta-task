interface TitleTypes {
  text: string;
}

const Title = ({ text }: TitleTypes) => {
  return <h2 style={{ marginTop: 0, marginBottom: 20 }}>{text}</h2>;
};

export default Title;
