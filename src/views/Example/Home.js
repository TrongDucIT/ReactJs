import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import psd from '../../assets/images/psd.jpg';
import { connect } from 'react-redux';


class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)//delay code
    }

    handleDeleteUser = (user) => {
        console.log('---> check user delete: ', user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello ong ban gia
                </div>
                {/* <div>
                    <img src={psd} />
                </div> */}
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>


                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));