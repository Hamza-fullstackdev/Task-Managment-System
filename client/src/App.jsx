import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Tasksdetail from "./pages/Tasksdetail";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Layout() {
  const { user } = useSelector((state)=>state.auth);

  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      {/* <MobileSidebar /> */}

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
      <main className='w-full min-h-screen bg-[#f3f4f6]'>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to={"/dashboard"} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/completed/:status' element={<Tasks />} />
            <Route path='/in-progress/:status' element={<Tasks />} />
            <Route path='/todo/:status' element={<Tasks />} />
            <Route path='/todo/:status' element={<Tasks />} />
            <Route path='/task/:id' element={<Tasksdetail />} />
            <Route path='/team' element={<Users />} />
            <Route path='/trash' element={<Trash />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Toaster richColors />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
