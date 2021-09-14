class AccountRepository {
    async getUserByHash(hash) {
        let response = await fetch('http://fa-app.herokuapp.com/api/v1/profile?hash=' + hash);
        let userInfo = await response.json();

        if (response.ok) {
            return userInfo;
        }
        throw new Error('No user found');
    }
}