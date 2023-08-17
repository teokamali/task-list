import { useBaseComponent } from '@base/BaseComponent';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { Column } from '@components/Shared/Column/Column';
import { IColumnColorPallet } from '@components/Shared/Column/ColumnType';
import { Kanban } from '@components/Shared/Kanban/Kanban';
import { useHomeContainerHelper } from './HomeContainerHelper';
import { StyledDescriptionParagraph, StyledDescriptionTitle, StyledDescriptionWrapper, StyledKanbanWrapper } from './HomeContainerStyle';
import { IHomeContainerProps, IHomeContainerState } from './HomeContainerType';
export const HomeContainer = (props: IHomeContainerProps) => {
  const { helper } = useBaseComponent<IHomeContainerProps, IHomeContainerState, ReturnType<typeof useHomeContainerHelper>>({
    props,
    helperHook: useHomeContainerHelper
  })

  const { doing, done, todo, DragEndHandler } = helper


  const todoPallet: IColumnColorPallet = {
    bgColor: "#FEF4F3",
    titleColor: "#6E1E29",
    tasksCounterColor: "#D4AFB4",
    removeIconColor: "#F4C5CB",
    checkboxBorder: "#EDD6D3",
    checkboxCheckColor:'#D37A87',
    addButtonColor: "#D37A87"
  }


  return (
    <HomeLayout>
      <StyledDescriptionWrapper>
        <StyledDescriptionTitle>✔️ Task List</StyledDescriptionTitle>
        <StyledDescriptionParagraph>Break your life to simple tasks to get things done!
          Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.</StyledDescriptionParagraph>
      </StyledDescriptionWrapper>
      <StyledKanbanWrapper>
        <Kanban onDragEnd={DragEndHandler}>
          <Column id={'todo'} title='Todo' tasks={todo} hasAddAbility pallet={todoPallet} />
          <Column id={'doing'} title='Doing' tasks={doing} hasAddAbility pallet={todoPallet} />
          <Column id={'done'} title='Done' tasks={done} pallet={todoPallet} />
        </Kanban>
      </StyledKanbanWrapper>

    </HomeLayout>
  );
};
