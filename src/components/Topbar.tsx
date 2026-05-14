import React from 'react';
import { Menu } from 'lucide-react';
import styles from './Topbar.module.css';

export const Topbar: React.FC = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
          <button className={styles.menuBtn}>
            <Menu size={24} />
          </button>
          <div style={{width: '1px', height: '24px', backgroundColor: 'hsl(var(--border))'}}></div>
        </div>
        <h1 className={styles.title}>Welcome to iPoint Touch LLC 👋</h1>
      </div>
      
      <div className={styles.right}>
        <div className={styles.userProfile}>
          <img src="https://ui-avatars.com/api/?name=John&background=random" alt="John" className={styles.avatar} />
          <span className={styles.username}>John</span>
        </div>
      </div>
    </header>
  );
};
