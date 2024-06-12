// Importing the MantineProvider
import { MantineProvider } from '@mantine/core';

// Importing the SideNav component
import SideNav from '@/app/ui/dashboard/sidenav';

// Defining the Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        {/* Sidebar section */}
        <div className="w-full flex-none md:w-64">
          {/* Rendering the SideNav component */}
          <SideNav />
        </div>
        {/* Main content area */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {/* Rendering the children components */}
          {children}
        </div>
      </div>
    </MantineProvider>
  );
}
