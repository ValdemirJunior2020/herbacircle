// /src/components/Layout.jsx
import BottomNav from './BottomNav';
import Navbar from './Navbar';
import RightSidebar from './RightSidebar';
import Sidebar from './Sidebar';

export default function Layout({ children, sidebars = true }) {
  return <div className="min-h-screen pb-24 lg:pb-8">
    <Navbar />
    <main className={`${sidebars ? 'mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-6' : 'mx-auto max-w-5xl px-4 py-8 lg:px-6'}`}>
      {sidebars && <Sidebar />}
      <section className="min-w-0 flex-1">{children}</section>
      {sidebars && <RightSidebar />}
    </main>
    <BottomNav />
  </div>;
}
