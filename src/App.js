import React, { Component } from 'react';
import styles               from './app.module.css';
import Icon                 from '@mdi/react';
import { mdiCheck }         from '@mdi/js';

const coaches = [
  {
    id: 1,
    firstName: 'Brian',
    lastName: 'McCauley',
    level: 1,
    avatar: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
  },
  {
    id: 2,
    firstName: 'Chad',
    lastName: 'Hayes',
    level: 2,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 3,
    firstName: 'Jeff',
    lastName: 'Buck',
    level: 2,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  },
  {
    id: 4,
    firstName: 'Kenny',
    lastName: 'Griffin',
    level: 3,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  },
  {
    id: 5,
    firstName: 'Tom',
    lastName: 'Glover',
    level: 3,
    avatar: 'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  }
];

class App extends Component {

  constructor (props) {
    super( props );
    this.state = {
      coaches: coaches.map( coach => ({ ...coach, isSelected: false }) ),
    };
  }

  checkBoxFunc = (coach) => {
    this.setState( () => { return coach.isSelected = !coach.isSelected;} );
  };

  render () {
    return (
      <React.Fragment>
        <p>`to: ${this.state.coaches.map( (coach) => {
          coach.isSelected ? `${coach.firstName} ${coach.lastName}` : ''
        })}`</p>
        <ul className={`${styles.usersList}`}>
          {this.state.coaches.map( (coach) =>
                                     <li key={coach.id} className={`${styles.listElement} ${styles.flexBoxContainer}`}>

                                       <div className={`${styles.userContainer} ${styles.flexBoxContainer}`}>
                                         <img className={`${styles.avatar} ${styles.borderRadius50}`}
                                              src={coach.avatar} alt=""/>

                                         <div className={styles.info}>
                                           <h1>{`${coach.firstName} ${coach.lastName}`}</h1>
                                           <h2 className={styles.level}>{`Level ${coach.level}`}</h2>
                                         </div>
                                       </div>

                                       <div
                                         className={`${styles.checkBox} ${styles.borderRadius50} ${styles.flexBoxContainer} ${coach.isSelected
                                                                                                                              ? styles.selectedCheckbox
                                                                                                                              : ''}`}
                                         onClick={
                                           (e) => this.checkBoxFunc( coach, e )
                                         }
                                       >
                                         <Icon path={mdiCheck}
                                               color={'#FFF'}
                                               size='20px'/>
                                       </div>
                                     </li> )}
        </ul>
      </React.Fragment>
    );
  }

}

export default App;