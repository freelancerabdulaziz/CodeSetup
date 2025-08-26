export default function Header() {
    return(
        <header>
            <nav>
                <div id="left-navbar">
                    <div id="CodeSetup-logo">
                        <img src="./src/assets/image/CodeSetUp-logo.png" alt="" />
                        <span>CodeSetup</span>
                    </div>
                    <div id="search-bar">
                        <ul>
                            <li><img src="https://cdn.ostad.app/public/upload/2024-03-10T04-41-51.748Z-ostad-search.svg" alt="" /></li>
                            <li><input type="text" placeholder="কোর্স সার্চ করুন"/></li>
                        </ul>
                    </div>
                    <div id="main-nav">
                        <ul>
                            <li><a href="">স্পেশাল অফার</a></li>
                            <li><a href="">কোড সেটআপ</a></li>
                            <li><a href="">ফ্রী কোর্সেস</a></li>
                            <li><a href="">ব্লগ</a></li>
                        </ul>
                        <div className="download">
                            <button>ডাউনলোড</button>
                            <span><i className="fa-solid fa-angle-down"></i></span>
                        </div>
                    </div>
                </div>

                <div id="right-navbar">
                    <div className="left">
                        <div>
                            <ul>
                                <li><i className="fa-solid fa-globe"></i></li>
                                <li>EN</li>
                            </ul>
                        </div>
                        <div className="course">
                            <button>সব কোর্স</button>
                            <span><i className="fa-solid fa-angle-down"></i></span>
                        </div>
                        <div className="moon">
                            <span><i class="fa-solid fa-circle-half-stroke"></i></span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="log-sign">
                            <button>লগিন/সাইনআপ </button>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </nav>

            
        </header>

        
    );
};




