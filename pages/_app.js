import TopNav from '../components/topnav';

// Add bootstrap
// import "bootstrap/dist/css/bootstrap.css";

// Custom CSS
import "../scss/custom.scss";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <header>
                <TopNav />
            </header>
            <Component {...pageProps} />
        </div>
    );
}
