import { useBaseComponent } from '@base/BaseComponent'
import { ChangeEvent } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { CheckBox } from '../Checkbox/Checkbox'
import { useTaskHelper } from './TaskHelper'
import { StyledNameInput, StyledRemoveButton, StyledTaskWrapper } from './TaskStyle'
import { ITaskProps, ITaskState } from './TaskType'

export const Task = (props: ITaskProps) => {
    const { helper } = useBaseComponent<ITaskProps, ITaskState, ReturnType<typeof useTaskHelper>>({
        props,
        helperHook: useTaskHelper
    })
    const { task, index, pallet } = props
    const { id, isCompleted = false, title = '' } = task
    const { changeTaskNameHandler, changeTaskCheckedHandler, removeTaskHandler } = helper

    const { checkboxBorder, checkboxCheckColor, removeIconColor } = pallet
    const checkBoxPallet = {
        checkboxBorder, checkboxCheckColor
    }
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <StyledTaskWrapper
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CheckBox isChecked={isCompleted} onChange={() => changeTaskCheckedHandler({ id, checked: !isCompleted })} pallet={checkBoxPallet} />
                    <StyledNameInput type="text" value={title} onChange={(event: ChangeEvent<HTMLInputElement>) => changeTaskNameHandler({ id, title: event.target.value })} />
                    <StyledRemoveButton style={{ color: removeIconColor }} onClick={() => removeTaskHandler(id)}>x</StyledRemoveButton>
                </StyledTaskWrapper>
            )}
        </Draggable>
    )
}
