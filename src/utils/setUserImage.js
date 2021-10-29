const setUserImage = (userData, images) => {
    const {username} = userData;
    const userLink = images[username]
    const user = {...userData, userLink}
    return user;
}

export default setUserImage;