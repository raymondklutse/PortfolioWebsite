import React, { Component } from 'react'

export class EducationItem extends Component {
    render() {
        console.log(this.props.education.course)
        return (
            <div>
                <h4> { this.props.education.school} </h4>
                <p> { this.props.education.course} </p>
            </div>
        )
    }
}

export default EducationItem
