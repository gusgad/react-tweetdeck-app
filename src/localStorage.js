export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) {
            return false;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (ere) {
        console.log('Error when retrieving the state.');
        return false;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (ere) {
        console.log('Error when setting the state.');
        return false;
    }
}