import React from 'react'
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //правильное обновление стейта
        // setState - АССИНХРОННЫЙ (меняет стейт не сразу)
        console.log('this-', this)
        this.setState({
            editMode: true
        })
        // this.forceUpdate(); отслеживает обновление локального стейта, но лучше её избегать
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)

    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '------------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} 
                        autoFocus={true} 
                        onBlur={this.deActivateEditMode} 
                        value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;