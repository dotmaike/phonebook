import TopBarLeft from './components/TopBarLeft/TopBarLeft';
import TopBarRight from './components/TopBarRight/TopBarRight';

const TopBar = () => (
    <div className="top-bar">
        <div className="row">
            <TopBarLeft/>
            <TopBarRight/>
        </div>
    </div>
);

export default TopBar;
