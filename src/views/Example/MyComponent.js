
import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
import ListToDo from '../Todos/ListToDo';

class MyComponent extends React.Component {


    state = {

        arrJobs: [
            { id: 'abc job 1', title: 'Developer', salary: '500' },
            { id: 'abc job 2', title: 'Testter', salary: '400' },
            { id: 'abc job 3', title: 'Manager', salary: '1000' },

        ],
        //     name: 'Duc',
        //     fb: 'Nguyen Trong Duc'
    }
    addNewJob = (job) => {
        console.log('check job data', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job],/// dau ... la coppy phan tu
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs,
        })

    }
    // /*
    // JSX =. return ve 1 khoi vi du(<></>)// 2 khoi se loi
    // */
    // // bien evant la mac dinh cua HTML
    // handleOnChangeName = (event) => {// event se goi den object, target tra lai 1 the cho html
    //     this.setState({
    //         name: event.target.value, //nhan duoc gia tri cua bien hien tai-

    //     })
    // }

    // handleOnclick = () => {
    //     alert('click me')
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('---> run didupdate: ', 'prev state: ', prevState, 'curent state: ', this.state)
        //goi API so sanh hien tai va tuong lai, update giua cha va con
    }
    componentDidMount() {
        console.log('----> run componentDismount')
    }

    render() {
        console.log('---> call render', this.state)
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
                {/* <div className='abc'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />

                    {console.log('My name is: ', this.state.name)}
                    Hello my Component, My name is {this.state.name}
                </div>
                <div>
                    My facebook is {this.state.fb}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleOnclick()}>Click me</button>
                </div> */}
            </>
        )
    }
}

export default MyComponent;