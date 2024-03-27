interface Types {
  title: string;
}

const Title = ({ title }: Types) => {
  return <h2>{title}</h2>;
};

export default Title;
