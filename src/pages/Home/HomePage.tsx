import styles from './HomePage.module.scss';
import Card from "../../components/Card/Card";
import { AppBar, Input, Toolbar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import useHomePageController from './HomePageController';

const HomePage = () => {

    const { users, onCardClick } = useHomePageController();

    return (
        <>
            <div className={styles.search}>
                <Input className={styles.searchInput} disableUnderline placeholder="Search..." startAdornment={<SearchIcon />} />
            </div>
            <div className={styles.row}>
                {
                    users?.map((user, index) =>
                        <Card key={index} firstName={user.firstName} lastName={user.lastName} title={user.title}
                            shortDescription={user.shortDescription} city={user.city}
                            rate={user.rate}
                            onClick={() => onCardClick(user.id)}
                        />
                    )
                }
            </div>
        </>
    )
}

export default HomePage