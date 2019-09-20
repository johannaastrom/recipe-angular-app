export class UserService {
    activeUsers = ['Max', 'Anna'];
    inActiveUsers = ['Chris', 'Manu'];

    setToActive(id: number) {
        this.activeUsers.push(this.inActiveUsers[id]);
        this.inActiveUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        this.inActiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}