import React from 'react';
import {faTimes, faClock, faMoneyBill, faMoneyBillAlt, faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StyledMovieInfoBar} from './styled/StyledMovieInfoBar';
import {calcTime, convertMoney} from '../helpers';

const MovieInfoBar = ({time, budget, revnue}) => {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesomeIcon
            icon={faClock}
            size="2x"
            name="clock-o"
            className="fa-time"
          />
          <span className="movieinfobar-info">
            Running Time: {calcTime(time)}
          </span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            size="2x"
            name="money"
            className="fa-budget"
          />
          <span className="movieinfobar-info">
            Budget: {convertMoney(budget)}
          </span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesomeIcon
            icon={faTicketAlt}
            size="2x"
            name="ticket"
            className="fa-revenue"
          />
          <span className="movieinfobar-info">
            Revnue: {convertMoney(revnue)}
          </span>
        </div>
      </div>
    </StyledMovieInfoBar>
  );
};

export default MovieInfoBar;
