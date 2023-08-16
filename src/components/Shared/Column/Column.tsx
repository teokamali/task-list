import { useBaseComponent } from '@base/BaseComponent';
import { ITask } from '@type/tasks/type';
import { Droppable } from "react-beautiful-dnd";
import { Task } from '../Task/Task';
import { useColumnHelper } from './ColumnHelper';
import { StyledAddTaskButton, StyledColumnHeader, StyledColumnHeaderCounter, StyledColumnHeaderTitle, StyledColumnWrapper, StyledDroppableWrapper } from './ColumnStyle';
import { IColumnProps, IColumnState } from './ColumnType';

export const Column = (props: IColumnProps) => {
    const { helper } = useBaseComponent<IColumnProps, IColumnState, ReturnType<typeof useColumnHelper>>({ props, helperHook: useColumnHelper })
    const { title, id, tasks, hasAddAbility = false } = props
    const { onAddToTodoListHandler } = helper
    return (
        <StyledColumnWrapper>
            <StyledColumnHeader>
                <StyledColumnHeaderTitle>{title}</StyledColumnHeaderTitle>
                <StyledColumnHeaderCounter>{tasks.length} tasks</StyledColumnHeaderCounter>
            </StyledColumnHeader>
            <Droppable droppableId={id} >
                {(provided, snapshot) => {
                    return <StyledDroppableWrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task: ITask, index: number) =>
                            <Task key={task.id} index={index} task={task} />
                        )}
                        {
                            hasAddAbility ? <StyledAddTaskButton onClick={() => onAddToTodoListHandler(title)}>+ Add</StyledAddTaskButton> : <></>
                        }
                        {provided.placeholder}
                    </StyledDroppableWrapper>
                }}
            </Droppable>
        </StyledColumnWrapper>
    )
}
