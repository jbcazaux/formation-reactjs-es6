import React from 'react';
import {Input, InputLabel} from 'material-ui';

class Filter extends React.Component {

    onFilterChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <form className="form-inline">
                <InputLabel htmlFor="filterName" className="control-label">Filtrer:</InputLabel>
                <Input id="filterName"
                       type="text"
                       placeholder="Tapez un nom..."
                       onChange={this.onFilterChange.bind(this)}
                       className="form-control"
                       style={{marginLeft: '5px'}}
                />
            </form>
        )
    }
}

export default Filter;