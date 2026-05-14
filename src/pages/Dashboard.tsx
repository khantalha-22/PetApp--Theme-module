import React from 'react';
import styles from './Dashboard.module.css';
import { Target, ArrowUpRight, Filter, Plus, ArrowDownToLine, Calendar as CalendarIcon, Activity, DollarSign, Users } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.banner}>
        <span>🎯 One step closer to success—let's make today count!! 🎯💼</span>
      </div>

      <div className={styles.topSection}>
        <div className={styles.appointmentsCard}>
          <div className={styles.cardHeader}>
            <h2>Today's Appointments - 2</h2>
            <button className={styles.viewAllBtn}>VIEW ALL <ArrowUpRight size={14}/></button>
          </div>
          <div className={styles.appointmentList}>
            {/* Appointment Item */}
            <div className={styles.appointmentItem}>
              <div className={styles.appInfo}>
                <img src="https://ui-avatars.com/api/?name=Alex&background=e0e0e0" alt="Pet" className={styles.petAvatar} />
                <div className={styles.petDetails}>
                  <span className={styles.petName}>Alex</span>
                  <span className={styles.meta}>BREED Africander</span>
                  <span className={styles.meta}>SEX Bull</span>
                  <span className={styles.meta}>OWNER John Wick</span>
                </div>
              </div>
              <div className={styles.appStatus}>
                <select className={styles.statusSelect} defaultValue="In Progress">
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
              <div className={styles.appTime}>
                <span>SCHEDULED TIME</span>
                <strong>02:30 PM - 03:00 PM</strong>
              </div>
              <div className={styles.appType}>
                <span>APPOINTMENT TYPE</span>
                <strong>Health Maintenance</strong>
              </div>
            </div>
            
            <div className={styles.appointmentItem}>
              <div className={styles.appInfo}>
                <img src="https://ui-avatars.com/api/?name=Alex&background=e0e0e0" alt="Pet" className={styles.petAvatar} />
                <div className={styles.petDetails}>
                  <span className={styles.petName}>Alex</span>
                  <span className={styles.meta}>BREED Africander</span>
                  <span className={styles.meta}>SEX Bull</span>
                  <span className={styles.meta}>OWNER John Wick</span>
                </div>
              </div>
              <div className={styles.appStatus}>
                <select className={styles.statusSelect} defaultValue="In Progress">
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
              <div className={styles.appTime}>
                <span>SCHEDULED TIME</span>
                <strong>03:30 PM - 04:30 PM</strong>
              </div>
              <div className={styles.appType}>
                <span>APPOINTMENT TYPE</span>
                <strong>Health Maintenance</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gridSection}>
        <div className={styles.kpiColumn}>
          <div className={styles.cardHeader} style={{backgroundColor: 'hsl(var(--bg-sidebar))', color: 'white', padding: '1rem', borderRadius: 'var(--radius) var(--radius) 0 0'}}>
            <div>
              <h2 style={{fontSize: '1.1rem', margin: 0}}>Key Performance Indicator</h2>
              <span style={{fontSize: '0.8rem', opacity: 0.8}}>05-01-2026 to 05-31-2026</span>
            </div>
            <select className={styles.statusSelect} defaultValue="Custom" style={{background: 'white', color: 'black'}}>
              <option>Custom</option>
            </select>
          </div>
          
          <div className={styles.kpiCards}>
            <div className={styles.kpiCard}>
              <div className={styles.kpiLeft}>
                <span className={styles.kpiTitle}>New Patients</span>
                <span className={styles.kpiValue}>1</span>
              </div>
              <button className={styles.viewAllBtnText}>VIEW ALL <ArrowUpRight size={14}/></button>
            </div>
            
            <div className={styles.kpiCard}>
              <div className={styles.kpiLeft}>
                <span className={styles.kpiTitle}>Total Appointments</span>
                <span className={styles.kpiValue}>5</span>
              </div>
              <div className={styles.kpiRight}>
                <button className={styles.viewAllBtnText}>VIEW ALL <ArrowUpRight size={14}/></button>
                <div style={{fontSize: '0.75rem', textAlign: 'right', marginTop: '0.5rem', color: 'rgba(255,255,255,0.7)'}}>Appointment Status</div>
                <select className={styles.statusSelect} style={{marginTop: '0.25rem', width: '100%'}}></select>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiLeft}>
                <span className={styles.kpiTitle}>Paid Invoices</span>
                <span className={styles.kpiValue}>0</span>
                <span className={styles.kpiSub}>Revenue $ 0</span>
              </div>
              <button className={styles.viewAllBtnText}>VIEW ALL <ArrowUpRight size={14}/></button>
            </div>
          </div>
          
          {/* Moved Tasks Card to Left Column */}
          <div className={styles.tasksCard}>
             <div className={styles.cardHeader} style={{backgroundColor: 'hsl(var(--bg-sidebar))', color: 'white', padding: '1rem', borderRadius: 'var(--radius) var(--radius) 0 0'}}>
              <h2 style={{fontSize: '1.1rem', margin: 0}}>Tasks - 2</h2>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <Filter size={16} />
                <ArrowDownToLine size={16} />
                <Plus size={16} />
                <button className={styles.viewAllBtnText} style={{color: 'white'}}>VIEW ALL <ArrowUpRight size={14}/></button>
              </div>
            </div>
            <div className={styles.taskContent}>
              <div className={styles.taskGroupHeader}>Past - 2</div>
              
              <div className={styles.taskItem}>
                <div className={styles.taskDate}>Date - Jan 01, 1970</div>
                <div className={styles.taskTitle}>1234</div>
                <div className={styles.taskMeta}>
                  <div>
                    <span>Assignee</span>
                    <select className={styles.taskSelect} defaultValue="John Doe"><option>John Doe</option></select>
                  </div>
                  <div>
                    <span>Status</span>
                    <select className={styles.taskSelect} defaultValue="Not Started"><option>Not Started</option></select>
                  </div>
                </div>
              </div>

              <div className={styles.taskItem}>
                <div className={styles.taskDate}>Date - Apr 20, 2026</div>
                <div className={styles.taskTitle}>test</div>
                <div className={styles.taskMeta}>
                  <div>
                    <span>Assignee</span>
                    <select className={styles.taskSelect} defaultValue="John Doe"><option>John Doe</option></select>
                  </div>
                  <div>
                    <span>Status</span>
                    <select className={styles.taskSelect} defaultValue="Not Started"><option>Not Started</option></select>
                  </div>
                  <div style={{marginLeft: 'auto'}}>
                    <button className={styles.actionBtn}>View patient</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.invoicesCard}>
            <div className={styles.cardHeader} style={{backgroundColor: 'hsl(var(--bg-sidebar))', color: 'white', padding: '1rem', borderRadius: 'var(--radius) var(--radius) 0 0'}}>
              <h2 style={{fontSize: '1.1rem', margin: 0}}>Due Invoices - 4</h2>
              <button className={styles.viewAllBtnText} style={{color: 'white'}}>VIEW ALL <ArrowUpRight size={14}/></button>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Patient</th>
                    <th>Contact</th>
                    <th style={{textAlign: 'right'}}>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{color: 'hsl(var(--text-secondary))'}}>Past Due 132 Days</td>
                    <td>Chase Gregory 88</td>
                    <td>Abigail & Clay 25888 Levin</td>
                    <td style={{textAlign: 'right', fontWeight: 600}}>$ 40.00</td>
                  </tr>
                  <tr>
                    <td style={{color: 'hsl(var(--text-secondary))'}}>Past Due 1 Days</td>
                    <td>asasas</td>
                    <td>aaa</td>
                    <td style={{textAlign: 'right', fontWeight: 600}}>$ 12.00</td>
                  </tr>
                  <tr>
                    <td style={{color: 'hsl(var(--text-secondary))'}}>Past Due 1 Days</td>
                    <td>asasas</td>
                    <td>aaa</td>
                    <td style={{textAlign: 'right', fontWeight: 600}}>$ 144.00</td>
                  </tr>
                  <tr>
                    <td style={{color: 'hsl(var(--text-secondary))'}}>Due Today</td>
                    <td>Alex</td>
                    <td>John Wick</td>
                    <td style={{textAlign: 'right', fontWeight: 600}}>$ 1.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
