import React from 'react'
import classNames from 'classnames';
import styles from './Card.module.css';

export default function Card(props) {
 const { children, className } = props;
 function getClassName() {
  return classNames(styles.card, className);
 }
  return (
    <div className={getClassName()}>
      {children}
    </div>
  )
}
