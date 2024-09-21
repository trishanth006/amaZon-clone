import logo from'./assets/amozom_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Nav.css'
function Nav(){
    return(

        <div className="header">
            <img className='header-logo' src={logo} alt="" />

            <div className="header-search">
                <input type="text" className='header-searchInput' />
                <SearchIcon className='header-searchIcon'/>
            </div>

            <div className="header-nav">
                <div className="header-menu">
                    <span className="menuLineOne">Hello Guest</span>
                    <span className="menuLineTwo">Sign In</span>
                </div>

                <div className="header-menu">
                    <span className="menuLineOne">Returns</span>
                    <span className="menuLineTwo">& Orders</span>
                </div>

                <div className="header-menu">
                    <span className="menuLineOne">Your</span>
                    <span className="menuLineTwo">Prime</span>
                </div>

                <div className="header-menuBasket">
                    <ShoppingBasketIcon className='basketIcon'/>
                    <span className="menuLineTwo basketCount">
                        0
                    </span>
                     
                </div>
            </div>

        </div>
        
    )
}
export default Nav