import { useBaseComponent } from '@base/BaseComponent';
import { ITask } from '@type/tasks/type';
import { Droppable } from "react-beautiful-dnd";
import { Task } from '../Task/Task';
import { ITaskPallet } from '../Task/TaskType';
import { useColumnHelper } from './ColumnHelper';
import { StyledAddTaskButton, StyledColumnHeader, StyledColumnHeaderCounter, StyledColumnHeaderTitle, StyledColumnWrapper, StyledDroppableWrapper } from './ColumnStyle';
import { IColumnProps, IColumnState } from './ColumnType';

export const Column = (props: IColumnProps) => {
    const { helper } = useBaseComponent<IColumnProps, IColumnState, ReturnType<typeof useColumnHelper>>({ props, helperHook: useColumnHelper })
    const { title, id, tasks, hasAddAbility = false, pallet } = props
    const { onAddToTodoListHandler } = helper

    const { addButtonColor, bgColor, checkboxBorder, removeIconColor, tasksCounterColor, titleColor, checkboxCheckColor } = pallet

    const taskPallet: ITaskPallet = {
        checkboxBorder,
        removeIconColor,
        checkboxCheckColor,
    }

    return (
        <StyledColumnWrapper style={{ backgroundColor: bgColor }}>
            <StyledColumnHeader>
                <StyledColumnHeaderTitle style={{ color: titleColor }}>{title}</StyledColumnHeaderTitle>
                <StyledColumnHeaderCounter style={{ color: tasksCounterColor }}>{tasks.length} tasks</StyledColumnHeaderCounter>
            </StyledColumnHeader>
            <Droppable droppableId={id} >
                {(provided, snapshot) => {
                    return <StyledDroppableWrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task: ITask, index: number) =>
                            <Task key={task.id} index={index} task={task} pallet={taskPallet} />
                        )}
                        {
                            snapshot.isDraggingOver ?
                                <div className='border' style={{ borderColor: checkboxBorder }}>
                                    {provided.placeholder}
                                </div> : <> {provided.placeholder}</>
                        }

                        {
                            hasAddAbility ? <StyledAddTaskButton style={{ color: addButtonColor }} onClick={() => onAddToTodoListHandler(id)}>+ Add</StyledAddTaskButton> : <></>
                        }

                    </StyledDroppableWrapper>
                }}
            </Droppable>
        </StyledColumnWrapper>
    )
}
