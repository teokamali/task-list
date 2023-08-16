import { useBaseComponent } from '@base/BaseComponent'
import { ChangeEvent } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useTaskHelper } from './TaskHelper'
import { StyledCheckBoxInput, StyledNameInput, StyledRemoveButton, StyledTaskWrapper } from './TaskStyle'
import { ITaskProps, ITaskState } from './TaskType'

export const Task = (props: ITaskProps) => {
    const { helper } = useBaseComponent<ITaskProps, ITaskState, ReturnType<typeof useTaskHelper>>({
        props,
        helperHook: useTaskHelper
    })
    const { task, index } = props
    const { id, isCompleted, title } = task
    const { changeTaskNameHandler, changeTaskCheckedHandler, removeTaskHandler } = helper
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <StyledTaskWrapper
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <StyledCheckBoxInput type="checkbox" checked={isCompleted} onChange={(event: ChangeEvent<HTMLInputElement>) => changeTaskCheckedHandler({ id, checked: !isCompleted })} />
                    <StyledNameInput type="text" value={title} onChange={(event: ChangeEvent<HTMLInputElement>) => changeTaskNameHandler({ id, title: event.target.value })} />
                    <StyledRemoveButton onClick={() => removeTaskHandler(id)}>x</StyledRemoveButton>
                </StyledTaskWrapper>
            )}
        </Draggable>
    )
}
