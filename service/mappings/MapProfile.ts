
import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import RegisterDto from '../../DTOs/RegisterDto';
import UserDto from '../../DTOs/UserDto';
import User from '../../entities/User';
import AddNoteDto from '../../DTOs/AddNoteDto';
import Note from '../../entities/Note';
import { classes } from '@automapper/classes';
import UpdateNoteDto from '../../DTOs/UpdateNoteDto';

export const mapper = createMapper({
    strategyInitializer: classes(),
});



//#region UserMappe
createMap(mapper, RegisterDto, User,
    forMember((destination) => destination.createDate, mapFrom(() => new Date().toISOString()))
);

createMap(mapper, User, UserDto);
//#endregion


//#region NoteMapper
createMap(mapper, AddNoteDto, Note,
    forMember((destination) => destination.createDate, mapFrom(() => new Date().toISOString()))
);

createMap(mapper, UpdateNoteDto, Note,
    forMember((destination) => destination.updateDate, mapFrom(() => new Date().toISOString())),
    forMember((destination) => destination.id, mapFrom((conversation) => conversation.NoteId))
);
//#endregion
