"use client"
import Navbar from "@/app/(components)/Navbar"
import Sidebar from "@/app/(components)/Sidebar"
import StoreProvider, { useAppSelector } from "./redux";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
   (state) => state.global.isSidebarCollapsed
 );

 
 return (
   <div className={`${ "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
     <Sidebar />
     <main
       className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
         isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
       }`}
     >
       <Navbar />
       {children}
     </main>
   </div>
 );
};

const HomeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
   <StoreProvider>
     <HomeLayout>{children}</HomeLayout> 
   </StoreProvider>
  );
};
export default HomeWrapper