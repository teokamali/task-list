import { useBaseComponent } from '@base/BaseComponent';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { Column } from '@components/Shared/Column/Column';
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

  return (
    <HomeLayout>
      <StyledDescriptionWrapper>
        <StyledDescriptionTitle>✔️ Task List</StyledDescriptionTitle>
        <StyledDescriptionParagraph>Break your life to simple tasks to get things done!
          Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.</StyledDescriptionParagraph>
      </StyledDescriptionWrapper>
      <StyledKanbanWrapper>
        <Kanban onDragEnd={DragEndHandler}>
          <Column id={'todo'} title='Todo' tasks={todo} />
          <Column id={'doing'} title='Doing' tasks={doing} />
          <Column id={'done'} title='Done' tasks={done} />
        </Kanban>
      </StyledKanbanWrapper>

    </HomeLayout>
  );
};
