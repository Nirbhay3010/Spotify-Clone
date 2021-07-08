import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import { useStateValue } from "./DataLayer";

function Sidebar() {
    // const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
        <SidebarOption option="Home" Icon={HomeIcon}/>
        <SidebarOption option="Search" Icon={SearchIcon}/>
        <SidebarOption option="Library"  Icon={LibraryMusicIcon}/>
        <br></br>
        <strong className="sidebar__title">PLAYLISTS</strong>
        
        {/* {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))} */}
        <hr></hr>
        


        </div>
        
    )
}

export default Sidebar;
