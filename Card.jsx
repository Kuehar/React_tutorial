import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px"
};

export const Card = (props) => {
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>Ken</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
};
