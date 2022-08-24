import { Icon } from "../../icons/Icons"
import { NavLink } from "react-router-dom";

function Menu() {
    const style = "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 hover:text-white";
    const activeStyle = "bg-active text-white"; 

    return (
        <nav className="px-2 mt-4">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive ? activeStyle+" "+style : style } exact>
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({isActive}) => isActive ? activeStyle+" "+style : style }>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} className={({isActive}) => isActive ? activeStyle+" "+style : style }>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Menu