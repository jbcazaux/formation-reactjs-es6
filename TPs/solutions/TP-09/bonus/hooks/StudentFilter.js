import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default function Filter({onChange}) {

    console.log('render filter')

    const onFilterChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <form className="form-inline">
            <InputLabel htmlFor="filterName" className="control-label">Filtrer:</InputLabel>
            <Input id="filterName"
                   type="text"
                   placeholder="Tapez un nom..."
                   onChange={onFilterChange}
                   className="form-control"
                   style={{marginLeft: '5px'}}
            />
        </form>
    )
}
