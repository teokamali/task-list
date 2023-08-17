import { useBaseComponent } from '@base/BaseComponent'
import { ChangeEvent, useEffect, useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { CheckBox } from '../Checkbox/Checkbox'
import { useTaskHelper } from './TaskHelper'
import { StyledNameTextArea, StyledRemoveButton, StyledTaskWrapper } from './TaskStyle'
import { ITaskProps, ITaskState } from './TaskType'

export const Task = (props: ITaskProps) => {
    const { helper } = useBaseComponent<ITaskProps, ITaskState, ReturnType<typeof useTaskHelper>>({
        props,
        helperHook: useTaskHelper
    })
    const { task, index, pallet } = props
    const { id, title = '', isCompleted } = task
    const { changeTaskNameHandler, changeTaskCheckedHandler, removeTaskHandler } = helper

    const { checkboxBorder, checkboxCheckColor, removeIconColor } = pallet
    const checkBoxPallet = {
        checkboxBorder, checkboxCheckColor
    }

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const auto_grow = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "5px";
            textAreaRef.current.style.height = (textAreaRef.current.scrollHeight) + "px";
        }
    }
    useEffect(() => {
        auto_grow()
    }, [])

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <StyledTaskWrapper
                    borderColor={checkboxBorder}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CheckBox isChecked={isCompleted} onChange={() => changeTaskCheckedHandler(!isCompleted)} pallet={checkBoxPallet} name={`task-${id}`} id={`task-${id}`} />
                    <StyledNameTextArea ref={textAreaRef} rows={1} style={isCompleted ? { textDecoration: 'line-through' } : {}} value={title} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                        auto_grow()
                        changeTaskNameHandler({ title: event.target.value })
                    }} />
                    <StyledRemoveButton style={{ color: removeIconColor }} onClick={removeTaskHandler}>x</StyledRemoveButton>
                </StyledTaskWrapper>
            )}
        </Draggable>
    )
}
