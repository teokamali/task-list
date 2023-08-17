import { useBaseComponent } from '@base/BaseComponent';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { Column } from '@components/Shared/Column/Column';
import { IColumnColorPallet } from '@components/Shared/Column/ColumnType';
import { Kanban } from '@components/Shared/Kanban/Kanban';
import { useHomeContainerHelper } from './HomeContainerHelper';
import { StyledDescriptionParagraph, StyledDescriptionTitle, StyledDescriptionWrapper, StyledHomeContainer, StyledKanbanWrapper } from './HomeContainerStyle';
import { IHomeContainerProps, IHomeContainerState } from './HomeContainerType';
export const HomeContainer = (props: IHomeContainerProps) => {
  const { helper } = useBaseComponent<IHomeContainerProps, IHomeContainerState, ReturnType<typeof useHomeContainerHelper>>({
    props,
    helperHook: useHomeContainerHelper
  })

  const { doingList, doneList, todoList, DragEndHandler } = helper


  const todoPallet: IColumnColorPallet = {
    bgColor: "#FEF4F3",
    titleColor: "#6E1E29",
    tasksCounterColor: "#D4AFB4",
    removeIconColor: "#F4C5CB",
    checkboxBorder: "#EDD6D3",
    checkboxCheckColor: '#D37A87',
    addButtonColor: "#D37A87"
  }
  const doingPallet: IColumnColorPallet = {
    bgColor: "#FFFBF2",
    titleColor: "#795B19",
    tasksCounterColor: "#DECCA4",
    removeIconColor: "#c6b286",
    checkboxBorder: "#DBD2BC",
    checkboxCheckColor: '#C2A25B',
    addButtonColor: "#C2A25B"
  }
  const donePallet: IColumnColorPallet = {
    bgColor: "#F4F9F3",
    titleColor: "#286C1A",
    tasksCounterColor: "#BCD7B6",
    removeIconColor: "#D0E7CB",
    checkboxBorder: "#D0E7CB",
    checkboxCheckColor: '#9BCD90',
  }


  return (
    <HomeLayout>
      <StyledHomeContainer>
        <StyledDescriptionWrapper>
          <StyledDescriptionTitle>✔️ Task List</StyledDescriptionTitle>
          <StyledDescriptionParagraph>Break your life to simple tasks to get things done!
            Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.</StyledDescriptionParagraph>
        </StyledDescriptionWrapper>
        <StyledKanbanWrapper>
          <Kanban onDragEnd={DragEndHandler}>
            <Column id={'Todo'} title='Todo' tasks={todoList} hasAddAbility pallet={todoPallet} />
            <Column id={'Doing'} title='Doing 💪' tasks={doingList} hasAddAbility pallet={doingPallet} />
            <Column id={'Done'} title='Done 🎉' tasks={doneList} pallet={donePallet} />
          </Kanban>
        </StyledKanbanWrapper>
      </StyledHomeContainer>

    </HomeLayout>
  );
};
