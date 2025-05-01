export const removeAvatarList = (id, user, list) => {
    return list.map(team => {
        if (team.id === id) {
            return {
                ...team,
                members: team.members.filter(
                    avatar => avatar.id !== user.id
                )
            };
        }
        return team;
    });
};
