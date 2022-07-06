import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import * as S from "./StyledEndGame";
import messages from "./messagesEndGame";

import { endOfDay } from "date-fns";

export const Countdown = () => {
  const endTime = endOfDay(Date.now());

  const [days, hours, minutes, seconds] = useCountdown(endTime.getTime());
  const displayHour = days === 0 && hours < 10 ? `0${hours}` : hours;
  return (
    <S.Info>
      {messages.info} {`${displayHour}:${minutes}:${seconds}`}
    </S.Info>
  );
};

export default Countdown;
