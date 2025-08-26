export default function Footer () {
    return(
        <footer>
            <div className="footer-flex">
                <div className="">
                    <span>CodeSetup</span>
                    <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
                    <p className="download-app"><b>ডাউনলোড করুন কোড সেটআপ</b></p>
                    <button className="btn-app"><img src="https://cdn.ostad.app/public/upload/2023-05-07T03-18-52.463Z-icon-g-play.svg" alt="" /></button>
                    <button className="btn-app"><img src="https://cdn.ostad.app/public/upload/2023-05-07T03-24-39.366Z-icon-app-store.svg" alt="" /></button>
                    <button className="btn-app"><img src="https://cdn.ostad.app/public/upload/2023-05-07T03-25-05.663Z-icon-win-store.svg" alt="" /></button>
                    <p>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                    <div className="links">
                        <button className="social-link"><a href="https://www.facebook.com/codesetup.dev"><img src="https://cdn.ostad.app/public/upload/2022-11-29T10-22-57.171Z-image12.svg" alt="" /></a></button>
                        <button className="social-link"><a href=""><img src="https://cdn.ostad.app/public/upload/2022-11-29T10-26-20.794Z-image13.svg" alt="" /></a></button>
                        <button className="social-link"><a href=""><img src="https://cdn.ostad.app/public/upload/2022-11-29T10-29-50.991Z-image5.svg" alt="" /></a></button>
                        <button className="social-link"><a href=""><img src="https://cdn.ostad.app/public/upload/2022-11-29T10-31-54.169Z-image11.svg" alt="" /></a></button>
                    </div>
                </div>
                <div className="quiz-link">
                    <p><b>কুইক লিংক</b></p>
                    <ul>
                        <li><a href="">আপকামিং লাইভ ব্যাচ</a></li>
                        <li><a href="">ফ্রি কোর্সসমূহ</a></li>
                        <li><a href="">লাইভ ওয়ার্কশপ</a></li>
                        <li><a href="">ব্লগ</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <p><b>যোগাযোগ</b></p>
                    <ul>
                        <li><a href="">codesetup.dev@gmail.com</a></li>
                        <li><a href="">Jessore, Khulna, Bangladesh</a></li>
                    </ul>
                </div>
                <div className="company">
                    <p><b>কোম্পানি</b></p>
                    <ul>
                        <li><a href="">আমাদের সম্পর্কে</a></li>
                        <li><a href="">রিফান্ড পলিসি</a></li>
                        <li><a href="">প্রাইভেসী পলিসি</a></li>
                        <li><a href="">টার্মস এবং শর্তাবলী</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p style={
                    {
                        textAlign: 'center'
                    }
                }>Freelancer Abdul Aziz</p>
            </div>
        </footer>
    );
};