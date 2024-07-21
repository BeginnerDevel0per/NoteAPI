
import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import RegisterDto from '../../DTOs/RegisterDto';
import UserDto from '../../DTOs/UserDto';
import User from '../../entities/User';
import { classes } from '@automapper/classes';

export const mapper = createMapper({
    strategyInitializer: classes(),
});



createMap(mapper, RegisterDto, User,
    forMember((destination) => destination.createDate, mapFrom(() => new Date().toISOString()))
);


createMap(mapper, User, UserDto);

