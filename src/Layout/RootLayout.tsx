/**
 * @author nizhou-studio
 * @create 2023/7/6 15:50
 * @path src/Layout
 */
import React from "react";
import styles from './index.module.less';

const Index = (props: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export default Index;