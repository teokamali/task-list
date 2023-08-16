import { useBaseComponent } from '@base/BaseComponent'
import { useTaskHelper } from './TaskHelper'
import { ITaskProps, ITaskState } from './TaskType'

export const Task = (props: ITaskProps) => {
    const { helper } = useBaseComponent<ITaskProps, ITaskState, ReturnType<typeof useTaskHelper>>({
        props,
        helperHook: useTaskHelper
    })
    const { task } = props
    const { group, id, isCompleted, title } = task
    const { } = helper
    return (
        <div className='bg-red-1'>
            <input type="checkbox" />
            <div>
                <input type="text" value={title} />
                <span>#{id}</span>
            </div>
        </div>
    )
}
