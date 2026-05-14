import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Calendar, CalendarClock, ActivitySquare, Users,
  Cat, Contact, MapPin, ShoppingCart, FileText, ClipboardList,
  BarChart, Palette, LogOut, Plus, ChevronDown
} from 'lucide-react';
import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="PetApp Logo" style={{ width: '45px', height: '45px', objectFit: 'contain', backgroundColor: 'transparent', borderRadius: '50%' }} />
        </div>
        <button className={styles.collapseBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div className={styles.addBtnContainer}>
        <button className={styles.addBtn}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
            <Plus size={20} strokeWidth={2.5} /> <span style={{fontWeight: 700, fontSize: '1rem'}}>Add</span>
          </div>
          <ChevronDown size={18} strokeWidth={2.5} />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><LayoutDashboard size={20} strokeWidth={2.5} /> <span>Dashboard</span></div>
        </NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><Calendar size={20} strokeWidth={2.5} /> <span>Calendar</span></div>
        </NavLink>
        <NavLink to="/appointments" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><CalendarClock size={20} strokeWidth={2.5} /> <span>Appointments</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/treatment-plans" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><ActivitySquare size={20} strokeWidth={2.5} /> <span>Treatment Plans</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/patients" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><Users size={20} strokeWidth={2.5} /> <span>Patients</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/species" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><Cat size={20} strokeWidth={2.5} /> <span>Species</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><Contact size={20} strokeWidth={2.5} /> <span>Contacts</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/locations" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><MapPin size={20} strokeWidth={2.5} /> <span>Locations</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/items" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><ShoppingCart size={20} strokeWidth={2.5} /> <span>Items</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/invoice" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><FileText size={20} strokeWidth={2.5} /> <span>Invoice</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><ClipboardList size={20} strokeWidth={2.5} /> <span>Tasks</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><BarChart size={20} strokeWidth={2.5} /> <span>Reports</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/theme" className={({ isActive }) => isActive ? styles.active : ''}>
          <div className={styles.navLeft}><Palette size={20} strokeWidth={2.5} /> <span>Themes</span></div>
          <ChevronDown size={16} strokeWidth={2.5} />
        </NavLink>
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutBtn}>
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
};
