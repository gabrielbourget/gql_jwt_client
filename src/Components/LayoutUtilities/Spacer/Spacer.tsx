import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { VERTICAL, HORIZONTAL } from '../../../constants';

// - TODO: -> Weakness here, had to use hard coded strings instead of
//            referring to the string constant variables. Find a way
//            to refer directly to the variables.
type SpacerDirection = "vertical" | "horizontal";

export interface ISpacerProps {
  direction: SpacerDirection;
  amount?: number;
}

const styleGen = (props: ISpacerProps) => {
  const { amount } = props;

  const spacingAmount = calculateSpacingAmount(props);

  return StyleSheet.create({
    verticalSpace: {
      marginTop: spacingAmount,
      height: 1,
    },
    horizontalSpace: {
      marginRight: amount,
      width: 1,
    }
  });
}

const Spacer: React.FC<ISpacerProps> = (props) => {
  const { direction } = props;
  const styles = styleGen(props);

  if (direction === VERTICAL) return <div className={css(styles.verticalSpace)}></div>;
  if (direction === HORIZONTAL) return <div className={css(styles.horizontalSpace)}></div>;
  else return <div className={css(styles.horizontalSpace)} />;
}

Spacer.defaultProps = {
  
}

const calculateSpacingAmount = (props: ISpacerProps) => {
  const { amount } = props;
  let spacingAmount = 0;

  if (amount) spacingAmount = amount - 1;
  return spacingAmount;
};

export default Spacer;