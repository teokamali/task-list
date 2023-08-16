import { useBaseComponent } from '@base/BaseComponent';
import { Droppable } from "react-beautiful-dnd";
import { useColumnHelper } from './ColumnHelper';
import { StyledColumnHeader, StyledColumnHeaderCounter, StyledColumnHeaderTitle, StyledColumnWrapper, StyledDroppableWrapper } from './ColumnStyle';
import { IColumnProps, IColumnState } from './ColumnType';

export const Column = (props: IColumnProps) => {
    useBaseComponent<IColumnProps, IColumnState, ReturnType<typeof useColumnHelper>>({ props, helperHook: useColumnHelper })
    const { title, id, children } = props
    return (
        <StyledColumnWrapper>
            <StyledColumnHeader>
                <StyledColumnHeaderTitle>{title}</StyledColumnHeaderTitle>
                <StyledColumnHeaderCounter>3 tasks</StyledColumnHeaderCounter>
            </StyledColumnHeader>
            <Droppable droppableId={id} >
                {(provided, snapshot) => {
                    return <StyledDroppableWrapper
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {children}
                        {provided.placeholder}
                    </StyledDroppableWrapper>
                }}
            </Droppable>
        </StyledColumnWrapper>
    )
}
