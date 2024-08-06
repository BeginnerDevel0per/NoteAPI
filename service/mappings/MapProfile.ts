
import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import RegisterDto from '../../DTOs/RegisterDto';
import UserDto from '../../DTOs/UserDto';
import User from '../../entities/User';
import AddNoteDto from '../../DTOs/AddNoteDto';
import Note from '../../entities/Note';
import { classes } from '@automapper/classes';
import UpdateNoteDto from '../../DTOs/UpdateNoteDto';
import NoteDto from '../../DTOs/NoteDto';
import AddTaskDto from '../../DTOs/AddTaskDto';
import Task from '../../entities/Task';
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
    forMember((destination) => destination.id, mapFrom((conversation) => conversation.NoteId)),
    forMember((destination) => destination.Content, mapFrom((conversation) => JSON.stringify(conversation.Content)))
);
createMap(mapper, Note, NoteDto,
    forMember((destination) => destination.NoteId, mapFrom((conversation) => conversation.id))
);
//#endregion

//#region TaskMapper
createMap(mapper, AddTaskDto, Task,
    forMember((destination) => destination.createDate, mapFrom(() => new Date().toISOString()))
);
//#endregion