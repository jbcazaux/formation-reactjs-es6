import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <form className="form-inline">
                <label htmlFor="filterName" className="control-label">Filtrer:</label>
                <input id="filterName"
                       type="text"
                       placeholder="Tapez un nom..."
                       onChange={this.onFilterChange}
                       className="form-control"
                       style={{marginLeft: '5px'}}
                />
            </form>
        )
    }
}

export default Filter;