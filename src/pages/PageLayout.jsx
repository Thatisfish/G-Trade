import Sidebar from './Sidebar';

export default function PageLayout({ children }) {
  return (
    <div className="y_layout">
      <Sidebar />
      <div className="y_main">
        {children}
      </div>
    </div>
  );
}