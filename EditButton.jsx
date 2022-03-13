const style = {
  width: "100px"
};

export const EditButton = (props) => {
  const { isAdmin } = props;
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
