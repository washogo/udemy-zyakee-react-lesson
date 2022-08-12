import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

type Props = {
  open: boolean;
  onClickClose: () => void;
};

export const ChildArea = memo((props: Props) => {
  console.log("ChildArea");
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("numnum");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
