import React from 'react';

class Filter extends React.Component {

    onFilterChange(e) {

    }

    render() {
        return (
            <form className="form-inline">
                <label htmlFor="filterName" className="control-label">Filtrer:</label>
                <input id="filterName"
                       type="text"
                       placeholder="Tapez un nom..."
                       onChange={}
                       className="form-control"
                       style={{marginLeft: '5px'}}
                />
            </form>
        )
    }
}

export default Filter;