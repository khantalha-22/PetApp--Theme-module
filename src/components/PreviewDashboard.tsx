import React from 'react';
import { Calendar as CalendarIcon, Users, Activity, TrendingUp } from 'lucide-react';
import styles from './PreviewDashboard.module.css';

export const PreviewDashboard: React.FC = () => {
  return (
    <div className={styles.previewDashboard}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Today's Visits</span>
            <div className={styles.statValue}>12</div>
          </div>
          <div className={styles.iconWrapper}><CalendarIcon size={18} /></div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Active Patients</span>
            <div className={styles.statValue}>284</div>
          </div>
          <div className={styles.iconWrapper}><Users size={18} /></div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Procedures</span>
            <div className={styles.statValue}>7</div>
          </div>
          <div className={styles.iconWrapper}><Activity size={18} /></div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Revenue</span>
            <div className={styles.statValue}>$3.2k</div>
          </div>
          <div className={styles.iconWrapper}><TrendingUp size={18} /></div>
        </div>
      </div>

      <div className={styles.calendarSection}>
        <div className={styles.sectionHeader}>
          <h3>Today's Calendar</h3>
          <button className={styles.newBtn}>New appointment</button>
        </div>
        
        <div className={styles.timeline}>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>9:00</span>
            <div className={styles.eventCard} style={{backgroundColor: 'hsl(var(--primary))', color: 'white'}}>
              <strong>Bella (Lab)</strong>
              <span>Vaccination</span>
            </div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>10:00</span>
            <div className={styles.eventCard} style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--primary))'}}>
              <strong>Milo (Cat)</strong>
              <span>Dental check</span>
            </div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>11:00</span>
            <div className={styles.emptySlot}></div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>12:00</span>
            <div className={styles.emptySlot}></div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>13:00</span>
            <div className={styles.eventCard} style={{backgroundColor: 'hsl(var(--primary))', color: 'white'}}>
              <strong>Rocky (Bulldog)</strong>
              <span>Surgery follow-up</span>
            </div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>14:00</span>
            <div className={styles.emptySlot}></div>
          </div>
          <div className={styles.timeSlot}>
            <span className={styles.timeLabel}>15:00</span>
            <div className={styles.eventCard} style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--primary))'}}>
              <strong>Luna (Husky)</strong>
              <span>Skin allergy</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h3>Recent Patients</h3>
          <span className={styles.badge}>4 new</span>
        </div>
        <div className={styles.recentGrid}>
          <div className={styles.recentCard}>
            <div>
              <strong>Bella (Lab)</strong>
              <span>Vaccination</span>
            </div>
            <button className={styles.viewBtn}>View</button>
          </div>
          <div className={styles.recentCard}>
            <div>
              <strong>Milo (Cat)</strong>
              <span>Dental check</span>
            </div>
            <button className={styles.viewBtn}>View</button>
          </div>
          <div className={styles.recentCard}>
            <div>
              <strong>Rocky (Bulldog)</strong>
              <span>Surgery follow-up</span>
            </div>
            <button className={styles.viewBtn}>View</button>
          </div>
          <div className={styles.recentCard}>
            <div>
              <strong>Luna (Husky)</strong>
              <span>Skin allergy</span>
            </div>
            <button className={styles.viewBtn}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
