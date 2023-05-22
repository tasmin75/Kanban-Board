import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import style from "./Navbar.module.css";
import AppsIcon from '@mui/icons-material/Apps';


function Navbar() {
   

    return (
        <>
            <nav className={style.navBar}>
                <div className={style.left}>
                <AppsIcon className={style.icon}/>
                    <p >Kanban Board</p>
                    {/* <p>Workspace Visible</p> */}

                   

                </div>

                <div className={style.right}>
                   
                    {/* <p  startIcon={<FilterListIcon />}>
                        Filter
                    </p>
                    <Avatar ></Avatar>
                   
                   
                    <Button variant="text" startIcon={<MoreHorizOutlinedIcon />} /> */}



                    <Button onClick={()=>{localStorage.clear()
                    window.location.reload()
                       
                    }}>Clear</Button>

                </div>
            </nav>
        </>
    );
}

export default Navbar;