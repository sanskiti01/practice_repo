import React from 'react'; import {NavLink,Outlet} from 'react-router-dom';
export default function Layout(){return <div className="shell"><header><h1>BugLab</h1><nav><NavLink to="/">Dashboard</NavLink><NavLink to="/bugs">Bugs</NavLink></nav></header><main><Outlet/></main><footer>Debug deliberately. Learn continuously.</footer></div>}
