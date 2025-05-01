export const addAvatarList = (id, newMember, list) => {
    return list.map(team => {
        if (team.id === id) {
            return {
                ...team,
                members: [...team.members, newMember]
            };
        }
        return team;
    });
};