import * as React from "react";

interface IPopupCardsProps {
  text: string;
}

const PopupCards: React.FunctionComponent<IPopupCardsProps> = (props) => {
  return (
    <div className="Box">
      <div className="Box-body">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PopupCards;
