import React from 'react'
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode(){
        //правильное обновление стейта
        // setState - АССИНХРОННЫЙ (меняет стейт не сразу)
        this.setState({
            editMode: true
        })
        // this.forceUpdate(); отслеживает обновление локального стейта, но лучше её избегать
    }

    deActivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;