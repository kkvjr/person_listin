import PersonItem from "./PersonItem";

const PersonList = (props) => {
  const { list, consultar } = props;

  return (
    <>
      {list.map((item) => (
        <PersonItem item={item} onRefresh={consultar} />
      ))}
    </>
  );
};

export default PersonList;
