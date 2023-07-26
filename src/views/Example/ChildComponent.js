
import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     //     name: 'Duc',
    //     //     fb: 'Nguyen Trong Duc'
    // }

    // handleOnChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value,

    //     })
    // }
    // handleOnChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value,

    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault();// ham ngan chan tai lai trang
    //     console.log('check data input', this.state)
    // }

    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs,
        })
    }
    handleOnclickDelete = (job) => {
        console.log('---> Delete', job)
        this.props.deleteAJob(job)
    }
    render() {
        // console.log('---> check props', this.props)
        // // let name = this.props.name;
        // // let age = this.props.age;

        // let { name, age, address, arrJobs } = this.props;// this.props la 1 object nen can {}
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = fales';
        console.log('---> check conditional: ', check)
        return (
            <>
                {showJobs === false ? <div>
                    <button className='btn-show' onClick={() => this.handleShowHide()}>Show</button>
                </div>
                    :
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button>
                        </div>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                }
                                )}
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;// this.props la 1 object nen can {}

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     }
//                     )}

//             </div>
//         </>
//     )
// }




export default ChildComponent;