import TopNav from '../components/TopNav';

// Add bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Custom CSS
import "../styles/global.css";

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
