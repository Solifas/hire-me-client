import { useNavigate } from "react-router-dom"

const useHeaderController = () => {

    //const navigate = useNavigate()

    const userName = "John Doe"
    const onWatchListClick = () => {
        console.log("onWatchListClick")
    }

    const onHomeClick = () => {
        //navigate("");

    }

    const onGigRequestsClick = () => {
        console.log("onGigRequestsClick")
    }

    const onProfileClick = () => {
        console.log("onProfileClick")
    }

    const onRegisterClick = () => {
        console.log("onLogoutClick")
    }

    const onHistoryClick = () => {
        console.log("onSearchClick")
    }

    return {
        userName,
        onHomeClick,
        onHistoryClick,
        onProfileClick,
        onRegisterClick,
        onWatchListClick,
        onGigRequestsClick
    }
}

export default useHeaderController;