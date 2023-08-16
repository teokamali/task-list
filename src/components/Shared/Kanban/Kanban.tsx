import { useBaseComponent } from "@base/BaseComponent"
import { DragDropContext } from "react-beautiful-dnd"
import { useKanbanHelper } from "./KanbanHelper"
import { StyledKanbanWrapper } from "./KanbanStyle"
import { IKanbanProps, IKanbanState } from "./KanbanType"

export const Kanban = (props: IKanbanProps) => {
    useBaseComponent<IKanbanProps, IKanbanState, ReturnType<typeof useKanbanHelper>>({ props, helperHook: useKanbanHelper })
    const { children } = props
    return (
        <DragDropContext onDragEnd={() => { }} >
            <StyledKanbanWrapper>
                {children}
            </StyledKanbanWrapper>
        </DragDropContext>
    )
}
