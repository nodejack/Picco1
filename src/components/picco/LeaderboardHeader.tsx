import React from 'react';
import { NavLink } from 'react-router-dom';

export const LeaderboardHeader = () => {
  const navLinkClasses = "flex flex-col items-center justify-center border-b-2 pb-3 pt-4 px-4 transition-colors";
  const inactiveClasses = "border-b-transparent text-[var(--text-secondary-light)] hover:text-white";
  const activeClasses = "border-b-[var(--primary-green)] text-white";

  return (
    <div className="flex items-center justify-start border-b border-[var(--border-color)] mb-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <p className="text-base font-bold leading-normal">All Time</p>
      </NavLink>
      <NavLink
        to="/weekly"
        className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <p className="text-base font-bold leading-normal">Weekly</p>
      </NavLink>
      <NavLink
        to="/daily"
        className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <p className="text-base font-bold leading-normal">Daily</p>
      </NavLink>
    </div>
  );
};