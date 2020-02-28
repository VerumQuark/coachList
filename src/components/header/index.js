import React, { Component } from 'react';
import styles               from './calendarNav.module.scss';
import Icon                 from '@mdi/react';
import { mdiChevronDown }   from '@mdi/js';

class CalendarNav extends Component {

  constructor (props) {
    super( props );
    this.state = {
      prevMonth: 'MAY',
      nextMonth: 'JUL',
      currentMonth: 'JUNE'
    };
  }

  render () {
    return (
      <div className={styles.nav}>
        <h2 className={styles.sideMonth}>
          {this.state.prevMonth}
        </h2>

        <div>
          <h1>
            {this.state.currentMonth}
          </h1>
          <Icon className={styles.navArrow}
                path={mdiChevronDown}
                vertical={true}/>
        </div>

        <h2>
          {this.state.nextMonth}
        </h2>
      </div>
    );
  }
}

export default CalendarNav;