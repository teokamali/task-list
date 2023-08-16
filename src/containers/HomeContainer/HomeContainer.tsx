import { useBaseComponent } from '@base/BaseComponent';
import { HomeLayout } from '@components/Home/Layout/HomeLayout';
import { Column } from '@components/Shared/Column/Column';
import { Kanban } from '@components/Shared/Kanban/Kanban';
import { Task } from '@components/Shared/Task/Task';
import { useId } from 'react';
import { useHomeContainerHelper } from './HomeContainerHelper';
import { StyledDescriptionParagraph, StyledDescriptionTitle, StyledDescriptionWrapper } from './HomeContainerStyle';
import { IHomeContainerProps, IHomeContainerState } from './HomeContainerType';
export const HomeContainer = (props: IHomeContainerProps) => {
  const { helper } = useBaseComponent<IHomeContainerProps, IHomeContainerState, ReturnType<typeof useHomeContainerHelper>>({
    props,
    helperHook: useHomeContainerHelper
  })
  const id = useId()

  const { tasks } = helper
  return (
    <HomeLayout>
      <StyledDescriptionWrapper>
        <StyledDescriptionTitle>✔️ Task List</StyledDescriptionTitle>
        <StyledDescriptionParagraph>Break your life to simple tasks to get things done!
          Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.</StyledDescriptionParagraph>
      </StyledDescriptionWrapper>
      <Kanban>
        <Column id={id} title='Todo'>
          {tasks.map((task, index) =>
            <Task key={task.id} index={index} task={task} />
          )}
        </Column>
        <Column id={id} title='Doing'>

        </Column>
        <Column id={id} title='Todo'>

        </Column>
      </Kanban>

    </HomeLayout>
  );
};
